/**
 * Custom options for the glitch animations.
 */
export type PowerGlitchOptions = {

    /**
     * Image URL. Can be local, remote or a data URL.
     */
    imageUrl: string,

    /**
     * Background color. Use 'transparent' not to set a background color.
     */
    backgroundColor: string,

    /**
     * Timing of the animation.
     */
    timing: {

        /**
         * Duration of the animation loop in milliseconds.
         */
        duration: number,

        /**
         * Number of times the animation should repeat. Set to `Infinity` to repeat forever.
         */
        iterations: number,

        /**
         * Ease animation for all layers. Defauls to a sequential easing (no transition).
         */
        easing?: string,
    },

    /**
     * Specify if the animation should always glitch uniformly (if false) or if it should glitch at a given time.
     * If start and end are set, the animation will glitch between those two times, and the peak glitch will be at the middle.
     * glitchTimeSpan.end should be greater than glitchTimeSpan.start. Otherwise, the glitch will not happen.
     */
    glitchTimeSpan: false | {

        /**
         * Start time of the glitch in percent, between 0 and 1.
         */
        start: number,

        /**
         * End time of the glitch in percent, between 0 and 1.
         */
        end: number,
    },

    /**
     * Whether the base layer should shake. If not set to false, the base layer will shake in the given amplitude.
     * The shake animation respects the glitch time span constraint, if set.
     */
    shake: false | {

        /**
         * Number of steps to compute for each layer per second of animation.
         */
        velocity: number,

        /**
         * Max X amplitude for the shake animation.
         */
        amplitudeX: number,

        /**
         * Max Y amplitude for the shake animation.
         */
        amplitudeY: number,
    },

    /**
     * Slice layers are the base animation to give the glitch effect. They clip a part of the image and move it somewhere else.
     * If not set to false, the slice layers will be generated.
     * The slice animation respects the glitch time span constraint, if set.
     */
    slice: false | {

        /**
         * Number of layers to generate.
         */
        count: number,

        /**
         * Number of steps to compute for each layer per second of animation.
         */
        velocity: number,

        /**
         * Minimum height in percent for a given slice, between 0 and 1.
         */
        minHeight: number,
        
        /**
         * Maximum height in percent for a given slice, between 0 and 1.
         */
        maxHeight: number,

        /**
         * Whether the hue should rotate for the given slice.
         */
        hueRotate: boolean,
    },
};

/**
 * One layer to generate
 */
export type LayerDefinition = {
    steps: { [cssPropertyName: string]: string }[],
    timing: any,
};

/**
 * A rectangle in %, values from 0 to 100.
 */
export type Rectangle = {
    top: number,
    left: number,
    height: number,
    width: number,
};

/**
 * Get best-looking default options for most images.
 */
export const getDefaultOptions = (): Partial<PowerGlitchOptions> => ({
    backgroundColor: 'transparent',
    timing: {
        duration: 2 * 1000,
        iterations: Infinity,
    },
    glitchTimeSpan: {
        start: 0.5,
        end: 0.7,
    },
    shake: {
        velocity: 20,
        amplitudeX: 0.4,
        amplitudeY: 0.4,
    },
    slice: {
        count: 10,
        velocity: 25,
        minHeight: 0.02,
        maxHeight: 0.15,
        hueRotate: true,
    },
});


/**
 * Get a random value between -1 and 1, which biases towards the center if the animation should not glitch at the given `stepPct` moment.
 */
const getGlitchRandom = (options: PowerGlitchOptions, stepPct: number) => {
    // Get glitch factor for this step
    let glitchFactor = 0;
    if (options.glitchTimeSpan) {
        const glitchStart = options.glitchTimeSpan.start;
        const glitchEnd = options.glitchTimeSpan.end;
        if (stepPct < glitchStart || stepPct > glitchEnd) {
            return 0;
        }
        const glitchPeak = glitchStart + (glitchEnd - glitchStart) / 2;
        if (stepPct < glitchPeak) {
            glitchFactor = (stepPct - glitchStart) / (glitchPeak - glitchStart);
        } else {
            glitchFactor = (glitchEnd - stepPct) / (glitchEnd - glitchPeak);
        }
    } else {
        glitchFactor = 1;
    }

    // Apply glitch factor to a uniform random value between -1 and 1
    const rand = (Math.random() - .5) * 2;
    return rand * glitchFactor;
};


/**
 * Get a random rectangle values in % to glitch. Percent values are between 0 and 100.
 * @param minHeight Minimum height of the rectangle in percent, between 0 and 1.
 * @param maxHeight Maximum height of the rectangle in percent, between 0 and 1.
 * @param minWidth Minimum width of the rectangle in percent, between 0 and 1.
 * @param maxWidth Maximum width of the rectangle in percent, between 0 and 1.
 */
const getRandomRectangle = ({ minHeight, maxHeight, minWidth, maxWidth }: { minHeight: number, maxHeight: number, minWidth: number, maxWidth: number }): Rectangle => {
    // Choose a random size for this rectangle
    const height = Math.floor(Math.random() * ((maxHeight - minHeight) * 100 + 1)) + minHeight * 100;
    const width = Math.floor(Math.random() * ((maxWidth - minWidth) * 100 + 1)) + minWidth * 100;

    // Put this rectangle somewhere in the container so that it does not go out of the screen.
    const top = Math.floor(Math.random() * (100 - height));
    const left = Math.floor(Math.random() * (100 - width));

    // Get value as a CSS polygon
    return { top, left, height, width };
};

/**
 * Transform a rectangle into a CSS polygon.
 * @param rectangle Rectangle to transform.
 */
const getRectanglePolygonCss = ({ top, left, height, width }: Rectangle) => {
    const topRight = `${left + width}% ${top}%`;
    const bottomRight = `${left + width}% ${top + height}%`;
    const bottomLeft = `${left}% ${top + height}%`;
    const topLeft = `${left}% ${top}%`;
    return `polygon(${topRight}, ${bottomRight}, ${bottomLeft}, ${topLeft})`;
};

/**
 * Get default timing function, which makes sequential changes without transition.
 * @param stepCount Number of steps in the animation
 */
const getDefaultTimingCss = (stepCount: number) => {
    return {
        easing: `steps(${stepCount}, jump-start)`,
    };
};

/**
 * Generate a slice layer, slicing part of the image and moving it somwhere else.
 * @param options
 */
const generateGlitchSliceLayer = (options: PowerGlitchOptions) => {
    if (! options.slice) {
        throw new Error('Slice are not enabled');
    }
    const stepCount = Math.floor(options.slice.velocity * options.timing.duration / 1000) + 1;
    const steps = [];
    for (let index = 0; index < stepCount; ++ index) {
        const rectangle = getRandomRectangle({ minHeight: options.slice.minHeight, maxHeight: options.slice.maxHeight, minWidth: 1, maxWidth: 1 });
        const translateX = getGlitchRandom(options, index / stepCount) * 30;
        const styles: {[cssPropertyName: string]: string} = {};
        styles.transform = `translate3d(${translateX}%, 0, 0)`;
        styles.clipPath = getRectanglePolygonCss(rectangle);
        if (options.slice.hueRotate) {
            styles.filter = `hue-rotate(${Math.floor(getGlitchRandom(options, index / stepCount) * 360)}deg)`;
        }
        steps.push(styles);
    };
    
    return { steps, timing: { ...getDefaultTimingCss(stepCount), ...options.timing } };
};

/**
 * Generate the base layer, which may or may not shake depending on the options.
 * @param options
 */
const generateBaseLayer = (options: PowerGlitchOptions): LayerDefinition => {

    if (! options.shake) {
        return { steps: [], timing: getDefaultTimingCss(1) };
    }

    const stepCount = Math.floor(options.shake.velocity * options.timing.duration / 1000) + 1;
    const steps = [];
    for (let index = 0; index < stepCount; ++ index) {
        const translateX = getGlitchRandom(options, index / stepCount) * options.shake.amplitudeX * 100;
        const translateY = getGlitchRandom(options, index / stepCount) * options.shake.amplitudeY * 100;
        const styles: {[cssPropertyName: string]: string} = {};
        styles.transform = `translate3d(${translateX}%, ${translateY}%, 0)`;
        steps.push(styles);
    };
    return { steps, timing: { ...getDefaultTimingCss(stepCount), ...options.timing } };
}


/**
 * Generate all layers
 * @param options
 */
const generateLayers = (options: PowerGlitchOptions): LayerDefinition[] => {
    const layers = [];

    layers.push(generateBaseLayer(options));

    if (options.slice) {
        for (let i = 0; i < options.slice.count; ++ i) {
            layers.push(generateGlitchSliceLayer(options));
        }
    }

    return layers;
};

/**
 * Make a single element glitch.
 * @param elOrSelector Element or selector to glitch.
 * @param options Options for the glitch.
 */
const glitch = (elOrSelector: string | HTMLDivElement, options: PowerGlitchOptions) => {
    // Fix options with defaults
    options = { ...getDefaultOptions(), ...options };

    // Find element
    if (typeof elOrSelector === 'string') {
        const element = document.querySelector<HTMLDivElement>(elOrSelector);
        if (! element) {
            throw new Error(`Could not find element with selector ${elOrSelector}`);
        }
        elOrSelector = element;
    }

    // Prepare container
    elOrSelector.style.position = 'relative';
    elOrSelector.style.overflow = 'hidden';
    while (elOrSelector.firstChild) {
        elOrSelector.removeChild(elOrSelector.firstChild);
    }

    // Fill layers
    const layers = generateLayers(options);
    for (const layer of layers) {
        const layerDiv = document.createElement('div');
        layerDiv.classList.add('layer');
        layerDiv.style.backgroundColor = options.backgroundColor;
        layerDiv.style.backgroundImage = `url(${options.imageUrl})`;
        layerDiv.style.backgroundRepeat = 'no-repeat';
        layerDiv.style.backgroundPosition = 'center';
        layerDiv.style.backgroundSize = 'contain';
        layerDiv.style.width = '100%';
        layerDiv.style.height = '100%';
        layerDiv.style.top = '0';
        layerDiv.style.left = '0';
        layerDiv.style.position = 'absolute';
        layerDiv.animate(layer.steps, layer.timing);
        elOrSelector.appendChild(layerDiv);
    }
};

export const PowerGlitch = {
    glitch,
};

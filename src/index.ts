export type PowerGlitchOptions = {
    imageUrl: string,
    backgroundColor: string,
    timing: {
        duration: number,
        iterations: number,
        easing?: string,
    },
    glitchTimeSpan: false | {
        start: number,
        end: number,
    },
    shake: false | {
        velocity: number,
        amplitudeX: number,
        amplitudeY: number,
    },
    slice: false | {
        count: number,
        velocity: number,
        minHeight: number,
        maxHeight: number,
        hueRotate: boolean,
    },
};

export type LayerDefinition = {
    steps: { [cssPropertyName: string]: string }[],
    timing: any,
};

export type Rectangle = {
    top: number,
    left: number,
    height: number,
    width: number,
};

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
 * Get a random rectangle values in % to glitch. Rectangles never exceed 50% of the container height.
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
 */
const getRectanglePolygonCss = ({ top, left, height, width }: Rectangle) => {
    const topRight = `${left + width}% ${top}%`;
    const bottomRight = `${left + width}% ${top + height}%`;
    const bottomLeft = `${left}% ${top + height}%`;
    const topLeft = `${left}% ${top}%`;
    return `polygon(${topRight}, ${bottomRight}, ${bottomLeft}, ${topLeft})`;
};

/**
 * Get default timing function
 */
const getDefaultTimingCss = (stepCount: number) => {
    return {
        easing: `steps(${stepCount}, jump-start)`,
    };
};

/**
 * Generate one layer
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
 * Generate the base layer
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
 * 
 */
const glitch = (elOrSelector: string | HTMLDivElement, options: PowerGlitchOptions) => {
    // Fix options with defaults
    options = { ...getDefaultOptions(), ...options };
    // Find selector or element
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

/**
 * Custom options for the glitch animations.
 */
type PowerGlitchOptions = {

    /**
     * Image URL. Can be local, remote or a data URL. Needs to be set if glitching divs.
     */
    imageUrl?: string,

    /**
     * Background color. Use 'transparent' not to set a background color.
     */
    backgroundColor: string,

    /**
     * Whether to hide the glitch animation when it goes out of the bounding rectangle.
     */
    hideOverflow: boolean,

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
type LayerDefinition = {
    steps: { [cssPropertyName: string]: string }[],
    timing: EffectTiming,
};

/**
 * A rectangle in %, values from 0 to 100.
 */
type Rectangle = {
    top: number,
    left: number,
    height: number,
    width: number,
};

/**
 * Get best-looking default options for most images.
 */
const getDefaultOptions = (): PowerGlitchOptions => ({
    backgroundColor: 'transparent',
    hideOverflow: false,
    timing: {
        duration: 2 * 1000,
        iterations: Infinity,
    },
    glitchTimeSpan: {
        start: 0.5,
        end: 0.7,
    },
    shake: {
        velocity: 15,
        amplitudeX: 0.4,
        amplitudeY: 0.4,
    },
    slice: {
        count: 6,
        velocity: 15,
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
        ...getDefaultOptions().timing,
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
    }
    
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
    }
    return { steps, timing: { ...getDefaultTimingCss(stepCount), ...options.timing } };
};

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
 * Animate a given div with a given set of layers, showing the specified image.
 * @param div 
 * @param layers 
 * @param options
 * @param imageUrl 
 */
const animateDiv = (div: HTMLDivElement, layers: LayerDefinition[], options: PowerGlitchOptions, imageUrl: string) => {
    const templateLayer = document.createElement('div');
    templateLayer.classList.add('layer');
    templateLayer.style.backgroundColor = options.backgroundColor;
    templateLayer.style.backgroundRepeat = 'no-repeat';
    templateLayer.style.backgroundPosition = 'center';
    templateLayer.style.backgroundSize = 'contain';
    templateLayer.style.width = '100%';
    templateLayer.style.height = '100%';
    templateLayer.style.top = '0';
    templateLayer.style.left = '0';
    templateLayer.style.position = 'absolute';
    // Empty & init. div style
    div.style.position = 'relative';
    if (options.hideOverflow) {
        div.style.overflow = 'hidden';
    } else {
        div.style.overflow = 'visible';
    }
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    // For each animation layer, clone template layer, tweak styles, and append to element
    for (const layer of layers) {
        const layerDiv = templateLayer.cloneNode(false) as HTMLDivElement;
        layerDiv.style.backgroundImage = `url(${imageUrl})`;
        layerDiv.animate(layer.steps, layer.timing);
        div.appendChild(layerDiv);
    }
};

/**
* Performs a deep merge of objects and returns new object. Does not modify
* objects (immutable) and merges arrays via concatenation.
* @param objects - Objects to merge
* @returns New object with merged key/values
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mergeDeep(...objects: readonly any[]): any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isObject = (obj: any) => obj && typeof obj === 'object';
    return objects.reduce((prev, obj) => {
        Object.keys(obj)
            .forEach(key => {
                const pVal = prev[key];
                const oVal = obj[key];

                if (Array.isArray(pVal) && Array.isArray(oVal)) {
                    prev[key] = pVal.concat(...oVal);
                    return;
                }
                if (isObject(pVal) && isObject(oVal)) {
                    prev[key] = mergeDeep(pVal, oVal);
                    return;
                }
                if (oVal !== undefined) {
                    prev[key] = oVal;
                }
            });

        return prev;
    }, {});
}

/**
 * Make a single element glitch.
 * @param elOrSelector Element or selector to glitch.
 * @param userOptions Options for the glitch.
 */
const glitch = (elOrSelector: string | HTMLDivElement = '.powerglitch', userOptions: Partial<PowerGlitchOptions> = {}) => {
    // Fix options with defaults
    const options: PowerGlitchOptions = mergeDeep(getDefaultOptions(), userOptions);

    // Find elements to glitch
    let elements: (HTMLDivElement | HTMLImageElement)[] = [];
    if (typeof elOrSelector === 'string') {
        const foundElements = document.querySelectorAll<HTMLDivElement | HTMLImageElement>(elOrSelector);
        if (! foundElements.length) {
            throw new Error(`Could not find any element with selector ${elOrSelector}`);
        }
        elements = Array.from(foundElements);
    } else {
        elements = [elOrSelector];
    }

    // Discriminate between img and div for code simplicity
    const imgElements = elements.filter(el => el instanceof HTMLImageElement) as HTMLImageElement[];
    const divElements = elements.filter(el => el instanceof HTMLDivElement) as HTMLDivElement[];

    // Generate all animation layers
    const layers = generateLayers(options);

    // Animate each image element
    for (const imgElement of imgElements) {
        const newContainer = document.createElement('div');
        newContainer.style.width = imgElement.clientWidth + 'px';
        newContainer.style.height = imgElement.clientHeight + 'px';
        if (! imgElement.parentElement) {
            throw new Error('Unable to glitch image, it is not attached to a parent element');
        }
        imgElement.parentElement.insertBefore(newContainer, imgElement);
        // Remove original image
        imgElement.remove();
        // Animate the new container
        animateDiv(newContainer, layers, options, options.imageUrl || imgElement.src);
    }

    // Animate each div element
    for (const divElement of divElements) {
        // If options.imageUrl was not set, we do not know what src to use to glitch this div
        if (! options.imageUrl) {
            throw new Error('Options.imageUrl must be set if there are div elements to glitch');
        }
        animateDiv(divElement, layers, options, options.imageUrl);
    }
};

export const PowerGlitch = {
    glitch,
    generateLayers,
    getDefaultOptions,
};

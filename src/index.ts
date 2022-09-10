/**
 * Available play modes
 * @remarks
 * - always: Always glitch (default)
 * - hover: Glitch on hover
 * - click: Glitch will start on each click
 * - manual: Glitch controlled with returned callbacks
 */
export type PlayModes = 'always' | 'hover' | 'click' | 'manual';

/**
 * Custom options for the glitch animations.
 */
export type PowerGlitchOptions = {
    /**
     * Html to glitch. If not provided, will use the elements themselves. If provided, all elements should have an `innerHTML` property.
     */
    html?: string,

    /**
     * Play mode. Refer to PlayModes type definition for more information.
     */
    playMode: PlayModes,

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
     * @remarks
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
     * @remarks
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
     * Slice layers are the base animation to give the glitch effect. They clip a part of the element and move it somewhere else.
     * @remarks
     * The slice animation respects the glitch time span constraint, if set.
     */
    slice: {
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
 * Definition for one layer, part of the glitch animation.
 */
export type LayerDefinition = {
    /**
     * Each animation step is a hashmap linking CSS property names to their value for this step. 
     */
    steps: { [cssPropertyName: string]: string }[],

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
     */
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
 * Get best-looking default options for most elements for a given playMode.
 */
const getDefaultOptions = (playMode: PlayModes = 'always'): PowerGlitchOptions => {
    return {
        playMode,
        hideOverflow: false,
        timing: playMode === 'always' ? { duration: 2 * 1000, iterations: Infinity } : { duration: 250, iterations: 1 },
        glitchTimeSpan: playMode === 'always' ? { start: 0.5, end: 0.7 } : { start: 0, end: 1, },
        shake: {
            velocity: 15,
            amplitudeX: 0.2,
            amplitudeY: 0.2,
        },
        slice: playMode === 'click' ? {
            count: 15,
            velocity: 20,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true,
        } : {
            count: 6,
            velocity: 15,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true,
        },
    };
};

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
 * Generate a slice layer, slicing part of the element and moving it somwhere else.
 * @param options
 */
const generateGlitchSliceLayer = (options: PowerGlitchOptions) => {
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
        return {
            steps: [],
            timing: {
                ...getDefaultTimingCss(1),
                ...options.timing
            },
        };
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
 * Generate the layers that deterministically define a glitch animation for the specified options.
 */
const generateLayers = (options: PowerGlitchOptions): LayerDefinition[] => {
    const layers = [
        generateBaseLayer(options),
    ];

    if (options.slice) {
        for (let i = 0; i < options.slice.count; ++ i) {
            layers.push(generateGlitchSliceLayer(options));
        }
    }

    return layers;
};

/**
* Performs a deep merge of objects and returns new object. Does not modify
* objects (immutable) and merges arrays via concatenation.
* @param objects - Objects to merge
* @returns New object with merged key/values
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mergeDeep = (...objects: readonly any[]): any => {
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
};

/**
 * Given a set of computed layers and user options, glitch a given element
 * @param element 
 * @param layers 
 * @param options 
 */
const glitchElement = (element: HTMLElement, layers: LayerDefinition[], options: PowerGlitchOptions): { container: HTMLDivElement, startGlitch: () => void, stopGlitch: () => void } => {
    const alreadyGlitched = !! element.dataset.glitched;

    /**
     * Depending on the element state (whether it was glitched before or not, current element display attributes)
     */
    let container: HTMLDivElement;
    let layersContainer: HTMLDivElement;

    // If new glitch
    if (! alreadyGlitched) {
        // Setup the layer container using grid to stack elements
        layersContainer = document.createElement('div');
        layersContainer.style.display = 'grid';
        // If current element is an inline element
        container = document.createElement('div');
        if (getComputedStyle(element).getPropertyValue('display').match(/^inline/)) {
            container.style.display = 'inline-block';
        }
        // Add the layers container to the global container
        container.appendChild(layersContainer);
    } else {
        layersContainer = element.parentElement as HTMLDivElement;
        container = element.parentElement?.parentElement as HTMLDivElement;
        // Remove all glitch layers but keep the first one (which is the original element)
        while (layersContainer.children.length > 1) {
            layersContainer.removeChild(layersContainer.children[1]);
        }
        // Cancel the animation on the first layer
        (layersContainer.firstElementChild as HTMLDivElement).getAnimations().forEach(animation => animation.cancel());
    }
    
    // Overflow
    if (options.hideOverflow) {
        container.style.overflow = 'hidden';
    }

    // If setting HTML manually
    if (options.html) {
        element.innerHTML = options.html;
    }

    // Replace element with the new container
    if (! alreadyGlitched) {
        element.parentElement?.insertBefore(container, element);
        layersContainer.prepend(element);
    }
    
    // Stack original element too (it is used as the base shaking layer)
    element.style.gridArea = '1 / 1 / -1 / -1';

    // Base layer
    const baseLayer = element.cloneNode(true) as HTMLElement;
    // Stack this layer
    baseLayer.style.gridArea = '1 / 1 / -1 / -1';
    baseLayer.style.userSelect = 'none';
    baseLayer.style.pointerEvents = 'none';

    for (let i = 0; i < layers.length - 1; ++ i) {
        const layerDiv = baseLayer.cloneNode(true);
        layersContainer.appendChild(layerDiv);
    }
    
    // Glitch control functions
    const startGlitch = () => {
        layers.forEach((layer, i) => {
            layersContainer
                .children[i]
                .animate(layer.steps, layer.timing);
        });
    };
    const stopGlitch = () => {
        layers.forEach((_, i) => {
            layersContainer
                .children[i]
                .getAnimations()
                .forEach(animation => {
                    animation.cancel();
                });
        });
    };

    // Depending on the selected play mode, orchestrate when to start/stop the glitch
    switch (options.playMode) {
        case 'always':
            startGlitch();
            container.onmouseenter = null;
            container.onmouseleave = null;
            break;
        case 'hover':
            container.onmouseenter = startGlitch;
            container.onmouseleave = stopGlitch;
            container.onclick = null;
            break;
        case 'click':
            container.onmouseenter = null;
            container.onmouseleave = null;
            container.onclick = () => { stopGlitch(); startGlitch(); };
            break;
        case 'manual':
            container.onmouseenter = null;
            container.onmouseleave = null;
            container.onclick = null;
            break;
    }

    element.dataset.glitched = '1';

    return { container, startGlitch, stopGlitch };
};

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

/**
 * Options given to the glitch method
 */
export type GlitchPartialOptions = RecursivePartial<PowerGlitchOptions>;

/**
 * Specifies what to glitch. Query selector, html element, list of html elements or NodeList.
 */
export type GlitchableElement = string | HTMLElement | NodeList | Array<HTMLElement>;

/**
 * The result for glitching one or multiple elements.
 */
export type GlitchResult = {

    /**
     * Lists of containers for each glitched element.
     */
    containers: HTMLDivElement[];

    /**
     * Callback to force-start the glitch animation regardless of the selected play mode.
     */
    startGlitch: () => void;

    /**
     * Callback to force-stop the glitch animation, regardless of the selected play mode.
     */
    stopGlitch: () => void;
}

/**
 * Make a single element glitch.
 * @param elOrSelector What to glitch. Can be a query selector, a list of HTMLElement, an HTMLElement or a NodeList.
 * @param userOptions Optional glitch customization options.
 */
const glitch = (elOrSelector: GlitchableElement = '.powerglitch', userOptions: GlitchPartialOptions = {}): GlitchResult => {
    // Fix options with defaults
    const options: PowerGlitchOptions = mergeDeep(getDefaultOptions(userOptions.playMode), userOptions);

    // Find elements to glitch
    let elements: HTMLElement[] = [];
    if (typeof elOrSelector === 'string') {
        elements = Array.from(document.querySelectorAll<HTMLElement>(elOrSelector));
    } else if (elOrSelector instanceof NodeList) {
        elements = Array.from(elOrSelector) as Array<HTMLElement>;
    } else if (Array.isArray(elOrSelector)) {
        elements = elOrSelector;
    } else if (elOrSelector instanceof HTMLElement) {
        elements = [elOrSelector];
    }

    // Generate all animation layers
    const layers = generateLayers(options);

    // Animate each div element
    const entries = elements.map(element => glitchElement(element, layers, options));

    // Return list of containers and glitch control functions
    return {
        containers: entries.map(entry => entry.container),
        startGlitch: () => entries.forEach(entry => entry.startGlitch()),
        stopGlitch: () => entries.forEach(entry => entry.stopGlitch()),
    };
};

export const PowerGlitch = {
    glitch,
    generateLayers,
    getDefaultOptions,
};

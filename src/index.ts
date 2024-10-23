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
     * Whether to avoid running the glitch effect on crawlers for SEO optimization.
     */
    optimizeSeo: boolean,

    /**
     * Html to glitch. If not provided, will use the elements themselves. If provided, all elements should have an `innerHTML` property.
     */
    html?: string,

    /**
     * Whether to create the 2 containers (one containing the other) necessary to create the glitch animation (defaults to true).
     * @remarks
     * The glitch effect relies on cloning the glitched element, and stacking them on top of the others inside 2 containers (one containing the other).
     * The embedded container is called the layer container, it has grid display and stacks its children, which are the original element and its cloned versions.
     * The top-level container replaces the original element (and the element is moved inside the layer container)
     * This logic is necessary to ensure layout consistency before/after the glitch, and to create the actual glitch effect with CSS.
     * In short, this maximizes compatibility for gitching about anything, but has to rearrange the DOM for that purpose.
     * 
     * In some cases, it is better to handle this logic of two containers elsewhere than in PowerGlitch.
     * For that, this flag should be false, which will make PowerGlitch.giltch(..) assume:
     *  - That the first argument to glitch(..) is the layer container itself
     *  - That the first child of the layer container is the element to glitch
     * And will:
     *  - Clone the element to glitch the required amount of times, and add the clones at the same level than the element to glitch in the layer container
     */
    createContainers: boolean,

    /**
     * While you can control the glitch with the startGlitch/stopGlitch methods,
     * You can also set a default behavior for playing the glitch.
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

    /**
     * Pulse layer adds a pulsing effect to the glitch.
     */
    pulse: false | {
        /**
         * Max scale
         */
        scale: number,
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
 * Get best-looking default options for most elements for a given playMode.
 */
const getDefaultOptions = (playMode: PlayModes = 'always'): PowerGlitchOptions => {
    return {
        playMode,
        optimizeSeo: true,
        createContainers: true,
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
        pulse: false,
    };
};

/**
 * Glitch factor function, returns a value between 0 and 1 telling how much the animation should glitch at a given stepPct.
 */
const getGlitchFactor = (options: PowerGlitchOptions, stepPct: number) => {
    if (! options.glitchTimeSpan) {
        return 1;
    }
    const glitchStart = options.glitchTimeSpan.start;
    const glitchEnd = options.glitchTimeSpan.end;
    if (stepPct < glitchStart || stepPct > glitchEnd) {
        return 0;
    }
    const glitchPeak = glitchStart + (glitchEnd - glitchStart) / 2;
    if (stepPct < glitchPeak) {
        return (stepPct - glitchStart) / (glitchPeak - glitchStart);
    } else {
        return (glitchEnd - stepPct) / (glitchEnd - glitchPeak);
    }
};

/**
 * Get a random value between -1 and 1, which biases towards the center if the animation should not glitch at the given `stepPct` moment.
 */
const getGlitchRandom = (options: PowerGlitchOptions, stepPct: number) => {
    return (Math.random() - .5) * 2 * getGlitchFactor(options, stepPct);
};

/**
 * Get a random rectangle values in % to glitch. Percent values are between 0 and 100. Returns the rectangle as a CSS polygon.
 * @param minHeight Minimum height of the rectangle in percent, between 0 and 1.
 * @param maxHeight Maximum height of the rectangle in percent, between 0 and 1.
 * @param minWidth Minimum width of the rectangle in percent, between 0 and 1.
 * @param maxWidth Maximum width of the rectangle in percent, between 0 and 1.
 */
const getRandomRectanglePolygonCss = ({ minHeight, maxHeight, minWidth, maxWidth }: { minHeight: number, maxHeight: number, minWidth: number, maxWidth: number }) => {    // Choose a random size for this rectangle
    const height = Math.floor(Math.random() * ((maxHeight - minHeight) * 100 + 1)) + minHeight * 100;
    const width = Math.floor(Math.random() * ((maxWidth - minWidth) * 100 + 1)) + minWidth * 100;

    // Put this rectangle somewhere in the container so that it does not go out of the screen.
    const top = Math.floor(Math.random() * (100 - height));
    const left = Math.floor(Math.random() * (100 - width));

    const topRight = `${left + width}% ${top}%`;
    const bottomRight = `${left + width}% ${top + height}%`;
    const bottomLeft = `${left}% ${top + height}%`;
    const topLeft = `${left}% ${top}%`;
    return `polygon(${topRight},${bottomRight},${bottomLeft},${topLeft})`;
};

/**
 * Generate a slice layer, slicing part of the element and moving it somwhere else.
 * @param options
 */
const generateGlitchSliceLayer = (options: PowerGlitchOptions) => {
    const stepCount = Math.floor(options.slice.velocity * options.timing.duration / 1000) + 1;
    const steps = [];
    for (let index = 0; index < stepCount; ++ index) {
        if (getGlitchFactor(options, index / stepCount) === 0) {
            steps.push({
                opacity: '0',
                transform: 'none',
                clipPath: 'unset',
            });
            continue;
        }
        const translateX = getGlitchRandom(options, index / stepCount) * 30;
        const styles: {[cssPropertyName: string]: string} = {
            opacity: '1',
            transform: `translate3d(${translateX}%,0,0)`,
            clipPath: getRandomRectanglePolygonCss({ minHeight: options.slice.minHeight, maxHeight: options.slice.maxHeight, minWidth: 1, maxWidth: 1 }),
        };
        if (options.slice.hueRotate) {
            styles.filter = `hue-rotate(${Math.floor(getGlitchRandom(options, index / stepCount) * 360)}deg)`;
        }
        steps.push(styles);
    }
    
    return {
        steps,
        timing: {
            easing: `steps(${stepCount},jump-start)`,
            ...options.timing
        },
    };
};

/**
 * Generate a pulse layer, a single transparent and growing layer.
 * @param options 
 */
const generateGlitchPulseLayer = (options: PowerGlitchOptions) => {
    return ! options.pulse ? null : {
        steps: [
            { transform: 'scale(1)', opacity: '1', },
            { transform: `scale(${options.pulse.scale})`, opacity: '0', },
        ],
        timing: {
            ...options.timing,
            delay: (options.glitchTimeSpan ? options.glitchTimeSpan.start : 0) * options.timing.duration,
            easing: 'ease-in-out',
        },
    };
};

/**
 * Generate the base layer, which may or may not shake depending on the options.
 * @param options
 */
const generateBaseLayer = (options: PowerGlitchOptions): LayerDefinition => {
    if (! options.shake) {
        return { steps: [], timing: {} };
    }

    const stepCount = Math.floor(options.shake.velocity * options.timing.duration / 1000) + 1;
    const steps = [];
    for (let index = 0; index < stepCount; ++ index) {
        const translateX = getGlitchRandom(options, index / stepCount) * options.shake.amplitudeX * 100;
        const translateY = getGlitchRandom(options, index / stepCount) * options.shake.amplitudeY * 100;
        steps.push({
            transform: `translate3d(${translateX}%,${translateY}%,0)`,
        });
    }
    return {
        steps,
        timing: {
            easing: `steps(${stepCount},jump-start)`,
            ...options.timing
        },
    };
};

/**
 * Generate the layers that deterministically define a glitch animation for the specified options.
 */
const generateLayers = (options: PowerGlitchOptions): LayerDefinition[] => (
    [
        generateBaseLayer(options),
        generateGlitchPulseLayer(options),
        ...Array.from({ length: options.slice.count }).map(() => generateGlitchSliceLayer(options)),
    ].filter(entry => entry !== null) as LayerDefinition[]
);

/**
* Performs a deep merge of option objects and returns new object. Does not modify
* objects (immutable) and will ignore arrays.
* @param objects - Objects to merge
* @returns New object with merged key/values
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeOptions = (...objects: readonly any[]): any => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isObject = (obj: any) => obj && typeof obj === 'object';
    return objects.reduce((prev, obj) => {
        Object.keys(obj)
            .forEach(key => {
                if (isObject(prev[key]) && isObject(obj[key])) {
                    prev[key] = mergeOptions(prev[key], obj[key]);
                } else if (obj[key] !== undefined) {
                    prev[key] = obj[key];
                }
            });

        return prev;
    }, {});
};

/**
 * Prepare the DOM to set up the glitch effect.
 * @remarks
 * Depending on the element state:
 *  - Whether it was glitched before or not,
 *  - Whether current element display attributes
 *  - Whether options.createContainers is true/false
 * The top-level container and layer containers might be different objects and might need to be created.
 * @param element 
 * @param options 
 * @returns 
 */
const prepareGlitchElement = (element: HTMLElement, options: PowerGlitchOptions): { glitched: HTMLElement, container: HTMLDivElement, layersContainer: HTMLDivElement } => {
    // If not creating the containers
    if (! options.createContainers) {
        return {
            container: element as HTMLDivElement,
            layersContainer: element as HTMLDivElement,
            glitched: element.firstElementChild as HTMLElement,
        };
    }

    // If first glitch
    if (! element.dataset.glitched) {
        // Setup the layer container using grid to stack elements
        const layersContainer = document.createElement('div');
        // If current element is an inline element
        const container = document.createElement('div');
        if (getComputedStyle(element).getPropertyValue('display').match(/^inline/)) {
            container.style.display = 'inline-block';
        }
        // Add the layers container to the global container
        container.appendChild(layersContainer);
        // Replace element with the new container
        element.parentElement?.insertBefore(container, element);
        layersContainer.prepend(element);
        return {
            container,
            layersContainer,
            glitched: element,
        };
    }

    // Not first glitch, with createContainers=true
    const layersContainer = element.parentElement as HTMLDivElement;
    const container = element.parentElement?.parentElement as HTMLDivElement;
    // Remove all glitch layers but keep the first one (which is the original element)
    while (layersContainer.children.length > 1) {
        layersContainer.removeChild(layersContainer.children[1]);
    }
    // Cancel the animation on the first layer
    (layersContainer.firstElementChild as HTMLDivElement).getAnimations().forEach(animation => animation.cancel());
    return {
        container,
        layersContainer,
        glitched: element,
    };
};

/**
 * Given a set of computed layers and user options, glitch a given element
 * @param element 
 * @param layers 
 * @param options 
 */
const glitchElement = (element: HTMLElement, layers: LayerDefinition[], options: PowerGlitchOptions): { container: HTMLDivElement, startGlitch: () => void, stopGlitch: () => void } => {
    const { glitched, container, layersContainer } = prepareGlitchElement(element, options);
    
    // Force grid display on the layer container
    layersContainer.style.display = 'grid';
    
    // Overflow
    if (options.hideOverflow) {
        container.style.overflow = 'hidden';
    }

    // If setting HTML manually
    if (options.html) {
        glitched.innerHTML = options.html;
    }
    
    // Stack original element too (it is used as the base shaking layer)
    glitched.style.gridArea = '1/1/-1/-1';

    // Base layer
    const baseLayer = glitched.cloneNode(true) as HTMLElement;
    baseLayer.dataset.islayer = 'true';
    // Stack this layer
    baseLayer.style.gridArea = '1/1/-1/-1';
    baseLayer.style.userSelect = 'none';
    baseLayer.style.pointerEvents = 'none';
    baseLayer.style.opacity = '0';

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
    container.onmouseenter = null;
    container.onmouseleave = null;
    container.onclick = null;
    switch (options.playMode) {
        case 'always':
            startGlitch();
            break;
        case 'hover':
            container.onmouseenter = startGlitch;
            container.onmouseleave = stopGlitch;
            break;
        case 'click':
            container.onclick = () => { stopGlitch(); startGlitch(); };
            break;
    }

    // Mark the glitched element as glitched for next round
    element.dataset.glitched = '1';

    return { container, startGlitch, stopGlitch };
};

/**
 * Utility class to have optional properties on a type recursively
 */
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
export type GlitchableElement = string | HTMLElement | NodeListOf<HTMLElement> | Array<HTMLElement>;

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
const glitch = (elOrSelector: GlitchableElement = '.powerglitch', userOptions: GlitchPartialOptions = {}): GlitchResult | null => {
    // Fix options with defaults
    const options: PowerGlitchOptions = mergeOptions(getDefaultOptions(userOptions.playMode), userOptions);

    // Do NOT glitch if SEO optimization is enabled and the user agent is a bot
    if (options.optimizeSeo && navigator.userAgent.match(/bot|google|baidu|bing|msn|teoma|slurp|yandex|facebookexternalhit|facebot/i)) {
        return null;
    }

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
    const entries = elements
        /**
         * When calling glitch(..) multiple times on the same element using query selector, glitch layers will also match the selector.
         * Only the root-layer (base element) should be glitched, so we ensure we filter out non-root glitch layers.
         */
        .filter(element => !element.dataset.islayer)
        // Each element is glitched using the same layer definition.
        .map((element) =>
            glitchElement(element, layers, options)
        );

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

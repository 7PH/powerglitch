import { mockAnimationsApi } from 'jsdom-testing-mocks';
import { PowerGlitch } from '../src/index';


const ELEMENTS: {[elementType: string]: string} = {
    paragraph: '<p class="glitch">Paragraph</p>',
    image: '<img class="glitch" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHJJREFUKFOdkLEKwCAMRM9NXAQ3d///S/wEcdRNcBE3JS3SFDqEZjouLxcSFWNczjlorfFVc0601qByzotECAHW2hfbe0dKCRSkSinLGHMZHD4QeWOMG/Tegzcolg/WWh+QmgcmzdP/gaLVomPE75E+fAPIxIQpcqn2GAAAAABJRU5ErkJggg==" />',
    button: '<button class="glitch">Button</button>',
    div: '<div class="glitch"><p>Nested <b>elements</b></p></div>',
};

const init = (html: string) => {
    document.body.innerHTML = html;
    return {
        element: document.querySelector('.glitch') as HTMLElement,
    };
};

// We have to specify a easing different than steps, becasue steps is not supported by the Web Animation API mock
const baseOptions = {
    timing: {
        easing: 'ease-in-out',
    },
};

/**
 * Duplicate a test for all element types
 * @see ELEMENTS
 */
const testAllElementTypes = (name: string, job: (elementType: string) => Promise<void>): void => {
    describe(name, function() {
        for (const elementType in ELEMENTS) {
            test(elementType, async () => {
                await job(elementType);
            });
        }
    });
};

/**
 * Ensure that all layers are in a given playing state
 * @param container Container for the glitch animation
 * @param playing Whether all layers should be playing or not
 */
const ensureAllLayersPlaying = (container: HTMLDivElement, playing: boolean) => {
    const layersContainer = container.firstElementChild as HTMLDivElement;
    for (const layerDiv of layersContainer.children) {
        const animations = layerDiv.getAnimations();
        const activeAnimations = animations.filter(animation => typeof animation.effect?.getComputedTiming().localTime === 'number');
        expect(activeAnimations).toHaveLength(playing ? 1 : 0);
    }
};

try {
    mockAnimationsApi();
} catch (error) {
    console.warn('Unable to mock Web Animation API');
}

describe('Given default options', () => {
    test('the default play mode should be \'always\'', async () => {
        expect(PowerGlitch.getDefaultOptions().playMode).toBe('always');
    });
});

describe('Given one or multiple element(s) to glitch', () => {
    /**
     * Glitch from query selector
     */
    testAllElementTypes('from string query selector', async elementType => {
        init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch('.glitch', { ...baseOptions });
        expect(containers.length).toBe(1);
    });

    /**
     * Glitch from reference
     */
    testAllElementTypes('from element reference', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, { ...baseOptions });
        expect(containers.length).toBe(1);
    });

    /**
     * Glitch from HTML
     */
    testAllElementTypes('from html option', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            html: ELEMENTS[elementType],
        });
        expect(containers.length).toBe(1);
    });

    /**
     * Glitch from querySelectorAll
     */
    test('from querySelectorAll', async () => {
        init(Object.values(ELEMENTS).join(''));
        const elements = document.querySelectorAll('.glitch');
        const { containers } = PowerGlitch.glitch(elements, { ...baseOptions });
        expect(containers.length).toBe(elements.length);
    });

    /**
     * Glitch an array of HTMLElements
     */
    test('from array of HTMLElements', async () => {
        init(Object.values(ELEMENTS).join(''));
        const elements = Array.from(document.querySelectorAll('.glitch')) as Array<HTMLElement>;
        const { containers } = PowerGlitch.glitch(elements, { ...baseOptions });
        expect(containers.length).toBe(elements.length);
    });
});

describe('Given glitching more than once the same element', () => {
    /**
     * Glitching twice an element should reset its animation
     */
    testAllElementTypes('overrides glitch on second call', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers: containers1 } = PowerGlitch.glitch(element, { ...baseOptions, slice: { count: 10 } });
        expect(containers1.length).toBe(1);
        expect(containers1[0].firstElementChild?.children.length).toBe(11);
        const { containers: containers2 } = PowerGlitch.glitch(element, { ...baseOptions, slice: { count: 20 } });
        expect(containers2.length).toBe(1);
        expect(containers2[0].firstElementChild?.children.length).toBe(21);
    });
});

describe('Given shake option', () => {
    /**
     * Test the default glitch effect and the DOM manipulations that result from the glitch
     */
    testAllElementTypes('accepts not-shaking the base layer', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            shake: false,
        });
        expect(containers.length).toBe(1);
    });
});

describe('Given slice option', () => {
    /**
     * Test the default glitch effect and the DOM manipulations that result from the glitch
     */
    testAllElementTypes('respects asked number of slices', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            slice: {
                count: 10,
            },
        });

        // One element only should be glitched
        expect(containers.length).toBe(1);

        // When creating 10 slices, the number of created layers should be 1 + 10 (the basis layer plus the slice layers)
        expect(containers[0].firstElementChild?.children.length).toBe(11);
    });
});

describe('Given hideOverflow option', () => {
    /**
     * Test that the hide overflow option works
     */
    testAllElementTypes('adds corresponding overflow CSS property', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            hideOverflow: true,
        });

        expect(containers.length).toBe(1);
        expect(window.getComputedStyle(containers[0]).overflow).toBe('hidden');
    });
});

describe('Given playMode option', () => {
    /**
     * Always play mode
     */
    testAllElementTypes('plays directly in always play mode', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            playMode: 'always',
        });

        ensureAllLayersPlaying(containers[0], true);
    });

    /**
     * Hover play mode
     */
    testAllElementTypes('does not play directly in hover play mode', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            playMode: 'hover',
        });

        // We can not emulate hover event, so we only test that the animation does not start right away
        ensureAllLayersPlaying(containers[0], false);
    });

    /**
     * Click play mode
     */
    testAllElementTypes('plays only on click in click play mode', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            playMode: 'click',
        });

        ensureAllLayersPlaying(containers[0], false);

        // Clicking on the container should trigger the animation
        containers[0].click();
        ensureAllLayersPlaying(containers[0], true);
    });

    /**
     * Manual play mode
     */
    testAllElementTypes('plays only on callbacks in manual play mode', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers, startGlitch, stopGlitch } = PowerGlitch.glitch(element, {
            ...baseOptions,
            playMode: 'manual',
        });

        // In manual, animation should not play at first
        ensureAllLayersPlaying(containers[0], false);

        // Once startGlitch is called, the animation should play
        startGlitch();
        ensureAllLayersPlaying(containers[0], true);

        // When stopGlitch is called, the animation should stop
        stopGlitch();
        ensureAllLayersPlaying(containers[0], false);
    });
});

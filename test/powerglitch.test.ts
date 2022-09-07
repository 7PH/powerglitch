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
 * 
 */
const testAllElementTypes = (name: string, job: (elementType: string) => Promise<void>): void => {
    /**
     * The following tests are duplicated for each sample element type 
     * @see ELEMENTS
     */
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
    for (const layerDiv of container.children) {
        expect(layerDiv.getAnimations().length).toBe(playing ? 1 : 0);
    }
};

try {
    mockAnimationsApi();
} catch (error) {
    console.warn('Unable to mock Web Animation API');
}

describe('Default options', () => {
    test('default play mode should be \'always\'', async () => {
        expect(PowerGlitch.getDefaultOptions().playMode).toBe('always');
    });
});

describe('Glitching more than one element', () => {
    /**
     * Glitch from querySelectorAll
     */
    test('can glitch result from querySelectorAll', async () => {
        init(Object.values(ELEMENTS).join(''));
        const elements = document.querySelectorAll('.glitch');
        const { containers } = PowerGlitch.glitch(elements, { ...baseOptions });
        expect(containers.length).toBe(elements.length);
    });
    /**
     * Glitch an array of HTMLElements
     */
    test('can glitch an array of HTMLElements', async () => {
        init(Object.values(ELEMENTS).join(''));
        const elements = Array.from(document.querySelectorAll('.glitch')) as Array<HTMLElement>;
        const { containers } = PowerGlitch.glitch(elements, { ...baseOptions });
        expect(containers.length).toBe(elements.length);
    });
});

describe('Finding the element to glitch', () => {

    /**
     * Glitch from query selector
     */
    testAllElementTypes('can glitch from query selector', async elementType => {
        init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch('.glitch', { ...baseOptions });
        expect(containers.length).toBe(1);
    });

    /**
     * Glitch from reference
     */
    testAllElementTypes('can glitch from reference', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, { ...baseOptions });
        expect(containers.length).toBe(1);
    });

    /**
     * Glitch from HTML
     */
    testAllElementTypes('can glitch using the html option', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            html: ELEMENTS[elementType],
        });
        expect(containers.length).toBe(1);
    });
});

describe('Glitch more than once', () => {
    /**
     * Glitching twice an element should reset its animation
     */
    testAllElementTypes('should override glitch effect when glitching twice', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers: containers1 } = PowerGlitch.glitch(element, { ...baseOptions, slice: { count: 10 } });
        expect(containers1.length).toBe(1);
        expect(containers1[0].children.length).toBe(11);
        const { containers: containers2 } = PowerGlitch.glitch(element, { ...baseOptions, slice: { count: 20 } });
        expect(containers2.length).toBe(1);
        expect(containers2[0].children.length).toBe(21);
    });
});

describe('Glitch giving shake definition', () => {
    /**
     * Test the default glitch effect and the DOM manipulations that result from the glitch
     */
    testAllElementTypes('can glitch without shaking the base layer', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            shake: false,
        });
        expect(containers.length).toBe(1);
    });
});

describe('Glitch giving slice definition', () => {
    /**
     * Test the default glitch effect and the DOM manipulations that result from the glitch
     */
    testAllElementTypes('can glitch specifying number of slices', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            slice: {
                count: 10,
            },
        });

        // When creating 10 slices, the number of created layers should be 1 + 10 (the basis layer plus the slice layers)
        expect(containers.length).toBe(1);
        expect(containers[0].children.length).toBe(11);
    });
});

describe('Glitch overflow option', () => {
    /**
     * Test that the hide overflow option works
     */
    testAllElementTypes('can glitch hiding overflow', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers } = PowerGlitch.glitch(element, {
            ...baseOptions,
            hideOverflow: true,
        });

        expect(containers.length).toBe(1);
        expect(containers[0].style.overflow).toBe('hidden');
    });
});

describe('Glitch giving play modes', () => {
    /**
     * Always play mode
     */
    testAllElementTypes('plays directly when glitching in always play mode', async elementType => {
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
    testAllElementTypes('does not play directly when glitching in hover play mode', async elementType => {
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
    testAllElementTypes('plays only on click when glitching in click play mode', async elementType => {
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
    testAllElementTypes('plays only on calling callbacks when glitching in manual play mode', async elementType => {
        const { element } = init(ELEMENTS[elementType]);
        const { containers, startGlitch, stopGlitch } = PowerGlitch.glitch(element, {
            ...baseOptions,
            playMode: 'manual',
        });
        
        ensureAllLayersPlaying(containers[0], false);
        startGlitch();
        ensureAllLayersPlaying(containers[0], true);
        stopGlitch();
        ensureAllLayersPlaying(containers[0], false);
    });
});

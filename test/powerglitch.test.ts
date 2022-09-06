import { mockAnimationsApi } from 'jsdom-testing-mocks';
import { PowerGlitch } from '../src/index';


const ELEMENTS: {[elementType: string]: string} = {
    paragraph: '<p class="glitch">Paragraph</p>',
    image: '<img class="glitch" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHJJREFUKFOdkLEKwCAMRM9NXAQ3d///S/wEcdRNcBE3JS3SFDqEZjouLxcSFWNczjlorfFVc0601qByzotECAHW2hfbe0dKCRSkSinLGHMZHD4QeWOMG/Tegzcolg/WWh+QmgcmzdP/gaLVomPE75E+fAPIxIQpcqn2GAAAAABJRU5ErkJggg==" />',
    button: '<button class="glitch">Button</button>',
    nested: '<div class="glitch"><p>Nested <b>elements</b></p></div>',
};

const init = (html: string) => {
    document.body.innerHTML = html;
    return {
        element: document.querySelector('.glitch') as HTMLElement,
    };
};

try {
    mockAnimationsApi();
} catch (error) {
    console.warn('Unable to mock Web Animation API');
}

for (const elementType in ELEMENTS) {
    test(`glitch ${elementType}`, async () => {
        const sliceCount = 10;
        const { element } = init(ELEMENTS[elementType]);
        PowerGlitch.glitch(element, {
            timing: {
                // We have to specify a easing different than steps, becasue steps is not supported by the Web Animation API mock
                easing: 'ease-in-out',
            },
            slice: {
                count: sliceCount,
            },
        });
        const container = document.body.firstChild as HTMLDivElement;
        expect(container.children.length).toBe(sliceCount + 1);
    });
}

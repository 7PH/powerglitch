import { defineStore } from 'pinia';
import defaultImage from '@/assets/default.png';
import { PowerGlitch } from '../../../src/index.ts';


export const useAppStore = defineStore('main', {
    state: () => {

        const htmlElements = {
            'image': `<img src="${defaultImage}" />`,
            'button': '<button>a button 🤷‍♀️</button>',
        };

        return {

            powerGlitchOptions: {
                ...PowerGlitch.getDefaultOptions('always'),
                html: htmlElements.image,
            },

            htmlElements,
        };
    },
    actions: {

        setOptions(options) {
            this.powerGlitchOptions = { ...this.powerGlitchOptions, ...options };
        },

        setPlayModeDefaults(playMode) {
            const defaults = PowerGlitch.getDefaultOptions(playMode);
            this.powerGlitchOptions.playMode = playMode;
            this.powerGlitchOptions.timing = defaults.timing;
            this.powerGlitchOptions.glitchTimeSpan = defaults.glitchTimeSpan;
            this.powerGlitchOptions.shake = defaults.shake;
            this.powerGlitchOptions.slice = defaults.slice;
            
            const htmlElementKey = {
                'always': 'image',
                'hover': 'image',
                'click': 'button',
            }[playMode];
            this.powerGlitchOptions.html = this.htmlElements[htmlElementKey];
        },
    },
});

import { defineStore } from 'pinia';
import { PowerGlitch } from '../../../src/index.ts';


export const useAppStore = defineStore('main', {
    state: () => ({

        /**
         * Default options for Power Glitch
         */
        powerGlitchOptions: {
            ...PowerGlitch.getDefaultOptions('always'),
        },
    }),
    actions: {

        setOptions(options) {
            this.powerGlitchOptions = { ...this.powerGlitchOptions, ...options };
        },
    },
});

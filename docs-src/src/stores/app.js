import { defineStore } from 'pinia';
import defaultImage from '@/assets/default.png';
import { PowerGlitch } from '../../../src/index.ts';


export const useAppStore = defineStore('main', {
    state: () => ({

        /**
         * Default options for Power Glitch
         */
        powerGlitchOptions: {
            ...PowerGlitch.getDefaultOptions(),
            imageUrl: defaultImage,
        },
    }),
    actions: {

        setOptions(options) {
            this.powerGlitchOptions = { ...this.powerGlitchOptions, ...options };
        },
    },
});

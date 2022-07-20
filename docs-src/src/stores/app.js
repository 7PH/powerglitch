import { defineStore } from 'pinia';
import defaultImage from '@/assets/default.png';
import { getDefaultOptions } from '../../../src/index.ts';


export const useAppStore = defineStore('main', {
    state: () => ({

        /**
         * Default options for Power Glitch
         */
        powerGlitchOptions: {
            ...getDefaultOptions(),
            imageUrl: defaultImage,
        },
    }),
    actions: {

        setOptions(options) {
            this.powerGlitchOptions = { ...this.powerGlitchOptions, ...options };
        },
    },
});

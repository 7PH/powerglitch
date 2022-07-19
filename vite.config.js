import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    base: '/powerglitch/',

    root: 'docs-src/',
    build: {
        outDir: '../docs',
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './docs-src/src'),
        },
    },
});

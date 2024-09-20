import esbuild, { minify } from 'rollup-plugin-esbuild';

const name = 'powerglitch';

const bundle = (config) => ({
    ...config,
    plugins: [esbuild(), minify()],
    input: 'src/index.ts',
    external: (id) => !/^[./]/.test(id),
});

export default [
    bundle({
        output: [
            {
                file: `dist/${name}.min.js`,
                name: 'window',
                extend: true,
                format: 'iife',
            },
        ],
    }),
    bundle({
        output: [
            {
                file: 'lib/index.esm.js',
                format: 'esm',
            },
        ],
    }),
    bundle({
        output: [
            {
                file: 'lib/index.cjs',
                format: 'cjs',
            },
        ],
    }),
];

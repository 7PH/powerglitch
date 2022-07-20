<script setup>
import { ref, onMounted } from 'vue';
import logo from '@/assets/default.png';
import exampleFrog from '@/assets/example-frog.gif';
import { PowerGlitch } from '../../../src/index.ts';

// Glitch logo
const logoGlitch = ref(null);
onMounted(() => {
    PowerGlitch.glitch(logoGlitch.value, { imageUrl: logo });
});

// Glitch example frog
const frog1Glitch = ref(null);
const frog2Glitch = ref(null);
const frog3Glitch = ref(null);
const frog4Glitch = ref(null);
onMounted(() => {
    PowerGlitch.glitch(frog1Glitch.value, {
        imageUrl: exampleFrog,
        shake: false,
        slice: false,
    });
    PowerGlitch.glitch(frog2Glitch.value, {
        imageUrl: exampleFrog,
        shake: false,
        glitchTimeSpan: {
            start: 0.2,
            end: 0.6,
        },
        slice: {
            count: 3,
            velocity: 4,
            minHeight: 0.01,
            maxHeight: 0.15,
            hueRotate: true,
        },
    });
    PowerGlitch.glitch(frog3Glitch.value, {
        imageUrl: exampleFrog,
    });
    PowerGlitch.glitch(frog4Glitch.value, {
        imageUrl: exampleFrog,
        glitchTimeSpan: {
            start: 0,
            end: 1,
        },
    });
});

// Usage example
const usageExample = `
import { PowerGlitch } from 'powerglitch';
PowerGlitch.glitch('#my-image', { imageUrl: logo });
`.trim();

// Install
const installExample = `
# npm i --save powerglitch
or
# yarn add powerglitch
`.trim();
</script>

<template>
    <div class="app w-full mx-auto my-8">

        <!-- GitHub -->
        <p class="fixed right-0 top-0 mx-6 my-4 text-4xl">
            <a href="https://github.com/7ph/powerglitch" target="_blank">
                <fa icon="fa-brands fa-github" />
            </a>
        </p>

        <!-- Title -->
        <div class="mt-8 font-bold text-5xl flex gap-4 justify-center">
            <div ref="logoGlitch" style="width: 60px; height: 60px;"></div>
            <div class="mt-1">PowerGlitch</div>
        </div>
        <p class="text-center mt-4 text-lg">
            A tiny library to glitch images on the web.
        </p>
        <div class="mt-2 flex justify-center gap-4">
            <RouterLink to="/" class="">home</RouterLink>
            <RouterLink to="/playground" class="underline">playground</RouterLink>
            <RouterLink to="/api" class="underline">api</RouterLink>
            <a target="_blank" href="https://github.com/7PH/powerglitch" class="underline">github</a>
        </div>

        <!-- Usage -->
        <h1 class="font-bold mt-8">🔨 Usage</h1>
        <pre class="border border-gray-400 rounded-xl p-4 mt-4 bg-gray-300" v-html="usageExample"></pre>

        <!-- Introduction -->
        <h1 class="font-bold mt-8">❓ Introduction</h1>
        <p class="mt-4">
            PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to create a glitch effect on any image. No canvas or DOM manipulations are needed to create the glitch effect.<br>
            <br>
            What are you waiting for? <RouterLink to="playground" class="underline">Try glitching stuff now ⚡!</RouterLink>
        </p>

        <!-- Demo -->
        <h1 class="font-bold mt-8">🤔 Examples</h1>
        <div class="flex justify-center gap-8">
            <div class="example example-1" ref="frog1Glitch"></div>
            <div class="example example-2" ref="frog2Glitch"></div>
            <div class="example example-3" ref="frog3Glitch"></div>
            <div class="example example-4" ref="frog4Glitch"></div>
        </div>

        <!-- Install -->
        <h1 class="font-bold mt-8">🔽 Install</h1>
        <pre class="border border-gray-400 rounded-xl p-4 mt-4 bg-gray-300" v-html="installExample"></pre>

        <!-- Contribute -->
        <h1 class="font-bold mt-8">🤝 Support and bugs</h1>
        <p class="mt-4 pb-8">
            Having trouble? Found a bug? Want to contribute?<br>
            Any kind of contribution is welcome. If you have any questions, please open an issue or create a pull request <a href="https://github.com/7ph/powerglitch" target="_blank" class="underline">on GitHub</a>.<br>
        </p>
    </div>
</template>

<style scoped>
.app {
    max-width: 600px;
}
.example {
    width: 120px;
    height: 120px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import logo from '@/assets/default.png';
import { PowerGlitch } from '../../../src/index.ts';

// Glitch logo
const logoGlitch = ref(null);
onMounted(() => {
    PowerGlitch.glitch(logoGlitch.value, { imageUrl: logo });
});
</script>

<template>
    <div class="app w-full mx-auto mb-8 mt-16 md:mt-8 px-4">

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
            <RouterLink to="/" class="underline">home</RouterLink>
            <RouterLink to="/api" class="">api</RouterLink>
            <RouterLink to="/playground" class="underline">playground</RouterLink>
            <a target="_blank" href="https://github.com/7PH/powerglitch" class="underline">github</a>
        </div>

        <!-- API Reference -->
        <h1 class="font-bold mt-8">⭕ API Reference</h1>
        <p class="mt-4">
            For now, <a
                class="underline"
                target="_blank"
                href="https://github.com/7PH/powerglitch/blob/master/src/index.ts#L1"
            >
                please refer to the TypeScript type definitions for the API.
            </a>
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

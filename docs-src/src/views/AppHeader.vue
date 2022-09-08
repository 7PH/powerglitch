<script setup>
import { onMounted, ref } from 'vue';
import logo from '@/assets/default.png';
import { PowerGlitch } from '../../../src/index.ts';
import { router } from '@/router.js';


// Glitch logo
const logoRef = ref(null);
onMounted(() => PowerGlitch.glitch(logoRef.value));
</script>

<template>
    <div>
        <!-- GitHub -->
        <p class="fixed right-0 top-0 mx-6 my-4 text-4xl">
            <a
                href="https://github.com/7ph/powerglitch"
                target="_blank"
            >
                <fa icon="fa-brands fa-github" />
            </a>
        </p>

        <!-- Title -->
        <div class="mt-8 font-bold text-5xl flex gap-4 justify-center">
            <img
                ref="logoRef"
                :src="logo"
                class="powerglitch"
                alt="logo"
                style="width: 60px; height: 60px;"
            >
            <div class="mt-1">
                PowerGlitch
            </div>
        </div>
        <p class="text-center mt-4 text-lg">
            A tiny library to glitch anything on the web.
        </p>
        <div class="mt-2 flex justify-center gap-4">
            <RouterLink
                to="/"
                class=""
                :class="{
                    'underline': router.currentRoute.value.name !== 'home',
                }"
            >
                home
            </RouterLink>
            <RouterLink
                to="/usage"
                :class="{
                    'underline': router.currentRoute.value.name !== 'usage',
                }"
            >
                usage
            </RouterLink>
            <a
                target="_blank"
                href="./api-docs/variables/PowerGlitch.html"
                class="underline"
            >
                documentation
            </a>
            <RouterLink
                to="/playground"
                class="underline"
            >
                playground
            </RouterLink>
            <a
                target="_blank"
                href="https://github.com/7PH/powerglitch"
                class="underline"
            >
                github
            </a>
        </div>
    </div>
</template>
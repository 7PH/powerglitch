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
            <a
                href="https://github.com/7ph/powerglitch"
                target="_blank"
            >
                <fa icon="fa-brands fa-github" />
            </a>
        </p>

        <!-- Title -->
        <div class="mt-8 font-bold text-5xl flex gap-4 justify-center">
            <div
                ref="logoGlitch"
                style="width: 60px; height: 60px;"
            />
            <div class="mt-1">
                PowerGlitch
            </div>
        </div>
        <p class="text-center mt-4 text-lg">
            A tiny library to glitch images on the web.
        </p>
        <div class="mt-2 flex justify-center gap-4">
            <RouterLink
                to="/"
                class="underline"
            >
                home
            </RouterLink>
            <RouterLink
                to="/usage"
                class=""
            >
                usage
            </RouterLink>
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
        
        <h1 class="font-bold mt-8">
            ⚪ Intro
        </h1>
        <p class="mt-2">
            This simple guide will walk you through the basic usage of the library.
        </p>

        <!-- Glitching <div> -->
        <h1 class="font-bold mt-8">
            🟣 Glitching {{ '<div>' }}
        </h1>
        <p class="mt-2">
            The most optimized way to use PowerGlitch is to first create a placeholder div
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="html"
            :code="`<div class='glitch'></div>`"
        />
        <p class="mt-2">
            ensure the div has a non-zero width/height
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="css"
            :code="`
.glitch {
    width: 80px;
    height: 80px;
}
`.trim()"
        />
        <p class="mt-2">
            then use PowerGlitch.glitch() to populate the div with the glitched image
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
PowerGlitch.glitch('div.glitch', {
    imageUrl: 'https://.../image.png'
})
`.trim()"
        />
        <p class="mt-2">
            this takes care of animating the placeholder with the glitch effect.
        </p>

        <!-- Glitching <img> -->
        <h1 class="font-bold mt-8">
            🔵 Glitching {{ '<img>' }}
        </h1>
        <p class="mt-2">
            It is also possible to glitch images directly
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="html"
            :code="`<img src='https://.../image.png' class='glitch' />`"
        />
        <p class="mt-2">
            for images, call PowerGlitch.glitch() without specifying the imageUrl
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
PowerGlitch.glitch('img.glitch')
`.trim()"
        />
        <p class="mt-2">
            this replaces the image with its glitched version.
        </p>

        <!-- By reference -->
        <h1 class="font-bold mt-8">
            ⚫ Passing reference
        </h1>
        <p class="mt-2">
            If you already have a reference to the element to glitch, you can directly pass it as the first argument
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
const image = document.querySelector('img.glitch')
PowerGlitch.glitch(image)
`.trim()"
        />

        <!-- Customize glitch -->
        <h1 class="font-bold mt-8">
            🟢 Customize glitch
        </h1>
        <p class="mt-2">
            By default, PowerGlitch will glitch images using a set of hardcoded default values that look good for most images.
            However, you can customize the applied glitch by passing a custom options object as the second argument to PowerGlitch.glitch().
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
PowerGlitch.glitch(
    'div.glitch',
    {
        imageUrl: 'https://.../image.png',
        backgroundColor: 'transparent',
        hideOverflow: true,
        timing: {
            duration: 1000,
            iterations: 15,
        },
        glitchTimeSpan: {
            start: 0.4,
            end: 0.7,
        },
        shake: {
            velocity: 10,
            amplitudeX: 0.4,
            amplitudeY: 0.4,
        },
        slice: {
            count: 4,
            velocity: 10,
            minHeight: 0.02,
            maxHeight: 0.40,
            hueRotate: true,
        },
    }
)
`.trim()"
        />
        <p class="mt-2">
            options are merged with the defaults, so you can override only values you want
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
PowerGlitch.glitch(
    'div.glitch',
    {
        imageUrl: 'https://.../image.png',
        glitchTimeSpan: false,
        shake: false,
    }
)
`.trim()"
        />
        <p class="mt-2">
            to find the perfect set of options for your image, 
            <router-link
                to="/playground"
                class="underline"
            >
                use the playground
            </router-link>
        </p>
        
        <h1 class="font-bold mt-8">
            🟡 API reference
        </h1>
        <p class="mt-2 pb-8">
            To know what options are accepted and what they mean, <a
                class="underline"
                target="_blank"
                href="https://github.com/7PH/powerglitch/blob/master/src/index.ts#L1"
            >
                refer to the TypeScript type definitions
            </a>.
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

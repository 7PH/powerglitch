<script setup>
import { ref, onMounted } from 'vue';
import logo from '@/assets/default.png';
import { PowerGlitch } from '../../../src/index.ts';
import AppHeader from './AppHeader.vue';

// Glitch logo
const logoGlitch = ref(null);
onMounted(() => {
    PowerGlitch.glitch(logoGlitch.value);
});
</script>

<template>
    <div class="app w-full mx-auto mb-8 mt-16 md:mt-8 px-4">
        <AppHeader />
        
        <h1 class="font-bold mt-8">
            ⚪ Intro
        </h1>
        <p class="mt-2">
            This simple guide will walk you through the basic usage of the library.
        </p>

        <!-- Glitching <div> -->
        <h1 class="font-bold mt-8">
            🟣 Glitch
        </h1>
        <p class="mt-2">
            First, create an element to glitch. This can be an image
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="html"
            :code="`<img class='glitch' src='...' />`.trim()"
        />
        <p class="mt-2">
            or a button
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="html"
            :code="`<button class='glitch'>Glitch</button>`.trim()"
        />
        <p class="mt-2">
            or any DOM element
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="html"
            :code="`
<div class='glitch'>
    <p>Glitch <b>me</b></p>
</div>`.trim()"
        />
        <p class="mt-2">
            then, use <span class="font-bold">PowerGlitch.glitch()</span> to glitch the element
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
PowerGlitch.glitch('.glitch')
`.trim()"
        />
        <p class="mt-2">
            that's it, your element is glitched!
        </p>
        <p class="mt-2">
            Alternatively, you can also create an empty container
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="html"
            code="<div class='glitch'></div>"
        />
        <p class="mt-2">
            and specify the <span class="font-bold">html</span> option to populate its innerHTML property
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
PowerGlitch.glitch('.glitch', {
    html: '<p>Hello</p>'
})
`.trim()"
        />

        <!-- By reference -->
        <h1 class="font-bold mt-8">
            ⚫ Reference
        </h1>
        <p class="mt-2">
            If you already have a reference to the element to glitch, you can directly pass it as the first argument
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
const element = document.querySelector('.glitch')
PowerGlitch.glitch(element)
`.trim()"
        />
        <p class="mt-2">
            giving a list of elements or a NodeList resulting from querySelectorAll is allowed.
        </p>

        <!-- Controls -->
        <h1 class="font-bold mt-8">
            🟠 Controls
        </h1>
        <p class="mt-2">
            Control the animation using the <span class="font-bold">startGlitch</span> and <span class="font-bold">stopGlitch</span> methods returned by <span class="font-bold">PowerGlitch.glitch()</span>
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
const {
    startGlitch,
    stopGlitch
} = PowerGlitch.glitch('.glitch')

// Stop the glitch
stopGlitch()

// Re-start the glitch
startGlitch()
        `.trim()"
        />

        <!-- Play modes -->
        <h1 class="font-bold mt-8">
            🟤 Play modes
        </h1>
        <p class="mt-2">
            You can choose between 4 play modes: always, hover, click and manual
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
// Start glitch on click only
PowerGlitch.glitch('.glitch', { playMode: 'click' })
        `.trim()"
        />
        <p class="mt-2">
            in playMode manual, the glitch never starts until you call startGlitch().
        </p>

        <!-- Customize glitch -->
        <h1 class="font-bold mt-8">
            🟢 Customize
        </h1>
        <p class="mt-2">
            By default, PowerGlitch glitch elements using default options that look good for most cases.
            To customize the glitch, pass a custom options object as the second argument to <span class="font-bold">PowerGlitch.glitch()</span>.
        </p>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
PowerGlitch.glitch(
    '.glitch',
    {
        playMode: 'always',
        hideOverflow: true,
        timing: {
            duration: 1000,
            iterations: 15,
            easing: 'ease-in-out',
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
    '.glitch',
    {
        glitchTimeSpan: false,
        shake: false,
    }
)
`.trim()"
        />
        <p class="mt-2">
            to find the perfect set of options for your use-case, 
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

<script setup>
import { ref, onMounted } from 'vue';
import logo from '@/assets/default.png';
import exampleFrog from '@/assets/example-frog.gif';
import { PowerGlitch } from '../../../src/index.ts';
import AppHeader from './AppHeader.vue';

// Glitch example frog
const glitchExample1 = ref(null);
const glitchExample2 = ref(null);
const glitchExample3 = ref(null);
const glitchExample4 = ref(null);
const glitchExample5 = ref(null);
const glitchExample6 = ref(null);
const glitchExample7 = ref(null);
const glitchExample8 = ref(null);
const glitchExample9 = ref(null);
const glitchExample10 = ref(null);
onMounted(() => {
    PowerGlitch.glitch(glitchExample1.value, {
        html: `<img src="${exampleFrog}" />`,
        shake: false,
        slice: {
            count: 0,
        },
    });
    PowerGlitch.glitch(glitchExample2.value, {
        html: `<img src="${exampleFrog}" />`,
        shake: false,
        glitchTimeSpan: {
            start: 0.2,
            end: 0.6,
        },
        slice: {
            count: 3,
            velocity: 4,
        },
    });
    PowerGlitch.glitch(glitchExample3.value, {
        html: `<img src="${exampleFrog}" />`,
    });
    PowerGlitch.glitch(glitchExample4.value, {
        html: `<img src="${exampleFrog}" />`,
        glitchTimeSpan: {
            start: 0.2,
            end: 0.8,
        },
    });
    PowerGlitch.glitch(glitchExample5.value, {
        html: `<img src="${logo}" />`,
        playMode: 'hover',
    });
    PowerGlitch.glitch(glitchExample6.value, {
        html: `<img src="${logo}" />`,
        playMode: 'hover',
        timing: {
            duration: 1500,
        },
        glitchTimeSpan: {
            start: 0,
            end: 0.5,
        },
    });
    PowerGlitch.glitch(glitchExample7.value, {
        html: `<img src="${logo}" />`,
        playMode: 'hover',
        timing: {
            duration: 400,
            easing: 'ease-in-out',
        },
    });
    PowerGlitch.glitch(glitchExample8.value, {
        html: `<img src="${logo}" />`,
        playMode: 'hover',
        timing: {
            duration: 1000,
        },
        shake: {
            velocity: 10,
            amplitudeX: 0.2,
            amplitudeY: 0.2,
        },
        slice: {
            count: 6,
            velocity: 5,
        },
    });
    PowerGlitch.glitch(glitchExample9.value, {
        html: '<button>click me 🤷‍♀️</button>',
        playMode: 'click',
        hideOverflow: true,
        timing: {
            duration: 250,
            iterations: 1,
            easing: 'ease-in-out',
        },
        slice: {
            count: 15,
            velocity: 20,
        },
    });
    PowerGlitch.glitch(glitchExample10.value, {
        html: `
            <div class="border border-2 rounded shadow">
                <p>
                    Power <b>Glitch</b> 🌎
                </p>
                <button class="my-2">
                    ✋
                </button> Click somwehere
            </div>
        `,
        playMode: 'click',
        timing: {
            duration: 1000,
            easing: 'ease-in-out',
        },
    });
});
</script>

<template>
    <div class="app w-full mx-auto mb-8 mt-16 md:mt-8 px-4">
        <AppHeader />

        <!-- Introduction -->
        <h1 class="font-bold mt-8">
            ❓ Introduction
        </h1>
        <p class="mt-4">
            PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to glitch anything on the web, without using a canvas. It weights less than <b>2kb</b> minified and gzipped.<br>
            <br>
            What are you waiting for? 
            <RouterLink
                to="playground"
                class="underline"
            >
                Try glitching stuff now ⚡!
            </RouterLink>
        </p>

        <!-- Demo 1 -->
        <h1 class="font-bold mt-8 mb-2">
            ▶ Fixed animation
        </h1>
        <div class="justify-center grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample1"
                    class="example-frog"
                />
                <p class="font-thin">
                    None
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample2"
                    class="example-frog"
                />
                <p class="font-thin">
                    Light
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample3"
                    class="example-frog"
                />
                <p class="font-thin">
                    Medium
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample4"
                    class="example-frog"
                />
                <p class="font-thin">
                    Heavy
                </p>
            </div>
        </div>

        <!-- Demo 2 -->
        <h1 class="font-bold mt-8 mb-2">
            ▶ Glitch on hover
        </h1>
        <div class="justify-center grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample5"
                    class="example-logo"
                />
                <p class="font-thin">
                    Quick
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample6"
                    class="example-logo"
                />
                <p class="font-thin">
                    Long
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample7"
                    class="example-logo"
                />
                <p class="font-thin">
                    Smooth
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample8"
                    class="example-logo"
                />
                <p class="font-thin">
                    Laggy
                </p>
            </div>
        </div>

        <!-- Demo 3 -->
        <h1 class="font-bold mt-8 mb-2">
            ▶ Glitch on click
        </h1>
        <div class="justify-center grid grid-cols-2 gap-4 text-center">
            <div class="mx-auto flex flex-col pt-7">
                <div
                    ref="glitchExample9"
                    class="example-button"
                />
                <p class="font-thin mt-6">
                    Button glitch on click
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample10"
                    class="example-complex"
                />
                <p class="font-thin mt-2">
                    Glitching complex element
                </p>
            </div>
        </div>

        <!-- Install -->
        <h1 class="font-bold mt-8">
            🔽 Install
        </h1>
        <highlightjs
            class="rounded-xl overflow-hidden mt-4"
            language="shell"
            :code="`
$ npm i --save powerglitch
or
$ yarn add powerglitch
`.trim()"
        />
        <p class="mt-4">
            Alternatively, you can 
            <a
                class="underline"
                target="_blank"
                href="https://unpkg.com/powerglitch@latest/dist/powerglitch.min.js"
            >
                download minified web bundle
            </a> 
            and use it directly in your project.
        </p>
        <!-- Basic usage -->
        <h1 class="font-bold mt-8">
            🔨 Usage
        </h1>
        <highlightjs
            class="rounded-xl overflow-hidden mt-2"
            language="js"
            :code="`
import { PowerGlitch } from 'powerglitch'

// Glitch elements with class 'some-element'
PowerGlitch.glitch('.some-element')
`.trim()"
        />
        <p class="mt-4">
            Check the 
            <router-link
                to="/usage"
                class="underline"
            >
                full usage guide
            </router-link>.
        </p>

        <!-- Contribute -->
        <h1 class="font-bold mt-8">
            🤝 Support and bugs
        </h1>
        <p class="mt-4 pb-8">
            Having trouble? Found a bug? Want to contribute?<br>
            Any kind of contribution is welcome. If you have any questions, please open an issue or create a pull request 
            <a
                href="https://github.com/7ph/powerglitch"
                target="_blank"
                class="underline"
            >
                on GitHub
            </a>.<br>
        </p>
    </div>
</template>

<style scoped>
.app {
    max-width: 600px;
}
.example-logo,
.example-frog {
    width: 80px;
    height: 80px;
}
</style>

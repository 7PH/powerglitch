<script setup>
import { ref, onMounted } from 'vue';
import logo from '@/assets/default.png';
import exampleFrog from '@/assets/example-frog.gif';
import { PowerGlitch } from '../../../src/index.ts';

// Glitch logo
onMounted(() => PowerGlitch.glitch());

// Glitch example frog
const glitchExample1 = ref(null);
const glitchExample2 = ref(null);
const glitchExample3 = ref(null);
const glitchExample4 = ref(null);
const glitchExample5 = ref(null);
const glitchExample6 = ref(null);
const glitchExample7 = ref(null);
const glitchExample8 = ref(null);
onMounted(() => {
    PowerGlitch.glitch(glitchExample1.value, {
        imageUrl: exampleFrog,
        shake: false,
        slice: false,
    });
    PowerGlitch.glitch(glitchExample2.value, {
        imageUrl: exampleFrog,
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
        imageUrl: exampleFrog,
    });
    PowerGlitch.glitch(glitchExample4.value, {
        imageUrl: exampleFrog,
        glitchTimeSpan: {
            start: 0.2,
            end: 0.8,
        },
    });
    PowerGlitch.glitch(glitchExample5.value, {
        imageUrl: logo,
        playMode: 'hover-only',
    });
    PowerGlitch.glitch(glitchExample6.value, {
        imageUrl: logo,
        playMode: 'hover-only',
        timing: {
            duration: 1500,
        },
        glitchTimeSpan: {
            start: 0,
            end: 0.5,
        },
    });
    PowerGlitch.glitch(glitchExample7.value, {
        imageUrl: logo,
        playMode: 'hover-only',
        timing: {
            duration: 400,
            easing: 'ease-in-out',
        },
    });
    PowerGlitch.glitch(glitchExample8.value, {
        imageUrl: logo,
        playMode: 'hover-only',
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
            <img
                :src="logo"
                class="powerglitch"
                style="width: 60px; height: 60px;"
            >
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
                class=""
            >
                home
            </RouterLink>
            <RouterLink
                to="/usage"
                class="underline"
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

        <!-- Introduction -->
        <h1 class="font-bold mt-8">
            ❓ Introduction
        </h1>
        <p class="mt-4">
            PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to create a glitch effect on images. No canvas or DOM manipulations are needed. It weights less than <b>2kb</b> minified and gzipped.<br>
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
        <h1 class="font-bold mt-8">
            🤔 Examples
        </h1>
        <h2 class="text-center font-bold">
            Fixed animation
        </h2>
        <div class="justify-center grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
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
        <h2 class="text-center font-bold mt-8">
            Hover to glich
        </h2>
        <div class="mt-6 justify-center grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample5"
                    class="example-logo"
                />
                <p class="font-thin mt-2">
                    Quick
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample6"
                    class="example-logo"
                />
                <p class="font-thin mt-2">
                    Long
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample7"
                    class="example-logo"
                />
                <p class="font-thin mt-2">
                    Smooth
                </p>
            </div>
            <div class="mx-auto flex flex-col">
                <div
                    ref="glitchExample8"
                    class="example-logo"
                />
                <p class="font-thin mt-2">
                    Laggy
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

// Glitch images with class 'some-image'
PowerGlitch.glitch('.some-image')
`.trim()"
        />
        <p class="mt-4">
            To optimize and customize glitched images, check the 
            <router-link
                to="/usage"
                class="underline"
            >
                usage guide
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
.example-frog {
    width: 120px;
    height: 120px;
}
.example-logo {
    width: 80px;
    height: 80px;
}
</style>

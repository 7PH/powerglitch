<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/stores/app';
import { getDefaultOptions } from '../../../src/index.ts';
import ToggleGroupOption from '@/components/ToggleGroupOption.vue';
import StringOption from '@/components/StringOption.vue';
import BooleanOption from '@/components/BooleanOption.vue';
import NumberOption from '@/components/NumberOption.vue';

const appStore = useAppStore();
</script>

<template>
    <div class="px-4">

        <div class="font-bold text-xl mb-4 flex">
            <div class="grow">PowerGlitch</div>
            <div>
                <a
                    title="Github"
                    target="_blank"
                    href="https://github.com/7PH/powerglitch"
                >
                    <fa icon="fa-brands fa-github" />
                </a>
            </div>
        </div>

        <div class="font-bold mt-6 mb-2 pl-2">Global</div>
        <StringOption
            class="mt-1"
            v-model="appStore.powerGlitchOptions.imageUrl"
            :title="'Image'"
        />
        <StringOption
            class="mt-1"
            v-model="appStore.powerGlitchOptions.backgroundColor"
            :title="'Background color'"
        />

        <div class="font-bold mt-6 mb-2 pl-2">Timing</div>
        <NumberOption
            class="mt-1"
            v-model="appStore.powerGlitchOptions.timing.duration"
            :title="'Loop duration (ms)'"
            :min="100"
            :max="10000"
            :step="100"
        />
        <ToggleGroupOption
            class="mt-1"
            v-model="appStore.powerGlitchOptions.timing.iterations"
            :title="'Loop'"
            :getDefaultValue="v => v ? Infinity : 1"
        />
        <template v-if="appStore.powerGlitchOptions.timing.iterations < Infinity">
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.shake.velocity"
                :title="'Velocity (steps/s)'"
                :min="1"
                :max="60"
                :step="1"
            />
        </template>

        <div class="font-bold mt-6 mb-2 pl-2">Glitch Time Span</div>
        <ToggleGroupOption
            v-model="appStore.powerGlitchOptions.glitchTimeSpan"
            :title="'Enabled'"
            :getDefaultValue="v => v ? getDefaultOptions().glitchTimeSpan : false"
        />
        <template v-if="appStore.powerGlitchOptions.glitchTimeSpan">
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.glitchTimeSpan.start"
                :title="'Start time (%)'"
                :min="0.00"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.glitchTimeSpan.end"
                :title="'End time (%)'"
                :min="0.00"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
        </template>

        <div class="font-bold mt-6 mb-2 pl-2">Shake</div>
        <ToggleGroupOption
            v-model="appStore.powerGlitchOptions.shake"
            :title="'Enabled'"
            :getDefaultValue="v => v ? getDefaultOptions().shake : false"
        />
        <template v-if="appStore.powerGlitchOptions.shake">
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.shake.velocity"
                :title="'Velocity (steps/s)'"
                :min="1"
                :max="60"
                :step="1"
            />
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.shake.amplitudeX"
                :title="'X amplitude (%)'"
                :min="0.00"
                :max="2.00"
                :step="0.01"
                :factor="100"
            />
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.shake.amplitudeY"
                :title="'Y amplitude (%)'"
                :min="0.00"
                :max="2.00"
                :step="0.01"
                :factor="100"
            />
        </template>

        <div class="font-bold mt-6 mb-2 pl-2">Slices</div>
        <ToggleGroupOption
            v-model="appStore.powerGlitchOptions.slices"
            :title="'Enabled'"
            :getDefaultValue="v => v ? getDefaultOptions().slices : false"
        />
        <template v-if="appStore.powerGlitchOptions.slices">
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slices.count"
                :title="'Count (slices/step)'"
                :min="1"
                :max="60"
                :step="1"
            />
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slices.velocity"
                :title="'Velocity (steps/s)'"
                :min="1"
                :max="60"
                :step="1"
            />
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slices.minHeight"
                :title="'Min slice height (%)'"
                :min="0.01"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slices.maxHeight"
                :title="'Max slice height (%)'"
                :min="0.01"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
            <BooleanOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slices.hueRotate"
                :title="'Hue rotate'"
            />
        </template>

    </div>
</template>

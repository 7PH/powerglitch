<script setup>
import { ref, onMounted } from 'vue';
import { PowerGlitch } from '../../../src/index.ts';
import { useAppStore } from '@/stores/app';
import ToggleGroupOption from '@/components/ToggleGroupOption.vue';
import SelectOption from '@/components/SelectOption.vue';
import BooleanOption from '@/components/BooleanOption.vue';
import NumberOption from '@/components/NumberOption.vue';

const appStore = useAppStore();
</script>

<template>
    <div class="px-4">
        <div class="font-bold mt-6 mb-2 pl-2">
            Recommended defaults
        </div>
        <div class="ml-4 flex flex-wrap justify-center gap-2">
            <button @click="appStore.setPlayModeDefaults('always')">
                Infinite
            </button>
            <button @click="appStore.setPlayModeDefaults('hover')">
                On hover
            </button>
            <button @click="appStore.setPlayModeDefaults('click')">
                On click
            </button>
        </div>
        <div class="font-bold mt-6 mb-2 pl-2">
            General
        </div>
        <SelectOption
            v-model="appStore.powerGlitchOptions.html"
            class="mt-1"
            :title="'HTML'"
            :values="Object.values(appStore.htmlElements)"
        />
        <SelectOption
            v-model="appStore.powerGlitchOptions.playMode"
            class="mt-1"
            :title="'Play mode'"
            :values="['always', 'hover', 'click']"
        />
        <BooleanOption
            v-model="appStore.powerGlitchOptions.hideOverflow"
            class="mt-1"
            :title="'Hide overflow'"
        />

        <div class="font-bold mt-6 mb-2 pl-2">
            Timing
        </div>
        <NumberOption
            v-model="appStore.powerGlitchOptions.timing.duration"
            class="mt-1"
            :title="'Loop duration (ms)'"
            :min="150"
            :max="4000"
            :step="100"
        />
        <ToggleGroupOption
            class="mt-1"
            :modelValue="appStore.powerGlitchOptions.timing.iterations === Infinity"
            :title="'Repeat indefinitely'"
            :getDefaultValue="v => v ? Infinity : 1"
            @update:modelValue="iterations => appStore.powerGlitchOptions.timing.iterations = iterations"
        />
        <template v-if="appStore.powerGlitchOptions.timing.iterations < Infinity">
            <NumberOption
                v-model="appStore.powerGlitchOptions.timing.iterations"
                class="mt-1"
                :title="'Repeat count'"
                :min="1"
                :max="60"
                :step="1"
            />
        </template>
        <ToggleGroupOption
            class="mt-1"
            :modelValue="!! appStore.powerGlitchOptions.timing.easing"
            :title="'Smooth transition'"
            :getDefaultValue="v => v ? 'ease-in-out' : undefined"
            @update:modelValue="easing => appStore.powerGlitchOptions.timing.easing = easing"
        />
        <template v-if="!! appStore.powerGlitchOptions.timing.easing">
            <SelectOption
                v-model="appStore.powerGlitchOptions.timing.easing"
                class="mt-1"
                :title="'Easing'"
                :values="['ease-in-out', 'ease-in', 'ease-out', 'linear']"
            />
        </template>

        <div class="font-bold mt-6 mb-2 pl-2">
            Restrict glitch time span
        </div>
        <ToggleGroupOption
            v-model="appStore.powerGlitchOptions.glitchTimeSpan"
            :title="'Enabled'"
            :getDefaultValue="v => v ? PowerGlitch.getDefaultOptions(appStore.powerGlitchOptions.playMode).glitchTimeSpan : false"
        />
        <template v-if="appStore.powerGlitchOptions.glitchTimeSpan">
            <NumberOption
                v-model="appStore.powerGlitchOptions.glitchTimeSpan.start"
                class="mt-1"
                :title="'Start time (%)'"
                :min="0.00"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
            <NumberOption
                v-model="appStore.powerGlitchOptions.glitchTimeSpan.end"
                class="mt-1"
                :title="'End time (%)'"
                :min="0.00"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
        </template>

        <div class="font-bold mt-6 mb-2 pl-2">
            Shake
        </div>
        <ToggleGroupOption
            v-model="appStore.powerGlitchOptions.shake"
            :title="'Enabled'"
            :getDefaultValue="v => v ? PowerGlitch.getDefaultOptions(appStore.powerGlitchOptions.playMode).shake : false"
        />
        <template v-if="appStore.powerGlitchOptions.shake">
            <NumberOption
                v-model="appStore.powerGlitchOptions.shake.velocity"
                class="mt-1"
                :title="'Velocity (steps/s)'"
                :min="1"
                :max="60"
                :step="1"
            />
            <NumberOption
                v-model="appStore.powerGlitchOptions.shake.amplitudeX"
                class="mt-1"
                :title="'X amplitude (%)'"
                :min="0.00"
                :max="2.00"
                :step="0.01"
                :factor="100"
            />
            <NumberOption
                v-model="appStore.powerGlitchOptions.shake.amplitudeY"
                class="mt-1"
                :title="'Y amplitude (%)'"
                :min="0.00"
                :max="2.00"
                :step="0.01"
                :factor="100"
            />
        </template>

        <div class="font-bold mt-6 mb-2 pl-2">
            Slice
        </div>
        <ToggleGroupOption
            v-model="appStore.powerGlitchOptions.slice"
            :title="'Enabled'"
            :getDefaultValue="v => v ? PowerGlitch.getDefaultOptions(appStore.powerGlitchOptions.playMode).slice : false"
        />
        <template v-if="appStore.powerGlitchOptions.slice">
            <NumberOption
                v-model="appStore.powerGlitchOptions.slice.count"
                class="mt-1"
                :title="'Count (slice/step)'"
                :min="1"
                :max="60"
                :step="1"
            />
            <NumberOption
                v-model="appStore.powerGlitchOptions.slice.velocity"
                class="mt-1"
                :title="'Velocity (steps/s)'"
                :min="1"
                :max="60"
                :step="1"
            />
            <NumberOption
                v-model="appStore.powerGlitchOptions.slice.minHeight"
                class="mt-1"
                :title="'Min slice height (%)'"
                :min="0.01"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
            <NumberOption
                v-model="appStore.powerGlitchOptions.slice.maxHeight"
                class="mt-1"
                :title="'Max slice height (%)'"
                :min="0.01"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
            <BooleanOption
                v-model="appStore.powerGlitchOptions.slice.hueRotate"
                class="mt-1"
                :title="'Hue rotate'"
            />
        </template>

        <div class="font-bold mt-6 mb-2 pl-2">
            Pulse
        </div>
        <ToggleGroupOption
            v-model="appStore.powerGlitchOptions.pulse"
            :title="'Enabled'"
            :getDefaultValue="v => v ? { scale: 2 } : false"
        />
        <template v-if="appStore.powerGlitchOptions.pulse">
            <NumberOption
                v-model="appStore.powerGlitchOptions.pulse.scale"
                class="mt-1"
                :title="'Scale'"
                :min="1.1"
                :max="6"
                :step="0.1"
            />
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAppStore } from '@/stores/app';
import { PowerGlitch, getDefaultOptions } from '../../../src/index.ts';
import logo from '@/assets/logo.png';
import ToggleGroupOption from '@/components/ToggleGroupOption.vue';
import StringOption from '@/components/StringOption.vue';
import BooleanOption from '@/components/BooleanOption.vue';
import NumberOption from '@/components/NumberOption.vue';

const appStore = useAppStore();

const logoGlitch = ref(null);
onMounted(() => {
    PowerGlitch.glitch(
        logoGlitch.value,
        {
            ...getDefaultOptions(),
            imageUrl: logo,
        }
    )
});

</script>

<template>
    <div class="px-4">

        <div class="font-bold text-xl mb-4 flex">
            <div class="grow flex gap-2">
                <div ref="logoGlitch" style="width: 30px; height: 30px;"></div> PowerGlitch
            </div>
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
            :min="500"
            :max="10000"
            :step="100"
        />
        <ToggleGroupOption
            class="mt-1"
            :modelValue="appStore.powerGlitchOptions.timing.iterations === Infinity"
            @update:modelValue="iterations => appStore.powerGlitchOptions.timing.iterations = iterations"
            :title="'Repeat indefinitely'"
            :getDefaultValue="v => v ? Infinity : 1"
        />
        <template v-if="appStore.powerGlitchOptions.timing.iterations < Infinity">
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.timing.iterations"
                :title="'Repeat count'"
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

        <div class="font-bold mt-6 mb-2 pl-2">Slice</div>
        <ToggleGroupOption
            v-model="appStore.powerGlitchOptions.slice"
            :title="'Enabled'"
            :getDefaultValue="v => v ? getDefaultOptions().slice : false"
        />
        <template v-if="appStore.powerGlitchOptions.slice">
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slice.count"
                :title="'Count (slice/step)'"
                :min="1"
                :max="60"
                :step="1"
            />
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slice.velocity"
                :title="'Velocity (steps/s)'"
                :min="1"
                :max="60"
                :step="1"
            />
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slice.minHeight"
                :title="'Min slice height (%)'"
                :min="0.01"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
            <NumberOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slice.maxHeight"
                :title="'Max slice height (%)'"
                :min="0.01"
                :max="1.00"
                :step="0.01"
                :factor="100"
            />
            <BooleanOption
                class="mt-1"
                v-model="appStore.powerGlitchOptions.slice.hueRotate"
                :title="'Hue rotate'"
            />
        </template>

    </div>
</template>

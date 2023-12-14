<script setup>
import { cloneDeep } from 'lodash';
import { ref, computed } from 'vue';
import { useAppStore } from '@/stores/app';
import { PowerGlitch } from '../../../src';
import BooleanOption from './BooleanOption.vue';

const appStore = useAppStore();

const preRef = ref(null);
const selectCode = () => {
    let range = new Range();
    range.setStart(preRef.value, 0);
    range.setEnd(preRef.value, 1);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
};

const showAllOptions = ref(false);

function deleteSimilarRecursive(obj1, obj2) {
    for (const key in obj1) {
        if (typeof obj1[key] === 'object') {
            deleteSimilarRecursive(obj1[key], obj2[key]);
            if (Object.keys(obj1[key]).length === 0) {
                delete obj1[key];
            }
        } else if (obj1[key] === obj2[key]) {
            delete obj1[key];
        }
    }
}

const nonDefaultOptions = computed(() => {
    const options = cloneDeep(appStore.powerGlitchOptions);
    const { playMode } = options;
    const defaultOptions = PowerGlitch.getDefaultOptions(playMode);
    deleteSimilarRecursive(options, defaultOptions);
    if (Object.keys(options).length <= 1) {
        return null;
    }
    return options;
});

const replacer = (key, value) => {
    if (key === 'iterations' && value === Infinity) {
        return undefined;
    }
    if (key === 'html') {
        return undefined;
    }
    return value;
};
</script>

<template>
    <div class="px-4">
        <p class="mb-2">
            Copy the options object below in your app
        </p>

        <template v-if="showAllOptions">
            <pre
                ref="preRef"
                class="bg-white p-4 rounded shadow overflow-auto"
                @click="selectCode"
                v-text="JSON.stringify(appStore.powerGlitchOptions, replacer, 2)"
            />
        </template>
        <template v-else>
            <pre 
                v-if="nonDefaultOptions === null"
                class="bg-white p-4 rounded shadow overflow-auto"
            >You are using the default options
You do not need to pass any options</pre>
            <pre
                v-else
                ref="preRef"
                class="bg-white p-4 rounded shadow overflow-auto"
                @click="selectCode"
                v-text="JSON.stringify(nonDefaultOptions, replacer, 2)"
            />
        </template>
        
        <div class="flex mt-4">
            Show all options
            <BooleanOption v-model="showAllOptions" />
        </div>
    </div>
</template>

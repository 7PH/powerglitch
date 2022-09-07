<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

const preRef = ref(null);
const selectCode = () => {
    let range = new Range();
    range.setStart(preRef.value, 0);
    range.setEnd(preRef.value, 1);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
};

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
        <p>Copy the options object below in your app</p>
        <pre
            ref="preRef"
            class="bg-white p-4 rounded shadow overflow-auto"
            @click="selectCode"
            v-text="JSON.stringify(appStore.powerGlitchOptions, replacer, 2)"
        />
    </div>
</template>

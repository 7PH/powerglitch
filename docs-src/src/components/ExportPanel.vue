<script setup>
import { ref, onMounted } from 'vue';
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
</script>

<template>
    <div class="px-4">
        <p>Copy the options object below in your app</p>
        <pre
            ref="preRef"
            class="bg-white p-4 rounded shadow overflow-auto"
            @click="selectCode"
            v-text="JSON.stringify(appStore.powerGlitchOptions, (key, value) => key === 'iterations' && value === Infinity ? undefined : value, 2)"
        />
    </div>
</template>

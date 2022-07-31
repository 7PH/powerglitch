<script setup>
import { ref, watch, onMounted } from 'vue';
import { useAppStore } from '@/stores/app';
import { PowerGlitch } from '../../../src/index';

const appStore = useAppStore();

const container = ref(null);

const rebuild = () => {
    if (! container.value) {
        return;
    }
    PowerGlitch.glitch(container.value, appStore.powerGlitchOptions);
};

// Rebuild when mounted or options changed
onMounted(rebuild);
watch(rebuild);
</script>

<template>
    <div>
        <div
            ref="container"
            class="glitch"
        />
    </div>
</template>

<style scoped>
.glitch {
    width: 200px;
    height: 200px;
}
</style>

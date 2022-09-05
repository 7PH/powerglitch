<script setup>
import { ref, onMounted } from 'vue';
import { PowerGlitch } from '../../../src/index.ts';
import logo from '@/assets/logo.png';
import OptionPanel from '@/components/OptionPanel.vue';
import ExportPanel from '@/components/ExportPanel.vue';
import ImagePreview from '@/components/ImagePreview.vue';

const logoGlitch = ref(null);
onMounted(() => {
    PowerGlitch.glitch(
        logoGlitch.value,
        PowerGlitch.getDefaultOptions('always'),
    );
});

const show = ref('options');
</script>

<template>
    <div class="app h-full flex flex-row w-full">
        <p class="fixed right-0 top-0 mx-6 my-4 text-4xl">
            <RouterLink to="/">
                🔙
            </RouterLink>
        </p>
        <div class="option-panel border p-4 overflow-y-auto">
            <div class="font-bold text-xl mb-4 flex">
                <div class="grow flex gap-2">
                    <img
                        ref="logoGlitch"
                        :src="logo"
                        alt="logo"
                        style="width: 30px; height: 30px;"
                    >
                    PowerGlitch
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
            <template v-if="show === 'options'">
                <OptionPanel />
                <button
                    class="mt-6 w-full"
                    @click="show = 'export'"
                >
                    Show code
                </button>
            </template>
            <template v-if="show === 'export'">
                <ExportPanel />
                <button
                    class="mt-6 w-full"
                    @click="show = 'options'"
                >
                    Back to options
                </button>
            </template>
        </div>
        <div class="grow flex flex-col bg-white">
            <div class="grow flex flex-col justify-center">
                <ImagePreview class="mx-auto" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.option-panel {
    width: 500px;
}
@media screen and (max-width: 1060px) {
    .app {
        flex-direction: column-reverse;
    }
    .option-panel {
        width: 100%;
        height: 50%;
    }
}
</style>

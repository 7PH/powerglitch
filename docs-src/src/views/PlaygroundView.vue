<script setup>
import OptionPanel from '@/components/OptionPanel.vue'
import ImagePreview from '@/components/ImagePreview.vue'
</script>

<template>
    <div class="app h-full flex flex-row w-full">
        <p class="fixed right-0 top-0 mx-6 my-4 text-4xl">
            <RouterLink to="/">🔙</RouterLink>
        </p>
        <div class="option-panel border p-4 overflow-y-auto">
            <OptionPanel />
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

<script setup>
import OptionPanel from './components/OptionPanel.vue'
import ImagePreview from './components/ImagePreview.vue'
</script>

<template>
    <div class="app h-full grid grid-cols-12">
        <div class="col-span-4 border p-4 overflow-y-auto">
            <OptionPanel />
        </div>
        <div class="col-span-8 flex flex-col">
            <div class="grow flex flex-col justify-center">
                <ImagePreview class="mx-auto" />
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script setup>
import OptionPanel from '@/components/OptionPanel.vue'
import ImagePreview from '@/components/ImagePreview.vue'
</script>

<template>
    <div class="app h-full grid grid-cols-12">
        <p class="fixed right-0 top-0 mx-6 my-4 text-4xl">
            <RouterLink to="/">🔙</RouterLink>
        </p>
        <div class="col-span-4 border p-4 overflow-y-auto">
            <OptionPanel />
        </div>
        <div class="col-span-8 flex flex-col bg-white">
            <div class="grow flex flex-col justify-center">
                <ImagePreview class="mx-auto" />
            </div>
        </div>
    </div>
</template>

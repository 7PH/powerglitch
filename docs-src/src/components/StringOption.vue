<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});

defineEmits(['update:modelValue']);
</script>

<template>
    <div class="pl-4 text-sm grid grid-cols-12">
        <div class="col-span-4 flex flex-col justify-center whitespace-nowrap overflow-x-hidden text-ellipsis min-w-0">
            {{ title }}
        </div>
        <div class="col-span-8 flex gap-4 overflow-x-hidden">
            <input
                class="w-full"
                :placeholder="title"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            >
        </div>
    </div>
</template>

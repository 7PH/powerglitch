<script setup>
defineProps({
    modelValue: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    min: {
        type: Number,
        required: true,
    },
    max: {
        type: Number,
        required: true,
    },
    step: {
        type: Number,
        required: true,
    },
    factor: {
        type: Number,
        default: 1,
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
                class="w-20"
                type="number"
                :value="modelValue * factor"
                :min="min * factor"
                :max="max * factor"
                @change="$emit('update:modelValue', (parseInt($event.target.value) / factor))"
            >
            <input
                :value="modelValue * factor"
                type="range"
                :min="min * factor"
                :max="max * factor"
                :step="step * factor"
                @input="$emit('update:modelValue', (parseInt($event.target.value) / factor))"
            >
        </div>
    </div>
</template>

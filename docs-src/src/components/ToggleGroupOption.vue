<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

defineProps({
    modelValue: {
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    getDefaultValue: {
        type: Function,
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
            <select
                class="w-20"
                :value="!! modelValue"
                @input="$emit('update:modelValue', getDefaultValue($event.target.value === 'true'))"
            >
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </div>
    </div>
</template>

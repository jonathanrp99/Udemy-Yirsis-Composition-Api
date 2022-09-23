<template>
    <button @click="emit('change')">{{title}}</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['change'])
</script>
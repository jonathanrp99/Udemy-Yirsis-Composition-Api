<template>
    <label>Technology #{{ number }}:</label>
    <input type="text" v-model="form.name[number - 1]" />
    <select v-model="form.level[number - 1]" name="level">
    <option>Basic</option>
    <option>Medium</option>
    <option>Advanced</option>
    </select>
</template>

<script setup>
import { onUnmounted } from "@vue/runtime-core";

const {number, form} = defineProps(['number', "form"]);
onUnmounted(() => {
    form.name.pop(number-1)
    form.level.pop(number-1)
})
</script>
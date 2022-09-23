<template>
<center>
    <h3>Value: {{count}}</h3>
    <Button @change="increase" title="+"/>
    <Button @change="decrease" title="-" />
    <h4>VAT: (15%) : {{ vat }}</h4>
</center>
</template>

<script setup>
import { defineProps } from "vue";
import { useCounter } from "../composables/useCounter";
import Button from "./Button.vue"

const props = defineProps({
        initialValue: {
            required:true,
            type: Number,
        }
    })

    const {count, increase, decrease, vat } = useCounter(props.initialValue)
</script>
<template>
  <div>
    <h1>home</h1>
    <form>
        technologies: <input type="number" min="1" max="5" v-model="form.number" />
      <div v-for="number in form.number" :key="number">
        <Inputs :number="number" :form="form" />
      </div>
    </form>
  </div>
  {{form.name}} {{form.level}}
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import Inputs from "../components/inputs.vue";

const form = reactive({
  name: [],
  level: [],
  number: 1
})
</script>
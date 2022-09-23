<template>
  <div>
    <h1>Components</h1>
    <hr>
    <Counter :initialValue="100" />
    <Counter :initialValue="20" />
  </div>
</template>

<script setup>
import Counter from '../components/Counter.vue';

</script>

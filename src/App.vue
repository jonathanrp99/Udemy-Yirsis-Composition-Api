<script setup>

</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  <RouterView v-slot="{Component}">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</RouterView>
</template>

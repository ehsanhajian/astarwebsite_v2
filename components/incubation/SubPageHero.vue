<template>
  <section class="text-gray-300 max-w-5xl mx-auto text-center">
    <h1 class="font-bold text-7xl">{{ title }}</h1>
    <p class="text-2xl font-light">{{ description }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

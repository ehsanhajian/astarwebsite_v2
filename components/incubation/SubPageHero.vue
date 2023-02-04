<template>
  <div class="bg-black">
    <div
      class="bg-[url('/assets/images/incubation/sub-page-hero.svg')] bg-center bg-repeat h-[700px] flex flex-col"
    >
      <IncubationHeader />
      <section class="flex items-center h-full">
        <div class="text-gray-300 max-w-5xl mx-auto text-center">
          <h1 class="font-bold text-7xl">{{ title }}</h1>
          <p class="text-2xl font-light">{{ description }}</p>
        </div>
      </section>
    </div>
  </div>
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

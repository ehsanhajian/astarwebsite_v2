<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <h1>program</h1>
    </template>
    <template #main> program main </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  pageTitle: "Our Program",
  slug: "program",
  description:
    "Provide large scale and comprehensive support for Web3 builders",
});
</script>

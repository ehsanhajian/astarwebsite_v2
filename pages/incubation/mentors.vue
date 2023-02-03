<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <h1>mentors</h1>
    </template>
    <template #main> mentors main </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  pageTitle: "Mentors",
  slug: "mentors",
  description:
    "Providing constructive advice and feedback by utilizing their technical and financial knowledge.",
});
</script>

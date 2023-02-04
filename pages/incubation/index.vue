<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <div class="bg-black">
        <div
          class="h-screen flex flex-col bg-[url('/assets/images/incubation/home/hero-bg.svg')] bg-center bg-repeat"
        >
          <IncubationHeader />
          <IncubationHomeHero />
        </div>
      </div>
    </template>
    <template #main>
      <main>
        <div class="max-w-7xl mx-auto px-4">
          <IncubationHomeAbout />
          <IncubationHomeOffer />
        </div>
        <IncubationHomeTimeline />
        <div class="max-w-7xl mx-auto px-4">
          <IncubationHomePartners />
          <IncubationHomeMentors />
        </div>
        <IncubationHomeFaq />
      </main>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

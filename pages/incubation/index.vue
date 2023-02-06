<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <div class="bg-black">
        <div
          class="h-screen flex flex-col bg-[url('/assets/images/incubation/home/hero-bg.svg')] bg-center bg-repeat"
        >
          <div class="relative z-10">
            <IncubationHeader />
            <IncubationHomeHero />
          </div>
        </div>
      </div>
      <div class="w-full absolute top-[60vh]">
        <div
          class="bg-[url('/assets/images/incubation/home/hero-rocket.svg')] bg-left bg-no-repeat ml-[45vw] min-h-[1078px]"
        />
      </div>
    </template>
    <template #main>
      <main>
        <div class="max-w-7xl mx-auto px-4">
          <IncubationHomeAbout class="py-32" />
          <IncubationHomeOffer class="pt-24 pb-44" />
        </div>
        <IncubationHomeTimeline />
        <IncubationHomePartners class="py-40" />
        <IncubationHomeMentors class="py-40" />
        <IncubationHomeFaq class="pt-24 pb-60" />
      </main>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

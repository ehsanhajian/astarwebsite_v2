<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <div class="bg-black">
        <div
          class="bg-[url('/assets/images/incubation/home/hero-bg.svg')] bg-center bg-repeat"
        >
          <div class="relative z-10 h-screen">
            <IncubationHeader />
            <IncubationHomeHero />
          </div>
        </div>
      </div>
      <div class="w-full -mt-12 lg:absolute sm:top-[60vh]">
        <div
          class="bg-[url('/assets/images/incubation/home/hero-rocket.svg')] bg-left bg-no-repeat ml-8 lg:ml-[45vw] min-h-[546.51px] min-h-[500px] lg:min-h-[1078px] bg-cover"
        />
      </div>
    </template>
    <template #main>
      <main>
        <div class="max-w-7xl mx-auto px-4">
          <IncubationHomeAbout class="lg:py-32" />
          <IncubationHomeOffer class="pt-24 pb-24 sm:pb-44" />
        </div>
        <IncubationHomeTimeline />
        <IncubationHomePartners class="pt-24 sm:pt-40 pb-24" />
        <IncubationHomeMentors class="sm:py-36" />
        <IncubationHomeFaq class="pt-24 pb-24 sm:pb-60" />
      </main>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

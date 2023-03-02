<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="~/assets/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div
          class="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-start"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div class="text-center">
              <h1
                class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
              >
                Marketing Request
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 class="text-2xl lg:text-3xl mb-8 font-medium sm:text-center">
          Build your Brand with Us
        </h2>
        <p class="text-lg mb-8">
          Astar Foundation works with many projects to create an engaging
          community experience and deliver the latest updates. We support
          innovative teams that contribute to the growth and development of
          Astar.
        </p>
        <p class="text-lg mb-8">
          Elevate your project and connect to your community through meaningful
          storytelling. Our digital media outlets are open for co-marketing
          opportunities related to the Astar ecosystem. We are always ready for
          new marketing partnerships.
        </p>
        <p class="text-lg mb-8">
          Leave us your details below and we will get back to you shortly.
        </p>
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  title: "Marketing Request",
  slug: "marketing-request",
  description: "Build your Brand with Us",
});
</script>

<style lang="postcss" scoped>
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
</style>

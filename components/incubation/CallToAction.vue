<template>
  <section class="bg-black">
    <div
      class="flex bg-[url('/assets/images/incubation/sub-page-hero.svg')] bg-center bg-repeat"
    >
      <div
        class="w-full bg-[url('/assets/images/incubation/cta.svg')] bg-right bg-no-repeat"
      />
      <div class="text-center py-36 px-10 shrink-0">
        <p class="text-white text-3xl">{{ $t("cta.lead") }}</p>
        <IncubationButton
          href="https://zohb4s71q4n.typeform.com/to/f6qfzciE"
          variant="contained"
          color="secondary"
          size="lg"
          target="_blank"
          class="w-full max-w-[300px] my-6"
        >
          <span>
            {{ $t("cta.apply") }}
            <ArrowRightIcon class="w-6 h-6 inline-block ml-1" />
          </span>
        </IncubationButton>
        <p>
          <span class="text-gray-300 mr-2">{{ $t("cta.contact") }}</span>
          <NuxtLink
            to="mailto:info@startale.org"
            class="text-space-sky-lighter hover:text-space-sky-light hover:underline"
            >info@startale.org</NuxtLink
          >
        </p>
      </div>
      <div class="w-full" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>

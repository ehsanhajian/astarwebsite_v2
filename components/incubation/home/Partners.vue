<template>
  <section class="max-w-7xl mx-auto px-4 flex items-center">
    <div class="mr-8">
      <p class="font-bold text-3xl title">
        <span>{{ $t("meta.partners.title") }}</span>
      </p>
      <h2 class="text-3xl font-medium mt-2 mb-8 text-black leading-snug">
        {{ $t("meta.partners.description") }}
      </h2>
      <IncubationButton
        variant="outlined"
        color="primary"
        :href="localePath('/incubation/partners')"
      >
        <span>
          {{ $t("program.timeline.learn_more") }}
          <ArrowRightIcon class="w-6 h-6 inline-block ml-1" />
        </span>
      </IncubationButton>
    </div>
    <div>
      <img src="~/assets/images/incubation/home/partners.svg" alt="Partners" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const localePath = useLocalePath();
</script>

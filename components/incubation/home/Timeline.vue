<template>
  <section class="bg-black">
    <div class="max-w-7xl mx-auto px-4 flex">
      <div>
        <p>{{ $t("program.timeline.subheading") }}</p>
        <h2 class="text-white">{{ $t("program.timeline.heading") }}</h2>
        <NuxtLink :to="localePath('/incubation/program#timeline')">
          {{ $t("program.timeline.learn_more") }}
          <ArrowRightIcon class="w-5 h-5 inline-block ml-1" />
        </NuxtLink>
      </div>
      <ol class="timeline">
        <li class="before:text-space-pink">
          <h3 class="text-space-pink">
            {{ $t("program.timeline.application.title") }}
            <small>({{ $t("program.timeline.application.duration") }})</small>
          </h3>
          <p class="text-gray-300">
            {{ $t("program.timeline.application.description_short") }}
          </p>
        </li>
        <li class="before:text-space-sky">
          <h3 class="text-space-sky">
            {{ $t("program.timeline.incubation.title") }}
            <small>({{ $t("program.timeline.incubation.duration") }})</small>
          </h3>
          <p class="text-gray-300">
            {{ $t("program.timeline.incubation.description_short") }}
          </p>
        </li>
        <li class="before:text-space-cyan">
          <h3 class="text-space-cyan">
            {{ $t("program.timeline.demo.title") }}
          </h3>
          <p class="text-gray-300">
            {{ $t("program.timeline.demo.description_short") }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const localePath = useLocalePath();
</script>

<style lang="postcss" scoped>
.timeline {
  counter-reset: num;
}
.timeline li::before {
  content: counter(num);
  counter-increment: num;
  display: inline-block;
}
.timeline li h3 {
  display: inline-block;
}
</style>

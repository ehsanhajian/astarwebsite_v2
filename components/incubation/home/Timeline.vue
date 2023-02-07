<template>
  <section class="bg-black">
    <div class="max-w-7xl mx-auto px-4 sm:flex py-24 sm:py-0">
      <div class="sm:py-36 sm:mr-16 sm:w-1/2 mb-16 sm:mb-0">
        <p class="font-bold text-2xl sm:text-3xl title">
          <span>{{ $t("program.timeline.subheading") }}</span>
        </p>
        <h2
          class="text-white text-2xl sm:text-3xl font-medium mt-2 mb-8 leading-snug"
        >
          {{ $t("program.timeline.heading") }}
        </h2>
        <IncubationButton
          variant="outlined"
          color="secondary"
          :href="localePath('/incubation/program')"
        >
          <span>
            {{ $t("program.timeline.learn_more") }}
            <ArrowRightIcon class="w-6 h-6 inline-block ml-1" />
          </span>
        </IncubationButton>
      </div>
      <div class="border-l-2 border-gray-300 sm:py-36 sm:w-1/2 relative">
        <ChevronDownIcon
          class="w-8 h-8 text-white absolute left-[-1.05rem] -bottom-3"
        />
        <ol class="timeline space-y-12">
          <li class="after:bg-space-pink before:text-space-pink">
            <h3 class="text-space-pink">
              {{ $t("program.timeline.application.title") }}
              <small>
                ({{ $t("program.timeline.application.duration") }})
              </small>
            </h3>
            <p class="text-gray-300">
              {{ $t("program.timeline.application.description_short") }}
            </p>
          </li>
          <li class="after:bg-space-sky before:text-space-sky">
            <h3 class="text-space-sky">
              {{ $t("program.timeline.incubation.title") }}
              <small>({{ $t("program.timeline.incubation.duration") }})</small>
            </h3>
            <p class="text-gray-300">
              {{ $t("program.timeline.incubation.description_short") }}
            </p>
          </li>
          <li class="after:bg-space-cyan before:text-space-cyan">
            <h3 class="text-space-cyan">
              {{ $t("program.timeline.demo.title") }}
            </h3>
            <p class="text-gray-300">
              {{ $t("program.timeline.demo.description_short") }}
            </p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";

const localePath = useLocalePath();
</script>

<style lang="postcss" scoped>
.timeline {
  counter-reset: num;
}
.timeline li {
  @apply pl-12 relative;
}
.timeline li::before {
  content: counters(num, ".", decimal-leading-zero);
  counter-increment: num;
  @apply mr-2 inline-block text-3xl;
}
.timeline li::after {
  @apply block absolute w-4 h-4 rounded-full mr-2 -left-2 top-5;
}
.timeline li h3 {
  @apply inline-block text-3xl font-medium mb-2;
}
.timeline li h3 small {
  @apply font-normal text-lg;
}
.timeline li p {
  @apply text-lg;
}
</style>

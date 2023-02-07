<template>
  <div class="sm:flex sm:space-x-4 space-y-4 sm:space-y-0 text-center">
    <IncubationButton
      href="https://zohb4s71q4n.typeform.com/to/f6qfzciE"
      variant="contained"
      color="secondary"
      size="lg"
      target="_blank"
      class="w-[300px] sm:w-auto"
    >
      <span>
        {{ $t("cta.apply") }}
        <ArrowTopRightOnSquareIcon class="w-6 h-6 inline-block align-sub" />
      </span>
    </IncubationButton>
    <IncubationButton
      variant="outlined"
      color="secondary"
      size="lg"
      href="/incubation/program"
      class="w-[300px] sm:w-auto"
    >
      <span>
        {{ $t("learn_more") }}
        <ArrowRightIcon class="w-6 h-6 inline-block" />
      </span>
    </IncubationButton>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/vue/24/outline";
</script>

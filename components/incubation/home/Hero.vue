<template>
  <div class="max-w-7xl px-4 mx-auto flex w-full h-[80vh] items-center">
    <div class="w-1/2">
      <h1 class="text-9xl leading-none font-bold text-white">
        Web3 <br />Incubation <br />Program
      </h1>
      <div class="flex space-x-4 mt-16">
        <IncubationButton
          href="https://zohb4s71q4n.typeform.com/to/f6qfzciE"
          variant="contained"
          color="secondary"
          size="lg"
          target="_blank"
        >
          <span>
            {{ $t("cta.apply") }}
            <ArrowRightIcon class="w-6 h-6 inline-block ml-1"
          /></span>
        </IncubationButton>
        <IncubationButton
          variant="outlined"
          color="secondary"
          size="lg"
          href="/incubation/program"
        >
          <span>
            {{ $t("learn_more") }}
            <ArrowRightIcon class="w-6 h-6 inline-block ml-1"
          /></span>
        </IncubationButton>
      </div>
    </div>
    <div class="w-1/2 flex justify-end">
      <img
        src="~/assets/images/incubation/home/hero-text.svg"
        alt=""
        class=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>

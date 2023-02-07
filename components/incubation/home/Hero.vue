<template>
  <div
    class="max-w-7xl px-4 mx-auto flex sm:flex-row items-center w-full h-[calc(100vh-100px)] lg:h-[70vh]"
  >
    <div class="w-full lg:flex flex-wrap items-center">
      <div class="w-full lg:w-1/2">
        <h1
          class="text-5xl sm:text-8xl lg:text-9xl leading-none font-bold text-white text-center lg:text-left"
        >
          Web3 <br />Incubation <br />Program
        </h1>
      </div>
      <div
        class="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 my-12 lg:my-0"
      >
        <img
          src="~/assets/images/incubation/home/hero-text.svg"
          alt="by Sony Network Communications and Astar"
          class="max-w-[260px] sm:max-w-[340px] lg:max-w-[520px] w-full"
        />
      </div>
      <div
        class="sm:flex sm:space-x-4 space-y-4 sm:space-y-0 text-center mt-12 lg:mt-20 justify-center"
      >
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
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/vue/24/outline";
</script>

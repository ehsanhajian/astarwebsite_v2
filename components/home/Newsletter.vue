<template>
  <div class="max-w-4xl w-full mx-auto px-4 sm:px-6 relative z-10">
    <div class="gradient-outlined-box">
      <div
        class="p-8 sm:p-12 sm:flex items-center space-y-6 sm:space-y-0 sm:space-x-8"
      >
        <div class="flex-1">
          <h2
            class="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 text-center sm:text-left"
          >
            <span>{{ $t("home.newsletter.title") }}</span>
          </h2>
          <p>
            {{ $t("home.newsletter.description") }}
          </p>
        </div>
        <div class="shrink-0 text-center">
          <Button
            href="https://share.hsforms.com/1Bnt1-pCIR5mnSSYpSIxicQc2ryh"
            target="_blank"
            size="lg"
          >
            {{ $t("home.newsletter.signup") }}
            <ArrowTopRightOnSquareIcon class="w-5 h-5 stroke-2 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
</script>

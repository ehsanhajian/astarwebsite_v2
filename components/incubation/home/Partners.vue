<template>
  <section class="flex items-center">
    <div>
      <p>{{ $t("meta.partners.title") }}</p>
      <h2 class="">{{ $t("meta.partners.description") }}</h2>
      <NuxtLink :to="localePath('/incubation/partners')">
        {{ $t("partners.learn_more") }}
        <ArrowRightIcon class="w-5 h-5 inline-block ml-1" />
      </NuxtLink>
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

<template>
  <div class="bg-white text-gray-600 font-roboto">
    <slot name="hero" />
    <slot name="main" />
    <IncubationFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();
import { meta } from "../content/meta";
const seoUrl = `${meta.url}${route.fullPath}`;
useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [
    {
      rel: "canonical",
      href: seoUrl,
    },
  ],
}));
</script>

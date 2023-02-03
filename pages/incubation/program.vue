<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <IncubationSubPageHero
        :title="$t('pages.program.title')"
        :description="$t('pages.program.description')"
      />
    </template>
    <template #main> program main </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

definePageMeta({
  layout: false,
  pageTitle: "pages.program.title",
  slug: "program",
  description: "pages.program.description",
});
</script>

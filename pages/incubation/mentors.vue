<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <IncubationSubPageHero
        :title="$t('pages.mentors.title')"
        :description="$t('pages.mentors.description')"
      />
    </template>
    <template #main> mentors main </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

definePageMeta({
  layout: false,
  pageTitle: "pages.mentors.title",
  slug: "mentors",
  description: "pages.mentors.description",
});
</script>

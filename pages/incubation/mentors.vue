<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <IncubationSubPageHero
        :title="$t('meta.mentors.title')"
        :description="$t('meta.mentors.description')"
      />
    </template>
    <template #main>
      <ul
        class="max-w-xs sm:max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-20 my-16 sm:my-36"
      >
        <IncubationMentorsListItem
          v-for="(mentor, index) in mentors"
          :mentor="mentor"
          @modal="modalAction(index)"
        />
      </ul>
      <IncubationMentorsModal
        :mentor="mentors[mentorIndex]"
        :open="open"
        @close="modalClose"
      />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { mentors } from "../../content/mentors";
import { ref } from "vue";

const { t } = useI18n();
const seoTitle = `${t("meta.mentors.title")} | ${t("meta.title")}`;
const seoDescription = t("meta.mentors.description");
const seoImage = "https://astar.network/social-preview-incubation.png";

useServerSeoMeta({
  ogTitle: () => seoTitle,
  title: () => seoTitle,
  description: () => seoDescription,
  ogDescription: () => seoDescription,
  ogImage: () => seoImage,
  ogImageUrl: () => seoImage,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => seoImage,
});

definePageMeta({
  layout: false,
});

const open = ref(false);
const mentorIndex = ref(0);

const modalAction = (index: number) => {
  mentorIndex.value = index;
  open.value = true;
};

const modalClose = () => {
  open.value = false;
};
</script>

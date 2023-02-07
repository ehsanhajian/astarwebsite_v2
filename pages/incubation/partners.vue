<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <IncubationSubPageHero
        :title="$t('meta.partners.title')"
        :description="$t('meta.partners.description')"
      />
    </template>
    <template #main>
      <main class="max-w-5xl mx-auto px-4 py-24">
        <template v-for="partner in partners">
          <h2>
            <template v-if="locale === 'ja'">{{ partner.label.ja }}</template>
            <template v-else>{{ partner.label.en }}</template>
          </h2>
          <ul
            class="grid grid-cols-2 gap-x-2 gap-y-2 lg:gap-y-8 mt-8 mb-24"
            :class="
              partner.category === 'sponsors' && 'sm:grid-cols-3 lg:grid-cols-4'
            "
          >
            <li
              v-for="item in partner.logos"
              class="flex items-center justify-center"
            >
              <NuxtLink
                :href="item.href"
                target="_blank"
                class="rounded p-4"
                :class="item.href !== '' && 'hover:shadow-lg'"
              >
                <img
                  class="h-16 w-44 object-contain"
                  :class="
                    partner.category === 'host' ? 'lg:w-80 lg:h-20' : 'lg:w-48'
                  "
                  :src="useAsset('incubation/partners/' + item.image)"
                  :alt="item.name"
                />
              </NuxtLink>
            </li>
          </ul>
        </template>
      </main>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { partners } from "../../content/partners";

definePageMeta({
  layout: false,
  title: "meta.partners.title",
  slug: "partners",
  description: "meta.partners.description",
});

const { locale } = useI18n();
</script>

<style lang="postcss" scoped>
h2 {
  @apply text-center overflow-hidden uppercase font-semibold text-2xl text-black;
}
h2::before,
h2::after {
  @apply bg-gray-500 content-[''] w-1/2 h-[1px] inline-block align-middle;
}
h2::before {
  @apply ml-[-50%] mr-4;
}
h2::after {
  @apply mr-[-50%] ml-4;
}
</style>

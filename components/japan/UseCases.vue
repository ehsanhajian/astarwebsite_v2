<template>
  <div class="bg-gradient-to-b from-white to-[#D0E9F0] relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="title text-center mb-12 sm:mb-16">
        <span>{{ $t("japan.use_cases.title") }}</span>
      </h2>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-20"
      >
        <li v-for="item in cases">
          <NuxtLink :to="item.href" target="_blank" class="block group">
            <div class="mb-4">
              <img
                class="h-52 w-full object-cover rounded-3xl"
                :class="item.href !== '' && 'group-hover:brightness-125'"
                :src="'/images/japan/use-cases/' + item.image"
                :alt="item.title"
              />
            </div>
            <p
              class="font-medium mb-2 line-clamp-3"
              :class="
                item.href !== '' &&
                'transition group-hover:underline group-hover:text-blue-600'
              "
            >
              {{ item.title }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const cases = [
  {
    title: t("japan.use_cases.astar_farm"),
    image: "astarfarm.webp",
    href: "",
  },
  {
    title: t("japan.use_cases.miliyah"),
    image: "miliyah.webp",
    href: "",
  },
  {
    title: t("japan.use_cases.ellen"),
    image: "ellen.webp",
    href: "",
  },
  {
    title: t("japan.use_cases.revolt"),
    image: "revolt.webp",
    href: "",
  },
  {
    title: t("japan.use_cases.nikkei"),
    image: "nikkei.webp",
    href: "",
  },
  {
    title: t("japan.use_cases.rkb"),
    image: "rkb.webp",
    href: "",
  },
];
</script>

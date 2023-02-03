<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <IncubationSubPageHero
        :title="$t('pages.partners.title')"
        :description="$t('pages.partners.description')"
      />
    </template>
    <template #main>
      <main class="max-w-5xl mx-auto px-4 py-24">
        <template v-for="partner in partners">
          <h2>{{ partner.category }}</h2>
          <ul
            class="grid grid-cols-2 gap-x-2 gap-y-2 lg:gap-y-8 mt-8 mb-24"
            :class="partner.category === 'Sponsors' && 'sm:grid-cols-4'"
          >
            <li
              v-for="item in partner.logos"
              class="flex items-center justify-center"
            >
              <NuxtLink
                :href="item.href"
                target="_blank"
                class="hover:shadow-lg rounded p-4"
              >
                <img
                  class="h-16 w-44 object-contain"
                  :class="
                    partner.category === 'Host' ? 'lg:w-80 lg:h-20' : 'lg:w-48'
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
const { t } = useI18n({
  useScope: "local",
});

definePageMeta({
  layout: false,
  title: "pages.partners.title",
  slug: "partners",
  description: "pages.partners.description",
});

const partners = [
  {
    category: "Host",
    logos: [
      {
        name: "Sony Network Communications",
        image: "sony.svg",
        href: "https://www.sonynetwork.co.jp/",
      },
      {
        name: "Startale Labs",
        image: "startale.svg",
        href: "",
      },
    ],
  },
  {
    category: "Sponsors",
    logos: [
      {
        name: "Astar Network",
        image: "astar.svg",
        href: "https://astar.network/",
      },
      {
        name: "Web3 Foundation",
        image: "w3f.svg",
        href: "https://web3.foundation/",
      },
      {
        name: "Amazon Web Services (AWS)",
        image: "aws.svg",
        href: "https://aws.amazon.com/",
      },
      {
        name: "Alchemy",
        image: "alchemy.svg",
        href: "https://www.alchemy.com/",
      },
      {
        name: "Dragonfly Capital",
        image: "dragonfly.png",
        href: "https://www.dragonfly.xyz/",
      },
      {
        name: "Fenbushi Capital",
        image: "fenbushi.png",
        href: "https://www.fenbushicapital.vc/",
      },
      {
        name: "LongHash Ventures",
        image: "longhash.png",
        href: "https://www.longhash.vc/",
      },
      {
        name: "Next Web Capital",
        image: "nwc.png",
        href: "https://nextweb.capital/",
      },
    ],
  },
];
</script>

<style lang="postcss" scoped>
h2 {
  @apply text-center overflow-hidden uppercase font-semibold text-2xl;
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

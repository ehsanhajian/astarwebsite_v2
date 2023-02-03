<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <section id="hero" class="max-w-5xl mx-auto text-center">
        <h1>Partners</h1>
        <p>
          Provide all the support necessary <br />
          for web3 companies to grow.
        </p>
      </section>
    </template>
    <template #main>
      <main class="max-w-5xl mx-auto px-4 py-24">
        <template v-for="partner in partners">
          <h2>{{ partner.category }}</h2>
          <div
            class="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8 lg:gap-y-20 sm:grid-cols-4"
          >
            <li
              v-for="item in partner.logos"
              class="flex items-center justify-center"
            >
              <a :href="item.href" target="_blank">
                <img
                  class="h-16 sm:h-20 lg:sm:h-24 w-44 lg:w-48 object-contain"
                  :src="useAsset('incubation/partners/' + item.image)"
                  :alt="item.name"
                />
              </a>
            </li>
          </div>
        </template>
      </main>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  pageTitle: "Partners",
  slug: "partners",
  description: "Provide all the support necessary for web3 companies to grow.",
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

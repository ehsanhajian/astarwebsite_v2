<template>
  <footer class="px-4 py-12 text-center">
    <nav class="flex justify-center space-x-10">
      <NuxtLink
        v-for="item in social"
        :to="item.href"
        target="_blank"
        class="block"
      >
        <component
          :is="item.icon"
          class="h-10 sm:h-10 w-10 sm:w-10 text-black"
          :class="item.color"
          aria-hidden="true"
        />
        <span class="sr-only">{{ item.name }}</span>
      </NuxtLink>
    </nav>
    <nav class="py-8 space-x-10">
      <NuxtLink to="#">
        {{ $t("nav.tac") }}
      </NuxtLink>
      <NuxtLink to="#">
        {{ $t("nav.privacy") }}
      </NuxtLink>
    </nav>
    <p class="text-sm">
      © 2023 Web3 Incubation Program by SONY Network Communications and Astar.
      All Rights Reserved
    </p>
  </footer>
</template>

<script setup lang="ts">
const Twitter = resolveComponent("IconTwitter");
const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");

const social = [
  {
    name: "Twitter",
    href: "https://twitter.com/astarNetwork",
    icon: Twitter,
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "Discord",
    href: "https://discord.gg/Z3nC9U4",
    icon: Discord,
    color: "hover:text-[#5865F2]",
  },
  {
    name: "Telegram",
    href: "https://t.me/PlasmOfficial",
    icon: Telegram,
    color: "hover:text-[#0088CC]",
  },
];
</script>

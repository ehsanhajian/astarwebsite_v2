<template>
  <section class="max-w-7xl mx-auto px-4">
    <div class="space-y-24 sm:space-y-32">
      <template v-for="(item, index) in offer">
        <div :id="item.id" class="sm:flex items-center">
          <div
            class="mb-12 sm:mb-0"
            :class="index === 1 ? 'order-2 sm:ml-16' : 'sm:mr-16'"
          >
            <h2
              class="text-2xl sm:text-3xl font-medium mb-6 text-black leading-snug"
            >
              {{ item.lead }}
            </h2>
            <p class="text-lg leading-loose">{{ item.text }}</p>
          </div>
          <div class="shrink-0" :class="index === 1 && 'order-1'">
            <img
              :src="useAsset('incubation/program/' + item.image)"
              :alt="item.text"
              :class="index === 1 && 'w-full max-w-[456px]'"
            />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const offer = [
  {
    lead: t("program.offer.connection.lead"),
    text: t("program.offer.connection.text"),
    image: "connection.svg",
    id: "connection",
  },
  {
    lead: t("program.offer.support.lead"),
    text: t("program.offer.support.text"),
    image: "support.png",
    id: "support",
  },
  {
    lead: t("program.offer.grow.lead"),
    text: t("program.offer.grow.text"),
    image: "grow.svg",
    id: "grow",
  },
];
</script>

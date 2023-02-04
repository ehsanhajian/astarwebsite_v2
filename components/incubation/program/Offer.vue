<template>
  <section class="max-w-7xl mx-auto px-4">
    <template v-for="(item, index) in offer">
      <div :id="item.id" class="flex items-center">
        <div :class="index === 1 && 'order-2'">
          <h2>{{ item.lead }}</h2>
          <p>{{ item.text }}</p>
        </div>
        <div :class="index === 1 && 'order-1'">
          <img
            class=""
            :src="useAsset('incubation/home/' + item.image)"
            :alt="item.text"
          />
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const offer = [
  {
    lead: t("program.offer.connection.lead"),
    text: t("program.offer.connection.text"),
    image: "icon-connection.svg",
    id: "connection",
  },
  {
    lead: t("program.offer.support.lead"),
    text: t("program.offer.support.text"),
    image: "icon-support.svg",
    id: "support",
  },
  {
    lead: t("program.offer.grow.lead"),
    text: t("program.offer.grow.text"),
    image: "icon-grow.svg",
    id: "grow",
  },
];
</script>

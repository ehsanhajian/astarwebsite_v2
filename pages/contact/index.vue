<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="~/assets/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div
          class="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-start"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div class="text-center">
              <h1
                class="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight drop-shadow"
              >
                Contact Us
              </h1>
              <p class="text-lg sm:text-xl lg:text-2xl">
                Get in touch with the Astar Network team
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li
            v-for="item in options"
            :class="item.slug === 'other' && 'md:col-span-3'"
            class="border border-gray-400 px-4 py-8 rounded-3xl"
          >
            <component
              :is="item.icon"
              class="h-16 w-16 mx-auto"
              aria-hidden="true"
            />
            <h2 class="font-bold text-2xl my-2">{{ item.title }}</h2>
            <p class="text-gray-300 mb-6">{{ item.description }}</p>
            <Button :href="item.button">
              <component
                v-if="item.slug === 'technical'"
                :is="Discord"
                class="h-5 w-5 mr-1.5"
                aria-hidden="true"
              />
              {{ item.buttonLabel }}
              <IconArrowTopRightOnSquare
                v-if="item.slug === 'technical'"
                class="w-5 h-5 ml-1 stroke-2"
              />
            </Button>
          </li>
        </ul>
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  title: "Contact Us",
  slug: "contact",
  description: "Get in touch with the Astar Network team",
});

const Marketing = resolveComponent("IconMarketingRequest");
const Partnerships = resolveComponent("IconPartnerships");
const Technical = resolveComponent("IconTechnicalSupport");
const Discord = resolveComponent("IconDiscord");

const options = [
  {
    slug: "marketing",
    title: "Marketing Request",
    description: "Interested in working together on a co-marketing campaign?",
    button: "/contact/marketing-request",
    buttonLabel: "Let’s Connect",
    icon: Marketing,
  },
  {
    slug: "partnerships",
    title: "Partnerships",
    description: "dApp staking and integrations support.",
    button: "",
    buttonLabel: "Get support",
    icon: Partnerships,
  },
  {
    slug: "technical",
    title: "Technical Support",
    description:
      "If you have any technical problems or questions, please ask in Discord",
    button: "https://discord.gg/Z3nC9U4",
    buttonLabel: "Discord Channel",
    icon: Technical,
  },
  {
    slug: "other",
    title: "For all other Inquiries",
    description:
      "Partnership request, listing, business services, events, etc.",
    button: "",
    buttonLabel: "Contact Us",
    icon: null,
  },
];
</script>

<style lang="postcss" scoped>
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
</style>

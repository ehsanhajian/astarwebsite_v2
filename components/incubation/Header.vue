<template>
  <header>
    <div class="pointer-events-none inset-0 z-30" aria-hidden="true" />

    <Popover v-slot="{ open }">
      <div
        :class="[
          open ? 'bg-space-gray-dark shadow-lg bg-opacity-95' : '',
          'transition z-40 w-full',
        ]"
      >
        <div
          class="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-8 lg:px-8"
        >
          <a
            href="/incubation"
            class="logo text-white flex flex-col leading-tight"
          >
            <span class="font-bold text-[1.75rem]">
              Web3 Incubation Program
            </span>
            <span class="text-[1rem]">
              by SONY Network Communications and Astar
            </span>
          </a>

          <div class="-my-2 -mr-2 lg:hidden">Mobile nav</div>

          <div class="hidden lg:flex lg:items-center">
            <nav class="flex items-center space-x-4 xl:space-x-10">
              <a
                href="/incubation/program"
                class="nav-item"
                :class="route.meta.slug === 'program' && 'current'"
              >
                <span>Program</span>
              </a>
              <a
                href="/incubation/partners"
                class="nav-item"
                :class="route.meta.slug === 'partners' && 'current'"
              >
                <span>Partners</span>
              </a>
              <a
                href="/incubation/mentors"
                class="nav-item"
                :class="route.meta.slug === 'mentors' && 'current'"
              >
                <span>Mentors</span>
              </a>
              <IncubationButton
                href="https://zohb4s71q4n.typeform.com/to/f6qfzciE"
                variant="contained"
                color="secondary"
                target="_blank"
              >
                Apply Now
              </IncubationButton>
              <a href="/incubation/ja" class="nav-item"><span>日本語</span></a>
            </nav>
          </div>
        </div>
      </div>
    </Popover>
  </header>
</template>

<script setup lang="ts">
import { Popover, PopoverButton } from "@headlessui/vue";

const route = useRoute();
</script>

<style lang="postcss" scoped>
.nav-item {
  @apply text-white text-lg hover:text-red-500 transition duration-500;
}
.nav-item.current span,
.logo:hover span,
.nav-item:hover span {
  background: linear-gradient(
    90deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

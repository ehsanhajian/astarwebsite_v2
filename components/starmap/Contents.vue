<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-20" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-space-gray-dark bg-opacity-90 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-3xl bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:w-full sm:max-w-lg sm:p-8"
            >
              <div>
                <div class="mt-3 sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-3xl font-bold text-space-gray text-center leading-tight"
                  >
                    {{ discoveries[discoveryId]["title"] }}
                  </DialogTitle>
                  <div class="mt-4 text-lg">
                    <p class="text-gray-600">
                      {{ discoveries[discoveryId]["description"] }}
                    </p>
                    <a
                      v-if="discoveries[discoveryId]['href']"
                      :href="discoveries[discoveryId]['href']"
                      target="_blank"
                      rel="noopener"
                      class="flex items-center transition text-space-blue hover:underline hover:text-space-blue-lighter mt-2 outline-none"
                    >
                      Learn more
                      <span class="sr-only">
                        about {{ discoveries[discoveryId]["title"] }}
                      </span>
                      <IconArrowTopRightOnSquare
                        class="w-5 h-5 stroke-2 ml-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 text-center">
                <button
                  type="button"
                  class="text-gray-500 transition cursor-pointer py-3 px-6 hover:bg-gray-100 rounded-lg outline-none"
                  @click="open = false"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div
    class="relative z-10"
    :style="`background: url(${useAsset(
      'starmap/nebula.png'
    )}) no-repeat center top`"
  >
    <div class="xl:absolute w-full">
      <div
        class="max-w-screen-2xl mx-auto px-4 sm:px-6 space-y-24 sm:space-y-0"
      >
        <div class="sm:flex items-center min-h-[800px]">
          <div class="whitespace-nowrap text-center text-7xl sm:text-14xl">
            <span
              class="font-black leading-none tracking-tight sm:block mr-1 sm:mr-0"
            >
              Q1
            </span>
            <span
              class="font-jp kanji leading-tight tracking-wide sm:[writing-mode:vertical-lr]"
            >
              創世
            </span>
          </div>
          <div class="max-w-[580px] sm:ml-10 relative z-10">
            <h2 class="title mb-4">
              <span class="text-3xl sm:text-4xl">The Reborn Nebula</span>
            </h2>
            <div class="text-lg">
              <p class="mb-8">
                Our journey begins in the Reborn Nebula where we aim to make the
                first discoveries of the year. Each one will upgrade our network
                with innovative features, pushing us further to our goal of
                becoming a powerful layer 1. Follow along and join us in
                celebrating each discovery throughout the year.
              </p>
              <h3 class="font-bold text-xl">Q1</h3>
              <p>
                In this quarter we can look forward to discoveries that relate
                to the following:
              </p>
              <ul class="list-disc pl-4">
                <li>
                  <span @click="clickAction('xvm')" class="popup-link">
                    XVM
                  </span>
                </li>
                <li>
                  <span @click="clickAction('ui')" class="popup-link">
                    Astar UI Library & Astar.js
                  </span>
                </li>
                <li>WASM tooling and showcase dapps</li>
                <li>XCM smart contracts</li>
                <li>dApp staking</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="sm:flex items-center justify-end min-h-[800px]">
          <div
            class="whitespace-nowrap text-center order-2 text-7xl sm:text-14xl"
          >
            <span
              class="font-black leading-none tracking-tight sm:block mr-1 sm:mr-0"
            >
              Q2
            </span>
            <span
              class="font-jp kanji leading-tight tracking-wide sm:[writing-mode:vertical-lr]"
              >発展</span
            >
          </div>
          <div class="max-w-[580px] sm:ml-10 order-1">
            <h2 class="title mb-4">
              <span class="text-3xl sm:text-4xl">The Growth Nebula</span>
            </h2>
            <div class="text-lg">
              <p class="mb-8">
                We continue to grow at a steady pace while bringing true
                innovation to our users and builders alike. In this quarter we
                focus on growing out some some of our key features as well as
                introducing new ones.
              </p>
              <h3 class="font-bold text-xl">Q2</h3>
              <p>
                We can look forward to discoveries that relate to the following:
              </p>
              <ul class="list-disc pl-4">
                <li>Swanky Suite and projects</li>
                <li>Token economics</li>
                <li>Decentralized tooling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <StarmapLine
      v-on:showDetails="clickAction"
      class="w-full relative hidden xl:block"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
const open = ref(false);
const discoveryId = ref("xvm");

const discoveries = {
  xvm: {
    title: "XVM",
    description:
      "We want to use parachains as a service for dApps on Astar Network. Stay tuned for this discovery coming January 2023.",
    href: "",
  },
  ui: {
    title: "Astar UI Library & Astar.js",
    description:
      "Check in after our fist discovery to get insight about the second one. See you soon!",
    href: "",
  },
};

const clickAction = (discovery) => {
  discoveryId.value = discovery;
  open.value = true;
};
</script>

<style scoped lang="postcss">
.kanji {
  background: linear-gradient(
    180deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
  @apply text-space-gray-dark;
}
.popup-link {
  @apply text-space-cyan hover:underline cursor-pointer transition hover:text-space-cyan-lighter;
}
</style>

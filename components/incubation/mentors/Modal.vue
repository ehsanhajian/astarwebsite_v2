<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="handleClick">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
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
              class="relative transform overflow-hidden rounded bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6"
            >
              <div class="flex">
                <div class="shrink-0">
                  <img
                    class="w-full max-w-[320px] object-cover rounded-sm"
                    :src="useAsset('incubation/mentors/' + mentor.image)"
                    :alt="mentor.name.en"
                  />
                  <h3>Areas of Expertise</h3>
                  <ul>
                    <li v-for="item in mentor.expertise">
                      <template v-if="locale === 'ja'">{{ item.ja }}</template>
                      <template v-else>{{ item.en }}</template>
                    </li>
                  </ul>
                  <h3>Links</h3>
                  <div class="flex items-center space-x-3">
                    <NuxtLink
                      :to="mentor.links.website"
                      v-if="mentor.links.website"
                      target="_blank"
                    >
                      <GlobeAltIcon
                        class="w-6 h-6 text-gray-400 hover:text-space-sky"
                      />
                    </NuxtLink>
                    <NuxtLink
                      :to="mentor.links.linkedin"
                      v-if="mentor.links.linkedin"
                      target="_blank"
                    >
                      <IconLinkedin
                        class="w-6 h-6 text-gray-400 hover:text-space-sky"
                      />
                    </NuxtLink>
                    <NuxtLink
                      :to="mentor.links.twitter"
                      v-if="mentor.links.twitter"
                      target="_blank"
                    >
                      <IconTwitter
                        class="w-6 h-6 text-gray-400 hover:text-space-sky"
                      />
                    </NuxtLink>
                  </div>
                </div>
                <div class="px-12">
                  <h2 class="text-3xl font-medium mt-4">
                    <template v-if="locale === 'ja'">
                      {{ mentor.name.ja }}
                    </template>
                    <template v-else>{{ mentor.name.en }}</template>
                  </h2>
                  <p class="leading-tight text-gray-500 mb-3">
                    <template v-if="locale === 'ja'">
                      {{ mentor.title.ja }}
                    </template>
                    <template v-else>{{ mentor.title.en }}</template>
                  </p>
                  <p class="pt-4 text-lg">
                    <template v-if="locale === 'ja'">
                      {{ mentor.profile.ja }}
                    </template>
                    <template v-else>{{ mentor.profile.en }}</template>
                  </p>
                </div>
              </div>

              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="absolute right-2 top-2 hover:bg-gray-100 p-4 rounded-full transition"
                  @click="handleClick"
                >
                  <XMarkIcon class="w-8 h-8" />
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { XMarkIcon, GlobeAltIcon } from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

defineProps({
  mentor: {},
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["test"]);

const handleClick = () => {
  emit("test");
};

const { locale } = useI18n();
</script>

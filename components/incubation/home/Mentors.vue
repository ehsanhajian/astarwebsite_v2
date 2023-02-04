<template>
  <section class="">
    <div>
      <p>{{ $t("meta.mentors.title") }}</p>
      <h2 class="">{{ $t("meta.mentors.description") }}</h2>

      <ul
        class="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-x-20 gap-y-20 my-12"
      >
        <IncubationMentorsListItem
          v-for="(mentor, index) in indexMentors"
          :mentor="mentor"
          @modal="modalAction(index)"
        />
      </ul>
      <IncubationMentorsModal
        :mentor="indexMentors[mentorIndex]"
        :open="open"
        @test="modalClose"
      />

      <NuxtLink :to="localePath('/incubation/mentors')">
        {{ $t("mentors.learn_more") }}
        <ArrowRightIcon class="w-5 h-5 inline-block ml-1" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { mentors } from "../../../content/mentors";
import { ref } from "vue";

const localePath = useLocalePath();

const indexMentors = mentors.filter((x) => x.index === true);

const open = ref(false);
const mentorIndex = ref(0);

const modalAction = (index: number) => {
  mentorIndex.value = index;
  open.value = true;
};

const modalClose = () => {
  open.value = false;
};
</script>

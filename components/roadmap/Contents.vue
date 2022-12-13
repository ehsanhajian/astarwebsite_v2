<template>
  <div class="max-w-full mx-auto px-4 sm:px-6 flex relative z-10">
    <div class="whitespace-nowrap">
      <div class="font-black text-14xl leading-none -mb-10">Q1</div>
      <div class="font-jp text-14xl kanji leading-tight">創世</div>
      <div class="text-center mt-2 text-xl tracking-widest">
        The Reborn Nebula
      </div>
    </div>

    <div class="relative">
      <div
        v-if="hoverFlag"
        class="absolute border border-white w-[250px] bg-space-gray-dark p-2"
        :style="`left:${x}px; top:${y + 40}px`"
      >
        {{ discoveryName }}
      </div>
      <div class="-z-10">
        <RoadmapLine
          v-on:showInfo="mouseOverAction"
          v-on:hideInfo="mouseLeaveAction"
        />
      </div>
    </div>

    <div>
      <div class="gradient-outlined-box">
        <div class="py-8 sm:py-12 px-6 sm:px-10">
          <h2 class="text-center title mb-4">
            <span class="text-4xl">Q1 The Reborn Nebula</span>
          </h2>
          <div class="text-lg">
            <p class="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              congue laoreet maximus. Donec volutpat urna vel ante fringilla, ac
              pharetra ex sollicitudin. Nam a rutrum neque, volutpat tincidunt
              lectus. tortor.
            </p>
            <ul>
              <li>
                <h3 class="font-bold text-xl">January - XVM Discovery</h3>
                <p>This discovery gives the Astar Network...</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const hoverFlag = ref(false);
const discoveryName = ref("");
const x = ref(0);
const y = ref(0);

const mousePosition = (e) => {
  x.value = e.offsetX;
  y.value = e.offsetY;
};

const mouseOverAction = (discovery) => {
  // console.log(discovery);
  discoveryName.value = discovery;
  hoverFlag.value = true;
  mousePosition(event);
};
const mouseLeaveAction = () => {
  // console.log("leave");
  hoverFlag.value = false;
};
</script>

<style scoped lang="postcss">
.kanji {
  background: linear-gradient(
    90deg,
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
</style>

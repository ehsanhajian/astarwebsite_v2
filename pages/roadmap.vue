<template>
  <div class="space-gradient relative">
    <!-- <img
      class="absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover"
      src="~/assets/images/common/space-cloud.png"
      alt=""
      width="1728"
      height="1281"
    /> -->
    <img
      class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
      src="~/assets/images/common/space-stars.svg"
      alt=""
      width="1728"
      height="1728"
    />
    <RoadmapHero />
  </div>
  <RoadmapContents class="pb-28 sm:pb-44" />
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: "Year of Andromeda",
  slug: "roadmap",
  description: "Embarking on a new journey to reach our full potential",
});
</script>

<style scoped lang="postcss">
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
</style>

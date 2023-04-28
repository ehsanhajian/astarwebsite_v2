<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
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
                Blog
              </h1>
              <p class="lg:text-lg max-w-3xl mx-auto">
                The latest posts about all things Astar Network, major news,
                ecosystem announcements, engineering updates, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 class="text-center text-4xl font-semibold mb-12">Latest Posts</h2>
        <ul class="grid grid-cols-3 gap-12">
          <BlogArticleCard />
          <BlogArticleCard />
          <BlogArticleCard />
          <BlogArticleCard />
          <BlogArticleCard />
          <BlogArticleCard />
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
  title: "Blog",
  slug: "blog",
  description: "Get in touch with the Astar Network team",
});
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

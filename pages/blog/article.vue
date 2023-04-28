<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative mb-16">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full pt-36">
          <div class="text-center">
            <img
              src="/images/blog/placeholder.webp"
              alt=""
              class="object-cover w-full h-[520px] shadow-xl"
            />
          </div>
        </div>
      </div>

      <article class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 mb-32">
        <header class="text-center mb-12">
          <time class="text-gray-400">Mar 27, 2023</time>
          <h1 class="text-4xl font-semibold leading-tight text-white">
            Article title here
          </h1>
        </header>
        <div class="entry-content leading-9">Article content here</div>
        <footer class="mt-16">
          <div class="flex mb-12">
            <p class="mr-2 mt-3">Tags:</p>
            <div class="flex flex-wrap">
              <NuxtLink
                href="#"
                class="block text-white border border-gray-500 py-2 px-4 rounded-full hover:bg-white/10 mr-1 mb-2"
              >
                Tag
              </NuxtLink>
            </div>
          </div>
          <div class="flex border border-gray-500 rounded-3xl p-8">
            <div class="shrink-0 mr-4">
              <img
                src="/images/blog/placeholder.webp"
                alt=""
                class="object-cover w-16 h-16 rounded-full"
              />
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-2">Author Name</h3>
              <p>
                Author profile: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </footer>
      </article>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 class="text-center text-4xl font-semibold mb-12">Related Posts</h2>
        <ul class="grid grid-cols-3 gap-12">
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
  title: "Article",
  slug: "article",
  description: "Get in touch with the Astar Network team",
});
</script>

<style lang="postcss">
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}

.entry-content {
  @apply prose prose-invert lg:prose-xl prose-a:text-space-cyan hover:prose-a:text-space-cyan-lighter prose-headings:text-white bg-space-gray-dark tracking-wider prose-headings:font-bold prose-blockquote:font-normal prose-blockquote:py-3 prose-blockquote:pl-7 prose-blockquote:pr-5 prose-blockquote:bg-white/5 prose-strong:font-medium;
}
.entry-content h2 a,
.entry-content h3 a,
.entry-content h4 a {
  @apply text-white no-underline;
}
.entry-content p code {
  font-size: 0.9em;
  @apply bg-white/20 font-normal rounded p-2;
}
.entry-content p code::before,
.entry-content p code::after {
  @apply hidden;
}
.entry-content strong {
  background: linear-gradient(transparent 60%, #69275c 60%);
}
</style>

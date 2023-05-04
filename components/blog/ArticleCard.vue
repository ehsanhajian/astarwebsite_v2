<template>
  <li>
    <!-- post.slug is the slug of the article -->
    <NuxtLink
      :href="'/blog/' + post.id"
      class="block rounded overflow-hidden bg-space-gray group hover:bg-space-gray-lighter transition"
    >
      <img
        :src="post.image"
        alt=""
        class="object-cover w-full h-[240px] group-hover:brightness-110"
      />
      <div class="p-5 pb-12">
        <time class="text-gray-400 text-tiny">{{ post.publishedDate }}</time>
        <p class="text-white text-lg line-clamp-3 leading-7 mt-1">
          {{ post.title }}
        </p>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  post: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover"
          src="~/assets/images/common/space-cloud.png"
          alt=""
          width="1728"
          height="1281"
        />
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="~/assets/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div
          class="landscape:min-h-[500px] landscape:lg:min-h-[800px] portrait:min-h-[80vh] flex items-center justify-start"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <h1
              class="text-4xl sm:text-6xl lg:text-7xl font-extrabold drop-shadow text-center"
            >
              Projects
            </h1>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li v-for="item in products">
            <a :href="item.attributes.website">
              <img
                :src="useStrapiMedia(item.attributes.logo.data.attributes.url)"
                :alt="item.attributes.name"
              />
            </a>
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
const { find } = useStrapi();

interface Project {
  id: number;
  attributes: {
    name: string;
    website: string;
    logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const { data: products } = await find<Project>("projects?populate=*");
console.log(products);

definePageMeta({
  layout: false,
  title: "Projects",
  slug: "projects",
  description: "",
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

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
          class="portrait:min-h-[50vh] landscape:min-h-[60vh] flex items-center justify-start"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <h1
              class="text-4xl sm:text-6xl lg:text-7xl font-extrabold drop-shadow text-center leading-none pt-12"
            >
              Projects & <br />Deployments
            </h1>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <h2 class="title text-center mb-6">
          <span>Who's Building on Astar Network</span>
        </h2>
      </div>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <p class="sm:text-xl mb-6 text-center">
          Check out some of the many projects and DApps with Astar Network
          deployments.
        </p>
        <p class="text-sm">
          Note: The information presented on this page, including project names,
          logos, and links to external web pages, is made available solely for
          general information purposes and is by no means an endorsement of the
          project, the content of its web pages, or the team.
        </p>
      </div>
    </template>
    <template #earth>
      <div class="relative z-10 mb-40">
        <nav
          class="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 max-w-4xl mx-auto px-4 sm:px-6 category-nav text-sm sm:text-base"
        >
          <a @click="filter = 0" :class="filter === 0 && 'current'">All</a>
          <a
            v-for="category in categories"
            @click="filter = category.id"
            :class="filter === category.id && 'current'"
          >
            {{ category.attributes.name }}
          </a>
        </nav>
        <ul
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-7xl mx-auto px-4 sm:px-6"
        >
          <li v-for="item in filteredProject">
            <NuxtLink :to="item.attributes.website" target="_blank">
              <span
                class="block transition py-4 px-2"
                :class="item.attributes.website && 'hover:shadow-lg'"
              >
                <img
                  :src="
                    useStrapiMedia(item.attributes.logo.data.attributes.url)
                  "
                  :alt="item.attributes.name"
                  class="w-56 h-20 object-contain mx-auto"
                />
              </span>
              <span class="text-center block text-gray-600 mt-1">
                {{ item.attributes.name }}
              </span>
              <span class="text-center block text-gray-400 text-sm">
                {{ item.attributes.project_categories.data[0].attributes.name }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <hr class="mb-20" />
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { find } = useStrapi();

const { data: projects } = await find(
  "projects?sort=name&pagination[limit]=-1&populate=*"
);
const { data: categories } = await find("project-categories?sort=name");

const filter = ref(0);

const filteredProject = computed(() => {
  if (filter.value === 0) return projects;
  return projects.filter((project) =>
    project.attributes.project_categories.data.some(
      (category) => category.id === filter.value
    )
  );
});

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

.category-nav a {
  @apply text-space-blue hover:text-space-blue-lighter cursor-pointer;
}
.category-nav a.current {
  @apply text-space-gray cursor-default;
}
</style>

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '/astar-network'
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  image: {
    domains: ['img.youtube.com'],
  },
});

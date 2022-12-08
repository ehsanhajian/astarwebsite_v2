// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '/astarwebsite_v2'
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  image: {
    domains: ['img.youtube.com'],
  },
});

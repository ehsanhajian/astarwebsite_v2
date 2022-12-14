// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/'
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  image: {
    domains: ['img.youtube.com'],
  },
});

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  app: {
    baseURL: "/",
    head: {
      script: [
        {
          hid: "gtm",
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-53GS73F');`,
          type: "text/javascript",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "~/modules/sitemap"],
  plugins: [{ src: "~/plugins/aos" }],
  sitemap: {
    hostname: "https://astar.network/",
  },
});

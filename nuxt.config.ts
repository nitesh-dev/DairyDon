// https://nuxt.com/docs/api/configuration/nuxt-config 
// 
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/styles/global.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Baloo",
        },

      ],
    },
  },
  ssr: false,
  nitro: {
    preset: "service-worker",
  },
});

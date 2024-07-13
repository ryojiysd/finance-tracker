// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});

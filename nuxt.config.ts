export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://jsonplaceholder.typicode.com",
    },
  },
  modules: ["@invictus.codes/nuxt-vuetify"],
});

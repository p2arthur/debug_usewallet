import VueFathom from "@ubclaunchpad/vue-fathom";

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.dev) {
    nuxtApp.vueApp.use(VueFathom, {
      siteID: "IDJYSMVY",
      settings: {
        spa: "history",
      },
    });
  }
});
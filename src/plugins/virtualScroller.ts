import { defineNuxtPlugin } from '#app'
import VueVirtualScroller from 'vue-virtual-scroller'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueVirtualScroller);
});
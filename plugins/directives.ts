import { defineNuxtPlugin } from '#app'
import { clickOutside } from '@/directives/click-otuside'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', clickOutside)
})
<template>
  <div class="docs-header">
    <!-- <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{
      locale.name
    }}</NuxtLink> -->
  </div>
</template>

<script setup lang="ts">

// const { locale, locales } = useI18n()
// const switchLocalePath = useSwitchLocalePath()

// const availableLocales = computed(() => {
//   return locales.value.map((loc) => {
//     if (typeof loc === 'object') {
//       return loc
//     } else {
//       return {
//         code: loc,
//         iso: loc,
//         name: loc
//       }
//     }
//   })
// })

</script>

<style scoped lang="scss">

.docs-header {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f0f1f226;
  backdrop-filter: blur(10px);
}

</style>
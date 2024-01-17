<template>
  <nav class="docs-navigation-nav">
    <DocsNavigationTree :links="navigation" :slug="slug" />
  </nav>
</template>

<script setup lang="ts">

defineProps({
  navigation: {
    type: Object as any
  },
  slug: {
    type: String
  }
})

</script>

<style scoped lang="scss">

.docs-navigation-nav {
  height: 100%;
  box-sizing: border-box;
}

</style>
<template>
  <NuxtLink :href="href" :target="target">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">

defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})

</script>

<style scoped lang="scss">

a {
  font-size: 1rem;
  font-weight: 500;
  color: $c-secondary;
  text-decoration: underline;
}

</style>
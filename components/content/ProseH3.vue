<template>
  <h3 :id="id">
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">

import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()

const heading = 3
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)

</script>

<style scoped lang="scss">

h3 {
  margin: 0;
  padding-top: 16px;
  font-size: 1.4rem;
  font-family: $f-neue;
  font-weight: 600;
  margin-bottom: 12px;
}

</style>
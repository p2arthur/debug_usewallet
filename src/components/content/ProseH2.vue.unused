<!-- @format -->

<template>
  <h2 :id="id">
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from "#imports";

defineProps<{ id?: string }>();

const heading = 2;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<style scoped lang="scss">
h2 {
  margin: 0;
  padding-top: 16px;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 16px;
}
</style>

<template>
  <router-link v-if="link" class="button-tag-link" :to="link">
    <span class="button-tag-link-name">#{{ name }}</span>
  </router-link>

  <div v-else class="button-tag-display">
    <span class="button-tag-display-name">#{{ name }}</span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

// :to="`/nfts/all?tag=${name}`"

defineProps({
  name: {
    type: String
  },
  link: {
    type: String
  }
})

</script>

<style scoped lang="scss">

.button-tag-link {
  display: flex;
  align-items: center;

  min-height: 18px;
  max-height: 18px;
  height: 24px;
  width: max-content;
  padding: 4px 8px;

  border-radius: $radius-s;

  background-color: $c-primary-transparent;
  color: $c-on-primary-transparent;

  font-size: 0.95rem;
  font-weight: 500;

  transition: color 150ms ease, background-color 150ms ease;

  cursor: pointer;

  &:hover {
    background-color: $c-secondary-transparent;
    color: $c-on-secondary-transparent;
  }

  &-name {
    color: inherit;
  }
}

.button-tag-display {
  display: flex;
  align-items: center;

  min-height: 18px;
  max-height: 18px;
  height: 24px;
  width: max-content;
  padding: 4px 8px;
  gap: 8px;

  border-radius: $radius-s;

  background-color: $c-primary-transparent;
  color: $c-on-primary-transparent;

  font-size: 0.95rem;
  font-weight: 500;

  transition: color 150ms ease, background-color 150ms ease;

  cursor: default;

  &-name {
    color: inherit;
  }
}


</style>
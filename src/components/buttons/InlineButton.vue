<template>
  <button class="inline-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">

defineEmits(['click'])

</script>

<style scoped lang="scss">

.inline-button {
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 40px;
  height: min(40px, 100%);
  // padding: 0px 24px;
  background-color: transparent;
  color: inherit;
  font-size: 1rem;
  font-weight: 600;
  border-radius: $radius-m;
  border: none;
  transition: background-color 150ms ease;
  cursor: pointer;

  & span {
    color: inherit !important;
  }

  // &:hover {
  //   background-color: $c-hover-on-secondary;
  // }

  // &:focus {
  //   background-color: $c-hover-on-secondary;
  // }
}

</style>
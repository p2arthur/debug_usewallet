<template>
  <button class="flat-button" @click="$emit('click')" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">

defineProps({
  disabled: {
    typeof: Boolean,
    default: false,
  }
})

defineEmits(['click'])

</script>

<style lang="scss">
.flat-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0px 24px;
  background-color: $c-detail-secondary-me;
  font-size: 1rem;
  font-weight: 600;
  border-radius: $radius-m;
  border: none;
  transition: background-color 150ms ease;
  cursor: pointer;

  & span {
    color: $c-on-secondary !important;
  }

  &:hover {
    background-color: $c-hover-on-secondary;
  }

  &:focus-visible {
    background-color: $c-hover-on-secondary;
  }

  &:disabled {
    background-color: $c-flat;

    & span {
      color: $c-on-primary-flat !important;
    }
  }
}
</style>
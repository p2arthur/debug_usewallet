<template>
  <button class="text-button" @click="$emit('click')" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">

defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

</script>

<style lang="scss">

.text-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  height: min(40px, 100%);
  background-color: transparent;
  color: $c-on-background;
  font-size: 1rem;
  font-weight: 600;
  border-radius: $radius-m;
  border: none;
  transition: background-color 150ms ease;
  cursor: pointer;

  & span {
    color: inherit !important;
    transition: color 150ms ease;
  }

  & svg {
    color: inherit !important;
    transition: color 150ms ease;
  }


  &:hover {
    color: $c-secondary;
  }

  &:focus {
    color: $c-secondary;
  }

  &:disabled {
    color: $c-primary-disabled;
  }
}

</style>
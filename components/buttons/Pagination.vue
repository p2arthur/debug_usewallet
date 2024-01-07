<template>
  <button class="icon-button" @click="$emit('click')" :disabled="disabled" :active="active">
    <slot />
  </button>
</template>

<script setup lang="ts">

defineProps({
  disabled: {
    typeof: Boolean,
    default: false,
  },
  active: {
    typeof: Boolean,
    default: false,
  }
})

defineEmits(['click'])

</script>

<style scoped lang="scss">

.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: transparent;
  color: $c-on-background;
  border-radius: $radius-s;
  border: none;
  transition: background-color 150ms ease;
  outline: none;
  cursor: pointer;

  & span {
    color: inherit !important;
    transition: color 150ms ease;
  }

  & svg {
    color: inherit !important;
    transition: color 150ms ease;
  }

  &[active="true"] {
    color: $c-secondary;
    background-color: $c-primary-transparent;
  }

  &:hover {
    background-color: $c-primary-transparent;
  }

  &:focus-visible {
    background-color: $c-primary-transparent;
  }

  &:disabled {
    pointer-events: none;
  }
}

</style>
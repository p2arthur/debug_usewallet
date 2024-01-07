<template>
  <button class="icon-button" @click="$emit('click')" :disabled="disabled">
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

<style scoped lang="scss">

.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: transparent;
  color: $c-on-background;
  border-radius: $radius-m;
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


  &:hover {
    background-color: $c-primary-transparent;
  }

  &:focus-visible {
    background-color: $c-primary-transparent;
  }

  &:disabled {    
    color: $c-primary-transparent;
  }
}

</style>
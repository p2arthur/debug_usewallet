<template>
  <button class="outline-button" :class="active ? 'outline-button-active' : ''" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

defineProps({
  active: {
    type: Boolean,
    required: false,
    default: false
  }
})

defineEmits(['click'])

</script>

<style lang="scss">
.outline-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88px;
  padding: 0px 24px;
  background-color: $c-on-secondary-transparent;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: $radius-m;
  outline: 2px solid;
  outline-color: $c-tertiary-me;
  outline-offset: -2px;
  border: none;
  transition: background-color 150ms ease, color 150ms ease;
  cursor: pointer;

  &:hover {
    background-color: $c-hover-on-background;
  }

  &:focus {
    background-color: $c-hover-on-background;
  }

  & span {
    color: $c-secondary !important;
  }

  &-active {
    background-color: $c-on-background;

    & span {
      color: $c-background-0 !important;
    }

    &:hover {
      background-color: $c-on-background !important;
    }

    &:focus {
      background-color: $c-on-background !important;
    }
  }
}
</style>
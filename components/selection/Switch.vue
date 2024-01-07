<template>
  <div class="switch">
    <input 
      :id="id"
      type="checkbox" 
      class="switch-input"
      :checked="value"
      @input="$emit('update:value', ($event.target  as HTMLInputElement).checked), $emit('input', ($event.target  as HTMLInputElement).checked)"
    >
    <label 
      :for="id" class="switch-label" 
      tabindex="0"
      @keydown.enter="$emit('update:value', !value)"
      @keydown.space="$emit('update:value', !value)"
    >
      <div class="switch-label-ball" />
    </label>
  </div>
</template>

<script setup lang="ts">

import { generateUUID } from '@/functions/math/MathUtils'

const id = generateUUID()

defineProps({
  value: {
    typeof: Boolean,
    required: true,
    default: false,
  },
})

defineEmits(['update:value', 'input'])

</script>

<style scoped lang="scss">

.switch-input:checked + .switch-label .switch-label-ball {
  transform: translateX(44px);
  background-color: $c-background-1;
}

.switch-input:checked + .switch-label {
  background-color: $c-on-background;
}

.switch {
  display: flex;
  align-items: center;
    
  &-input {
    opacity: 0;
    display: none;
  }

  &-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    position: relative;
    height: 20px;
    width: 64px;
    padding: 2px;
    outline: 2px solid $c-on-background;
    background-color: transparent;
    transition: background-color 150ms ease, outline-color 150ms ease;
    cursor: pointer;

    &-ball {
      position: absolute;
      top: 2px;
      left: 2px;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: $c-on-background;
      transform: translateX(0px);
      transition: transform 150ms ease, background-color 150ms ease;
    }

    &:focus-visible {
      outline-color: $c-secondary;
    }
  }
}

</style>
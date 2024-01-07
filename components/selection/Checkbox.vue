<template>
  <label class="checkbox" :for="label">
    <input 
      class="checkbox-input" 
      type="checkbox"
      :value="value"
      :checked="value"
      :id="label"
      @change="$emit('update:value', !value)"
      @keydown.enter="$emit('update:value', !value)"
    >
    <IconsCheck class="checkbox-icon" :id="label + '-checkbox-icon'" />
  </label>
</template>

<script setup lang="ts">

defineProps({
  label: String,
  value: Boolean,
})

defineEmits(['update:value'])

</script>

<style scoped lang="scss">

.checkbox {
  position: relative;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &-input {
    display: flex;
    appearance: none;
    margin: 0px;
    padding: 0px;
    color: currentColor;
    width: 24px;
    max-width: 24px;
    height: 24px;
    outline: 2px solid currentColor;
    outline-offset: -2px;
    border-radius: $radius-s;
    transition: background-color 150ms ease, outline-color 150ms ease;

    &:focus-visible {
      outline-color: $c-secondary;
    }

    &:checked {
      background-color: currentColor;
    }

    &:checked + .container-icon {
      color: inherit;
    }
  }

  &-icon {
    position: absolute;
    left: 2px;
    top: 2px;
    color: transparent;
    transition: color 150ms ease;
    width: 20px !important;
    height: 20px !important;
  }
}

</style>
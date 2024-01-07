<template>
  <div class="text-input" :class="disabled ? 'text-input-disabled' : ''">
    <label :for="label">{{ label }}</label>
    <input 
      :type="type"
      :name="name || label"
      :id="name || label"
      :value="`${value}`"
      :placeholder="placeholder"
      :inputmode="inputmode"
      :min="min"
      :max="max"
      :step="step"
      :maxlength="maxlength"
      :disabled="disabled"
      :class="validation ? (validation.valid ? '' : 'text-input-invalid') : ' '"
      @input="emitValue($event.target)"
      @keydown.enter="$emit('enter')"
      @focusout="$emit('focusout')"
    >
    <span class="text-input-warning" v-if="validation && !validation.valid ? validation.warning : false" >{{ validation?.warning }}</span>
    <slot v-if="validation ? (validation.warning ? validation.valid : true) : true"></slot>
  </div>
</template>

<script setup lang="ts">

// @input="$emit('update:value', ($event.target as HTMLInputElement).value.trim()), $emit('input', ($event.target as HTMLInputElement).value.trim())"

import { PropType } from 'vue';

type Inputmode = "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" 

const props = defineProps({
  label: String,
  placeholder: String,
  name: String,
  inputmode: String as PropType<Inputmode>,
  min: Number,
  max: Number,
  step: Number,
  maxlength: Number,
  type: {
    typeof: String,
    default: "text",
  },
  value: [Number, String],
  validation: Object as PropType<{ valid: boolean, warning: string }>,
  disabled: Boolean
})

const emits = defineEmits(['update:value', 'input', 'enter', 'focusout'])

function emitValue (target: EventTarget | null) {

  const input = target as HTMLInputElement
  const value = input.value

  if (props.type === 'number') {
    const newValue = value.length === 0 ? '' : Number(value)

    emits('update:value', newValue)
    emits('input', newValue)
  } else {
    emits('update:value', value.trim())
    emits('input', value.trim())
    return 
  }
}

</script>

<style lang="scss">

.text-input {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: min(100%, 300px);
  width: 100%;
  max-width: 50ch;
  color: $c-on-background;
  outline-color: $c-on-background;

  &-disabled {
    color: $c-primary-transparent;
    outline-color: $c-primary-transparent;
  }

  & label {
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: 500;
    color: inherit;
    transition: color 150ms ease;
  }

  & input {
    height: 24px;
    margin: 0px;
    font-family: $f-sans;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    background-color: transparent;
    outline: 2px solid;
    outline-color: inherit;
    outline-offset: -2px;
    padding: 10px;
    border-radius: $radius-m;
    transition: outline-color 150ms ease, color 150ms ease;
    color: inherit;

    &:focus {
      outline-color: $c-secondary;
    }
  }

  & span {
    margin-top: 5px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  &-invalid {
    outline-color: $c-error !important;
  }

  &-warning {
    margin-top: 5px;
    font-size: 0.8rem;
    font-weight: 500;
    color: $c-error;
  }
}

</style>
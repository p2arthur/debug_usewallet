<template>
  <div class="text-field">
    <label :for="label">{{ label }}</label>
    <textarea 
      class="text-field-area"
      :class="validation.valid ? '' : 'text-field-area-invalid'"
      :name="name" 
      :id="name"
      :maxlength="`${limit}`"
      cols="30" 
      rows="5"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value.trim()), $emit('input', ($event.target as HTMLInputElement).value.trim())"
    >{{ value }}</textarea>
    <span v-if="limit" class="text-field-counter">{{ value.length }}/{{ limit }}</span>
    <span class="text-field-warning" v-if="!validation.valid" >{{ validation.warning }}</span>
  </div>
</template>

<script setup lang="ts">

defineProps({
  label: String,
  name: String,
  type: {
    typeof: String,
    default: "text",
  },
  value: {
    typeof: String,
    required: true,
    default: "",
  },
  limit: {
    typeof: Number,
    required: false,
  },
  validation: {
    type: Object,
    default() {
      return { valid: true, warning: "" }
    }
  },
})

defineEmits(['update:value', 'input'])

</script>

<style scoped lang="scss">

.text-field {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;

  & label {
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: 500;
    color: $c-on-background;
  }

  &-area {
    display: flex;
    min-width: calc(100% - 16px);
    max-width: calc(100% - 16px);
    max-height: 300px;
    min-height: 100px;
    background-color: transparent;
    border: none;
    outline: 2px solid;
    outline-color: $c-on-background;
    border-radius: $radius-m;
    padding: 8px;
    font-family: $f-sans;
    font-size: 0.95rem;
    font-weight: 500;
    transition: outline-color 150ms ease;
    color: $c-on-background;

    @include scrolbar-small($c-scroll-on-background);

    &:focus {
      outline-color: $c-secondary;
    }

    &-invalid {
      outline-color: $c-error !important;
    }
  }

  &-counter {
    align-self: flex-end;
    margin-top: 5px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  &-warning {
    margin-top: 5px;
    font-size: 0.8rem;
    font-weight: 500;
    color: $c-error;
  }
}

</style>
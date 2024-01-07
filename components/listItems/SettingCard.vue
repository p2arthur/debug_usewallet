<template>
  <div class="setting-card" :class="disabled ? 'setting-card-disabled' : ''">
    <div class="setting-card-icon">
      <slot name="icon"></slot>
    </div>

    <div class="setting-card-info">
      <span class="setting-card-info-title">{{ name }}</span>
      <span class="setting-card-info-description">{{ description }}</span>
    </div>

    <div class="setting-card-action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  name: {
    typeof: String,
    required: true,
  },
  description: {
    typeof: String,
    required: true,
  },
  disabled: {
    typeof: Boolean,
    required: false
  }
})

</script>

<style lang="scss">

.setting-card {
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 12px;
  color: $c-on-background;
  background-color: $c-background-1;
  box-shadow: $shadow-0;
  border-radius: $radius-m;
  gap: 16px;
  max-width: 768px;
  border: none;
  outline: 2px solid;
  outline-color: transparent;
  transition: outline-color 150ms ease;

  &-icon {
    display: flex;
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
    align-items: center;
    justify-content: center;
    color: inherit;

    & svg {
      height: 40px !important;
      width: 40px !important;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    flex-grow: 1;
    color: inherit;

    & span {
      margin: 0px;
    }

    &-title {
      font-size: 1.05rem;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: inherit;
    }

    &-description {
      font-size: 0.9rem;
      font-weight: 500;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: inherit;
    }
  }

  &-action {
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
  }

  &-disabled {
    color: $c-primary-transparent;
    background-color: $c-background-1;
    box-shadow: none;
    pointer-events: none;

    & .switch-label {
      outline-color: $c-primary-transparent;
    }

    & .switch-label-ball {
      background-color: $c-primary-transparent;
    }

    & .switch-input:checked + .switch-label {
      background-color: $c-primary-transparent;
    }
  }
}

</style>
<template>
  <div class="setting-area">
    <div class="setting-area-header">
      <div class="setting-area-header-icon">
        <slot name="icon"></slot>
      </div>

      <div class="setting-area-header-info">
        <span class="setting-area-header-info-title">{{ name }}</span>
        <span class="setting-area-header-info-description">{{ description }}</span>
      </div>
    </div>

    <div class="setting-area-content">
      <slot name="area"></slot>
    </div>

    <div class="setting-area-actions" @click="$emit('apply')" >
      <ButtonsTextButton :disabled="!showActions" >
        <span>Apply changes</span>
      </ButtonsTextButton>
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
  showActions: {
    typeof: String,
    required: false,
    default: false
  }
})

defineEmits(['apply'])

</script>

<style lang="scss">

.setting-area {
  display: flex;
  flex-direction: column;
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

  &-header {
    display: flex;
    gap: 16px;

    &-icon {
      display: flex;
      min-width: 40px;
      min-height: 40px;
      max-width: 40px;
      max-height: 40px;
      align-items: center;
      justify-content: center;
      color: $c-on-background;

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

      & span {
        margin: 0px;
      }

      &-title {
        font-size: 1.05rem;
        font-weight: 600;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      &-description {
        font-size: 0.9rem;
        font-weight: 500;
        text-overflow: ellipsis;
        line-height: 1.3rem;
        overflow: hidden;
      }
    }

    &-content {
      display: flex;
    }
  }

  &-actions {
    display: flex;
    justify-content: flex-end;
  }
}

</style>
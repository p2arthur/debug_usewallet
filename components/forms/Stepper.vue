<template>
  <div class="stepper-list">
    <router-link 
      v-for="(step, index) in steps"
      :key="index"
      :to="step.link"
      class="stepper-list-step"
      :class="$router.currentRoute.value.path === step.link ? 'stepper-list-step-active' : ''"
      @click.native="$emit('update')"
    >
      <div class="stepper-list-step-icon">
        <IconsRadioUnchecked v-if="step.status === 'OPEN'" />
        <IconsRadioChecked v-else-if="step.status === 'COMPLETED'" />
        <IconsLock v-else-if="step.status === 'LOCKED'" />
      </div>
      <div class="stepper-list-step-info">
        <span>{{ step.title }}</span>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">

import { PropType } from 'vue'
import { Step } from '@/stores/editNFT'

defineProps({
  steps: Array as PropType<Array<Step>>
})

defineEmits(['update'])

</script>

<style scoped lang="scss">

.stepper-list {
  display: flex;
  flex-direction: column;

  &-step {
    display: flex;
    align-items: center;
    height: 48px;
    gap: 16px;
    background-color: transparent;
    color: $c-on-background;
    border-radius: $radius-m;
    transition: background-color 150ms ease;

    &:hover {
      background-color: $c-primary-transparent;
      color: $c-on-background;
    }

    &-active {
      background-color: $c-primary-transparent;
    }

    &-icon {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;

      & svg {
        min-height: 36px;
        min-width: 36px;
      }
    }

    &-info {
      font-size: 1.1rem;
      font-weight: 500;
      color: $c-on-background;
    }
  }
}

</style>
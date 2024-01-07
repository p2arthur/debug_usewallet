<template>
  <!-- <router-link class="trait-card" :to="`/collections/mellows?${urlParams(trait)}`"> -->
  <div class="trait-card" :to="`/collections/mellows?${urlParams(trait)}`">
    <span class="trait-card-type">{{ trait.traitType }}</span>
    <span class="trait-card-value">{{ trait.value }}</span>
    <div class="trait-card-percentage">
      <!-- <span class="trait-card-percentage-number">{{ trait.percentage }}%</span>
      <div class="trait-card-percentage-bar">
        <div 
          class="trait-card-percentage-bar-fill"
          :style="`transform: translateX(-${100 - trait.percentage}%);`"
        />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">

import type { PropType } from 'vue'

interface Trait {
  traitType: string
  displayType: string
  value: string
}

defineProps({
  trait: {
    type: Object as PropType<Trait>,
    required: true
  }
})

function urlParams (trait: Trait) {
  return encodeURI(`traits={"${trait.traitType}":["${trait.value}"]}`)
}

</script>

<style scoped lang="scss">

.trait-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: $radius-m;
  background-color: $c-primary-transparent;
  color: $c-on-primary-transparent;
  min-width: 192px;
  min-height: 96px;
  transition: color 150ms ease, background-color 150ms ease;

  &:hover {
    background-color: $c-secondary-transparent;
    color: $c-on-secondary-transparent;

    .trait-card-percentage-bar {
      background-color: $c-secondary-transparent;
    }

    .trait-card-percentage-bar-fill {
      background-color: $c-on-secondary-transparent;
    }
  }

  &-type {
    color: inherit;
    font-size: 0.9rem;
    font-weight: 400;
  }

  &-value {
    color: inherit;
    font-size: 1.25rem;
    font-weight: 600;
  }

  &-percentage {
    color: inherit;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    &-number {
      color: inherit;
      font-size: 0.9rem;
      font-weight: 400;
    }

    &-bar {
      content: "";
      display: flex;
      position: relative;
      min-height: 4px;
      max-height: 4px;
      height: 4px;
      width: 100%;
      background-color: $c-primary-transparent;
      border-radius: $radius-ss;
      overflow: hidden;
      transition: color 150ms ease, background-color 150ms ease;

      &-fill {
        flex-grow: 1;
        position: absolute;
        min-height: 4px;
        max-height: 4px;
        height: 4px;
        width: 100%;
        background-color: $c-on-background;
        border-radius: $radius-ss;
        pointer-events: none;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        transition: color 150ms ease, background-color 150ms ease;
      }
    }
  }
}

</style>
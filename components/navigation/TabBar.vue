<template>
  <div class="tabbar">
    <button 
      v-for="(tab, i) in tabs" 
      :key="i"
      class="tabbar-button" 
      :class="tab.value === active.value ? 'tabbar-button-active' : ''"
      @click="$emit('change', tab)"
      :id="tab.value"
    >
      <span>{{ tab.name }}</span>
      <div class="tabbar-button-slider" v-show="tab.value === active.value"></div>
    </button>
  </div>
</template>

<script setup lang="ts">

import type { PropType } from "vue"

interface Tab {
  name: string
  value: any
  key?: string
}

const props = defineProps({
  tabs: {
    type: Object as PropType<Array<Tab>>,
    required: true,
  },
  active: {
    type: Object as PropType<Tab>,
    required: true,
  }
})

defineEmits({
  change(tab: Tab) {
    return tab
  }
})

onUpdated(() => {
})

</script>

<style scoped lang="scss">

.tabbar {
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  height: 38px;

  @include scrolbar-hidden;

  &-button {
    position: relative;
    display: flex;
    background-color: transparent;
    border: none;
    color: $c-on-background;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    margin: 0px;
    transition: color 150ms ease, background-color 150ms ease;
    border-radius: $radius-s;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    & span {
      transition: color 150ms ease;
      color: $c-on-background;
      font-size: 1rem;
      font-weight: 500;
      white-space: nowrap;
    }

    &:hover {
      background-color: $c-background-secondary;
      color: $c-secondary;

      & span {
        color: $c-secondary;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    &-active {
      color: $c-secondary;

      & span {
        color: $c-secondary;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    &:focus-visible {
      outline: none;
      background-color: $c-background-secondary;
      color: $c-secondary;

      & span {
        color: $c-secondary;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    &-slider {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: $c-secondary;
      content: "";
      min-width: 100%;
      min-height: 3px;
      border-radius: 2px;
    }
  }
}

</style>
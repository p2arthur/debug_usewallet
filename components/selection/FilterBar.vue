<template>
  <div class="filter-bar">
    <div class="filter-bar-switch">
      <SelectionTabSwitch
        style="background-color: transparent"
        :tabs="tabs" 
        :activeTab="activeTab"
        @change="changeTab"
      />
    </div>

    <div class="filter-bar-devider">
      <div class="filter-bar-devider-line"></div>
    </div>

    <div class="key-filter">
      <div class="key-filter-list" ref="swipelist">
        <slot name="active" ></slot>
      </div>

      <button class="key-filter-button" @click="expanded = !expanded">
        <IconsTune />
      </button>
    </div>

    <TransitionsExpand>
      <div class="filter-bar-expand" v-show="expanded">
        <slot name="options" ></slot>
      </div>
    </TransitionsExpand>
  </div>
</template>

<script setup lang="ts">

import type { FilterCombine } from "@/graphql/client"
import type { SwipeDirection } from '@vueuse/core'

const props = defineProps({
  combine: String as PropType<FilterCombine>
})

const emits = defineEmits(["update:combine","change"])

const expanded: Ref<boolean> = ref(false)

const activeTab = computed(() => {
  return tabs.find((tab) => tab.value === props.combine) || tabs[0]
})

const tabs = [
  { name: ' AND ', value: 'AND' },
  { name: ' OR ', value: 'OR' },
]

function changeTab (tab: { name: string, value: FilterCombine }) {
  emits("update:combine", tab.value)
  emits("change")
}

const swipelist: Ref<null | HTMLDivElement> = ref(null)
const swiper = usePointerSwipe(swipelist,{
  onSwipe(e: PointerEvent) {
    if (swipelist.value) {
      swipelist.value.scrollLeft -= e.movementX;
    }
  },

  onSwipeEnd(e:PointerEvent, direction: SwipeDirection) {
    if (swipelist.value) {
      swipelist.value.scrollLeft -= e.movementX;
    }
  }
})

</script>

<style scoped lang="scss">

.key-filter {
  display: flex;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;

  &-list {
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 0px 4px;
    gap: 8px;
    border-radius: $radius-s;
    overflow-x: scroll;
    @include scrolbar-hidden;

    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    &:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }

    -webkit-overflow-scrolling: touch;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    border-radius: $radius-s;
    background-color: transparent;
    border: none;
    color: $c-on-background;
    width: 40px;
    height: 40px;
    transition: background-color 150ms ease;
    cursor: pointer;

    &:hover {
      background-color: $c-primary-transparent;
    }
  }
}

.filter-bar {
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 100%;
  border-radius: $radius-m;
  background-color: $c-primary-transparent;

  &-devider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8px;
    height: 100%;

    &-line {
      content: "";
      width: 2px;
      height: 38px;
      border-radius: $radius-m;
      background-color: $c-primary-transparent;
    }
  }

  &-switch {
    display: flex;
  }

  &-expand {
    position: absolute;
    top: calc(48px + 8px);
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: calc(100% - 16px);
    padding: 8px;
    background-color: $c-primary-flat;
    border-radius: $radius-m;
    color: $c-on-background;
    box-shadow: $shadow-3;
    z-index: 10;
    max-height: min(80vh, 512px);
    overflow-y: scroll;

    @include scrolbar-small($c-scroll-on-background);
  }
}

</style>
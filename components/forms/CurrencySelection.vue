<template>
  <div class="option" v-click-outside @clickOutside="open = false">
    <button class="option-display" @click="open = true">
      <IconsCurrencyByTag class="option-display-leading" :tag="selected.symbol" :key="selected.symbol" />
      <span class="option-display-text">{{ selected.name }}</span>
      <IconsUnfold class="option-display-icon" />
    </button>

    <div class="option-select" v-show="open">
      <div class="option-select-list">
        <template v-for="(option, i) in options" :key="i" >
          <button 
            class="option-select-list-button" 
            tabindex="0" 
            :class="selected && option.index === selected.index ? 'option-select-list-button-active' : ''"
            :id="option.symbol"
            @click="$emit('change', option), open = false"
          >
            <div class="option-select-list-selector" />
            <div class="option-select-list-display">
              <IconsCurrencyByTag class="option-select-list-display-icon" :tag="option.symbol" />
              <span class="option-select-list-display-text">{{ option.name }}</span>
            </div>
          </button>
        </template>
      </div>
    </div>
  </div>
</template> 

<script setup lang="ts">

import type { PropType } from "vue"
import type { Currency } from "@/functions/prices/currencyLists"

const props = defineProps({
  /**
   * Always supply the starting value for the option box and update the value upon the @change event. 
   * There is no internal management of this state to prevent a mismatch between the parent and child components.
   */
  selected: {
    type: Object as PropType<Currency>,
    required: true,
  },
  /**
   * Available options in the selection list. The `display` value will be used as the visible text in the list. The `value` and `display` will be passed along with the @change emit.
   */
  options: {
    type: Array as PropType<Array<Currency>>,
    required: true,
  }
})

defineEmits(['change'])

const open = ref(false)

onUpdated(() => {
  if (props.selected) {
    document.getElementById(`${props.selected.symbol}`)?.focus()
  }
})

</script>

<style scoped lang="scss">

.option {
  position: relative;
  display: flex;
  height: 48px;
  min-width: 148px;

  &-display {
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 0px 8px;
    width: 100%;
    border: none;
    background-color: $c-primary-flat;
    border-radius: $radius-s;
    color: $c-on-background;
    cursor: pointer;
    outline: 2px solid;
    outline-color: transparent;
    transition: outline-color 150ms ease;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
    gap: 12px;

    &-leading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
    }

    &-text {
      font-weight: 500;
      font-size: 1.1rem;
      white-space: nowrap;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      flex-grow: 1;
      text-align: left;
    }

    &-icon {
      color: $c-on-background;
      width: 20px !important;
      height: 20px !important;
    }

    &:focus-visible {
      border: none;
      outline-color: $c-on-background;
    }
  }

  &-select {
    position: absolute;
    display: flex;
    width: calc(100% - 8px);
    padding: 4px;
    background-color: $c-primary-flat;
    border-radius: $radius-s;
    color: $c-on-background;
    box-shadow: $shadow-3;
    transform: translate(0, calc(-50% + 20px));
    max-height: 256px;
    overflow-y: scroll;
    z-index: 10;

    @include scrolbar-small($c-scroll-on-background);

    &-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 4px;

      &-button {
        position: relative;
        display: flex;
        align-items: center;
        border: none;
        outline: none;
        background-color: transparent;
        color: $c-on-background;
        margin: 0px;
        padding: 0px;
        cursor: pointer;
        transition: background-color 100ms ease;
        border-radius: $radius-s;

        &:hover {
          background-color: $c-primary-transparent;
        }

        &:focus-visible {
          border: none;

          .option-select-list-selector {
            transform: scaleY(1);
          }
        }

        &-active {
          .option-select-list-selector {
            transform: scaleY(1);
          }
        }
      }

      &-display {
        display: flex;
        align-items: center;
        margin: 0px;
        padding: 0px;
        height: 32px;
        width: 100%;
        margin-left: 8px;
        overflow: hidden;
        gap: 12px;

        &-icon {
          height: 20px !important;
          width: 20px !important;
        }

        &-text {
          font-weight: 500;
          font-size: 0.95rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      &-selector {
        position: absolute;
        content: "";
        min-height: 24px;
        width: 4px;
        border-radius: 3px;
        background-color: $c-secondary;
        transform: scaleY(0);
        transition: transform 200ms ease;
      }
    }
  }
}

</style>
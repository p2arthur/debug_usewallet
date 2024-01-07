<template>
  <div class="sort" v-click-outside @clickOutside="open && !isDesktop ? open = open : open = false">
    <button class="sort-display" @click.stop="open = !open" :class="(open && !isDesktop) ? 'sort-display-active' : ''">
      <span class="sort-display-text" v-if="isDesktop">{{ selected.display }}</span>
      <IconsSort />
    </button>

    <div class="sort-select" v-show="open && isDesktop">
      <div class="sort-select-list">
        <div class="sort-select-list-header">
          <span class="sort-select-list-header-title">Sort by:</span>
          <div class="sort-select-list-header-seperator" />
        </div>

        <template v-for="(option, i) in options" :key="i">
          <button class="sort-select-list-button" tabindex="0"
            :class="option.display === selected.display ? 'sort-select-list-button-active' : ''" :id="option.display"
            @click="$emit('change', option), open = false">
            <div class="sort-select-list-selector" />
            <div class="sort-select-list-display">
              <span class="sort-select-list-display-text">{{ option.display }}</span>
            </div>
          </button>
        </template>
      </div>
    </div>

    <DisplaysBottomSheet v-if="!isDesktop && mounted" :open="open" @close="open = false">
      <div class="sort-sheet-select-list">
        <div class="sort-sheet-select-list-header">
          <span class="sort-sheet-select-list-header-title">Sort by:</span>
          <div class="sort-sheet-select-list-header-seperator" />
        </div>

        <button v-for="(option, i) in options" :key="i" class="sort-sheet-select-list-button"
          :class="option.display === selected.display ? 'sort-sheet-select-list-button-active' : ''" :id="option.display"
          @click="$emit('change', option), open = false">
          <div class="sort-sheet-select-list-selector" />
          <div class="sort-sheet-select-list-display">
            <span class="sort-sheet-select-list-display-text">{{ option.display }}</span>
          </div>
        </button>
      </div>
    </DisplaysBottomSheet>
  </div>
</template> 

<script setup lang="ts">

import type { PropType } from "vue"

interface Option {
  display: string
  value: any
}

const props = defineProps({
  /**
   * Always supply the starting value for the option box and update the value upon the @change event. 
   * There is no internal management of this state to prevent a mismatch between the parent and child components.
   */
  selected: {
    type: Object as PropType<Option>,
    required: true,
  },
  /**
   * Available options in the selection list. The `display` value will be used as the visible text in the list. The `value` and `display` will be passed along with the @change emit.
   */
  options: {
    type: Array as PropType<Array<Option>>,
    required: true,
  }
})

defineEmits(['change'])

const open = ref(false)

onUpdated(() => {
  document.getElementById(`${props.selected.display}`)?.focus()
})

const isDesktop = useIsDesktop()


const mounted = ref(false)

await onMounted(async () => {
  await nextTick()
  mounted.value = true
})

</script>

<style scoped lang="scss">
.sort {
  position: relative;
  display: flex;
  height: 48px;

  @media screen and (min-width: calc($headerbar-thin-breakpoint + 1px)) {
    min-width: 148px;
  }

  @media screen and (max-width: $headerbar-thin-breakpoint) {
    min-width: 48px;
  }

  &-display {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 0px 8px;
    gap: 8px;
    width: 100%;
    border: none;
    background-color: $c-primary-flat;
    border-radius: $radius-m;
    color: $c-on-background;
    cursor: pointer;
    outline: 2px solid;
    outline-color: transparent;
    transition: outline-color 150ms ease;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;

    &-text {
      font-weight: 500;
      font-size: 0.95rem;
      white-space: nowrap;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &-icon {
      color: inherit;
      width: 20px !important;
      height: 20px !important;
    }

    &:focus-visible {
      border: none;
      outline-color: $c-on-background;
    }

    &-active {
      background-color: $c-primary;
      color: $c-on-primary;
    }
  }

  &-select {
    position: absolute;
    top: 56px;
    display: flex;
    width: calc(100% - 8px);
    padding: 4px;
    background-color: $c-primary-flat;
    border-radius: $radius-s;
    color: $c-on-background;
    box-shadow: $shadow-3;
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

        &:focus-visible {
          border: none;

          .sort-select-list-selector {
            transform: scaleY(1);
          }
        }

        &:hover {
          .sort-select-list-selector {
            transform: scaleY(1);
          }
        }

        &-active {
          .sort-select-list-selector {
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

      &-header {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-left: 4px;

        &-title {
          font-weight: 400;
          font-size: 0.9rem;
        }

        &-seperator {
          content: "";
          height: 2px;
          border-radius: 2px;
          background-color: $c-divider;
          width: 100%;
        }
      }
    }
  }

  &-sheet-select-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;

    &-header {
      display: flex;
      flex-direction: column;
      gap: 8px;

      &-title {
        color: $c-on-primary;
        font-weight: 400;
        font-size: 1rem;
      }

      &-seperator {
        content: "";
        height: 2px;
        border-radius: 2px;
        background-color: $c-divider;
        width: 100%;
      }
    }

    &-button {
      position: relative;
      display: flex;
      align-items: center;
      border: none;
      outline: none;
      background-color: transparent;
      color: $c-on-primary;
      margin: 0px;
      padding: 8px 0px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      &:focus-visible {
        border: none;

        .sort-sheet-select-list-selector {
          transform: scaleY(1);
        }
      }

      &:hover {
        .sort-sheet-select-list-selector {
          transform: scaleY(1);
        }
      }

      &-active {
        .sort-sheet-select-list-selector {
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
      margin-left: 16px;
      overflow: hidden;

      &-text {
        color: $c-on-primary;
        font-weight: 400;
        font-size: 1.2rem;
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
</style>
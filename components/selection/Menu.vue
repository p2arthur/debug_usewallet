<template>
  <div class="dropdown-menu" v-click-outside @clickOutside="open = false">
    <div class="dropdown-menu-button">
      <ButtonsIcon 
        tabindex="0" 
        type="menu"
        @click="open = !open"
      >
        <slot />
      </ButtonsIcon>
    </div>

    <TransitionsExpand>
      <div class="dropdown-menu-expand" v-show="open && isDesktop">
        <ul 
          class="dropdown-menu-expand-list" 
          role="menu"
          tabindex="-1"
        >
          <li 
            class="dropdown-menu-expand-list-item"
            role="presentation"
            v-for="(action, index) in actions"
            :key="`menu-item-${index}`"
            
          >
            <button
              class="dropdown-menu-expand-list-item-button"
              role="menuitem"
              @click="open = false, action.action(id)"
            >
              <component 
                class="dropdown-menu-expand-list-item-button-icon"
                :is="resolveComponent(action.icon)"
              />
              <span>{{ action.name }}</span>
            </button>
          </li>
        </ul>
      </div>
    </TransitionsExpand>

    <ClientOnly v-if="!isDesktop">
      <Teleport :disabled="!mounted" to="#mobile-base">
        <div class="bottom-sheet-wrapper" v-click-outside @clickOutside="$emit('close')">
          <div 
            class="bottom-sheet-card" 
            :class="open ? 'bottom-sheet-card-open' : ''"
            :style="`transform: translateY(${open ? y : 100 }%);`"
          >
            <div class="bottom-sheet-card-handle" ref="bar">
              <div class="bottom-sheet-card-handle-bar" />
            </div>

            <div class="bottom-sheet-card-content" ref="card">
              <ul 
                class="dropdown-menu-sheet-list" 
                role="menu"
                tabindex="-1"
              >
                <li 
                  class="dropdown-menu-sheet-list-item"
                  role="presentation"
                  v-for="(action, index) in actions"
                  :key="`menu-item-${index}`"
                  
                >
                  <button
                    class="dropdown-menu-sheet-list-item-button"
                    role="menuitem"
                    @click="open = false, action.action(id)"
                  >
                    <component 
                      class="dropdown-menu-sheet-list-item-button-icon"
                      :is="resolveComponent(action.icon)"
                    />
                    <span>{{ action.name }}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template> 

<script setup lang="ts">

import type { PropType } from 'vue';

export interface MenuItem {
  name: string
  icon: string
  action: (id?: string) => void
}

defineProps({
  id: String,
  actions: Array as PropType<Array<MenuItem>>
})

const isDesktop = useIsDesktop()
const open = ref(false)
const mounted = ref(false)

await onMounted(async () => {
  await nextTick()
  mounted.value = true
})


// Sheet tap handler
const bar: Ref<HTMLDivElement | undefined> = ref(undefined)
const card: Ref<HTMLDivElement | undefined> = ref(undefined)
const y = ref(0)
const clientY = ref(0)
const drag = ref(false)

function startDrag () {
  drag.value = true
}

function endDrag () {
  drag.value = false
  
  if (y.value > 50) {
    // y.value = 100
    open.value = false
    y.value = 0
  } else {
    y.value = 0
  }
}

function draggin (e: MouseEvent) {
  if (drag.value && card.value?.clientHeight) {
    y.value += (Math.max(e.movementY, 0) / card.value?.clientHeight) * 100

    if (y.value > 50) {
      // y.value = 100
      open.value = false
      y.value = 0
      drag.value = false
    }
  }
}

function touchmove (e: TouchEvent) {
  if (drag.value && card.value?.clientHeight) {
    if (clientY.value === 0) {
      clientY.value = e.touches[0].clientY
    }

    const movementY = e.touches[0].clientY - clientY.value

    y.value += (Math.max(movementY, 0) / card.value?.clientHeight) * 100
    clientY.value = e.touches[0].clientY

    if (y.value > 50) {
      // y.value = 100
      open.value = false
      y.value = 0
      drag.value = false
    }
  }
}

await onMounted(async () => {
  await nextTick()
  bar.value?.addEventListener('mousedown', startDrag)
  bar.value?.addEventListener('touchstart', startDrag)
  window.addEventListener('mousemove', draggin)
  window.addEventListener('touchmove', touchmove)
  window.addEventListener('touchend', endDrag)
  window.addEventListener('touchcancel', endDrag)
  window.addEventListener('mouseup', endDrag)
})

</script>

<style scoped lang="scss">

.dropdown-menu {
  display: flex;
  position: relative;

  &-button {

  }

  &-expand {
    z-index: 10;
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    padding: 8px 0px;
    border-radius: $radius-s;
    background-color: $c-primary;
    box-shadow: $shadow-3;
    min-width: 112px;
    max-width: 280px;
    overflow: hidden;

    &-list {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      min-width: 100%;

      &-item {
        display: flex;

        &-button {
          display: flex;
          flex-grow: 1;
          align-items: center;
          height: 48px;
          padding: 0px 12px;
          margin: 0px;
          gap: 12px;
          border: none;
          background-color: transparent;
          color: $c-on-primary;
          outline: none;
          transition: background-color 100ms ease;
          cursor: pointer;

          &:hover {
            background-color: $c-hover-on-primary;
          }

          &:focus-visible {
            background-color: $c-hover-on-primary;
          }

          & span {
            white-space: nowrap;
            color: inherit;
            font-size: 0.9rem;
            font-weight: 500;
          }

          &-icon {
            color: inherit;
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }

  &-sheet-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    width: 100%;

    &-item {
      display: flex;

      &-button {
        display: flex;
        flex-grow: 1;
        align-items: center;
        height: 48px;
        padding: 0px 12px;
        margin: 0px;
        gap: 24px;
        border: none;
        background-color: transparent;
        color: $c-on-primary;
        outline: none;
        transition: background-color   100ms ease;
        border-radius: $radius-m;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;

        &:hover {
          background-color: $c-hover-on-primary;
        }

        &:focus-visible {
          background-color: $c-hover-on-primary;
        }

        & span {
          white-space: nowrap;
          color: inherit;
          font-size: 1.15rem;
          font-weight: 400;
        }

        &-icon {
          color: inherit;
          width: 32px !important;
          height: 32px !important;
        }
      }
    }
  }
}

.bottom-sheet {
  &-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 92;
    pointer-events: none;
  }

  &-card {
    display: flex;
    flex-direction: column;
    width: min(100%, 640px);
    // min-height: 400px;
    max-height: min(80vh, 400px);
    background-color: $c-primary;
    border-radius: $radius-xl $radius-xl 0px 0px;
    box-shadow: $shadow-3;
    transform: translateY(100%);
    transition: transform 300ms ease;
    pointer-events: all;

    // &-open {
    //   transform: translateY(0);
    // }

    &-handle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 36px;
      min-height: 36px;

      &-bar {
        content: "";
        height: 4px;
        border-radius: 2px;
        background-color: $c-divider;
        width: 64px;
      }
    }

    &-content {
      display: flex;
      padding: 0px 16px 16px 16px;
      margin-bottom: 16px;
      overflow-y: auto;
      @include scrolbar-small($c-divider);
    }
  }
}

</style>
<template>
  <teleport :disabled="!mounted" to="#mobile-base">
    <div class="bottom-sheet-wrapper" v-click-outside @clickOutside="$emit('close')">
      <div 
        class="bottom-sheet-card" 
        :class="open ? 'bottom-sheet-card-open' : ''"
        :style="`transform: translateY(${y}%);`"
      >
        <div class="bottom-sheet-card-handle" ref="bar">
          <div class="bottom-sheet-card-handle-bar" />
        </div>

        <div class="bottom-sheet-card-content" ref="card">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">

import type { Ref } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  }
})

const emits = defineEmits(['close'])

const mounted = ref(false)

await onMounted(async () => {
  await nextTick()
  mounted.value = true
})

// Sheet tap handler
const bar: Ref<HTMLDivElement | undefined> = ref(undefined)
const card: Ref<HTMLDivElement | undefined> = ref(undefined)
const y = ref(100)
const clientY = ref(0)
const drag = ref(false)

function startDrag () {
  drag.value = true
}

function endDrag () {
  drag.value = false
  
  if (y.value > 50) {
    y.value = 100
    emits('close')
  } else {
    y.value = 0
  }
}

function draggin (e: MouseEvent) {
  if (drag.value && card.value?.clientHeight) {
    y.value += (Math.max(e.movementY, 0) / card.value?.clientHeight) * 100

    if (y.value > 50) {
      y.value = 100
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
      y.value = 100
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

watch(props, () => {
  if (props.open) {
    y.value = 0
  } else {
    y.value = 100
  }
})

</script>

<style scoped lang="scss">

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
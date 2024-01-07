<template>
  <div class="fixed-tooltip" >
    <ClientOnly>
      <teleport to="#desktop-base">
        <TransitionsOpacity>
          <div
            v-if="inside"
            ref="tip"
            class="fixed-tooltip-card"
            :style="`
              left: ${x + width / 2 - tipSize.width.value / 2}px;
              top: ${y - tipSize.height.value - padding}px;
            `"
          >
            <slot name="tooltip"></slot>
          </div>
        </TransitionsOpacity> 
      </teleport>
    </ClientOnly>

    <div class="fixed-tooltip-content" ref="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

const content = ref(null)
const { x, y, width } = useElementBounding(content)
const { isOutside } = useMouseInElement(content)
const padding = 8

const tip = ref(null)
const tipSize = useElementBounding(tip)
const tipHover = useMouseInElement(tip)
const inside = ref(false)
let timeout = ref()

watch([isOutside, tipHover.isOutside], () => {
  if (timeout.value) {
    clearTimeout(timeout.value)
  }

  timeout.value = setTimeout(() => {
    inside.value = !(isOutside.value && tipHover.isOutside.value)
  }, 200);
})

</script>

<style scoped lang="scss">

.fixed-tooltip {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;

  &-card {
    display: flex;
    position: fixed;
    background-color: $c-background-1;
    border-radius: $radius-sm;
    box-shadow: $shadow-3;
    cursor: default;
    z-index: 90;
  }

  &-content {
    cursor: pointer;
  }
}

</style>
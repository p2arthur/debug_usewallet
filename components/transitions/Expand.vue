<template>
  <Transition
    
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">

function enter (element: HTMLElement) {
  const width = getComputedStyle(element).width;

  element.style.width = width;
  element.style.position = 'absolute';
  element.style.visibility = 'hidden';
  element.style.height = 'auto';

  const height = getComputedStyle(element).height;

  element.style.width = "";
  element.style.position = "";
  element.style.visibility = "";
  element.style.height = "0";
  
  // Force repaint to make sure the
  // animation is triggered correctly.
  getComputedStyle(element).height;

  // Make transition duration based on height
  element.style.setProperty('transition', `height ${Math.round(Number(height.replace('px','')))}ms ease-in-out`)

  // Trigger the animation.
  // We use `requestAnimationFrame` because we need
  // to make sure the browser has finished
  // painting after setting the `height`
  // to `0` in the line above.
  requestAnimationFrame(() => {
    element.style.height = height;
  });
}

function afterEnter(element: HTMLElement) {
  element.style.height = 'auto';
}

function leave(element: HTMLElement) {

  const height = getComputedStyle(element).height;
  
  element.style.height = height;

  // Force repaint to make sure the
  // animation is triggered correctly.
  getComputedStyle(element).height;

  requestAnimationFrame(() => {
    element.style.height = "0";
  });
}

</script>

<style scoped lang="scss">

* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 1s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}

</style>
<template>
  <div class="overlay">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 90;
  pointer-events: none;

  @media screen and (min-width: $sidebar-wide-breakpoint) {
    left: $sidebar-wide;
    width: calc(100vw - $sidebar-wide);
  }

  @media screen and (min-width: calc($sidebar-thin-breakpoint + 1px)) and (max-width: calc($sidebar-wide-breakpoint - 1px)) {
    left: $sidebar-thin;
    width: calc(100vw - $sidebar-thin);
  }

  @media screen and (max-width: $sidebar-thin-breakpoint) {
    left: 0;
    width: 100vw;
  }
}

.modal {
  position: relative;
  border-radius: $radius-l;
  box-shadow: $shadow-3;
  background-color: $c-background-1;
  pointer-events: all;
  overflow-y: auto;
  max-height: 100vh;

  @include scrolbar-right($c-scroll-on-background, $c-background-1);

  @media screen and (max-width: $sidebar-thin-breakpoint) {
    left: 0;
    width: 100vw;
    height: calc(100vh - 80px);
    border-radius: 0px;
    padding-bottom: 80px;
  }
}
</style>
<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.v-enter-active,
.v-leave-active {
  transition: opacity 200ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
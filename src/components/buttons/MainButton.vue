<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['text', 'variant', 'action', 'icon']);
</script>

<template>
  <button
    class="main-button"
    @click="props.action">
    <slot class="button-slot"></slot>
  </button>
</template>

<style lang="scss">
  .main-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    border: 2px solid #ffffff;
    font-size: 1.2rem;
    color: white;
    border-radius: 10px;
    background: transparent;
    cursor: pointer;
    width: 100%;
    &:hover {
      background: #ffffff;
      color: #9e86ff;
    }

    .button-slot {
      display: flex;
    }
  }
</style>

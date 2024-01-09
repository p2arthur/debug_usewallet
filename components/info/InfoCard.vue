<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['data']);
</script>

<template>
  <div class="info-container">
    <h1>{{ data.title }}</h1>
    <div class="info-description"></div>
  </div>
</template>

<style lang="scss">
  .info-container {
    padding: 10px;
    background-color: rgb(4, 1, 27);
    width: 33%;
    border-radius: 10px;
  }
</style>

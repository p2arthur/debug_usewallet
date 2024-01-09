<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['data', 'index']);
</script>

<template>
  <div class="info-card">
    <h1 class="info-card-title">{{ data.title }}</h1>
    <div class="info-description">{{ data.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
  .info-card {
    padding: 10px;
    background-color: rgb(8, 7, 18);
    width: 33%;
    border-radius: 10px;
  }

  .info-card-title {
    font-size: 24px;
  }

  .info-description {
    color: rgb(179, 179, 179);
  }
</style>

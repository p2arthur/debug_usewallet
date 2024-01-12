<!-- @format -->

<script setup lang="ts">
  import { openUrl } from '../../functions/openUrl';
  const props = defineProps(['item']);
</script>

<template>
  <div class="carousel-card">
    <img
      class="carousel-item-image"
      :src="item.src"
      :alt="item.alt"
      @click="openUrl(item.url)" />
  </div>
</template>

<style>
  .carousel-card {
    background: red;
    padding: 10px;
    width: 100px; /* Add any additional styling for carousel items */
  }
  .carousel-item-image {
    object-fit: fit;
    width: 100%;
  }
</style>

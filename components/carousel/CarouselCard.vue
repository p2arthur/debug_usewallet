<!-- @format -->

<script setup lang="ts">
  import { openUrl } from '../../functions/openUrl';
  const props = defineProps(['item']);
</script>

<template>
  <div class="carousel-card">
    <img
      class="carousel-card-image"
      :src="item.src"
      :alt="item.alt"
      @click="openUrl(item.url)" />
    <div class="carousel-card-text">
      <h3 class="carousel-card-title">{{ item.name }}</h3>
    </div>
  </div>
</template>

<style>
  .carousel-card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.082);
    overflow: hidden;
  }
  .carousel-card-image {
    object-fit: fit;
    object-fit: fill;
    height: 100%;
    width: 100%;
  }

  .carousel-card-title {
    margin: 0;
  }

  @media (max-width: 768px) {
    .carousel-card {
      width: 120px;
    }
  }
</style>

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
    border: 2px solid #9e86ff;
    border-radius: 10px;
    width: 150px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.082);
  }
  .carousel-card-image {
    object-fit: fit;
    width: 100%;
  }

  .carousel-card-text {
    padding: 10px 0;
  }

  .carousel-card-title {
    margin: 0;
  }
</style>

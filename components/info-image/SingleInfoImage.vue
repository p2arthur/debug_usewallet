<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['infoObject', 'index']);
</script>
<template>
  <div class="info-card-container">
    <div class="image-section">
      <img
        class="info-card-main-image"
        :src="infoObject.mainImage" />
    </div>
    <div class="description-section">
      <div class="text-container">
        <h1 class="card-title">{{ infoObject.title }}</h1>
        <p class="card-description">{{ infoObject.description }}</p>
      </div>
    </div>
  </div>
</template>
<style>
  .info-card-container {
    display: flex;
    flex-direction: reverse;
    align-items: center;
    width: 100%;
    height: 300px;
  }

  .image-section {
    display: flex;
    justify-content: center;
    width: 50%;

    .info-card-main-image {
      width: 60%;
    }
  }

  .description-section {
    width: 50%;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgb(6, 5, 10);
    padding: 20px;
    border-radius: 10px;
    width: 80%;
  }

  .card-title {
    margin: 0;
    color: rgb(179, 108, 255);
  }
</style>

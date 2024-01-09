<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['infoObject', 'position']);
</script>
<template>
  <div class="infoContainer">
    <div class="left-section">
      <img
        :src="infoObject.image"
        alt="Descrição do Card Esquerdo" />
      <div class="card-description"></div>
    </div>
    <div class="right-section">
      <img :alt="infoObject.title" />
      <div class="card-description">
        <div class="text-container">
          <h1 style="color: #e35151">{{ infoObject.title }}</h1>
          {{ infoObject.description }}.
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .infoContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;

    min-height: 600px;
  }
</style>

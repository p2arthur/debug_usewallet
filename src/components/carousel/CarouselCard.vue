<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['item']);
</script>

<template>
  <div class="carousel-card">
    <img
      class="carousel-card-image"
      :src="item.src"
      :alt="item.alt" />
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
    border-radius: 10px;
    align-items: center;
    width: 200px;
    background: linear-gradient(
      to bottom right,
      rgba(43, 31, 88, 0.97),
      rgb(40, 36, 52)
    );
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.082);
    overflow: hidden;

    &:hover {
      transition: 0.1s ease-in-out;
      scale: 105%;
      box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.082);
    }
  }
  .carousel-card-image {
    object-fit: fit;
    object-fit: fill;
    height: 100%;
    width: 100%;
  }

  .carousel-card-title {
    padding: 10px 0px;
    margin: 0;
  }

  @media (max-width: 768px) {
    .carousel-card {
      width: 110px;
    }

    .carousel-card-title {
      font-size: 0.8rem;
    }
  }
</style>

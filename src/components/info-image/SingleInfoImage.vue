<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['infoObject', 'index']);
</script>
<template>
  <div
    :class="{
      'info-card-container': true,
      'info-card-container-reverse': index % 2 !== 0,
    }">
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
  /* Common styles for both desktop and mobile */
  .info-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    &.info-card-container-reverse {
      flex-direction: row-reverse;
    }
  }

  .image-section {
    flex: 0 0 30%;
    max-width: 40%;
  }

  .info-card-main-image {
    animation: breath 2s infinite;
    width: 100%;
  }

  .description-section {
    display: flex;
    flex: 0 0 60%;
    justify-content: center;
    max-width: 80%;
  }

  .text-container {
    background: radial-gradient(rgba(33, 27, 27, 0.215), #64498a1b);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.374);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.082);
  }

  .card-title {
    font-size: 32px;
    margin: 0;
    color: rgb(179, 108, 255);
  }

  .card-description {
    color: rgb(170, 170, 170);
    line-height: 2rem;
    font-size: 1.3rem;
  }

  @keyframes breath {
    0%,
    100% {
      transform: translateY(-1%);
      animation-timing-function: ease-in-out;
    }
    50% {
      transform: translateY(-0.3%) scale(100.5%);
      animation-timing-function: ease-in-out;
    }
  }

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    .info-card-container {
      height: auto;
      gap: 10px;
    }

    .image-section,
    .description-section {
      display: flex;
      flex: 0 0 100%;
      justify-content: center;
      max-width: 100%;
    }

    .info-card-main-image {
      max-width: 80%; /* Make the image fill the container */
    }

    .card-title {
      text-align: center;
      font-size: 2rem; /* Reduce the font size for better readability on smaller screens */
    }

    .card-description {
      text-align: center;
      line-height: 1.5rem;
      font-size: 1.2rem; /* Adjust the font size for better readability on smaller screens */
    }
  }
</style>

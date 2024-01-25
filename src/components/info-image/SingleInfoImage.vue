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
    border-radius: 1000px 0 0 1000px;
    background: linear-gradient(
      to bottom right,
      rgba(14, 10, 30, 0.96),
      rgba(26, 20, 45, 0)
    );
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    &.info-card-container-reverse {
      border-radius: 0 1000px 1000px 0;
      flex-direction: row-reverse;
      background: linear-gradient(
        to bottom left,
        rgba(14, 10, 30, 0.96),
        rgba(26, 20, 45, 0)
      );
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 10px;
  }

  .card-title {
    font-size: 64px;
    margin: 0;
    color: rgb(179, 108, 255);
  }

  .card-description {
    text-align: center;
    color: rgb(170, 170, 170);
    line-height: 2rem;
    font-size: 1.5rem;
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
      background: transparent;
      height: auto;
      gap: 10px;

      &.info-card-container-reverse {
        background: transparent;
      }
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
      font-size: 3rem; /* Reduce the font size for better readability on smaller screens */
    }

    .card-description {
      text-align: center;
      line-height: 1.5rem;
      font-size: 1.2rem; /* Adjust the font size for better readability on smaller screens */
    }
  }
</style>

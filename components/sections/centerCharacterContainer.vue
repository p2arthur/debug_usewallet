<!-- @format -->

<script setup lang="ts">
  import NikoInfoCard from '../niko/NikoInfoCard.vue';
</script>

<template>
  <div class="center-container">
    <div class="niko-section-bg">
      <img
        src="/img/niko-background.png"
        alt="" />
    </div>
    <div class="center-header">
      <img
        class="center-avatar-image"
        src="/img/center_character.png"
        alt="Character" />
      <NikoInfoCard />
    </div>
  </div>
</template>

<style scoped>
  .center-container {
    height: 600px;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: rgb(19, 17, 33);
  }

  .niko-section-bg {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .niko-section-bg img {
    animation: expand 3s infinite;
    width: 100%;
    height: 100%;
    object-fit: cover; /* This ensures the image covers the whole container */
  }

  .center-header {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .center-avatar-image {
      animation: breath 3s infinite;
    }
  }

  @media (max-width: 768px) {
    .center-avatar-image {
      height: 100%;
      width: 100%;
    }
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

  @keyframes expand {
    0%,
    100% {
      transform: scale(101%);
      animation-timing-function: ease-in-out;
    }
    50% {
      transform: scale(100.5%);
      animation-timing-function: ease-in-out;
    }
  }
</style>

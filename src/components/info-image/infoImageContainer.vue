<!-- @format -->

<script setup lang="ts">
  import SingleInfoImage from '../info-image/SingleInfoImage.vue';
  const props = defineProps(['infoObjects']);
</script>

<template>
  <div class="full-container">
    <SingleInfoImage
      v-for="(info, index) in infoObjects"
      :infoObject="info"
      :index="index" />
    <div class="background-effect"></div>
  </div>
</template>

<style scoped>
  @font-face {
    font-family: 'Helvetica Neue 700';
    src: url('/fonts/helvetica-neue/700.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue 400';
    src: url('/fonts/helvetica-neue/400.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  .full-container {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 70px;
    background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
    padding: 50px 100px 200px 100px;
  }

  .background-effect {
    animation: breath 6s infinite;
    width: 100%;
    z-index: 1;
    opacity: 5%;
    position: absolute;

    &img {
      width: 30%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    .full-container {
      gap: 30px;
      padding: 50px 20px;
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
</style>

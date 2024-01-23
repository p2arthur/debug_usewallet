<!-- @format -->

<script setup lang="ts">
  import NikoInfoCard from '../niko/NikoInfoCard.vue';
  onMounted(() => {
    // Dynamically add the spline viewer script when the component is mounted
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
    document.head.appendChild(script);
  });
</script>

<template>
  <div class="center-container">
    <div class="niko-section-bg">
      <spline-viewer
        loading="eager"
        events-target="local"
        class="coins-spline-viewer"
        url="https://prod.spline.design/C38mQ7SqfaE0gob0/scene.splinecode"></spline-viewer>
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
    background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
  }

  .niko-section-bg {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .center-header {
    pointer-events: none;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .center-avatar-image {
      animation: breath 3s infinite;
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
  @media (max-width: 1000px) {
    .center-avatar-image {
      width: 100%;
      position: absolute;
    }
  }
</style>

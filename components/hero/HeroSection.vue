<!-- @format -->

<script setup lang="ts"></script>

<template>
  <section class="hero-section">
    <div class="hero-backdrop"></div>
    <div class="hero-image-container">
      <img class="hero-image" src="/img/background_home2.png" />
    </div>
    <div class="hero-section-info">
      <img class="hero-logo" src="/img/rxelms_logo.png" alt="Logo Rxelms" />
      <h2>Build your place!</h2>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  position: relative;

  .hero-backdrop {
    position: absolute;
    background: radial-gradient(rgba(0, 0, 0, 0.215), #6a00ff1b);
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.5px);
  }
}
.hero-image-container {
  overflow: hidden;
  height: 100%;
  width: 100vw;
  .hero-image {
    object-fit: contain;
    width: 100%;
  }
}

.hero-section-info {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hero-logo {
    width: 40%;
  }
}
</style>

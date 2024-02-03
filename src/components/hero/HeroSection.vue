<!-- @format -->

<script setup lang="ts">
  import MainButton from '../buttons/MainButton.vue';
  import { useModalStore } from '~/stores/interface/modal.store';

  const { toggleModal } = useModalStore();
</script>

<template>
  <section class="hero-section">
    <div class="hero-backdrop"></div>
    <div class="hero-image-container">
      <img
        class="hero-image"
        src="/img/rxelms_scene_2.jpeg" />
    </div>
    <div class="hero-section-info">
      <img
        class="hero-logo"
        src="/img/rxelms_logo.png"
        alt="Logo Rxelms" />

      <MainButton
        :action="toggleModal"
        size="medium"
        text="Build your place" />
    </div>
  </section>
</template>

<style scoped>
  .hero-section {
    height: 100vh;
    position: relative;

    .hero-backdrop {
      position: absolute;
      background: radial-gradient(rgba(0, 0, 0, 0.606), #36008135);
      width: 100%;
      height: 100%;
      backdrop-filter: blur(0.5px);
    }
  }
  .hero-image-container {
    overflow: hidden;
    height: 100%;
    width: 100%;
    .hero-image {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .hero-section-info {
    background: radial-gradient(rgba(0, 0, 0, 0.31), #36008135);
    backdrop-filter: blur(1px);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hero-logo {
    width: 40%;
  }

  .hero-cta {
    font-family: 'Helvetica Neue', sans-serif;
    padding: 5px 20px;
    border: 2px solid #ffffff;
    font-size: 2rem;
    color: white;
    border-radius: 20px;
    background: transparent;
    cursor: pointer;
    &:hover {
      background: #ffffff;
      color: #9e86ff;
    }
  }
  @media (max-width: 768px) {
    .hero-logo {
      width: 60%;
    }
    .hero-cta {
      font-size: 1rem;
    }
  }
</style>

<!-- @format -->

<script setup lang="ts">
  import MainButton from '../buttons/MainButton.vue';
</script>

<template>
  <div class="map-canva-header">
    <h2 class="title">Rxelms map</h2>
    <p class="text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      officia delectus vel? Cum quasi quia iusto ullam odit voluptatibus
      voluptas nemo deserunt nisi, possimus quaerat non vero at saepe enim?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      officia delectus vel? Cum quasi quia iusto ullam odit voluptatibus
      voluptas nemo deserunt nisi, possimus quaerat non vero at saepe enim?
    </p>
    <MainButton
      size="large"
      text="Visit the rxelms world" />
  </div>
</template>

<style>
  .map-canva-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    width: 50%;
  }

  .title {
    font-size: 64px;
    margin: 0;
  }
  .text {
    font-size: 1rem;
    text-align: center;
    color: rgb(179, 179, 179);
  }

  @media (max-width: 768px) {
    .map-canva-header {
      width: 100%;

      .title {
        font-size: 3rem;
      }

      .text {
        margin: 0;
        font-size: 1rem;
      }
    }
  }
</style>

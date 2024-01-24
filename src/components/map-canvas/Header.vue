<!-- @format -->

<script setup lang="ts">
  import MainButton from '../buttons/MainButton.vue';
</script>

<template>
  <div class="map-canva-header">
    <div class="map-canva-text">
      <h2 class="map-canva-title">Rxelms map</h2>
      <p class="map-canva-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        officia delectus vel? Cum quasi quia iusto ullam odit voluptatibus
        voluptas nemo deserunt nisi, possimus quaerat non vero at saepe enim?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        officia delectus vel? Cum quasi quia iusto ullam odit voluptatibus
        voluptas nemo deserunt nisi, possimus quaerat non vero at saepe enim?
      </p>
    </div>
    <MainButton
      size="large"
      text="Visit the rxelms world" />
  </div>
</template>

<style>
  .map-canva-header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    width: 50%;
  }

  .map-canva-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .map-canva-title {
    font-size: 4rem;
    margin: 0;
  }
  .map-canva-desctiption {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    text-align: center;
    color: rgb(179, 179, 179);
  }

  @media (max-width: 1000px) {
    .map-canva-header {
      width: 100%;
      align-items: center;

      .map-canva-text {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .map-canva-title {
        font-size: 3rem;
      }

      .map-canva-description {
        font-size: 0.9rem;
        text-align: center;
        margin: 0;
      }
    }
  }
</style>

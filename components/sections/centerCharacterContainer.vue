<!-- @format -->

<script setup lang="ts"></script>

<template>
  <div class="center-container">
    <div class="center-header">
      <img class="center-avatar-image" src="/img/center_character.png" alt="Character" />

      <div class="center-text-container">
        <div class="center-niko-container">
          <img class="center-niko-image" src="/img/nico_token.png" alt="niko coin" />
          <h2 class="center-title">NIKO coin</h2>
        </div>

        <p class="center-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quia, alias ad
          repellat quos asperiores. Ut expedita quam officia fugiat maxime? Harum officiis
          assumenda laboriosam, eligendi laborum alias magni perferendis!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  height: 900px;
  background-color: rgb(19, 17, 33);
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

.center-header {
  position: relative;
  display: flex;
  justify-content: center;

  .center-avatar-image {
    animation: breath 3s infinite;
    height: 700px;
  }

  .center-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(14, 10, 30);
    top: 30%;
    position: absolute;
    border: 2px solid #ffcc00;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.374);
  }

  .center-title {
    font-size: 64px;
    margin: 0;
  }

  .center-description {
    font: 1.5rem;
    text-align: center;
    color: rgb(189, 189, 189);
  }

  .center-niko-container {
    display: flex;
    align-items: center;
    .center-niko-image {
      width: 8rem;
    }
  }
}
</style>

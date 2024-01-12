<!-- @format -->

<script setup lang="ts"></script>

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

      <div class="center-text-container">
        <div class="center-niko-container">
          <img
            class="center-niko-image"
            src="/img/nico_token.png"
            alt="niko coin" />
          <h2 class="center-title">$NIKO coin</h2>
        </div>

        <p class="center-description">
          The NIKOs token is the internal currency of the rxelms universe,
          acting as the foundation for transactions and interactions within the
          metaverse. It is used in marketplace transactions and voting, and it
          is also central to participation rewards and encouraging creativity
          within the community. The distribution strategy of NIKO, managed by
          Dartroom, emphasizes non-commercialization of the token, prioritizing
          its use to strengthen the rxelms ecosystem.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .center-container {
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
    display: flex;
    justify-content: center;

    .center-avatar-image {
      animation: breath 3s infinite;
      height: 800px;
    }

    .center-text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      padding: 10px;
      border-radius: 10px;
      background: rgb(14, 10, 30); /* Fallback color */
      background: linear-gradient(
        to bottom right,
        rgba(14, 10, 30, 0.97),
        rgb(26, 20, 45)
      );
      top: 30%;
      position: absolute;
      border: 2px solid #edb10a;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.374);
      backdrop-filter: blur(10px);
    }
    .center-title {
      font-size: 4rem;
      margin: 0;
    }

    .center-description {
      font: 64px;
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

<!-- @format -->

<script setup lang="ts">
  import MainButton from '../buttons/MainButton.vue';
</script>

<template>
  <div class="niko-card">
    <div class="niko-card-left">
      <div class="niko-card-header">
        <img
          class="center-niko-image"
          src="/img/nico_token.png"
          alt="niko coin" />
        <h2 class="center-title">$NIKO coin</h2>
      </div>

      <p class="center-description">
        The NIKOs token is the internal currency of the rxelms universe, acting
        as the foundation for transactions and interactions within the
        metaverse. It is used in marketplace transactions and voting, and it is
        also central to participation rewards and encouraging creativity within
        the community. The distribution strategy of NIKO, managed by Dartroom,
        emphasizes non-commercialization of the token, prioritizing its use to
        strengthen the rxelms ecosystem.
      </p>
    </div>
    <div class="niko-card-right">
      <div class="niko-card-info">
        <div class="niko-card-info-card">
          <h3>Total Supply:</h3>
          <p>3,141,592,653</p>
        </div>
        <div class="niko-card-info-card">
          <h3>Total Supply:</h3>
          <p>3,141,592,653</p>
        </div>
        <div class="niko-card-info-card">
          <h3>Total Supply:</h3>
          <p>3,141,592,653</p>
        </div>
      </div>
      <div class="niko-card-actions">
        <MainButton
          size="small"
          text="Buy $NIKO" />
      </div>
    </div>
  </div>
</template>

<style>
  .niko-card {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 60%;
    padding: 10px;
    border-radius: 10px;
    background: rgb(14, 10, 30); /* Fallback color */
    background: linear-gradient(
      to bottom right,
      rgba(14, 10, 30, 0.97),
      rgb(26, 20, 45)
    );
    top: 25%;
    position: absolute;
    border: 2px solid #edb10a;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.374);
    backdrop-filter: blur(10px);
  }

  .niko-card-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    h3 {
      margin: 0;
    }
  }

  .niko-card-left {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }

  .niko-card-right {
    padding: 20px;
    height: 300px;
    border-left: 2px solid #edb10a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
  }

  .niko-card-header {
    display: flex;
    align-items: center;
    .center-niko-image {
      width: 4rem;
    }
  }

  .center-title {
    font-size: 2.5rem;
    margin: 0;
  }

  .center-description {
    color: rgb(189, 189, 189);
    font-size: 1rem;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    .niko-card {
      flex-direction: column;
      gap: 5px;
      width: 80%;
    }

    .niko-card-info {
      gap: 1px;
    }

    .niko-card-header {
      display: flex;
      align-items: center;
      .center-niko-image {
        width: 3rem;
      }

      .center-title {
        font-size: 2rem;
        margin: 0;
      }
    }

    .center-description {
      font-size: 1rem;
      margin: 0;
      text-align: center;
      color: rgb(189, 189, 189);
    }
  }

  @media (max-width: 1000px) {
    .niko-card {
      width: 80%;
      top: 15%;
    }

    .niko-card-header {
      display: flex;
      align-items: center;
      .center-niko-image {
        width: 3rem;
      }

      .center-title {
        font-size: 2rem;
        margin: 0;
      }
    }

    .niko-card-info {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      h3 {
        font-size: 1rem;
        margin: 0;
      }
      p {
        font-size: 0.9rem;
      }
    }

    .niko-card-left {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .niko-card-right {
      height: 200px;
      border-left: 0px solid white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 10%;
    }

    .center-description {
      font-size: 0.8rem;
      margin: 0;
      text-align: center;
      color: rgb(189, 189, 189);
    }
  }
</style>

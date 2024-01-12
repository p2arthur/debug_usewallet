<!-- @format -->

<script setup lang="ts"></script>

<template>
  <div class="niko-card">
    <div class="niko-card-header">
      <img
        class="center-niko-image"
        src="/img/nico_token.png"
        alt="niko coin" />
      <h2 class="center-title">$NIKO coin</h2>
    </div>

    <p class="center-description">
      The NIKOs token is the internal currency of the rxelms universe, acting as
      the foundation for transactions and interactions within the metaverse. It
      is used in marketplace transactions and voting, and it is also central to
      participation rewards and encouraging creativity within the community. The
      distribution strategy of NIKO, managed by Dartroom, emphasizes
      non-commercialization of the token, prioritizing its use to strengthen the
      rxelms ecosystem.
    </p>
  </div>
</template>

<style>
  .niko-card {
    display: flex;
    flex-direction: column;
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

  .niko-card-header {
    display: flex;
    align-items: center;
    .center-niko-image {
      width: 8rem;
    }
  }

  .center-title {
    font-size: 4rem;
    margin: 0;
  }

  .center-description {
    color: rgb(189, 189, 189);
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    .niko-card {
      width: 80%;
      top: 25%;
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
      font-size: 12px;
      margin: 0;
      text-align: center;
      color: rgb(189, 189, 189);
    }
  }
</style>

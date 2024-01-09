<!-- @format -->

<script setup lang="ts">
  import SingleInfoImage from '../info-image/SingleInfoImage.vue';
  const props = defineProps(['infoObjects']);
  console.log('props', props);
</script>

<template>
  <div class="fullContainer">
    <SingleInfoImage
      v-for="info in infoObjects"
      :infoObject="info" />
    <!-- 
    <div class="infoContainer2">
      <div class="left-section2">
        <img
          src="/img/card_info1.png"
          alt="Descrição do Card Direito" />
        <div class="card-description2">
          <div class="text-container">
            <h1 style="color: #6c8af6">Participate</h1>
            Sharing in rxelms means engaging with a diverse community,
            showcasing creations, and exchanging ideas. Users can collaborate,
            participate in events, and display their NFT collections, enriching
            the collective experience.
          </div>
        </div>
      </div>
      <div class="right-section2">
        <img
          src="/img/ilustra2.png"
          alt="Descrição do Card Esquerdo" />
        <div class="card-description"></div>
      </div>
    </div>
    <div class="infoContainer3">
      <div class="left-section3">
        <img
          src="/img/ilustra3.png"
          alt="Descrição do Card Esquerdo" />
        <div class="card-description"></div>
      </div>
      <div class="right-section3">
        <img
          src="/img/card_info1.png"
          alt="Descrição do Card Direito" />
        <div class="card-description3">
          <div class="text-container3">
            <h1 style="color: #e352a9">Experience</h1>
            Exploring in rxelms is to delve into a universe of distinct virtual
            spaces, filled with surprises and interaction opportunities. Users
            can visit different rxelms, discover exclusive content, and interact
            with other community members.
          </div>
        </div>
      </div>
    </div> -->
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
</style>

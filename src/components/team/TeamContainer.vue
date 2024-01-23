<!-- @format -->
<script setup lang="ts">
  import TeamCard from '../team/TeamCard.vue';
  import '../../public/style/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import { isMobile } from '../../functions/view-port/isMobile';
  const props = defineProps(['teamList']);

  const isMobileDevice = isMobile();
</script>

<template>
  <div class="team-container">
    <div class="title-container"><h2 class="title">Team</h2></div>
    <div class="team-list-container">
      <div class="carousel-container">
        <carousel
          :autoplay="3000"
          :snap-align="'center'"
          :items-to-show="isMobileDevice ? 2 : 5"
          ref="carousel">
          <slide
            v-for="teamMember in teamList"
            :key="teamMember.name">
            <TeamCard :teamMember="teamMember" />
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/400.ttf') format('truetype');
    font-weight: 400;
  }

  .carousel-container {
    width: 100%;
  }
  .team-container {
    background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
    padding: 10px;
  }

  .team-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 10px;
  }

  .title-container {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 2rem;
    margin: 0;
    color: white;
  }
</style>

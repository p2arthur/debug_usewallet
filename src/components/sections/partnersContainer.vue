<!-- @format -->

<script>
  import CarouselCard from '../carousel/CarouselCard.vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import { isMobile } from '../../functions/view-port/isMobile';
  import partnersList from '../../content/partners/partnersList';

  export default {
    data() {
      return {
        carouselItems: partnersList,
        itemWidth: 600,
        offset: 0,
        transitionDuration: '0.5s',
      };
    },

    computed: {
      // Define a computed property for isMobile
      isMobileDevice() {
        return isMobile();
      },
    },
    mounted() {
      // Assuming you want the carousel to automatically slide, you can use the following:
      setInterval(this.animateCarousel, 3000); // Adjust the interval as needed
    },

    methods: {
      animateCarousel() {
        const carousel = this.$refs.carousel;

        if (carousel.style) {
          const firstItem = this.carouselItems.shift();
          this.carouselItems.push(firstItem);
          this.offset -= this.itemWidth;
          carousel.style.transition = `transform ${this.transitionDuration} ease`;
          carousel.style.transform = `translateX(${this.offset}px)`;
          setTimeout(() => {
            this.offset = 0;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${this.offset}px)`;
            getComputedStyle(carousel).transform;
            carousel.style.transition = `transform ${this.transitionDuration} ease`;
          }, parseFloat(this.transitionDuration) * 1000);
        }
      },
    },
    components: { Carousel, Slide, Pagination, Navigation, CarouselCard },
  };
</script>

<template>
  <div class="partnersContainer">
    <div class="logo-container">
      <h2 class="title">Our partners</h2>
    </div>

    <div class="carousel-container">
      <carousel
        :autoplay="3000"
        :snap-align="'center'"
        :items-to-show="isMobileDevice ? 3 : 5"
        ref="carousel">
        <slide
          v-for="item in carouselItems"
          :key="item.name">
          <CarouselCard :item="item" />
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<style scoped>
  .partnersContainer {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background-color: #1b152b;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-container {
    width: 100%;
    overflow: hidden;
  }

  .title {
    color: white;
    font-size: 32px;
  }

  .v3c-btn-prev,
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
</style>

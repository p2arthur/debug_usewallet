<!-- @format -->
<script>
  import CarouselCard from '../carousel/CarouselCard.vue';
  export default {
    data() {
      return {
        carouselItems: [
          {
            src: '/img/Card2.png',
            alt: 'Partners',
            url: 'https://www.google.com',
          },
          { src: '/img/Card1.png', alt: 'Partners', url: '' },
          { src: '/img/Card2.png', alt: 'Partners', url: '' },
          { src: '/img/Card3.png', alt: 'Partners', url: '' },
          { src: '/img/Card4.png', alt: 'Partners', url: '' },
          { src: '/img/Card5.png', alt: 'Partners', url: '' },
          { src: '/img/Card6.png', alt: 'Partners', url: '' },
          { src: '/img/Card7.png', alt: 'Partners', url: '' },
          {
            src: '/img/Card2.png',
            alt: 'Partners',
            url: 'https://www.google.com',
          },
          { src: '/img/Card1.png', alt: 'Partners', url: '' },
          { src: '/img/Card2.png', alt: 'Partners', url: '' },
          { src: '/img/Card3.png', alt: 'Partners', url: '' },
          { src: '/img/Card4.png', alt: 'Partners', url: '' },
          { src: '/img/Card5.png', alt: 'Partners', url: '' },
          { src: '/img/Card6.png', alt: 'Partners', url: '' },
          { src: '/img/Card7.png', alt: 'Partners', url: '' },
        ],
        itemWidth: 600, // Adjusted the item width
        offset: 0,
      };
    },
    mounted() {
      setInterval(this.shiftCarousel, 3000);
    },
    methods: {
      shiftCarousel() {
        const carousel = this.$refs.carousel;

        // Move the first item to the end when it completely leaves the panel
        if (this.offset <= -this.itemWidth) {
          const firstItem = this.carouselItems.shift();
          this.carouselItems.push(firstItem);
          this.offset += this.itemWidth;
          if (carousel.style) {
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${this.offset}px)`;
            getComputedStyle(carousel).transform;
            carousel.style.transition = 'transform 0.5s ease';
          }
        }

        // Start shifting to the next item
        this.offset -= this.itemWidth;
        carousel.style.transform = `translateX(${this.offset}px)`;
      },
    },
    components: { CarouselCard },
  };
</script>

<template>
  <div class="partnersContainer">
    <!-- Centered the logo -->
    <div class="logo-container">
      <h2 class="title">Our partners</h2>
    </div>

    <div class="carousel-container">
      <div
        class="carousel"
        ref="carousel">
        <CarouselCard
          v-for="partner in carouselItems"
          :item="partner" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .partnersContainer {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center; /* Centered both vertically and horizontally */
    flex-direction: column;
    gap: 20px;
    background-color: rgb(19, 17, 33);
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-container {
    overflow: hidden;
  }

  .carousel {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    justify-items: center;
    transition: transform 0.5s ease;
    will-change: transform;
  }

  .title {
    color: white;
    font-size: 32px;
  }
</style>

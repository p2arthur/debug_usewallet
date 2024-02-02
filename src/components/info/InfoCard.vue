<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['data', 'index']);
</script>

<template>
  <div class="info-card">
    <h1 class="info-card-title">{{ data.title }}</h1>
    <p class="info-description">{{ data.description }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .info-card {
    background: linear-gradient(
      to bottom right,
      rgba(14, 10, 30, 0.96),
      rgba(26, 20, 45, 0.905)
    );
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.374);
    backdrop-filter: blur(10px);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.082);
    transition: scale 0.1s ease;

    &:hover {
      scale: 105%;
    }
  }

  .info-card-title {
    font-size: 24px;
  }

  .info-description {
    color: rgb(179, 179, 179);
  }

  @media (max-width: 768px) {
    .info-card-title {
      text-align: center;
      font-size: 1.2rem;
    }

    .info-description {
      text-align: center;
      font-size: 14px;
    }
  }
</style>

<!-- @format -->
<script setup></script>

<template>
  <div class="marketplace-statistics-container">
    <div class="marketplace-statistics-card">
      <h2 class="marketplace-statistics-title">Volume:</h2>
      <h3 class="marketplace-statistics-value">
        {{ (385201.32).toLocaleString() }}
      </h3>
      <p class="marketplace-statistics-description">
        up <span>+16,2%</span> from past week
      </p>
    </div>
    <div class="marketplace-statistics-card">
      <h2 class="marketplace-statistics-title">24h volume:</h2>
      <h3 class="marketplace-statistics-value">12,345.32</h3>
      <p class="marketplace-statistics-description">
        <span>+16,2%</span> from yesterday
      </p>
    </div>
    <div class="marketplace-statistics-card">
      <h2 class="marketplace-statistics-title">Total sales:</h2>
      <h3 class="marketplace-statistics-value">3.552</h3>
      <p class="marketplace-statistics-description">
        <span>+10% </span>from past month
      </p>
    </div>
    <div class="marketplace-statistics-card">
      <h2 class="marketplace-statistics-title">Highest sale:</h2>
      <h3 class="marketplace-statistics-value">16.192</h3>
      <p class="marketplace-statistics-description">by fulano.algo</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .marketplace-statistics-container {
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
  .marketplace-statistics-card {
    padding: 20px 20px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.038) 0%,
      rgba(73, 63, 113, 0.257),
      80%,
      rgba(255, 255, 255, 0.038) 100%
    );
    border-radius: 10px;
    justify-content: flex-start;
    column-span: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    font-family: 'Helvetica Neue 500';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');

    .marketplace-statistics-title {
      font-size: 1.5rem;
      margin: 0;
    }

    .marketplace-statistics-value {
      margin: 0;
    }

    .marketplace-statistics-description {
      margin: 0;
      span {
        color: rgb(59, 171, 59);
      }
    }
  }
  @media (max-width: 768px) {
    .marketplace-statistics-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
</style>

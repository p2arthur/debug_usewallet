<!-- @format -->
<script setup></script>

<template>
  <div class="marketplace-statistics-container">
    <div class="marketplace-statistics-card">
      <h2>Volume:</h2>
      <h3>3.552</h3>
    </div>
    <div class="marketplace-statistics-card">
      <h2>24h volume:</h2>
      <h3>3.552</h3>
    </div>
    <div class="marketplace-statistics-card">
      <h2>Total sales:</h2>
      <h3>3.552</h3>
    </div>
    <div class="marketplace-statistics-card">
      <h2>Total sales:</h2>
      <h3>3.552</h3>
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
    padding: 20px;
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
    align-items: flex-start;
    font-family: 'Helvetica Neue 500';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');

    h2 {
      font-size: 2rem;
      margin: 0;
    }
  }
</style>

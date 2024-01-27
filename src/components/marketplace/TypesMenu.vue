<!-- @format -->

<script setup lang="ts"></script>

<template>
  <div class="marketplace-menu">
    <div class="marketplace-types-menu">
      <h1 class="marketplace-type-option">Hot 🔥</h1>
      <h1 class="marketplace-type-option">Lands</h1>
      <h1 class="marketplace-type-option">Outfit</h1>
      <h1 class="marketplace-type-option">Furniture</h1>
    </div>
    <div class="marketplace-actions"><SearchInput /></div>
  </div>
</template>

<style scoped lang="scss">
  .marketplace-menu {
    padding: 15px 15px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px 10px 0 0;
    gap: 32px;
    align-items: center;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.038) 0%,
      rgba(73, 63, 113, 0.257),
      80%,
      rgba(255, 255, 255, 0.038) 100%
    );
    border-bottom: 2px solid rgb(179, 108, 255);

    .marketplace-types-menu {
      display: flex;
      gap: 32px;
      .marketplace-type-option {
        cursor: pointer;
        margin: 0;
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }
</style>

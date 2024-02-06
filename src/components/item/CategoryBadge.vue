<script setup lang="ts">
  const props = defineProps(['category']);
</script>

<template>
  <div class="badge-container">
    <div
      :class="[
        'badge-category',
        { 'badge-furniture': category === 'furniture' },
        { 'badge-outfit': category === 'outfit' },
        { 'badge-lands': category === 'lands' },
      ]"></div>
    <span>
      {{ category }}
    </span>
  </div>
</template>

<style>
  .badge-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(73, 63, 113, 0.257),
      80%,
      rgba(255, 255, 255, 0) 100%
    );
    font-size: 1.2rem;
    right: 5px;
    top: 5px;

    padding: 5px;
    border-radius: 2px;
    position: absolute;
    z-index: 5;
  }

  .badge-category {
    background-color: rgb(125, 79, 178);
    font-size: 1.2rem;
    width: 5px;
    height: 5px;
    padding: 3px;
    border-radius: 50%;

    z-index: 10;
  }

  .badge-furniture {
    background-color: rgb(193, 4, 149);
  }

  .badge-outfit {
    background-color: rgb(4, 58, 193);
  }
  .badge-lands {
    background-color: rgb(253, 86, 2);
  }
</style>

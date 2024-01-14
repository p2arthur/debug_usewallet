<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['infoObjects']);
  import InfoCard from '../info/InfoCard.vue';
</script>
<template>
  <div class="triple-info-container">
    <InfoCard
      v-for="infoObject in infoObjects"
      :data="infoObject" />
  </div>
</template>
<style>
  .triple-info-container {
    padding: 40px;
    gap: 20px;
    display: flex;
    background: rgb(9, 7, 27);
  }

  @media (max-width: 768px) {
    .triple-info-container {
      flex-direction: column;
    }
  }
</style>

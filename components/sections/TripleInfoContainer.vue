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
    background: #120e1d;
    box-shadow: 32px 0px 0px rgba(0, 0, 0, 0.621);
  }

  @media (max-width: 768px) {
    .triple-info-container {
      flex-direction: column;
    }
  }
</style>

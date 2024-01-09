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
    padding: 20px;
    gap: 20px;
    display: flex;
    background: rgb(19, 17, 33);
  }
</style>

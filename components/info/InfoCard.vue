<!-- @format -->

<script setup lang="ts">
const props = defineProps(["data", "index"]);
</script>

<template>
  <div class="info-card">
    <h1 class="info-card-title">{{ data.title }}</h1>
    <div class="info-description">{{ data.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.info-card {
  padding: 10px;
  z-index: 10;
  background-color: rgb(19, 17, 33);
  width: 33%;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.082);
}

.info-card-title {
  font-size: 24px;
}

.info-description {
  color: rgb(179, 179, 179);
}
</style>

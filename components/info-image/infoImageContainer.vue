<!-- @format -->

<script setup lang="ts">
import SingleInfoImage from "../info-image/SingleInfoImage.vue";
const props = defineProps(["infoObjects"]);
console.log("props", props);
</script>

<template>
  <div class="full-container">
    <SingleInfoImage
      v-for="(info, index) in infoObjects"
      :infoObject="info"
      :index="index"
    />
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Helvetica Neue 700";
  src: url("/fonts/helvetica-neue/700.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Helvetica Neue 400";
  src: url("/fonts/helvetica-neue/400.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

.full-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgb(9, 7, 27);
  padding: 100px 20px;
}
</style>

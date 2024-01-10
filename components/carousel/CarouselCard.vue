<!-- @format -->

<script setup lang="ts">
import { openUrl } from "../../functions/openUrl";
const props = defineProps(["item"]);
</script>

<template>
  <img
    class="carousel-item-image"
    :src="item.src"
    :alt="item.alt"
    @click="openUrl(item.url)"
  />
</template>

<style>
.carousel-item {
  width: 300px; /* Add any additional styling for carousel items */
}
.carousel-item-image {
  object-fit: fit;
  width: 200px;
  height: 200px;
}
</style>

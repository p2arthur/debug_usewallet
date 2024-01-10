<!-- @format -->

<script setup lang="ts">
const props = defineProps(["infoObject", "index"]);

console.log(props.index);
</script>
<template>
  <div
    :class="{
      'info-card-container': true,
      'info-card-container-reverse': index % 2 !== 0,
    }"
  >
    <div class="image-section">
      <img class="info-card-main-image" :src="infoObject.mainImage" />
    </div>
    <div class="description-section">
      <div class="text-container">
        <h1 class="card-title">{{ infoObject.title }}</h1>
        <p class="card-description">{{ infoObject.description }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.info-card-container {
  display: flex;
  align-items: center;
  height: 300px;

  gap: 100px;

  &.info-card-container-reverse {
    flex-direction: row-reverse;
  }
}

.image-section {
  display: flex;
  justify-content: center;
  width: 30%;
  flex-shrink: 0;

  .info-card-main-image {
    animation: breath 2s infinite;
    width: 100%;
    flex-shrink: 0;
  }
}

.description-section {
  display: flex;
  justify-content: center;
  width: 60%;
}

.text-container {
  display: flex;
  flex-direction: column;
  background-color: rgb(19, 17, 33);
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.082);
}

.card-title {
  font-size: 32px;
  margin: 0;
  color: rgb(179, 108, 255);
}

.card-description {
  color: rgb(170, 170, 170);
  font-size: 1.3rem;
}

@keyframes breath {
  0%,
  100% {
    transform: translateY(-1%);
    animation-timing-function: ease-in-out;
  }
  50% {
    transform: translateY(-0.3%) scale(100.5%);
    animation-timing-function: ease-in-out;
  }
}
</style>

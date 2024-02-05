<!-- @format -->

<script setup lang="ts">
import TypesMenu from "~/components/marketplace/TypesMenu.vue";
import DataBanner from "~/components/marketplace/DataBanner.vue";
import ItensList from "~/components/marketplace/ItensList.vue";
import { useItemsStore } from "~/stores/marketplace/items.store";

const itemsStore = useItemsStore();
</script>

<template>
  <div class="marketplace-page">
    <div class="marketplace-display">
      <div class="marketplace-banner">
        <img class="marketplace-banner-image" src="/img/marketplace_banner.png" alt="" />
      </div>
      <DataBanner />
      <TypesMenu />
      <ItensList :allItems="itemsStore.filteredItems" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "Helvetica Neue";
  src: url("/fonts/helvetica-neue/500.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Helvetica Neue 300";
  src: url("/fonts/helvetica-neue/300.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

.marketplace-page {
  background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
  padding: 40px;
  padding-top: 80px;

  .marketplace-display {
    width: 100%;
  }

  .marketplace-banner {
    cursor: pointer;
    width: 100%;
    height: 150px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.038) 0%,
      rgba(73, 63, 113, 0.257),
      80%,
      rgba(255, 255, 255, 0.038) 100%
    );
    border-radius: 10px;
    transition: 0.1s linear;

    &:hover {
      scale: 102%;
    }
  }

  .marketplace-banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px; // Add this if you want rounded corners
  }
}

@media (max-width: 768px) {
  .marketplace-page {
    padding: 10px;
    padding-top: 80px;
  }
}
</style>

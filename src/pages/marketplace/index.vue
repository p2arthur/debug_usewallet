<!-- @format -->

<script setup lang="ts">
  import TypesMenu from '~/components/marketplace/TypesMenu.vue';
  import DataBanner from '~/components/marketplace/DataBanner.vue';
  import ItensList from '~/components/marketplace/ItensList.vue';
  import { useItemsStore } from '~/stores/marketplace/items.store';

  const itemsStore = useItemsStore();
</script>

<template>
  <div class="marketplace-page">
    <div class="marketplace-display">
      <DataBanner />
      <TypesMenu />
      <ItensList :allItems="itemsStore.filteredItems" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue 300';
    src: url('/fonts/helvetica-neue/300.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  .marketplace-page {
    background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
    padding: 50px;
    padding-top: 70px;

    .marketplace-display {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .marketplace-page {
      padding: 10px;
    }
  }
</style>

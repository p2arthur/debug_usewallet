<!-- @format -->

<script setup lang="ts">
  import { useItemsStore } from '~/stores/marketplace/items.store';

  const sortingMethod = ref('listDate - desc');
  const itemsStore = useItemsStore();

  const handleSortSelection = (event: Event) => {
    const selectedSort = (event.target as HTMLSelectElement).value;
    console.log('sorting', selectedSort);
    sortingMethod.value = selectedSort;
    itemsStore.setSortMethod(selectedSort);
  };
</script>

<template>
  <select
    class="sort-select"
    name="sort"
    id="sort"
    @change="handleSortSelection">
    <option value="listDate - desc">Listing date - Descendent</option>
    <option value="listDate - asc">Listing date - Ascending</option>
  </select>
</template>

<style>
  .sort-select {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.038) 0%,
      rgba(73, 63, 113, 0.257),
      80%,
      rgba(255, 255, 255, 0.038) 100%
    );
    border: 0;
    color: white;
    padding: 2px;
    border-radius: 10px;
  }
  option {
    background-color: rgb(24, 15, 34);
  }
</style>

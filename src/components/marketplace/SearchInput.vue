<!-- @format -->

<script setup lang="ts">
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
  import { useItemsStore } from '~/stores/marketplace/items.store';

  const inputText = ref<string>('');
  const itemsStore = useItemsStore();

  const handleSearch = () => {
    itemsStore.setSearchTerm(inputText.value);
  };
</script>
<template>
  <div class="marketplace-search-container">
    <MagnifyingGlassIcon class="search-icon" /><input
      v-model="inputText"
      @input="handleSearch"
      placeholder="search a collection"
      class="marketplace-search-input"
      type="text" />
  </div>
</template>

<style lang="scss">
  .marketplace-search-container {
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    gap: 10px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.038) 0%,
      rgba(73, 63, 113, 0.257),
      80%,
      rgba(255, 255, 255, 0.038) 100%
    );
  }

  .marketplace-search-input {
    background-color: transparent;
    color: white;
    border: 0;

    width: 125px;

    &:focus-visible {
      border: 0;
      outline: 0;
    }
  }

  .search-icon {
    font-weight: 500;
    width: 15px;
    height: 15px;
    color: white;
  }
</style>

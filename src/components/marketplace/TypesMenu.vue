<!-- @format -->

<script setup lang="ts">
  import SearchInput from './SearchInput.vue';
  import { useItemsStore } from '~/stores/marketplace/items.store';

  const itemsStore = useItemsStore();
  const selectedCategory = ref<string>('all');

  const filterItems = (category: string) => {
    itemsStore.setCategory(category);
    selectedCategory.value = category;
  };
</script>

<template>
  <div class="marketplace-menu">
    <div class="marketplace-types-menu">
      <h1
        class="marketplace-type-option"
        :class="{ selected: selectedCategory === 'all' }"
        @click="filterItems('all')">
        All
      </h1>
      <h1
        class="marketplace-type-option"
        :class="{ selected: selectedCategory === 'lands' }"
        @click="filterItems('lands')">
        Lands
      </h1>
      <h1
        class="marketplace-type-option"
        :class="{ selected: selectedCategory === 'outfit' }"
        @click="filterItems('outfit')">
        Outfit
      </h1>
      <h1
        class="marketplace-type-option"
        :class="{ selected: selectedCategory === 'furniture' }"
        @click="filterItems('furniture')">
        Furniture
      </h1>
    </div>
    <div class="marketplace-actions"><SearchInput /></div>
  </div>
</template>

<style scoped lang="scss">
  .marketplace-menu {
    padding: 15px 15px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px 10px 0 0;
    gap: 32px;
    align-items: center;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.038) 0%,
      rgba(73, 63, 113, 0.257),
      80%,
      rgba(255, 255, 255, 0.038) 100%
    );

    .marketplace-types-menu {
      display: flex;
      gap: 32px;
      .marketplace-type-option {
        user-select: none;
        cursor: pointer;
        margin: 0;
        font-size: 1.5rem;
        margin: 0;

        &.selected {
          border-bottom: 2px solid rgb(179, 108, 255);
        }
      }
    }
  }
</style>

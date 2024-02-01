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
      <h3
        class="marketplace-type-option"
        :class="{ selected: selectedCategory === 'all' }"
        @click="filterItems('all')">
        All
      </h3>
      <h3
        class="marketplace-type-option"
        :class="{ selected: selectedCategory === 'lands' }"
        @click="filterItems('lands')">
        Lands
      </h3>
      <h3
        class="marketplace-type-option"
        :class="{ selected: selectedCategory === 'outfit' }"
        @click="filterItems('outfit')">
        Outfit
      </h3>
      <h3
        class="marketplace-type-option"
        :class="{ selected: selectedCategory === 'furniture' }"
        @click="filterItems('furniture')">
        Furniture
      </h3>
    </div>
    <div class="marketplace-actions"><SortSelector /><SearchInput /></div>
  </div>
</template>

<style scoped lang="scss">
  .marketplace-menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 10px 10px 0 0;
    align-items: center;
    // background: linear-gradient(
    //   to right,
    //   rgba(255, 255, 255, 0.038) 0%,
    //   rgba(73, 63, 113, 0.257),
    //   80%,
    //   rgba(255, 255, 255, 0.038) 100%
    // );

    .marketplace-types-menu {
      padding: 10px 10px;
      display: flex;
      gap: 32px;
      width: 50%;

      .marketplace-type-option {
        user-select: none;
        cursor: pointer;
        margin: 0;
        font-size: 1.3rem;
        margin: 0;

        &.selected {
          border-bottom: 2px solid rgb(179, 108, 255);
        }
      }
    }

    .marketplace-actions {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    .marketplace-menu {
      flex-direction: column-reverse;

      .marketplace-types-menu {
        width: 100%;
        justify-content: flex-start;
      }

      .marketplace-actions {
        width: 100%;
        justify-content: flex-start;
      }
    }
  }
</style>

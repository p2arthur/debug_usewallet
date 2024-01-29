import { defineStore } from 'pinia';
import { itemsForSale } from '~/dummie-data/ItemsForSale';

export const useItemsStore = defineStore('items', () => {
  let allItems = itemsForSale;
  let selectedCategory = ref<string>('all');

  const setCategory = (category: string) => {
    selectedCategory.value = category;
  };

  const filteredItems = computed(() => {
    if (selectedCategory.value === 'all') {
      return allItems;
    } else {
      return allItems.filter(
        (item) => item.category === selectedCategory.value
      );
    }
  });

  return { filteredItems, setCategory };
});

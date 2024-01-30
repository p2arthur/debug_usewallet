import { defineStore } from 'pinia';
import { itemsForSale } from '~/dummie-data/ItemsForSale';

export const useItemsStore = defineStore('items', () => {
  const allItems = itemsForSale;
  const selectedCategory = ref<string>('all');
  const searchTerm = ref<string>('');

  const setCategory = (category: string) => {
    selectedCategory.value = category;
  };

  const setSearchTerm = (term: string) => {
    searchTerm.value = term;
  };

  const filteredItems = computed(() => {
    const emptySearchTerm = searchTerm.value === '';
    const lowerCaseSearchTerm = searchTerm.value.toLowerCase();

    if (selectedCategory.value === 'all' && emptySearchTerm) {
      return allItems;
    } else if (selectedCategory.value !== 'all' && emptySearchTerm) {
      return allItems.filter(
        (item) => item.category === selectedCategory.value
      );
    } else if (!emptySearchTerm) {
      return allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.collection.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
  });

  return { filteredItems, setCategory, setSearchTerm };
});

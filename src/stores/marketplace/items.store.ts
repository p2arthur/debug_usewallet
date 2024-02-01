import { defineStore } from 'pinia';
import { itemsForSale } from '~/dummie-data/ItemsForSale';
import { ItemInterface } from '~/interfaces/itemInterface';
import { sortItemsByListingDate } from '~/utils/marketplace/sort';

export const useItemsStore = defineStore('items', () => {
  const allItems = reactive(itemsForSale);
  const selectedCategory = ref<string>('all');
  const searchTerm = ref<string>('');
  const sortMethod = ref<string>('listDate - desc');

  const setCategory = (category: string) => {
    selectedCategory.value = category;
  };

  const setSearchTerm = (term: string) => {
    searchTerm.value = term;
  };

  const setSortMethod = (method: string) => {
    sortMethod.value = method;
  };

  const sortedItems = computed(() => {
    const itemsToSort = [...allItems];
    switch (sortMethod.value) {
      case 'listDate - desc':
        return sortItemsByListingDate(itemsToSort, 'desc');
      case 'listDate - asc':
        return sortItemsByListingDate(itemsToSort, 'asc');

      default:
        return itemsToSort;
    }
  });

  const filteredItems = computed(() => {
    const emptySearchTerm = searchTerm.value === '';
    const lowerCaseSearchTerm = searchTerm.value.toLowerCase();

    if (selectedCategory.value !== 'all' && emptySearchTerm) {
      return sortedItems.value.filter(
        (item) => item.category === selectedCategory.value
      );
    } else if (!emptySearchTerm) {
      return sortedItems.value.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.collection.toLowerCase().includes(lowerCaseSearchTerm)
      );
    } else {
      return sortedItems.value;
    }
  });

  return {
    filteredItems,
    setCategory,
    setSearchTerm,
    setSortMethod,
    searchTerm,
  };
});

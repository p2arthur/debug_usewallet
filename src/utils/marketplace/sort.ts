import { ItemInterface } from '~/interfaces/itemInterface';

type directionType = 'asc' | 'desc';
export const sortItemsByListingDate = (
  itemsList: ItemInterface[],
  direction: directionType
) => {
  let sortedItems = [];

  switch (direction) {
    case 'desc':
      sortedItems = itemsList.sort((a, b) => b.list_date - a.list_date);
      return sortedItems;
    case 'asc':
      sortedItems = itemsList.sort((a, b) => a.list_date - b.list_date);
      return sortedItems;
    default:
      return itemsList;
  }
};

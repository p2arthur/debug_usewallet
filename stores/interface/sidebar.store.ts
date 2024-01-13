import { defineStore } from 'pinia';

export const linksList: linkInterface[] = [
  { label: 'marketplace', path: '/marketplace' },
  { label: 'documents', path: '/docs' },
  { label: 'builder', path: '/builder' },
  { label: 'rxelms', path: '/about' },
];

interface linkInterface {
  label: string;
  path: string;
}

export const useSidebarStore = defineStore('sidebar', () => {
  const sidebarLinks = reactive<linkInterface[]>(linksList);

  let sideBarIsOpen = ref<boolean>(false);

  const toggleSideBar = () => {
    console.log('open sidebar', sideBarIsOpen.value);
    sideBarIsOpen.value = !sideBarIsOpen.value;
  };

  return { sidebarLinks, sideBarIsOpen, toggleSideBar };
});

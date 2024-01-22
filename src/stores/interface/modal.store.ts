import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  let modalIsOpen = ref<boolean>(false);

  const toggleModal = () => {
    console.log('openModal', modalIsOpen.value);
    modalIsOpen.value = !modalIsOpen.value;
  };

  return { modalIsOpen, toggleModal };
});

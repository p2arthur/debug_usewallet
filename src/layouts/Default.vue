<!-- @format -->

<script setup lang="ts">
  import { useSidebarStore } from '~/stores/interface/sidebar.store';
  import { watchEffect } from 'vue';
  import HeaderBar from '@/components/navigation/HeaderBar.vue';
  import Modal from '../components/modal/Modal.vue';
  import SideBar from '~/components/navigation/SideBar.vue';
  import { useModalStore } from '../stores/interface/modal.store';

  const sideBarStore = useSidebarStore();
  const modalStore = useModalStore();

  const shouldScroll = ref(true);

  const toggleBodyScroll = () => {
    document.body.classList.toggle(
      'no-scroll',
      sideBarStore.sideBarIsOpen || modalStore.modalIsOpen
    );
  };

  onMounted(() => {
    watchEffect(() => {
      toggleBodyScroll();
      shouldScroll.value =
        !sideBarStore.sideBarIsOpen && !modalStore.modalIsOpen;
    });
  });
</script>

<template>
  <Modal v-if="modalStore.modalIsOpen" />
  <SideBar v-if="sideBarStore.sideBarIsOpen" />
  <div id="desktop-base">
    <div class="headerbar">
      <HeaderBar />
    </div>
    <div
      :class="{
        'no-scroll': sideBarStore.sideBarIsOpen,
      }">
      <slot />
      <div class="content-spacer"></div>
      <NavigationFooter />
    </div>
  </div>
</template>

<style>
  html,
  body {
    margin: 0;
    padding: 0 !important;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #a969fd #28282816;
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #a969fd; /* thumb color */
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: #282828; /* track color */
    }
  }

  .no-scroll {
    overflow: hidden !important;
  }
</style>

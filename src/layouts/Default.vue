<!-- @format -->

<script setup lang="ts">
  import { useSidebarStore } from '~/stores/interface/sidebar.store';
  import HeaderBar from '@/components/navigation/HeaderBar.vue';

  const sideBarStore = useSidebarStore();

  const toggleBodyScroll = () => {
    const body = document.body;
    body.classList.toggle('sidebar-open', sideBarStore.sideBarIsOpen);
  };
</script>

<template>
  <div
    :class="sideBarStore.sideBarIsOpen"
    id="desktop-base">
    <div class="headerbar">
      <HeaderBar />
    </div>
    <div
      class="content"
      id="content-scroll">
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
    scrollbar-color: #a969fd #28282816; /* thumb color and track color */

    /* For older versions of Chrome and Safari */
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
</style>

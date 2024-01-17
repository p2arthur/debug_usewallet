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
  }
</style>

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
</script>

<template>
  <Modal v-if="modalStore.modalIsOpen" />
  <SideBar v-if="sideBarStore.sideBarIsOpen" />
  <div id="desktop-base">
    <div class="headerbar">
      aaaaaaaaa
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

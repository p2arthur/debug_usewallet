<!-- @format -->

<script setup lang="ts">
  import { Bars3Icon } from '@heroicons/vue/24/solid';
  import NavBarButton from '@/components/buttons/NavBarButton.vue';
  import { useSidebarStore } from '~/stores/interface/sidebar.store';
  import SideBar from './SideBar.vue';
  import ConnectWallet from '../wallet-components/ConnectWallet.vue';
  import WalletWidget from '../wallet-components/WalletWidget.vue';
  import { useWallet } from '@txnlab/use-wallet-vue';

  const store = useSidebarStore();
  const route = useRoute();

  const { activeAccount } = useWallet();

  function matchExclude(path: string, exlude: string) {
    return route.fullPath.includes(path) && !route.fullPath.includes(exlude);
  }
</script>

<template>
  <SideBar v-if="store.sideBarIsOpen" />
  <div
    class="header-bar"
    ref="headerBar">
    <div class="header-bar-logo-container">
      <a href="/">
        <img
          src="/img/rxelms_logo.png"
          alt="Logo Rxelms" />
      </a>
    </div>
    <div class="header-bar-section">
      <NavBarButton
        name="Marketplace"
        to="/marketplace"
        :active="$router.currentRoute.value.fullPath === '/marketplace'">
        <h4>Marketplace</h4>
      </NavBarButton>

      <NavBarButton
        name="Documents"
        to="/documents"
        :active="$router.currentRoute.value.fullPath === '/documents'">
        <h4>Documents</h4>
      </NavBarButton>

      <NavBarButton
        name="Builder"
        to="/builder"
        :active="matchExclude('/artists', 'docs')">
        <h4>Builder</h4>
      </NavBarButton>

      <NavBarButton
        name="Rxelms"
        to="/Rxelms"
        :active="$router.currentRoute.value.fullPath.includes('/Rxelms')">
        <h4>rxelms</h4>
      </NavBarButton>
    </div>
    <div class="header-bar-right-container">
      <ConnectWallet v-if="!activeAccount" />
      <WalletWidget
        v-if="activeAccount"
        :activeAccount="activeAccount" />
      <Bars3Icon
        @click="store.toggleSideBar"
        class="hamburger-icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/200.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/800.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  .header-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    background: rgba(153, 153, 153, 0.046);
    backdrop-filter: blur(1px);
    padding: 10px 20px;
  }

  .header-bar-logo-container {
    display: flex;
    align-items: center;
    img {
      height: 40px;
      object-fit: contain;
    }
  }

  .header-bar-section {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }

  .header-bar-right-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hamburger-icon {
    display: none;
  }

  h4 {
    color: #c1c0c0;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  @media (max-width: 768px) {
    .header-bar-section {
      display: none;
    }

    .header-bar-logo-container {
      img {
        height: 25px;
        object-fit: contain;
      }
    }

    .connect-button {
      font-size: 1rem;
    }
    .hamburger-icon {
      display: block;
      color: white;
      width: 25px;
    }
  }
</style>

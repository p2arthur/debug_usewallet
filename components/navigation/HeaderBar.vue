<!-- @format -->

<template>
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
      <div
        class="connect-button"
        @click="login()"
        :active="accountStore.loginModal || accountStore.addressModal">
        Connect
      </div>

      <Bars3Icon class="hamburger-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Bars3Icon } from '@heroicons/vue/24/solid';
  import NavBarButton from '@/components/buttons/NavBarButton.vue';

  function login() {
    if (accountStore.wallet.addresses.length > 0) {
      accountStore.addressModal = true;
    } else {
      accountStore.loginModal = true;
    }
  }

  const accountStore = useAccountStore();

  const route = useRoute();

  function matchExclude(path: string, exlude: string) {
    return route.fullPath.includes(path) && !route.fullPath.includes(exlude);
  }
</script>

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
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.029);
    backdrop-filter: blur(1px);
    padding: 20px 20px;
  }

  .header-bar-logo-container {
    display: flex;
    align-items: center;
    img {
      height: 40px;
      object-fit: contain; // Mantém a proporção da imagem sem cortá-la
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

  .connect-button {
    display: flex;
    align-items: center;
    font-family: 'Helvetica Neue', sans-serif;
    padding: 5px 10px;
    border: 2px solid #ffffff;
    font-size: 1.5rem;
    color: white;
    border-radius: 10px;
    background: transparent;
    cursor: pointer;
    &:hover {
      background: #ffffff;
      color: #9e86ff;
    }
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
        object-fit: contain; // Mantém a proporção da imagem sem cortá-la
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

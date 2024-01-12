<!-- @format -->

<template>
  <div
    class="wrapper"
    id="desktop-base">
    <div class="layout">
      <div class="layout-background"></div>
    </div>

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
    <!-- 
    <div class="sidebar">
      <SideBar :wide="screenSize.width >= 1400" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
  import HeaderBar from '@/components/navigation/HeaderBar.vue';
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    /* Remova a propriedade position: absolute; */
  }

  .layout {
    /* Remova a propriedade position: absolute; */
    position: fixed;
    left: 0;
    top: 0;
    background-color: #e2e2e2;
    height: 100vh;
    width: 100vw;
    content: '';

    &-background {
      position: absolute;
      height: 100vh;
      background-color: #c93232;
      border-radius: $radius-xxl 0px 0px $radius-xxl;
    }
  }

  .headerbar {
    position: fixed; /* Alterado de relative para fixed */
    top: 0; /* Adicionado para fixar no topo */
    left: 0; /* Adicionado para alinhar à esquerda */
    z-index: 10; /* Ajuste o z-index conforme necessário para garantir que fique acima de outros elementos */
    width: 100%; /* Garante que o headerbar ocupe toda a largura da página */

    @media screen and (min-width: $headerbar-wide-breakpoint) {
      min-width: $headerbar-wide;
      max-width: $headerbar-wide;
    }

    @media screen and (min-width: calc($headerbar-thin-breakpoint + 1px)) and (max-width: calc($headerbar-wide-breakpoint - 1px)) {
      min-width: $headerbar-wide;
      max-width: $headerbar-wide;
    }
  }

  .sidebar {
    position: fixed;
    z-index: 2;
    height: 100vh;

    @media screen and (min-width: $sidebar-wide-breakpoint) {
      min-width: $sidebar-wide;
      max-width: $sidebar-wide;
    }

    @media screen and (min-width: calc($sidebar-thin-breakpoint + 1px)) and (max-width: calc($sidebar-wide-breakpoint - 1px)) {
      min-width: $sidebar-thin;
      max-width: $sidebar-thin;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1;
    width: 100vw;
    height: 100vh;

    @include scrolbar-right($c-scroll-on-background, $c-background-0);

    &-spacer {
      content: '';
      width: 100%;
      flex-grow: 1;
    }

    .background {
      background-color: $c-primary;
      height: 100vh;
      display: flex;
      overflow-x: hidden;
      // padding-bottom: 80px;
    }

    .content-mobile {
      display: flex;
      flex-direction: column;
      background-color: $c-primary;
      min-width: 100%;
      max-width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;

      @include scrolbar-right($c-scroll-on-background, $c-primary);

      &-spacer {
        content: '';
        min-height: 64px;
        width: 100%;
      }
    }
  }
</style>

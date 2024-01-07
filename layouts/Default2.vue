<template>
  <div class="wrapper" id="desktop-base" v-if="isDesktop">
    <div class="layout">
      <div class="layout-background">
      </div>      
    </div>

    <div class="content" id="content-scroll">
      <slot />
      <div class="content-spacer"></div>
      <NavigationFooter />
    </div>

    <div class="sidebar">
      <SideBar :wide="screenSize.width >= 1400" />
    </div>
  </div>

  <div class="background" id="mobile-base" v-else>
    <div class="app-bar">
      <NavigationAppBar />
    </div>

    <div class="content-mobile" id="content-scroll">
      <slot />
      <div class="content-mobile-spacer"></div>
      <NavigationFooter />
    </div>
  </div>
</template>

<script setup lang="ts">

import SideBar from '@/components/navigation/SideBar.vue'

const isDesktop = useIsDesktop()
const screenSize = useScreenSize()

</script>

<style lang="scss" scoped>

.wrapper {
  position: relative;
}

.layout {
  position: fixed;
  left: 0;
  top: 0;
  background-color: $c-primary;
  height: 100vh;
  width: 100vw;
  content: "";


  &-background {
    position: absolute;
    height: 100vh;
    background-color: $c-background-0;
    border-radius: $radius-xxl 0px 0px $radius-xxl;

    @media screen and (min-width: $sidebar-wide-breakpoint) {
      min-width: calc(100% - $sidebar-wide);
      left: $sidebar-wide;
    }

    @media screen and (min-width: calc($sidebar-thin-breakpoint + 0px)) and (max-width: calc($sidebar-wide-breakpoint - 1px)) {
      min-width: calc(100% - $sidebar-thin);
      left: $sidebar-thin;
    }
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
  padding: 0px 32px;
  max-height: 100vh;
  min-height: 100vh;
  
  @include scrolbar-right($c-scroll-on-background, $c-background-0);

  @media screen and (min-width: $sidebar-wide-breakpoint) {
    min-width: calc(100% - $sidebar-wide - 64px);
    max-width: calc(100% - $sidebar-wide - 64px);
    min-height: 100vh;
    left: $sidebar-wide;
  }

  @media screen and (max-width: calc($sidebar-wide-breakpoint - 1px)) {
    min-width: calc(100% - $sidebar-thin - 64px);
    max-width: calc(100% - $sidebar-thin - 64px);
    min-height: 100vh;
    left: $sidebar-thin;
  }

  &-spacer {
    content: "";
    // min-height: 80px;
    width: 100%;
    flex-grow: 1;
  }
}

.background {
  background-color: $c-background-0;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  // padding-bottom: 80px;
}

.content-mobile {
  display: flex;
  flex-direction: column;
  background-color: $c-background-0;
  min-width: 100%;
  max-width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  @include scrolbar-right($c-scroll-on-background, $c-background-0);

  &-spacer {
    content: "";
    min-height: 64px;
    width: 100%;
  }
}

</style>
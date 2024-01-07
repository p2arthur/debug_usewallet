<template>
  <div class="main" ref="theme" :data-theme="settingsStore.colorMode">
    <NuxtLayout>
      <NuxtPage />
      <ModalsAuthModal v-if="accountStore.authModal" />
      <ModalsAddressModal v-if="accountStore.addressModal" />
      <ModalsLoginModal v-if="accountStore.loginModal" />
    </NuxtLayout>
    <ModalsTransactions v-if="transactionStore.open" />
    <DisplaysSnackList />
  </div>
</template>

<script setup lang="ts">

import { checkShortCuts } from '@/functions/shortCuts'

const settingsStore = useSettingsStore()
const accountStore = useAccountStore()
const transactionStore = useTransactionStore()

onMounted(() => {
  accountStore.autoLogin()
  window.addEventListener('keyup', checkShortCuts, false)
  const root = document.getElementsByTagName('html')[0]
  root.classList.add(settingsStore.colorMode)
})

onUnmounted(() => {
  window.removeEventListener('keyup', checkShortCuts, false)
})

useScrollPosistion('content-scroll')

</script>

<style lang="scss">
.main {
  position: relative;
}

body {
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 0px;
  margin: 0px;
  max-height: 100vh;
  overflow: hidden;

  @include scrolbar-right($c-scroll-on-background, $c-background-0);
}
</style>

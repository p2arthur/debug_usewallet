<template>
  <div class="app-bar-wrapper">
    <div class="app-bar">
      <div class="app-bar-container">
        <NavBarButton 
          v-if="!accountStore.activeWallet?.address"
          :active="accountStore.loginModal || accountStore.addressModal"
          @click="login()"
        >
          <IconLogin />
        </NavBarButton>

        <NavbarAvatar 
          v-if="accountStore.activeWallet?.address"
          :name="name"
          :address="accountStore.activeWallet?.address || ''"
          :url="
            accountStore.userInfo?.user.artist?.page.profileImage ?
            resolveCid(accountStore.userInfo.user.artist.page.profileImage, 128) :
            ((NFDDetails && NFDDetails.v && NFDDetails.v.avatar) ? nfdImage : '')
          "
          @click="login()" 
        />

        <Notification v-show="accountStore.userInfo?.user.isAdmin">
          <NavBarButton name="Admin dashboard" to="/admin" :active="$router.currentRoute.value.fullPath.includes('/admin')">
            <IconAdmin />
          </NavBarButton>
        </Notification>

        <Notification>
          <NavBarButton to="/settings" :active="$router.currentRoute.value.fullPath.includes('/settings')">
            <IconSettings />
          </NavBarButton>
        </Notification>

        <Notification>
          <NavBarButton to="/" :active="$router.currentRoute.value.fullPath === '/'">
            <IconExplore />
          </NavBarButton>
        </Notification>

        <Notification v-show="accountStore.activeWallet">
          <NavBarButton :to="accountStore.userInfo?.user.isArtist ?  '/manage/created' : '/manage'" name="Manage" :active="$router.currentRoute.value.fullPath.includes('/manage')">
            <IconFolder />
          </NavBarButton>
        </Notification>

        <Notification v-show="accountStore.userInfo?.user.isArtist">
          <NavBarButton to="/create" name="Create" :active="$router.currentRoute.value.fullPath.includes('/create')">
            <IconAdd />
          </NavBarButton>
        </Notification>
        
      </div>
      </div>
  </div>
</template>

<script setup lang="ts">

import { resolveCid, resolveMetaData } from '@/functions/media'

// components
import NavBarButton from '@/components/buttons/NavBarButton.vue'
import Notification from '../displays/Notification.vue';
import NavbarAvatar from '../displays/NavbarAvatar.vue';
import IconAdmin from '@/components/icons/Admin.vue'

// icons
import IconExplore from '../icons/Explore.vue';
import IconAdd from '../icons/Add.vue';
import IconFolder from '../icons/Folder.vue';
import IconSettings from '../icons/Settings.vue';
import IconLogin from '../icons/Login.vue';

const accountStore = useAccountStore()
const nfdStore = useNFDStore()
let nfdImage = ref('')

const name = computed(() => {
  if (accountStore.userInfo?.user.artist?.name) {
    return accountStore.userInfo?.user.artist?.name
  } else if (accountStore.activeWallet) {
    return nfdStore.NFDConversion(accountStore.activeWallet.address)
  }
})

const NFDDetails = computed(() => {
  if (accountStore.activeWallet) {
    return nfdStore.NFDDetails(accountStore.activeWallet.address)
  }
})

watch(NFDDetails, async () => {
  if (NFDDetails.value && NFDDetails.value.v && NFDDetails.value.v.avatar) {
    const imageCid = await resolveMetaData(NFDDetails.value.v.avatar.replaceAll('ipfs://', ''))
    nfdImage.value = resolveCid(imageCid)
  }
})

onMounted(async () => {
  if (NFDDetails.value && NFDDetails.value.v && NFDDetails.value.v.avatar) {
    const imageCid = await resolveMetaData(NFDDetails.value.v.avatar.replaceAll('ipfs://', ''))
    nfdImage.value = resolveCid(imageCid)
  }
})

function login() {
  if (accountStore.wallet.addresses.length > 0) {
    accountStore.addressModal = true
  } else {
    accountStore.loginModal = true
  }
}

</script>

<style scoped lang="scss">

.app-bar-wrapper {
  position: fixed;
  left: 8px;
  bottom: 8px;
  display: flex;
  width: calc(100% - 32px);
  justify-content: center;
  z-index: 91;
}

.app-bar {
  position: relative;
  display: flex;
  max-width: calc(100% - 32px);
  max-height: 64px;
  padding: 8px;
  background-color: $c-primary;
  border-radius: $radius-l;
  box-shadow: $shadow-2;
  overflow-x: auto;

  @include scrolbar-hidden;

  &-container {
    display: flex;
    justify-content: space-around;
    gap: 8px;
  }

  & .nav-button {
    flex-grow: 0;
  }

  & .notification {
    flex-grow: 0;
  }
}

</style>
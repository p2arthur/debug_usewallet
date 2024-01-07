<template>
  <div class="side-bar">
    <div class="side-bar-section">
      <div class="side-bar-section-logo">
        <DartroomLogo class="side-bar-section-logo-icon" />
        <IconsDartroomLogoName v-show="wide" class="side-bar-section-logo-name" />

        <div 
          class="side-bar-section-logo-tag" 
          :class="env.RELEASE === 'Alpha' ? 'side-bar-section-logo-tag-alpha' : 'side-bar-section-logo-tag-beta'"
          v-show="wide"
        >
          <span>{{ env.RELEASE }}-{{ settignsStore.appSettings.network.toLowerCase() }}</span>
          <span>-{{ env.VERSION }}</span>
        </div>
      </div>

      <Tooltip text="Explore" :on="!wide">
        <Notification  :inline="wide">
          <NavBarButton name="Explore" to="/" :active="$router.currentRoute.value.fullPath === '/'">
            <IconsExplore />
            <span v-show="wide">Explore</span>
          </NavBarButton>
        </Notification>
      </Tooltip>

      <!-- <Tooltip text="Auctions" :on="!wide">
        <Notification  :inline="wide">
          <NavBarButton name="Auctions"  to="/listings/auctions" :active="$router.currentRoute.value.fullPath === '/listings/auctions'">
            <IconsGavel />
            <span v-show="wide">Auctions</span>
          </NavBarButton>
        </Notification>
      </Tooltip> -->

      <Tooltip text="Buy now" :on="!wide">
        <Notification  :inline="wide">
          <NavBarButton name="Buy now" to="/listings/buy-now" :active="$router.currentRoute.value.fullPath === '/listings/buy-now'">
            <IconsPriceTag />
            <span v-show="wide">Buy now</span>
          </NavBarButton>
        </Notification>
      </Tooltip>

      <Tooltip text="Artists" :on="!wide">
        <Notification  :inline="wide">
          <NavBarButton name="Artists" to="/artists/all" :active="matchExclude('/artists', 'docs')">
            <IconsGroups />
            <span v-show="wide">Artists</span>
          </NavBarButton>
        </Notification>
      </Tooltip>
     

      <Tooltip text="Collections" :on="!wide">
        <Notification  :inline="wide">
          <NavBarButton name="Collections" to="/collections/all" 
            :active="
              $router.currentRoute.value.fullPath.includes('/collections') &&
              !$router.currentRoute.value.fullPath.includes('/artists')
            "
          >
            <IconsMediaFolder />
            <span v-show="wide">Collections</span>
          </NavBarButton>
        </Notification>
      </Tooltip>

      <!-- <Tooltip text="Documentation" :on="!wide">
        <Notification :inline="wide">
          <NavBarButton name="Documentation" :to="localePath('/docs')" :active="$router.currentRoute.value.fullPath.includes('/docs')">
            <IconsInfo />
            <span v-show="wide">Documentation</span>
          </NavBarButton>
          <NavBarButton name="Documentation" :to="'/docs'" :active="$router.currentRoute.value.fullPath.includes('/docs')">
            <IconsInfo />
            <span v-show="wide">Documentation</span>
          </NavBarButton>
        </Notification>
      </Tooltip> -->

      <!-- <Tooltip text="Blog" :on="!wide">
        <Notification :inline="wide">
          <NavBarButton name="Blog" to="/blog" :active="$router.currentRoute.value.fullPath.includes('/blog')">
            <IconsNewspaper />
            <span v-show="wide">Blog</span>
          </NavBarButton>
        </Notification>
      </Tooltip> -->
    </div>

    <div class="side-bar-divider"></div>

    <SectionsListDivider/>

    <div class="side-bar-section">
      <Tooltip text="Create" :on="!wide" v-show="accountStore.userInfo?.user.isArtist">
        <Notification  :inline="wide">
          <NavBarButton 
            to="/create" 
            name="Create"  
            :active="
              $router.currentRoute.value.fullPath.includes('/create') &&
              !$router.currentRoute.value.fullPath.includes('/created')
            "
          >
            <IconsAdd />
            <span v-show="wide">Create</span>
          </NavBarButton>
        </Notification>
      </Tooltip>

      <Tooltip text="Manage" :on="!wide">
        <Notification :inline="wide" v-show="accountStore.activeWallet">
          <NavBarButton :to="accountStore.userInfo?.user.isArtist ?  '/manage/created' : '/manage'" name="Manage" :active="$router.currentRoute.value.fullPath.includes('/manage')">
            <IconsFolder />
            <span v-show="wide">Manage</span>
          </NavBarButton>
        </Notification>
      </Tooltip>

      <Tooltip text="Settings" :on="!wide">
        <Notification  :inline="wide">
          <NavBarButton to="/settings" name="Settings" :active="$router.currentRoute.value.fullPath.includes('/settings')">
            <IconsSettings />
            <span v-show="wide">Settings</span>
          </NavBarButton>
        </Notification>
      </Tooltip>

      <Tooltip text="Admin dashboard" :on="!wide"  v-show="accountStore.userInfo?.user.isAdmin">
        <Notification  :inline="wide">
          <NavBarButton name="Admin dashboard" to="/admin" :active="$router.currentRoute.value.fullPath.includes('/admin')">
            <IconsAdmin />
            <span v-show="wide">Admin dashboard</span>
          </NavBarButton>
        </Notification>
      </Tooltip>

      <Tooltip text="View your page" :on="!wide" v-show="accountStore.userInfo?.user.isArtist">
        <Notification  :inline="wide">
          <NavBarButton 
            :to="`/artists/${accountStore.userInfo?.user.artist?.normalizedName}`" 
            name="View your page"
            :active="$router.currentRoute.value.fullPath.includes(`/artists/${accountStore.userInfo?.user.artist?.normalizedName}`)"
          >
            <IconsAccountBox />
            <span v-show="wide">View your page</span>
          </NavBarButton>
        </Notification>
      </Tooltip>
    </div>

    <SectionsListDivider />

    <div class="side-bar-section">
      <Tooltip text="Login" :on="!wide" v-show="!accountStore.activeWallet?.address">
        <NavBarButton name="Login" @click="login()" :active="accountStore.loginModal || accountStore.addressModal">
          <IconsLogin />
          <span v-show="wide">Login</span>
        </NavBarButton>
      </Tooltip>

      <Tooltip text="Account" :on="!wide" v-show="accountStore.activeWallet?.address">
        <DisplaysNavbarAvatar 
          :detailed="wide"
          :name="name"
          :address="accountStore.activeWallet?.address || ''"
          :url="
            accountStore.userInfo?.user.artist?.page.profileImage ?
            resolveCid(accountStore.userInfo.user.artist.page.profileImage, 128) :
            ((NFDDetails && NFDDetails.v && NFDDetails.v.avatar) ? nfdImage : '')
          "
          @click="login()"
          @logout="login()"
        />
      </Tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">

import { resolveCid, resolveMetaData } from '@/functions/media'

// components
import NavBarButton from '@/components/buttons/NavBarButton.vue'
import Notification from '@/components/displays/Notification.vue'

// icons
import DartroomLogo from '@/components/icons/dartroom/DartroomLogo.vue'
import Tooltip from '@/components/displays/NavTooltip.vue'

import { env } from '@/functions/env'


defineProps({
  wide: {
    required: true,
    default: false,
    type: Boolean
  }
})

function login() {
  console.log('login')
  if (accountStore.wallet.addresses.length > 0) {
    accountStore.addressModal = true
  } else {
    accountStore.loginModal = true
  }
}

const accountStore = useAccountStore()
const nfdStore = useNFDStore()
const settignsStore = useSettingsStore()

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

let nfdImage = ref('')

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

const route = useRoute()

function matchExclude (path: string, exlude: string) {
  return route.fullPath.includes(path) && !route.fullPath.includes(exlude)
}

// const localePath = useLocalePath()

</script>

<style scoped lang="scss">

.side-bar {
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: calc(100vh - 32px);
  overflow-y: auto;

  @include scrolbar-left;

  &-section {
    display: flex;
    flex-direction: column;

    &-logo {
      position: relative;
      display: flex;
      align-items: center;
      color: $c-on-primary;
      gap: 16px;
      margin-bottom: 32px;

      &-icon {
        height: 48px !important;
        width: 48px !important;
        min-height: 48px !important;
        min-width: 48px !important;
      }

      &-name {
      }

      &-tag {
        position: absolute;
        top: 40px;
        left: 62px;
        padding: 2px 8px;
        border-radius: $radius-s;
        cursor: default;

        &-beta {
          background-color: $c-warning-transparent;
          color: $c-on-warning-transparent;

          & span {
            color: $c-on-warning-transparent;
            font-size: 0.95rem;
            font-weight: 600;
          }
        }

        &-alpha {
          background-color: $c-error-transparent;
          color: $c-on-error-transparent;

          
          & span {
            color: $c-on-error-transparent;
            font-size: 0.95rem;
            font-weight: 600;
          }
        }
      }

      & h1 {
        color: $c-on-primary;
        margin: 0px;
        font-weight: 600;
      }
    }
  }

  &-divider {
    content: "";
    flex-grow: 1;
  }
}

</style>
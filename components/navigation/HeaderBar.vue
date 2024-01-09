<!-- @format -->

<template>
  <div
    class="header-bar"
    ref="headerBar">
    <div class="header-bar-container">
      <div class="header-bar-section-placeholder">
        <!-- Nova div de preenchimento -->
        <img
          src="/img/rxelms_logo.png"
          alt="Logo Rxelms" />
        <!-- Adicione a imagem aqui -->
      </div>
      <div class="header-bar-section">
        <!-- Adicionado o botão Home -->
        <NavBarButton
          name="Home"
          to="/"
          :active="$router.currentRoute.value.fullPath === '/'">
          <h4>Home</h4>
        </NavBarButton>

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
      <div class="header-bar-section-dif">
        <Tooltip
          :on="!wide"
          v-show="!accountStore.activeWallet?.address"
          class="nav-button-different">
          <NavBarButton
            name="Login"
            @click="login()"
            :active="accountStore.loginModal || accountStore.addressModal">
            <h2>Connect</h2>
          </NavBarButton>
        </Tooltip>
        <div class="header-bar-section-dif-login">
          <Tooltip
            :on="!wide"
            v-show="accountStore.activeWallet?.address">
            <DisplaysNavbarAvatar
              :detailed="wide"
              :name="name"
              :address="accountStore.activeWallet?.address || ''"
              :url="
                accountStore.userInfo?.user.artist?.page.profileImage
                  ? resolveCid(
                      accountStore.userInfo.user.artist.page.profileImage,
                      128
                    )
                  : NFDDetails && NFDDetails.v && NFDDetails.v.avatar
                  ? nfdImage
                  : ''
              "
              @click="login()"
              @logout="login()" />
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { resolveCid, resolveMetaData } from '@/functions/media';

  // components
  import NavBarButton from '@/components/buttons/NavBarButton.vue';
  import Notification from '@/components/displays/Notification.vue';

  // icons
  import DartroomLogo from '@/components/icons/dartroom/DartroomLogo.vue';
  import Tooltip from '@/components/displays/NavTooltip.vue';

  import { env } from '@/functions/env';

  console.log('script HeaderBar');

  defineProps({
    wide: {
      required: true,
      default: false,
      type: Boolean,
    },
  });

  function login() {
    if (accountStore.wallet.addresses.length > 0) {
      accountStore.addressModal = true;
    } else {
      accountStore.loginModal = true;
    }
  }

  const accountStore = useAccountStore();
  const nfdStore = useNFDStore();
  const settignsStore = useSettingsStore();

  const name = computed(() => {
    if (accountStore.userInfo?.user.artist?.name) {
      return accountStore.userInfo?.user.artist?.name;
    } else if (accountStore.activeWallet) {
      return nfdStore.NFDConversion(accountStore.activeWallet.address);
    }
  });

  const NFDDetails = computed(() => {
    if (accountStore.activeWallet) {
      return nfdStore.NFDDetails(accountStore.activeWallet.address);
    }
  });

  let nfdImage = ref('');

  watch(NFDDetails, async () => {
    if (NFDDetails.value && NFDDetails.value.v && NFDDetails.value.v.avatar) {
      const imageCid = await resolveMetaData(
        NFDDetails.value.v.avatar.replaceAll('ipfs://', '')
      );
      nfdImage.value = resolveCid(imageCid);
    }
  });

  onMounted(async () => {
    if (NFDDetails.value && NFDDetails.value.v && NFDDetails.value.v.avatar) {
      const imageCid = await resolveMetaData(
        NFDDetails.value.v.avatar.replaceAll('ipfs://', '')
      );
      nfdImage.value = resolveCid(imageCid);
    }
  });

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
    justify-content: center;
    width: 100%;
    background: rgba(255, 255, 255, 0.029);
    padding: 10px 0px;
    overflow-y: auto;
    backdrop-filter: blur(1px);
  }

  .header-bar-container {
    margin-right: 200px;
    margin-left: 200px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .header-bar-section-placeholder {
    img {
      width: 200px;
      height: 40px;
      object-fit: contain; // Mantém a proporção da imagem sem cortá-la
    }
  }

  .header-bar-section {
    display: flex;
    gap: 40px;
    justify-content: center; // Centraliza o conteúdo da .header-bar-section
    // flex-grow: 1; // Permite que a seção cresça conforme o espaço disponível
  }

  .header-bar-section-dif {
    // Estilos para a seção alinhada à direita
    // flex-grow: 1;
    padding-right: 145px;
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
</style>

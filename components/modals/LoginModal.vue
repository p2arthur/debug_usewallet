<template>
  <BaseModal>
    <div class="login">
      <h1>Login</h1>

      <p v-show="!showQR">Select a wallet app from the list below to connect it with Dartroom.</p>

      <div class="login-list" v-show="!showQR">
        <button class="login-list-button pera" @click="connect('PeraWallet')">
          <span>Pera</span>
          <IconPera />
        </button>

        <button class="login-list-button myalgo" @click="connect('MyAlgo')">
          <span>MyAlgo</span>
          <IconMyAlgo />
        </button>

        <button class="login-list-button algosigner" @click="connect('AlgoSigner')" @mouseenter="hoverSigner = true"
          @mouseleave="hoverSigner = false">
          <span>AlgoSigner</span>
          <IconAlgoSigner :hover="hoverSigner" />
        </button>
      </div>
      <!-- 
      <p v-show="!showQR">Or, if you want to mint NFTs, you can apply for an artist position at Dartroom.</p>

      <div class="login-actions"  v-show="!showQR">
        <FilledButton @click="$router.push('/application/new'), accountStore.loginModal = false">
          <span>Apply as an artist</span>
        </FilledButton>
      </div> -->

      <p v-show="showQR && qrcode">Scan the QR code with the Pera app to connect it with Dartroom.</p>

      <div class="login-qr" v-show="showQR && qrcode">
        <div class="login-qr-code" v-html="qrcode" />
      </div>

      <p v-show="showQR && qrcode">Or click the button to open and connect the Pera app with Dartroom.</p>

      <!-- <div class="login-list" v-show="showQR && qrcode">
        <button class="login-list-button pera" @click="openDeepLink()">
          <span>Open the Pera app</span>
          <IconPera />
        </button>
      </div> -->
    </div>

    <div class="modal-actions">
      <button class="modal-actions-button" @click="accountStore.loginModal = false">
        <IconRemove class="modal-actions-button-icon" />
      </button>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { Ref, ref, computed } from "vue";

import BaseModal from "./BaseModal.vue";
import FilledButton from "@/components/buttons/FilledButton.vue";
import IconPera from "@/components/icons/third-party/IconPera.vue";
import IconExodus from "@/components/icons/third-party/IconExodus.vue";
import IconMyAlgo from "@/components/icons/third-party/IconMyAlgo.vue";
import IconAlgoSigner from "@/components/icons/third-party/IconAlgoSigner.vue";
import IconRemove from "@/components/icons/Remove.vue";

// import { useQRCode } from '@vueuse/integrations/useQRCode'
import qr from 'qrcode-generator'

// Stores
import type { Wallets, Address } from '@dartroom/signer'

const accountStore = useAccountStore()
const nfdStore = useNFDStore()

let hoverExodus: Ref<boolean> = ref(false)
let hoverSigner: Ref<boolean> = ref(false)
let showQR: Ref<boolean> = ref(false)
let uri: Ref<string> = ref("")
let qrcode: Ref<string | null> = ref(null)
const destkop = useIsDesktop()

// const qrcode = useQRCode(uri)

watch(accountStore.wallet.pera, () => {
  if (!qrcode.value) {
    // uri.value = accountStore.peraUri

    if (uri.value && uri.value.length > 0) {

      const makeQR = qr(9, 'L')
      makeQR.addData(uri.value)
      makeQR.make()
      qrcode.value = makeQR.createSvgTag(5, 16)
      qrcode.value = qrcode.value.replaceAll('fill="white"', 'fill="transparent"')
    }
  }
}, { deep: true })

async function connect(wallet: Wallets) {
  try {
    // if (wallet === Wallets.PERA) {
    //   showQR.value = true
    // }
    const addresses = await accountStore.wallet.connectNewAddress({ wallet })
    showQR.value = false
    accountStore.addressModal = true
    accountStore.loginModal = false

    if (addresses) {
      nfdStore.fetchNFDs(addresses.map((a: Address) => a.address))
    }
  } catch (e) {
    console.log(e)
    showQR.value = false
  }
}

function openDeepLink() {
  // window.open(accountStore.peraDeeplink)
}

</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
  gap: 16px;
  align-items: center;
  justify-content: center;
  height: calc(100% - 32px);

  & h1 {
    text-align: center;
    margin: 0px;
  }

  & p {
    max-width: 50ch;
    font-weight: 500;
    font-size: 1rem;
    margin: 0px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    align-items: center;

    &-button {
      display: flex;
      height: 48px;
      border-radius: $radius-m;
      border: none;
      background-color: $c-primary;
      width: min(100%, 300px);
      align-items: center;
      justify-content: space-between;
      padding: 24px;
      cursor: pointer;
      transition: color 150ms ease, background-color 150ms ease;

      & span {
        font-size: 1.4rem;
        font-weight: 500;
        transition: color 150ms ease, background-color 150ms ease;
      }

      & svg {
        height: 32px !important;
        width: 32px !important;
        transition: color 150ms ease, background-color 150ms ease;
      }
    }
  }

  &-actions {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  &-qr {
    border-radius: $radius-l;
    background-color: #ffee55;

    &-code {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 300px;
      min-height: 300px;

      & svg {
        fill: transparent;
      }
    }
  }
}

.modal-actions {
  position: absolute;
  top: 0;
  right: 0;

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    color: $c-on-background;
    margin: 8px;
    padding: 4px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 150ms ease, color 150ms ease;

    &-icon {
      height: 28px !important;
      width: 28px !important;
    }

    &:hover {
      color: $c-secondary;
      background-color: $c-background-secondary;
    }
  }
}

.pera {
  color: $c-on-primary;

  & span {
    color: $c-on-primary;
  }

  &:hover {
    background-color: #ffee55;
    color: #1C1C1C;

    & span {
      color: #1C1C1C;
    }
  }
}

.exodus {
  color: $c-on-primary;

  & span {
    color: $c-on-primary;
  }

  &:hover {
    background-color: #1F2032;
  }
}

.myalgo {
  color: $c-on-primary;

  & span {
    color: $c-on-primary;
  }

  &:hover {
    background-color: #245EC6;
    color: white;

    & span {
      color: white;
    }
  }
}

.algosigner {
  color: $c-on-primary;

  & span {
    color: $c-on-primary;
  }

  &:hover {
    background-color: #222B60;
  }
}
</style>
<template>
  <BaseModal>
    <div class="address">
      <h1>Select your address</h1>

      <p>Select which address from the connect wallets you want to use on Dartroom. You can easily switch between them later.</p>

      <div class="address-list">
        <button 
          @click="changeActive(a)"
          class="address-list-button"  
          :class="(a.address === accountStore.activeWallet?.address && a.wallet === accountStore.activeWallet.wallet) ? 'address-list-button-active' : ''"
          v-for="(a, i) in accountStore.wallet.addresses" :key="i"
        >
          <IconPera class="address-list-button-icon" v-if="a.wallet === Wallets.PERA" />
          <IconExodus class="address-list-button-icon" v-if="a.wallet === Wallets.EXODUS" />
          <IconMyAlgo class="address-list-button-icon" v-if="a.wallet === Wallets.MYALGO" />
          <IconAlgoSigner class="address-list-button-icon" v-if="a.wallet === Wallets.ALGOSIGNER" />

          <span>{{ nfd(a.address) }}{{ a.address }}</span>

          <div>
            <button class="address-list-button-remove" @click.stop="disconnect(a)">
              <IconRemove />
            </button>
          </div>
        </button>
      </div>

      <p>Or connect additional addresses to Dartroom from different wallet apps.</p>

      <div class="address-actions">
        <FilledButton @click="accountStore.loginModal = true, accountStore.addressModal = false">
          <span>Update connected wallets</span>
        </FilledButton>
      </div>
    </div>

    <div class="modal-actions">
      <button class="modal-actions-button" @click="accountStore.addressModal = false">
        <IconRemove class="modal-actions-button-icon" />
      </button>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">

import BaseModal from "./BaseModal.vue";
import FilledButton from "@/components/buttons/FilledButton.vue";

import IconPera from "@/components/icons/third-party/IconPera.vue";
import IconExodus from "@/components/icons/third-party/IconExodus.vue";
import IconMyAlgo from "@/components/icons/third-party/IconMyAlgo.vue";
import IconAlgoSigner from "@/components/icons/third-party/IconAlgoSigner.vue";
import IconRemove from "@/components/icons/Remove.vue";
import { useCookies } from '@vueuse/integrations/useCookies'

// Stores
import { Wallets } from '@/stores/account'

const accountStore = useAccountStore()
const nfdStore = useNFDStore()
const cookie = useCookies()

function nfd (address: string) {
  const nfd = nfdStore.NFDConversion(address)

  if (nfd) {
    return `${nfd} - `
  } else {
    return ''
  }
}

async function disconnect (wallet: { address: string, wallet: Wallets }) {
  await accountStore.wallet.disconnectAddress(wallet)

  if (accountStore.wallet.active && accountStore.wallet.active.address) {
    cookie.set('wallet',accountStore.wallet.active,{ path: '/', secure: true, sameSite: true })
  } else {
    cookie.remove('wallet',{ path: '/', secure: true, sameSite: true })
  }

  accountStore.removeUser(wallet.address)
}

async function changeActive (wallet: { address: string, wallet: Wallets }) {

  const infoIndex = accountStore.loggedInUsers.findIndex((u) => u.user.walletAddress === wallet.address)

  if (infoIndex >= 0) {
    const userInfo = JSON.parse(JSON.stringify(accountStore.loggedInUsers[infoIndex]))

    accountStore.userInfo = userInfo
    cookie.set('userInfo',JSON.stringify(userInfo),{ path: '/', secure: true, sameSite: true })
  } else {
    await accountStore.getUserLoginInfo(wallet.address)
    accountStore.authModal = true
    accountStore.userInfo = null
    cookie.set('userInfo',null,{ path: '/', secure: true, sameSite: true })
  }
  
  await accountStore.wallet.setActive(wallet)
  cookie.set('wallet',wallet,{ path: '/', secure: true, sameSite: true })
  
  accountStore.addressModal = false
  nfdStore.fetchNFDDetails(wallet.address)
}

</script>

<style scoped lang="scss">

.address {
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
  gap: 24px;
  align-items: center;
  justify-content: center;
  height: calc(100% - 32px);
  max-width: 464px;

  & h1 {
    text-align: center;
    margin: 0px;
  }

  & p {
    max-width: min(400px, 100%);
    font-weight: 500;
    font-size: 1rem;
    margin: 0px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: min(400px, 100%);
    align-items: center;

    &-button {
      max-width: min(400px, 100%);
      display: flex;
      gap: 12px;
      min-height: 48px;
      max-height: 48px;
      border-radius: $radius-m;
      outline: 2px solid;
      border: none;
      outline-color: $c-on-background;
      outline-offset: -2px;
      padding: 0px 12px;
      align-items: center;
      cursor: pointer;
      color: $c-on-background;
      background-color: transparent;
      transition: background-color 150ms ease, color 150ms ease;

      &:hover {
        background-color: $c-hover-on-background;
      }

      &:focus {
        background-color: $c-hover-on-background;
      }

      &-icon {
        color: $c-on-background;
        height: 28px !important;
        width: 28px !important;
        min-width: 28px !important;
        min-height: 28px !important;
      }

      &-active {
        background-color: $c-on-background;
        
        & .address-list-button-icon {
          color: $c-background-0;
        }

        & span {
          color: $c-background-0;
        }

        & .address-list-button-remove {
          color: $c-background-0;
        }

        &:hover {
          background-color: $c-on-background;
        }

        &:focus {
          background-color: $c-on-background;
        }
      }

      & span {
        font-family: $f-mono;
        font-weight: 500;
        font-size: 0.95rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      &-remove {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        transition: color 150ms ease;
        cursor: pointer;
        color: $c-on-background;
        
        &:hover {
          color: $c-secondary;
        }
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
</style>
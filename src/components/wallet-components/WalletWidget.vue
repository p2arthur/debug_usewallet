<!-- @format -->
<script setup lang="ts">
  import MainButton from '../buttons/MainButton.vue';
  import { useWallet } from '@txnlab/use-wallet-vue';
  import {
    ArrowRightEndOnRectangleIcon,
    ArrowDownIcon,
  } from '@heroicons/vue/24/solid';
  import { useUserStore } from '~/stores/user/user.store';

  const { wallets, activeWallet } = useWallet();
  const userStore = useUserStore();

  const connectedWalletProvider = wallets.value.find(
    (provider) => provider.id === activeWallet.value?.id
  );

  const dropDownOpen = ref(false);

  const toggleDropDown = () => {
    dropDownOpen.value = !dropDownOpen.value;
  };

  const props = defineProps(['activeAccount']);

  const user = await userStore.getUserInfo(props.activeAccount.address);

  console.log('wallets', wallets.value, connectedWalletProvider);
</script>

<template>
  <div class="dropdown-container">
    <MainButton
      :text="user.nfd ? user.nfd : ellipseAddress(user.address)"
      size="small"
      :action="toggleDropDown">
    </MainButton>
    <ul
      class="dropdown-items"
      v-if="dropDownOpen">
      <li @click="connectedWalletProvider?.disconnect">
        <p>Disconnect</p>
        <ArrowRightEndOnRectangleIcon class="disconnect-icon" />
      </li>
    </ul>
  </div>
</template>

<style>
  .dropdown-items {
    margin: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 55px;
    list-style: none;
    padding: 0;
    align-items: center;
    background: linear-gradient(
      to bottom right,
      rgba(14, 10, 30, 0.459),
      rgba(26, 20, 45, 0.417)
    );
    backdrop-filter: blur(1px);
    border-radius: 5px;
    padding: 5px;
    width: 100%;

    .disconnect-icon {
      color: white;
      width: 1.5rem;
      height: 1.5rem;
    }

    li {
      p {
        font-size: 1rem;
        margin: 0;
        color: #ffffff;
      }

      &:hover {
        background-color: rgb(22, 11, 29);
      }
    }
  }
</style>

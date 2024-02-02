<!-- @format -->

<script setup lang="ts">
  import { useWallet } from '@txnlab/use-wallet-vue';
  import MainButton from '../buttons/MainButton.vue';

  const dropDownOpen = ref(false);

  const toggleDropDown = () => {
    dropDownOpen.value = !dropDownOpen.value;
  };

  const { wallets, activeAccount } = useWallet();
  console.log('wallets', wallets.value, activeAccount.value?.address);
</script>

<template>
  <div class="dropdown-container">
    <MainButton
      text="Connect wallet"
      size="small"
      :action="toggleDropDown"></MainButton>
    <ul
      class="dropdown-items"
      v-if="dropDownOpen">
      <li
        v-for="wallet in wallets"
        @click="wallet.connect">
        <img
          :src="wallet.metadata.icon"
          alt="" />
        <p>{{ wallet.metadata.name }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
  .dropdown-container {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .dropdown-items {
    margin: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 55px;
    list-style: none;
    padding: 0;
    background: linear-gradient(
      to bottom right,
      rgba(14, 10, 30, 0.459),
      rgba(26, 20, 45, 0.417)
    );
    backdrop-filter: blur(1px);
    border-radius: 5px;
    padding: 5px;
    width: 100%;

    li {
      display: flex;
      font-size: 1rem;
      gap: 10px;
      justify-content: center;
      align-items: center;
      width: 100%;
      cursor: pointer;
      padding: 10px;

      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }

      p {
        font-size: 1.2rem;
        margin: 0;
        color: #ffffff;
      }

      &:hover {
        background-color: rgb(22, 11, 29);
      }
    }
  }
</style>

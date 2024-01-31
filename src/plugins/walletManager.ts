// plugins/wallet-manager.js
import { defineNuxtPlugin } from '#app';
import { NetworkId, WalletId } from '@txnlab/use-wallet-js';
import { WalletManagerPlugin } from '@txnlab/use-wallet-vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WalletManagerPlugin, {
    wallets: [WalletId.PERA, WalletId.DEFLY, WalletId.EXODUS],
    network: NetworkId.TESTNET,
    algod: {
      [NetworkId.TESTNET]: {
        token: '0C3BF7223DB65E1E6EBF106BF63F5284',
        baseServer: 'https://testnet-api.algonode.cloud',
        port: '',
      },
      [NetworkId.MAINNET]: {
        token: '0C3BF7223DB65E1E6EBF106BF63F5284',
        baseServer: 'https://mainnet-api.algonode.cloud',
        port: '',
      },
    },
  });
});

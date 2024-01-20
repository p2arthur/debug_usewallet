// plugins/wallet-manager.js
import { defineNuxtPlugin } from '#app';
import { NetworkId, WalletId } from '@txnlab/use-wallet-js';
import { WalletManagerPlugin } from '@txnlab/use-wallet-vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WalletManagerPlugin, {
    wallets: [WalletId.PERA, WalletId.DEFLY],
    network: NetworkId.TESTNET,
    algod: {},
  });
});

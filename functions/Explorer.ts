import { Network } from '@/stores/settings'

interface Explorer {
  value: string
  baseMainnet: string
  baseTestnet: string
  address: string
  asset: string
  group?: string
}

const explorers: Array<Explorer> = [
  { 
    value: "ALGO_EXPLORER",
    baseMainnet: "https://algoexplorer.io/",
    baseTestnet: "https://testnet.algoexplorer.io/",
    address: "address/",
    asset: "asset/",
    group: "tx/group/"
  },
  { 
    value: "ALGOSCAN",
    baseMainnet: "https://algoscan.app/",
    baseTestnet: "https://testnet.algoscan.app/",
    address: "address/",
    asset: "asset/",
    group: "tx/group/"
  },
  { 
    value: "PERA_EXPLORER",
    baseMainnet: "https://explorer.perawallet.app/",
    baseTestnet: "https://testnet.explorer.perawallet.app/",
    address: "accounts/",
    asset: "assets/"
  },
  { 
    value: "GOALSEEKER",
    baseMainnet: "https://goalseeker.purestake.io/algorand/mainnet/",
    baseTestnet: "https://goalseeker.purestake.io/algorand/testnet/",
    address: "account/",
    asset: "asset/"
  },
]

export function baseExplorer (explorer: Explorer, network: Network) {
  if (network === 'TESTNET') {
    return explorer.baseTestnet
  } else {
    return explorer.baseMainnet
  }
}

let lastOpenedAddress: string | null = null;

export function openAddress(address: string, explorerValue: string, network: Network): string {
  const foundExplorer = explorers.find((e) => e.value === explorerValue) || explorers[0];
  const base = baseExplorer(foundExplorer, network);

  

  
  lastOpenedAddress = base + foundExplorer.address + address;
  
  return lastOpenedAddress;
}

// Defina reopenLastAddress como uma propriedade de window para torná-la global
if (typeof window !== 'undefined') {
  window.getWalletFromVue = function() {
    const accountStore = useAccountStore();
    return accountStore.activeWallet.address; // ou qualquer outra propriedade específica que você precisa
  };
}



export function openAsset (index: number, explorer: string, network: Network) {
  const foundExplorer = explorers.find((e) => e.value === explorer) || explorers[0]
  const base = baseExplorer(foundExplorer, network)
  
  return base + foundExplorer.asset + index
}

export function openGroup (groupId: string, explorer: string, network: Network) {
  const foundExplorer = explorers.find((e) => e.value === explorer) || explorers[0]
  const base = baseExplorer(foundExplorer, network)

  if (foundExplorer.group) {
    return base + foundExplorer.group + encodeURIComponent(groupId)
  } else {
    const fallbackExplorer = explorers[0]
    const base = baseExplorer(fallbackExplorer, network)

    return base + fallbackExplorer.group + groupId
  }
}
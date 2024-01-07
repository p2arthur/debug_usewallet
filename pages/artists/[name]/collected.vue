<template>
  <div class="nft-view">
    <div class="nft-view-filters">
      <SelectionTabSwitch 
        :tabs="tabs" 
        :activeTab="activeTab"
        @change="changeTab"
      />

      <SelectionSort 
        :selected="activeSort" 
        :options="sortOptions" 
        @change="changeSort" 
      />
    </div>
  
    <GridsNFT 
      :nfts="nftStore.collected"
      @endReached="fetchMoreNFTs()"
    />
  </div>
</template>

<script setup lang="ts">

import { NftSaleStatus, NftSort } from '@/graphql/client'

const nftStore = useNFTStore()
const artistStore = useArtistStore()
const router = useRouter()

useAsyncData(async () => {
  await nftStore.getNFTsByCollector(`${artistStore.artist?.walletAddress}`)
})

async function fetchMoreNFTs () {
  await nftStore.getNFTsByCollector(`${artistStore.artist?.walletAddress}`)
}

// Tabs
const activeTab = computed(() => {
  return tabs.find((tab) => tab.value === nftStore.collectedStatus) || tabs[0]
})

const tabs = [
  { name: 'All', value: 'ALL' },
  { name: 'Collected', value: 'COLLECTED' },
  { name: 'Listed', value: 'LISTED' },
]

function changeTab (tab: { name: string, value: NftSaleStatus }) {
  nftStore.collectedStatus = tab.value
  nftStore.getNFTsByCollector(`${artistStore.artist?.walletAddress}`, true)
}

// Sort
const activeSort = computed(() => {
  return sortOptions.find((s) => s.value === nftStore.collectedSort) || sortOptions[0]
})

const sortOptions = [
  { display: "New", value: "NEW" },
  { display: "Old", value: "OLD" },
  { display: "Price descending", value: "PRICE_DESCENDING" },
  { display: "Price ascending", value: "PRICE_ASCENDING" },
  { display: "Sale descending", value: "SALE_DESCENDING" },
  { display: "Sale ascending", value: "SALE_ASCENDING" },
  { display: "Artist", value: "ARTIST" },
]

function changeSort (option: { display: string, value: NftSort }) {
  nftStore.collectedSort = option.value
  nftStore.getNFTsByCollector(`${artistStore.artist?.walletAddress}`, true)
}

</script>

<style scoped lang="scss">

.nft-view {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 16px;

  &-filters {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    padding-top: 8px;
    top: 53px;
    background-color: $c-background-0;
    z-index: 10;
  }
}

</style>
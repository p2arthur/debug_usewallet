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
      :nfts="nftStore.nfts"
      @endReached="fetchMoreNFTs()"
    />
  </div>
</template>

<script setup lang="ts">

import { NftSaleStatus, NftSort } from '@/graphql/client'

const nftStore = useNFTStore()
const router = useRouter()

useAsyncData(async () => {
  await nftStore.getNFTsByArtist(`${router.currentRoute.value.params.name}`)
})

async function fetchMoreNFTs () {
  await nftStore.getNFTsByArtist(`${router.currentRoute.value.params.name}`)
}

// Tabs
// const activeTab = ref({ name: 'All (122)', value: 'ALL' })
const activeTab = computed(() => {
  return tabs.find((tab) => tab.value === nftStore.status) || tabs[0]
})

const tabs = [
  { name: 'All', value: 'ALL' },
  { name: 'For sale', value: 'FOR_SALE' },
  { name: 'Sold', value: 'SOLD' },
]

function changeTab (tab: { name: string, value: NftSaleStatus }) {
  nftStore.status = tab.value
  nftStore.getNFTsByArtist(`${router.currentRoute.value.params.name}`, true)
}

// Sort
const activeSort = computed(() => {
  return sortOptions.find((s) => s.value === nftStore.sort) || sortOptions[0]
})

const sortOptions = [
  { display: "New", value: "NEW" },
  { display: "Old", value: "OLD" },
  { display: "Price descending", value: "PRICE_DESCENDING" },
  { display: "Price ascending", value: "PRICE_ASCENDING" },
  { display: "Sale descending", value: "SALE_DESCENDING" },
  { display: "Sale ascending", value: "SALE_ASCENDING" }
]

function changeSort (option: { display: string, value: NftSort }) {
  nftStore.sort = option.value
  nftStore.getNFTsByArtist(`${router.currentRoute.value.params.name}`, true)
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
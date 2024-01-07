<template>
  <div class="nft-trading">

    <SectionsHeaderExpand :title="`Buy now (${nftStore.nftFixedBids.length})`" :open="true">
      <template v-slot:icon>
        <IconsPriceTag />
      </template>
      <template v-slot:content>
        <TablesFixedBid
          v-if="nftStore.nftFixedBids.length > 0" 
          :listings="nftStore.nftFixedBids" 
          :nft="nftStore.nft || undefined" 
        />
      </template>
    </SectionsHeaderExpand>
    
    <!-- <SectionsHeaderExpand title="Auctions (0)" :open="true">
      <template v-slot:icon>
        <IconsGavel />
      </template>
      <template v-slot:content>
        
      </template>
    </SectionsHeaderExpand> -->

    <!-- <SectionsHeaderExpand title="Offers (0)" :open="true">
      <template v-slot:icon>
        <IconsHandshake />
      </template>
      <template v-slot:content>
        <TablesOffers :offers="parsedOffers" />
      </template>
    </SectionsHeaderExpand> -->
  </div>
</template>

<script setup lang="ts">

const nftStore = useNFTStore()
const router = useRouter()
const nfdStore = useNFDStore()

const id = computed(() => {
  return Number(router.currentRoute.value.params.id)
})

useAsyncData(async () => {
  await nftStore.getFixedBids(id.value)
})


onMounted(() => {
  nfdStore.fetchNFDs(nftStore.nftFixedBids.map((a) => a.sellerAddress))
})

</script>

<style scoped lang="scss">

.nft-trading {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  min-width: 100%;
}

</style>
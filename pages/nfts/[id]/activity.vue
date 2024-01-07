<template>
  <div class="nft-activity">

    <SectionsHeaderExpand :title="`Sales (${saleStore.nftPageInfo?.totalDocs || 0})`" :open="true">
      <template v-slot:icon>
        <IconsSync />
      </template>
      <template v-slot:content>
        <TablesNFTSales 
          :sales="saleStore.nft"
        />
      </template>
    </SectionsHeaderExpand>

  </div>
</template>

<script setup lang="ts">

const saleStore = useSaleStore()
const nfdStore = useNFDStore()
const route = useRoute()

const index = computed(() => {
  return Number(route.params.id)
})

useAsyncData(async () => {
  await saleStore.getByNFT(index.value, 1)
})

onMounted(() => {
  nfdStore.fetchNFDs(saleStore.all.map((sale) => [sale.buyerAddress, sale.sellerAddress]).flat(1))
})

</script>

<style scoped lang="scss">

.nft-activity {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  min-width: 100%;
}

</style>
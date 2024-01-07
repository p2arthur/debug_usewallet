<template>
  <div class="artist-activity">

    <SectionsHeaderExpand 
      :title="`Sales (${saleStore.artistPageInfo?.totalDocs || 0})`"
      :open="true"
      style="max-width: min(100%, 1000px)"
    >
      <template v-slot:icon>
        <IconsSync />
      </template>
      <template v-slot:content>
        <TablesArtistSales
          v-show="saleStore.artistPageInfo?.totalDocs && saleStore.artistPageInfo?.totalDocs > 0"
          :sales="saleStore.artist"
        />
      </template>
    </SectionsHeaderExpand>

  </div>
</template>

<script setup lang="ts">

const saleStore = useSaleStore()
const nfdStore = useNFDStore()
const route = useRoute()

const id = computed(() => {
  return `${route.params.name}` 
})

useAsyncData(async () => {
  await saleStore.getByArtist(id.value, 1)
})

onMounted(() => {
  nfdStore.fetchNFDs(saleStore.artist.map((sale) => [sale.buyerAddress, sale.sellerAddress]).flat(1))
})

</script>

<style scoped lang="scss">

.artist-activity {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  min-width: 100%;
}

</style>
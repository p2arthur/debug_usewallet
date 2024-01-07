<template>
  <div class="home">
    <GridsNFT 
      :nfts="nftStore.nfts"
      @endReached="fetchMoreNFTs()"
    />
  </div>
</template>

<script setup lang="ts">

const nftStore = useNFTStore()
const router = useRouter()

useAsyncData(async () => {
  await nftStore.getNFTsByArtist(`${router.currentRoute.value.params.name}`)
})

async function fetchMoreNFTs () {
  await nftStore.getNFTsByArtist(`${router.currentRoute.value.params.name}`)
}

</script>

<style scoped lang="scss">

.home {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 32px;
}

</style>
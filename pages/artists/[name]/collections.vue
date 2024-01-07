<template>
  <GridsCollection 
    :collections="collectionStore.byArtist"
    @endReached="fetchMoreCollections()"
  />
</template>

<script setup lang="ts">

const collectionStore = useCollectionStore()
const route = useRoute()

const artistName = computed(() => {
  return `${route.params.name}` || ''
})

await useAsyncData(async () => {
  await collectionStore.getByArtist(artistName.value)
})

async function fetchMoreCollections () {
  await collectionStore.getByArtist(artistName.value)
}

watch([route, artistName], async () => {
  await collectionStore.getByArtist(artistName.value)
})

</script>

<style scoped lang="scss">

</style>
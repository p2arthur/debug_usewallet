<template>
  <div class="home">
    <div class="home-section">
      <div class="home-section-info">
        <h3 class="home-section-info-title">Buy now</h3>

        <router-link to="/listings/buy-now" class="home-section-info-button">
          <span>View NFTs for sale</span>
          <IconsArrowForward />
        </router-link>
      </div>

      <GridsNFT :nfts="nftStore.listed"
        style="margin-top: 16px; max-height: 388px; padding-bottom: 16px; overflow: hidden;" />
    </div>

    <div class="home-section">
      <div class="home-section-info">
        <h3 class="home-section-info-title">Featured artists</h3>

        <router-link to="/artists/all" class="home-section-info-button">
          <span>Explore featured artists</span>
          <IconsArrowForward />
        </router-link>
      </div>

      <div class="home-section-grid" v-if="artistStore.featuredSections.length > 0">
        <CardsArtist v-for="artist in artistStore.featuredSections.flatMap((s) => s.artists).slice(0, 10)"
          :key="artist.normalizedName" :artist="artist" />
      </div>
    </div>

    <div class="home-section">
      <div class="home-section-info">
        <h3 class="home-section-info-title">Collections</h3>

        <router-link to="/collections/all" class="home-section-info-button">
          <span>View collections</span>
          <IconsArrowForward />
        </router-link>
      </div>

      <GridsCollection :collections="collectionStore.all"
        style="max-height: 388px; padding-bottom: 16px; overflow: hidden;" />
    </div>

    <div class="home-section">
      <div class="home-section-info">
        <h3 class="home-section-info-title">Latest sales</h3>

        <router-link to="/sales" class="home-section-info-button">
          <span>View all sales</span>
          <IconsArrowForward />
        </router-link>
      </div>

      <div class="home-section-table">
        <TablesSales :sales="saleStore.latest.slice(0, 10)" />
      </div>
    </div>

    <div class="home-section">
      <div class="home-section-info">
        <h3 class="home-section-info-title">Freshly minted</h3>

        <router-link to="/nfts/all" class="home-section-info-button">
          <span>View all NFTs</span>
          <IconsArrowForward />
        </router-link>
      </div>

      <GridsNFT :nfts="nftStore.all"
        style="margin-top: 16px; max-height: 794px; padding-bottom: 16px; overflow: hidden;" />
    </div>

  </div>
</template>

<script setup lang="ts">

const nftStore = useNFTStore()
const artistStore = useArtistStore()
const collectionStore = useCollectionStore()
const saleStore = useSaleStore()
const nfdStore = useNFDStore()

useAsyncData(async () => {
  await Promise.all([
    nftStore.getListed(),
    artistStore.getFeaturedArtists(),
    collectionStore.getAll(1),
    saleStore.getLatest(1),
    nftStore.getAll()
  ])
})

onMounted(() => {
  if (process.client) {
    saleStore.subscribe()
  }

  nfdStore.fetchNFDs(saleStore.all.map((sale) => sale.buyerAddress))

  nftStore.getListed(),
    artistStore.getFeaturedArtists(),
    collectionStore.getAll(1),
    saleStore.getLatest(1),
    nftStore.getAll()
})

</script>

<style scoped lang="scss">
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 32px 0px;

  &-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: min(100%, 1920px);
    color: $c-on-background;

    &-info {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: $sidebar-thin-breakpoint) {
        padding: 0px 16px;
      }

      & h3 {
        margin: 0px;
        color: inherit;
        margin: 0px;
        font-size: 2rem;
        font-weight: 600;

        @media screen and (max-width: $sidebar-thin-breakpoint) {
          font-size: 1.5rem;
        }
      }

      &-button {
        display: flex;
        background-color: transparent;
        border: none;
        align-items: center;
        gap: 12px;
        color: $c-on-background;
        transition: color 150ms ease;
        cursor: pointer;
        padding: 0px;
        margin: 0px;

        & svg {
          color: inherit;
          height: 32px !important;
          width: 32px !important;
        }

        & span {
          font-size: 1rem;
          font-weight: 500;
          color: inherit;
        }

        &:hover {
          color: $c-secondary;
        }
      }
    }

    &-grid {
      display: flex;
      gap: 25px;
      overflow-x: auto;
      padding: 16px;
      scroll-snap-type: mandatory;
      scroll-snap-points-y: repeat(300px);
      scroll-snap-type: x mandatory;

      @include scrolbar-small($c-scroll-on-background);
    }

    &-table {
      display: flex;
      justify-content: center;
      min-width: calc(100% - 32px);
      padding: 16px;
    }
  }
}
</style>
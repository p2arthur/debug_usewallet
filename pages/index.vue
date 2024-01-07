<template>
  <div class="home">
    <div class="home-section">
      <div class="home-section-info">
        <img src="/img/rxelms_logo.png" alt="Logo Rxelms"> <!-- Adicione a imagem aqui -->
        <OutlinedButton class="button-property" v-if="isForSale && bestPrice" @click="buyFixedBid()">
          <span class="card-button-text">Buy <br /> Property <br /> {{ bestPrice.price }}
            <IconsCurrencyByTag class="card-button-currency" :key="bestPrice.currency" :tag="bestPrice.currency" />
          </span>
        </OutlinedButton>
        <h2>Build your place!</h2>
      </div>
    </div>

  </div>
  <PartnersContainer />
  <MapCanvasContainer />
  <TriInfoContainer />
  <InfoImageContainer />
  <IntervalInfoContainer />
  <CenterCharacterContainer />
  <TeamContainer />

  <ClientOnly v-if="nftStore.nft">
    <teleport :to="isDesktop ? '#desktop-base' : '#mobile-base'">
      <ModalsBuy v-if="buy" :listings="selectedListings" :nft="nftStore.nft" @close="buy = false" />
    </teleport>
  </ClientOnly>
</template>
  
<script setup lang="ts">
import OutlinedButton from '@/components/buttons/OutlinedButton.vue'

import TriInfoContainer from '@/components/sections/triInfoContainer.vue';
import MapCanvasContainer from '@/components/sections/mapCanvaContainer.vue';
import InfoImageContainer from '@/components/sections/infoImageContainer.vue';
import PartnersContainer from '@/components/sections/partnersContainer.vue';
import IntervalInfoContainer from '@/components/sections/intervalContainer.vue';
import CenterCharacterContainer from '@/components/sections/centerCharacterContainer.vue';
import TeamContainer from '@/components/sections/teamContainer.vue';
import { openAsset } from '@/functions/Explorer'
import { NftFixedBid, FixedBidListing } from '@/graphql/client'
import { resolveCid, resolveMediaToCDN } from '@/functions/media'
// import algosdk from 'algosdk'
// import { Algodv2 as algodClient } from 'algosdk'


const nftStore = useNFTStore()
const artistStore = useArtistStore()
const collectionStore = useCollectionStore()
const saleStore = useSaleStore()
const nfdStore = useNFDStore()

const isDesktop = useIsDesktop()
const settingsStore = useSettingsStore()
const router = useRouter()
const priceStore = usePriceStore()
const fiatQuote = useFiatQuote()

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

const id = computed(() => {
  return Number(480080842)
})

await useAsyncData(async () => {
  await Promise.all([
    nftStore.getNFTDetails(id.value),
    nftStore.getFixedBids(id.value)
  ])
})

onMounted(() => {
  priceStore.fetchCurrentQuotes()
  nftStore.getFixedBids(id.value)
})

const tabs = [
  { name: "About", value: "about" },
  { name: "Trading", value: "trading" },
  { name: "Activity", value: "activity" }
]

const activeTab = computed(() => {
  const foundTab = tabs.find((tab) => router.currentRoute.value.fullPath.match(tab.value))

  if (foundTab) {
    return foundTab
  } else {
    return tabs[0]
  }
})

function changeTab(tab: { name: string, value: string }) {
  if (tab.value === 'about') {
    router.push(`/nfts/${id.value}`)
  } else {
    router.push({
      path: `/nfts/${id.value}/${tab.value}`,
    })
  }
}

const indexLink = computed(() => {
  return openAsset(
    Number(id.value),
    settingsStore.appSettings.blockChainExplorer,
    settingsStore.appSettings.network
  )
})

const isForSale = (nftStore.nft?.listings.fixedBid.length || 0) > 0

interface BestPrice extends NftFixedBid {
  usdValue: number
}

let bestPrice: Ref<BestPrice | FixedBidListing | null> = ref(null)

if (isForSale && nftStore.nft) {

  const convertedListings = nftStore.nft.listings.fixedBid.map((bid) => {
    return {
      ...bid,
      usdValue: fiatQuote.value.get(bid.currency) * bid.price
    }
  })

  if (convertedListings.length === 0) {
    bestPrice.value = null
  } else {
    bestPrice.value = convertedListings.reduce((prev, curr) => {
      return prev.usdValue < curr.usdValue ? prev : curr
    })
  }
}

const fixedBids = computed(() => {
  return nftStore.nftFixedBids
})

watch(fixedBids, () => {

  const convertedListings = nftStore.nftFixedBids.map((bid) => {
    return {
      ...bid,
      usdValue: fiatQuote.value.get(bid.currency) * bid.price
    }
  }).filter((listing) => listing.status.balance > 0)

  if (convertedListings.length === 0) {
    bestPrice.value = null
    return
  }

  bestPrice.value = convertedListings.reduce((prev, curr) => {
    return prev.usdValue < curr.usdValue ? prev : curr
  })

}, { deep: true })

const selectedListings: Ref<Array<FixedBidListing>> = ref([])
const buy = ref(false)

async function buyFixedBid() {
  const listing = bestPrice.value as FixedBidListing

  if (listing.appId) {
    selectedListings.value = [listing]
    buy.value = true
  }
}

useHead({
  title: nftStore.nft?.info.title,
  titleTemplate: ` rxelms`,
  // titleTemplate: `${nftStore.nft?.info.title} - Rxelms`,
  meta: [

  ]
})

</script>
  
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Isso garante que paddings e borders não afetem a largura total */
}
.card {
  display: flex;
  align-items: center;
  background-color: $c-action;
  padding: 6px;
  border-radius: $radius-m;
  width: 100%;
  min-width: min(380px, 100%);

  &-button-property {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: $c-on-action;
    border: none;
    cursor: pointer;
    height: 100%;
    border-radius: $radius-s;
    transition: background-color 150ms ease;
    min-height: 42px;

    &:hover {
      background-color: $c-hover-on-action;
    }

    &-text {
      color: $c-on-action;
      font-family: $f-mono;
      font-size: 1.2rem;
      font-weight: 500;
    }

    &-icon {
      margin-right: 16px;
      min-width: 32px;
      min-height: 32px;
      max-width: 32px;
      max-height: 32px;
    }

    &-currency {
      margin-left: 8px;
      min-width: 22px;
      min-height: 22px;
      max-width: 22px;
      max-height: 22px;
    }
  }

  &-divider {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 16px;
    min-height: 42px;

    &-line {
      content: "";
      min-width: 2px;
      min-height: 42px;
      border-radius: $radius-s;
      background-color: $c-on-primary-flat;
    }
  }
}

.home {
  background-image: url('/img/backgruond_home2.png');
  background-size: 100% auto; /* Ajusta a largura da imagem para 100% e a altura proporcionalmente */
  background-position: center top; /* Centraliza horizontalmente e alinha ao topo verticalmente */
  background-repeat: no-repeat; /* Evita a repetição da imagem */
  min-height: 100vh;

  height: 100vh; /* Altura total da tela */
  width: 100vw; /* Largura total da tela */

  position: relative;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .home-section {
  display: flex;        
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;     /* Centraliza verticalmente */
  min-width: 100%;
  width: 100vw;            /* Largura total da viewport */
  height: 80%;             /* Altura total (isso pode ser ajustado conforme necessário) */
}

.home-section-info {
  width: 100vw;  /* Largura total da viewport */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza verticalmente */
  align-items: center;     /* Centraliza horizontalmente */
  height: 100%;  /* Altura ajustada conforme necessário */
}
.home-section-info img {
  max-width: 100%; /* Limita a largura da imagem a 100% da div pai */
  height: auto;   /* Mantém a proporção da imagem */
}

  & h1 {
    font-size: 15ch;
    color: $c-secondary;
  }

  &-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: min(100%, 1920px);
    color: #1C1C1C;

    justify-content: center;
    /* Centraliza horizontalmente */
    align-items: center;
    /* Centraliza verticalmente */
    height: 200px;

    &-info {
      margin-top: 15%;
      display: flex;

      flex-direction: column;
      justify-content: center;
      /* Centraliza horizontalmente */
      align-items: center;
      /* Defina uma altura para a div para centralizar verticalmente efetivamente */
    }
  }
}
</style>
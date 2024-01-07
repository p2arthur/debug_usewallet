<template>
  <div class="nft" v-if="nftStore.nft">
    <div class="nft-header">
      <div class="nft-header-center">
        <div class="nft-header-media">
          <div class="nft-header-media-center">
            <MediaNFT :media="nftStore.nft.media" :type="nftStore.nft.media.mimeType" :nft="nftStore.nft" />
          </div>
        </div>

        <div class="nft-header-info">
          <div class="nft-header-info-warning" v-if="nftStore.nft.status === 'DESTROYED'">
            <p>The creator deleted this asset. It is no longer available on-chain.</p>
          </div>

          <h1>{{ nftStore.nft.info.title }}</h1>

          <h2>ID: <a :href="indexLink" target="_blank">{{ $route.params.id }}</a> - {{ nftStore.nft.token.editions }} ed.
            - {{ new Date(nftStore.nft.token.timestamp).toLocaleDateString('NL') }}</h2>

          <div class="nft-header-info-description" v-if="nftStore.nft.info.description">
            <h3>Description</h3>

            <p>{{ nftStore.nft.info.description }}</p>
          </div>

          <div class="nft-header-info-tags">
            <ButtonsTag v-for="(tag, index) in nftStore.nft.info.tags" :key="index" :name="tag" />
          </div>

          <div class="nft-header-info-links">
            <div class="nft-header-info-links-item">
              <h4>Creator</h4>
              <ButtonsDetailLink :name="nftStore.nft.artist.name" :address="nftStore.nft.artist.address"
                :link="`/artists/${nftStore.nft.artist.normalizedName}`"
                :url="resolveCid(nftStore.nft.artist.profileImage || '', 128)" />
            </div>

            <div class="nft-header-info-links-item" v-if="nftStore.nft.c">
              <h4>Collection</h4>
              <ButtonsDetailLink :name="nftStore.nft.c.title" :address="nftStore.nft.token.mintAddress"
                :link="`/collections/${nftStore.nft.c.normalizedTitle}`"
                :url="nftStore.nft.c.card ? resolveCid(nftStore.nft.c.card, 388) : undefined" />
            </div>
          </div>

          <div class="nft-header-info-trade" v-if="isForSale">
            <div class="nft-header-info-trade-card">
              <button class="nft-header-info-trade-card-button" v-if="isForSale && bestPrice" @click="buyFixedBid()">
                <IconsPriceTag class="nft-header-info-trade-card-button-icon" />
                <span class="nft-header-info-trade-card-button-text">Buy {{ bestPrice.price }}</span>
                <IconsCurrencyByTag class="nft-header-info-trade-card-button-currency" :key="bestPrice.currency"
                  :tag="bestPrice.currency" />
              </button>

              <!-- <div class="nft-header-info-trade-card-divider" v-if="isForSale && nftStore.nft.listings.auctions.length > 0">
                <div class="nft-header-info-trade-card-divider-line"></div>
              </div>

              <button class="nft-header-info-trade-card-button" v-if="nftStore.nft.listings.auctions.length > 0">
                <IconsGavel class="nft-header-info-trade-card-button-icon" />
                <span class="nft-header-info-trade-card-button-text">Bid 0.1</span>
                <IconsCurrencyByTag class="nft-header-info-trade-card-button-currency" :tag="'goETH'" />
              </button>

              <button class="nft-header-info-trade-card-button" v-if="nftStore.nft.listings.fixedBid.length === 0 && nftStore.nft.listings.auctions.length === 0">
                <span class="nft-header-info-trade-card-button-text">Make an offer</span>
                <IconsHandshake class="nft-header-info-trade-card-button-icon" style="padding-left: 16px;" />
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="nft-tabs">
      <NavigationTabBar :tabs="tabs" :active="activeTab" @change="changeTab" />
    </div>

    <div class="nft-view">
      <router-view></router-view>
    </div>
  </div>

  <ClientOnly v-if="nftStore.nft">
    <teleport :to="isDesktop ? '#desktop-base' : '#mobile-base'">
      <ModalsBuy v-if="buy" :listings="selectedListings" :nft="nftStore.nft" @close="buy = false" />
    </teleport>
  </ClientOnly>
</template>

<script setup lang="ts">

import { openAsset } from '@/functions/Explorer'
import { NftFixedBid, FixedBidListing } from '@/graphql/client'
import { resolveCid, resolveMediaToCDN } from '@/functions/media'

const isDesktop = useIsDesktop()
const nftStore = useNFTStore()
const settingsStore = useSettingsStore()
const router = useRouter()
const priceStore = usePriceStore()
const fiatQuote = useFiatQuote()

const id = computed(() => {
  return Number(router.currentRoute.value.params.id)
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
  // { name: "Statistics", value: "statistics" },
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
  titleTemplate: `${nftStore.nft?.info.title} - Dartroom`,
  meta: [
    {
      hid: "og:title",
      name: "og:title",
      content: nftStore.nft?.info.title,
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:image",
      name: "og:image",
      content: resolveMediaToCDN(nftStore.nft?.media.mimeType === 'video/mp4' ? nftStore.nft?.media.thumbnail : nftStore.nft?.media, 1024),
    },
    {
      hid: "og:image:type",
      name: "og:image:type",
      content: "image/webp",
    },
    {
      hid: "og:url",
      name: "og:url",
      content: `https://v2.dartroom.xyz/nfts/${nftStore.nft?.token.index}`
    },
    {
      hid: "og:description",
      name: "og:description",
      content: nftStore.nft?.info.description,
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Dartroom",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@_Dartroom",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    }
  ]
})

</script>

<style scoped lang="scss">
.nft {
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
  justify-content: center;
  align-items: center;
  // gap: 32px;

  @media screen and (max-width: calc($sidebar-thin-breakpoint - 1px)) {
    padding: 16px;
  }

  &-tabs {
    display: flex;
    width: 100%;
    max-width: min(1424px, 100%);
    position: -webkit-sticky;
    /* Safari */
    position: sticky;
    top: -1px;
    padding-top: 16px;
    margin-top: 32px;
    background-color: $c-background-0;
    z-index: 10;
    backdrop-filter: blur(4px);
  }

  &-header {
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: calc($sidebar-thin-breakpoint - 1px)) {
      padding: 0px;
    }

    &-center {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 32px;
      max-width: min(1424px, 100%);
    }

    &-media {
      display: flex;
      flex-grow: 1;
      justify-content: center;

      &-center {
        display: flex;
        max-width: 1024px;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: left;
      max-width: 100%;

      &-warning {
        display: flex;
        padding: 12px 16px;
        background-color: $c-warning-hover;
        border-radius: $radius-m;
        outline: 2px solid $c-warning;
        margin-bottom: 16px;

        & p {
          color: $c-warning;
          margin: 0px;
        }
      }

      & h1 {
        margin: 0px;
        font-weight: 600;
        font-size: 2.25rem;
        padding-bottom: 8px;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        // overflow: hidden;
      }

      & h2 {
        font-family: $f-mono;
        margin: 0px;
        font-weight: 500;
        font-size: 1rem;
        padding-bottom: 16px;

        & a {
          color: $c-secondary;
          text-decoration-line: underline;
          cursor: pointer;
        }
      }

      &-description {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
        max-width: 60ch;

        & h3 {
          margin: 0px;
          font-weight: 500;
          font-size: 1.25rem;
        }

        & p {
          font-size: 0.95rem;
          line-height: 1.3rem;
          margin: 0px;
          padding: 8px;
          white-space: pre-wrap;
        }
      }

      &-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding-bottom: 16px;
      }

      &-links {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        &-item {
          display: flex;
          flex-direction: column;
          gap: 4px;

          & h4 {
            margin: 0px;
            font-weight: 500;
            font-size: 1rem;
          }
        }
      }

      &-trade {
        display: flex;
        padding-top: 16px;

        &-card {
          display: flex;
          align-items: center;
          background-color: $c-action;
          padding: 6px;
          border-radius: $radius-m;
          width: 100%;
          min-width: min(380px, 100%);

          &-button {
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
      }
    }
  }

  &-view {
    display: flex;
    width: 100%;
    max-width: min(1424px, 100%);
  }
}
</style>
<template>
  <TablesBaseExpand>
    <template v-slot:headers>
      <th :colspan="2" >Price</th>
      <th>Balance</th>
      <th>Listed by</th>
      <th></th>
    </template>

    <template v-slot:rows>
      <template v-for="(listing, index) in listings" :key="index">
        <tr>
          <td class="expand-table-price">
            <div class="expand-table-price-group">
              <span>{{ listing.price }}</span>
              <IconsCurrencyByTag :tag="listing.currency" />
            </div>
          </td>
          <td class="expand-table-fiat">
            ~{{ currencyFormater.format(convertPrice(listing)) }}
          </td>
          <td class="expand-table-fiat">
            {{ listing.status.balance }}/{{ nft?.token.editions }} ed.
          </td>
          <td class="expand-table-address">
            <a :href="addressLink(listing.sellerAddress)" target="_blank">{{ 
              nft?.token.mintAddress === listing.sellerAddress ? nft.artist.name : nfd(listing.sellerAddress) 
            }}</a>
          </td>
          <td class="expand-table-actions">
            <button @click="setBuy(listing)">
              <IconsPriceTag />
              <span>buy</span>
            </button>
          </td>
        </tr>

        <tr v-if="index + 1 < listings.length" class="expand-table-divider">
          <td :colspan="5">
            <div></div>
          </td>
        </tr>
      </template>
    </template>
  </TablesBaseExpand>

  <ClientOnly>
    <teleport :to="isDesktop ? '#desktop-base' : '#mobile-base'">
      <ModalsBuy
        v-if="buy"
        :listings="selectedListings"
        :nft="nft"
        @close="buy = false"
      />
    </teleport>
  </ClientOnly>
</template>

<script setup lang="ts">

import { openAddress } from '@/functions/Explorer'
import { GetFixedBidsByNftQuery, Nft } from '@/graphql/client'

import type { PropType } from 'vue';

const props = defineProps({
  listings: {
    type: Array as PropType<GetFixedBidsByNftQuery['getFixedBidsByNFT']>,
    required: true
  },
  nft: {
    type: Object as PropType<Nft>,
    required: false,
  }
})

const isDesktop = useIsDesktop()
const settingsStore = useSettingsStore()
const priceStore = usePriceStore()
const nfdStore = useNFDStore()
const fiatQuote = useFiatQuote()

function addressLink (address: string) {
  return openAddress(
    address, 
    settingsStore.appSettings.blockChainExplorer, 
    settingsStore.appSettings.network
  )
}

const currencyFormater = useCurrencyFormater()

function convertPrice (listing: GetFixedBidsByNftQuery['getFixedBidsByNFT'][0]) {
  const price = listing.price
  const asa = listing.currency

  return fiatQuote.value.get(asa) * price
}

const selectedListings: Ref<GetFixedBidsByNftQuery['getFixedBidsByNFT']> = ref([])
const buy = ref(false)

function setBuy(listing: GetFixedBidsByNftQuery['getFixedBidsByNFT'][0]) {
  selectedListings.value = [listing]
  buy.value = true
}

function nfd (address: string) {
  return nfdStore.NFDConversion(address) || address
}

onMounted(() => {
  priceStore.fetchCurrentQuotes()
})

</script>

<style scoped lang="scss">

.fixed-bid-table {
  
  &-expiration {
    white-space: nowrap;
    text-align: center;
    max-width: 128px;
    min-width: 128px;
    color: $c-on-background;
    font-family: $f-mono;
  }
}

</style>
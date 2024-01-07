<template>
  <TablesBaseExpand>
    <template v-slot:headers>
      <th :colspan="2" >Price</th>
      <th>Expiration</th>
      <th>Offer from</th>
      <th></th>
    </template>

    <template v-slot:rows>
      <template v-for="(offer, index) in offers" :key="index">
        <tr>
          <td class="expand-table-price">
            <div class="expand-table-price-group">
              <span>{{ offer.price.amount }}</span>
              <IconsCurrencyByTag :tag="offer.price.currency" />
            </div>
          </td>
          <td class="expand-table-fiat">
            ~{{ currencyFormater.format(offer.price.value[settingsStore.appSettings.currency]) }}
          </td>
          <td class="offers-table-expiration">
            {{ formatTime(offer.expiration) }}
          </td>
          <td class="expand-table-address">
            <a :href="addressLink(offer.seller.address)" target="_blank">{{ offer.seller.nfd ? offer.seller.nfd : offer.seller.address }}</a>
          </td>
          <td class="expand-table-actions">
            <button >
              <IconsHandshake />
              <span>accept offer</span>
            </button>
          </td>
        </tr>

        <tr v-if="index + 1 < offers.length" class="expand-table-divider">
          <td :colspan="5">
            <div></div>
          </td>
        </tr>
      </template>
    </template>
  </TablesBaseExpand>
</template>

<script setup lang="ts">

import { openAddress } from '@/functions/Explorer'
import { useSettingsStore } from '@/stores/settings'

import type { PropType } from 'vue';

const settingsStore = useSettingsStore()

function addressLink (address: string) {
  return openAddress(
    address, 
    settingsStore.appSettings.blockChainExplorer, 
    settingsStore.appSettings.network
  )
}

interface Offer {
  price: {
    currency: string,
    amount: number,
    value: Record<string, number>
  },
  seller: {
    address: string,
    nfd: string | null
  },
  expiration: number
}

const props = defineProps({
  offers: {
    type: Array as PropType<Array<Offer>>,
    required: true
  }
})

const currencyFormater = useCurrencyFormater()

const numberFormater = Intl.NumberFormat('en', { 
  notation: 'compact',
  maximumFractionDigits: 1,
  minimumFractionDigits: 0,
})

function formatTime (timeInSeconds: number) {
  if (timeInSeconds > 604800) {
    return timeFormater.format(Math.round(timeInSeconds / 604800), 'weeks')
  } else if (timeInSeconds > 86400) {
    return timeFormater.format(Math.round(timeInSeconds / 86400), 'days')
  } else if (timeInSeconds > 3600) {
    return timeFormater.format(Math.round(timeInSeconds / 3600), 'hours')
  } else if (timeInSeconds > 60) {
    return timeFormater.format(Math.round(timeInSeconds / 60), 'minutes')
  } else {
    return timeFormater.format(Math.round(timeInSeconds), 'seconds')
  }
}

const timeFormater = new Intl.RelativeTimeFormat('en',{

})

</script>

<style scoped lang="scss">

.offers-table {
  
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
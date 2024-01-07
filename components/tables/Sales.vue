<template>
  <TablesBaseMain>
    <template v-slot:headers>
      <th></th>
      <th>Title</th>
      <th>Amount</th>
      <th>Total</th>
      <th>Value</th>
      <th>Buyer</th>
      <th>Time</th>
    </template>

    <template v-slot:rows>
      <template v-for="(sale, index) in sales" :key="sale.groupId">
        <tr>
          <td class="owner-table-avatar">
            <router-link :to="`/nfts/${sale.nftIndex}/activity`" class="owner-table-avatar-media">
              <img v-if="sale.nft?.media.thumbnail" :src="resolveCid(sale.nft?.media.thumbnail, 256)" alt="" crossorigin="">
              <img v-else :src="resolveCid(sale.nft?.media || '', 256)" alt="" crossorigin="">
            </router-link>
          </td>

          <td class="owner-table-title">
            <router-link :to="`/nfts/${sale.nftIndex}/activity`">
              <span>{{ sale.nft?.info.title }}</span>
            </router-link>
          </td>

          <td class="owner-table-holding">
            <span>{{ sale.nNFTs }}</span>
          </td>

          <td class="main-table-price">
            <div class="main-table-price-group">
              <span>{{ sale.totalPrice }}</span>
              <IconsCurrencyByTag :tag="sale.currency" />
            </div>
          </td>

          <td class="main-table-fiat">
            ~{{ resolveFiat(sale.totalValue) }}
          </td>

          <td class="owner-table-address">
            <a :href="addressLink(sale.buyerAddress)" target="_blank">{{ nfd(sale.buyerAddress) }}</a>
          </td>

          <td class="owner-table-title">
            <span>{{ formatDate(sale.timestamp) }}</span>
          </td>
        </tr>

        <tr v-if="index + 1 < sales.length" class="main-table-divider">
          <td :colspan="7">
            <div></div>
          </td>
        </tr>
      </template>
    </template>
  </TablesBaseMain>
</template>

<script setup lang="ts">

import type { Sale, GetAllSalesQuery } from '@/graphql/client'
import type { PropType } from 'vue'
import { openAddress } from '@/functions/Explorer'
import { resolveCid } from '@/functions/media'

const settingsStore = useSettingsStore()
const nfdStore = useNFDStore()

function addressLink (address: string) {
  return openAddress(
    address, 
    settingsStore.appSettings.blockChainExplorer, 
    settingsStore.appSettings.network
  )
}

defineProps({
  sales: {
    type: Array as PropType<Array<Sale> | GetAllSalesQuery['getAllSales']['sales']>,
    required: true
  }
})

function nfd (address: string) {
  return nfdStore.NFDConversion(address) || address
}

const currencyFormater = useCurrencyFormater()

function resolveFiat (fiatObject: Record<string, number>) {
  return currencyFormater.value.format(fiatObject[settingsStore.appSettings.currency] || 0)
}

const timeFormater = new Intl.RelativeTimeFormat('en',{
  style: "long",
  numeric: "always",

})

function formatDate (timestamp: string) {

  const difference = new Date().getTime() - new Date(timestamp).getTime()
  const differenceInMin = difference / (1000 * 60)

  if (differenceInMin < 60) {
    return timeFormater.format(- (difference / (1000 * 60)).toFixed(0),'minutes')
  }

  if (differenceInMin < (60 * 24)) {
    return timeFormater.format(- (difference / (1000 * 60 * 60)).toFixed(0),'hours')
  }

  if (differenceInMin < (60 * 24 * 90)) {
    return timeFormater.format(- (difference / (1000 * 60 * 60 * 24)).toFixed(0),'days')
  }

  return timeFormater.format(- (difference / (1000 * 60 * 60 * 24 * (365 / 12))).toFixed(0),'months')
}

</script>

<style scoped lang="scss">

.owner-table {

  &-holding {
    white-space: nowrap;
    text-align: center;
    max-width: 96px;
    min-width: 96px;
  }

  &-avatar {
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    max-width: 44px;
    min-height: 44px;

    &-media {
      display: flex;
      min-height: 36px; 
      max-height: 36px;
      min-width: 36px; 
      max-width: 36px;
      border-radius: $radius-s;
      overflow: hidden;
      background-color: $c-flat;
      
      & img {
        min-height: 36px; 
        max-height: 36px; 
        min-width: 36px; 
        max-width: 36px; 
        object-fit: cover;
    }
    }
  }

  &-title {
    white-space: nowrap;
    text-align: left;
    padding: 0px 8px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &-address {
    padding-left: 8px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 96px;
    min-width: 96px;
    width: 99%;
    color: $c-on-background;
  }
}

</style>
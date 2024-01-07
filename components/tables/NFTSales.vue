<template>
  <TablesBaseExpand>
    <template v-slot:headers>
      <th>Amount</th>
      <th>Total</th>
      <th>Value</th>
      <th>Seller</th>
      <th></th>
      <th>Buyer</th>
      <th>Time</th>
    </template>

    <template v-slot:rows>
      <template v-for="(sale, index) in sales" :key="index">
        <tr>
          <td class="nft-sales-table-amount">
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
          
          <td class="nft-sales-table-address">
            <a :href="addressLink(sale.sellerAddress)" target="_blank">{{ nfd(sale.sellerAddress) }}</a>
          </td>

          <td class="nft-sales-table-icon">
            <IconsArrowForward />
          </td>

          <td class="nft-sales-table-address">
            <a :href="addressLink(sale.buyerAddress)" target="_blank">{{ nfd(sale.buyerAddress) }}</a>
          </td>

          <td class="nft-sales-table-time">
            <span>{{ formatDate(sale.timestamp) }}</span>
          </td>
        </tr>

        <tr v-if="index + 1 < sales.length" class="expand-table-divider">
          <td :colspan="7">
            <div></div>
          </td>
        </tr>
      </template>
    </template>
  </TablesBaseExpand>
</template>

<script setup lang="ts">

import type { Sale, GetSalesByNftQuery } from '@/graphql/client'
import { openAddress } from '@/functions/Explorer'

defineProps({
  sales: {
    type: Array as PropType<Array<Sale> | GetSalesByNftQuery['getSalesByNFT']['sales'] >,
    required: true
  }
})

const settingsStore = useSettingsStore()
const nfdStore = useNFDStore()

function addressLink (address: string) {
  return openAddress(
    address, 
    settingsStore.appSettings.blockChainExplorer, 
    settingsStore.appSettings.network
  )
}

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

.nft-sales-table {

  &-amount {
    white-space: nowrap;
    text-align: center;
    max-width: 96px;
    min-width: 96px;
  }

  &-icon {
    white-space: nowrap;
    text-align: center;
    max-width: 48px;
    min-width: 48px;

    & svg {
      color: $c-on-background;
    }
  }

  &-address {
    padding-left: 8px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 96px;
    min-width: 96px;
    width: 49%;
    color: $c-on-background;
  }

  &-time {
    white-space: nowrap;
    text-align: left;
    padding: 0px 8px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

</style>
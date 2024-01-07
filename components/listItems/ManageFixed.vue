<template>
  <ListItemsManageBase
    v-if="listing.nft"
    :src="listing.nft.media.mimeType === 'video/mp4' ? (listing.nft.media.thumbnail || undefined) : listing.nft.media"
    :actions="actions"
    :link="`/nfts/${listing.nft.token.index}`"
  >
    <div class="manage-fixed-info">
      <div class="manage-fixed-info-title">
        <span class="manage-fixed-info-title-asa">{{ listing.price }}</span>
        <IconsCurrencyByTag :tag="listing.currency" class="manage-fixed-info-title-icon" />
        <span class="manage-fixed-info-title-price">~{{ currencyFormater.format(convertPrice()) }}</span> 
      </div>
      <div class="manage-fixed-info-sub">
        <span>tokens: {{ listing.status?.balance || 0 }}/{{ listing.nft.token.editions }} ed.</span>
        <span>NFT: {{ listing.nft.info.title }} - {{ listing.nft.token.index }}</span>
      </div>
    </div>
  </ListItemsManageBase>
</template>

<script setup lang="ts">

import type  { GetFixedBidsByArtistQuery } from '@/graphql/client'
import type { MenuItem } from '@/components/selection/Menu.vue'
 
const props = defineProps({
  listing:{
    type: Object as PropType<GetFixedBidsByArtistQuery['getFixedBidsByArtist']['listings'][0]>,
    required: true
  },
  actions: Array as PropType<Array<MenuItem>>
})

const fiatQuote = useFiatQuote()
const currencyFormater = useCurrencyFormater()

function convertPrice () {
  const price = props.listing.price
  const asa = props.listing.currency
  
  return fiatQuote.value.get(asa) * price
}

</script>

<style scoped lang="scss">

.manage-fixed-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  &-title {
    display: flex;
    align-items: center;

    &-asa {
      font-size: 1.5rem;
      font-weight: 500;
      margin-right: 4px;
    }

    &-icon {
      color: $c-on-background;
      width: 20px !important;
      height: 20px !important;
    }

    &-price {
      margin-left: 8px;
      font-size: 1.1rem;
      font-weight: 500;

    }
  }

  &-sub {
    display: flex;
    flex-direction: column;
    gap: 6px;

    & span {
      font-family: $f-mono;
      font-size: 0.9rem;
    }
  }
}

</style>
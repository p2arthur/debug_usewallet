<template>
  <TablesBaseExpand>
    <template v-slot:headers>
      <th></th>
      <th>Address</th>
      <th>Holding</th>
      <th>Listed</th>
    </template>

    <template v-slot:rows>
      <template v-for="(owner, index) in owners" :key="index">
        <tr>
          <td class="owner-table-avatar" >
            <div class="owner-table-avatar-media" v-if="nft?.token.mintAddress === owner.address">
              <img :src="resolveCid(nft?.artist.profileImage || '', 256)" alt="" crossorigin="">
            </div>
          </td>
          <td class="owner-table-address">
            <a :href="addressLink(owner.address)" target="_blank">{{ 
              nft?.token.mintAddress === owner.address ? nft.artist.name : nfd(owner.address)
            }}</a>
          </td>
          <td class="owner-table-holding">
            <span>{{ owner.walletBalance }}/{{ nft?.token.editions }}</span>
          </td>
          <td class="owner-table-holding">
            <span>{{ owner.listingBalance }}/{{ nft?.token.editions }}</span>
          </td>
        </tr>

        <tr v-if="index + 1 < owners.length" class="expand-table-divider">
          <td :colspan="4">
            <div></div>
          </td>
        </tr>
      </template>
    </template>
  </TablesBaseExpand>
</template>

<script setup lang="ts">

import type { NftOwner, Nft } from '@/graphql/client'
import type { PropType } from 'vue';
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
  owners: {
    type: Array as PropType<Array<NftOwner>>,
    required: true
  },
  nft: {
    type: Object as PropType<Nft>,
    required: false,
  }
})

function nfd (address: string) {
  return nfdStore.NFDConversion(address) || address
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
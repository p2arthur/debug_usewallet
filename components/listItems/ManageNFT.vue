<template>
  <ListItemsManageBase
    :src="nft.media.mimeType === 'video/mp4' ? (nft.media.thumbnail || undefined) : nft.media"
    :actions="actions"
    :link="`/nfts/${nft.token.index}`"
  >
    <div class="manage-nfts-info">
      <span class="manage-nfts-info-title">{{ nft.info.title }}</span>
      <div class="manage-nfts-info-sub">
        <span>index: {{ nft.token.index }}</span>
        <span>you hold: {{ balance }}/{{ nft.token.editions }} ed.</span>
      </div>
    </div>
  </ListItemsManageBase>
</template>

<script setup lang="ts">

import type { Nft } from '@/graphql/client'
import type { MenuItem } from '@/components/selection/Menu.vue'
 
defineProps({
  nft:{
    type: Object as PropType<Nft>,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  actions: Array as PropType<Array<MenuItem>>
})

</script>

<style scoped lang="scss">

.manage-nfts-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  &-title {
    font-size: 1.5rem;
    font-weight: 500;
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
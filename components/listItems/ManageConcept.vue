<template>
  <ListItemsManageBase
    :src="nft?.media ? (nft.media.mimeType === 'video/mp4' ? (nft.media.thumbnail || undefined) : nft.media ) : undefined"
    :actions="actions"
  >
    <div class="manage-concept-info">
      <span class="manage-concept-info-title">{{ nft?.info.title || '' }}</span>
      <div class="manage-concept-info-sub">
        <span>type: {{ nft?.media?.mimeType || '' }}</span>
        <span>collection: {{ nft?.c?.title }}</span>
      </div>
    </div>
  </ListItemsManageBase>
</template>

<script setup lang="ts">

import { NftSettings } from '@/graphql/client'
import type { MenuItem } from '@/components/selection/Menu.vue'
 
defineProps({
  nft: Object as PropType<NftSettings>,
  actions: Array as PropType<Array<MenuItem>>
})

</script>

<style scoped lang="scss">

.manage-concept-info {
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
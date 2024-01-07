<template>
  <ListItemsManageBase
    :src="collection?.media.card ? collection?.media.card : undefined"
    :actions="actions"
  >
    <div class="manage-collection-info">
      <span class="manage-collection-info-title">{{ collection?.title || '' }}</span>
      <div class="manage-collection-info-sub">
        <span>type: {{ collection?.type.toLocaleLowerCase() }}</span>
        <span>status: {{ collection?.private ? 'private' : 'public' }}</span>
      </div>
    </div>
  </ListItemsManageBase>
</template>

<script setup lang="ts">

import type { CollectionSettings } from '@/graphql/client'
import type { MenuItem } from '@/components/selection/Menu.vue'
 
defineProps({
  collection: Object as PropType<CollectionSettings>,
  actions: Array as PropType<Array<MenuItem>>
})

</script>

<style scoped lang="scss">

.manage-collection-info {
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
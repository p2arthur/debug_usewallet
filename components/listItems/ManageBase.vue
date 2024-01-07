<template>
  <div class="manage-item">

    <router-link class="manage-item-media" v-if="link" :to="link">
      <img v-if="src" :src="resolveCid(src, 256)" alt="" crossorigin="">
    </router-link>

    <div class="manage-item-media" v-else>
      <img v-if="src" :src="resolveCid(src, 256)" alt="" crossorigin="">
    </div>

    <div class="manage-item-content">
      <slot />

      <div class="spacer"></div>

      <div class="manage-item-content-actions">
        <SelectionMenu :actions="actions">
          <IconsMore />
        </SelectionMenu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { NftSettingsMedia } from '@/graphql/client'
import { resolveCid, Media } from '@/functions/media'
import type { MenuItem } from '@/components/selection/Menu.vue'
 
defineProps({
  src: Object as PropType<Media | NftSettingsMedia | string>,
  actions: Array as PropType<Array<MenuItem>>,
  link: String
})

</script>

<style lang="scss">

.manage-item {
  display: flex;
  min-height: 96px;
  width: 100%;
  background-color: $c-background-1;
  border-radius: $radius-m;
  box-shadow: $shadow-0;
  gap: 8px;

  &-media {
    display: flex;
    min-height: 96px;
    min-width: 96px;
    max-height: 96px;
    max-width: 96px;
    overflow: hidden;
    border-radius: $radius-m;
    background: $c-flat;


    & img {
      min-height: 96px;
      min-width: 96px;
      max-height: 96px;
      max-width: 96px;
      object-fit: cover;
    }
  }
  
  &-content {
    display: flex;
    align-items: center;
    padding: 8px;
    width: calc(100% - 16px);

    &-actions {
      display: flex;
    }
  }
}

</style>
<template>
  <teleport to="#desktop-base">
    <div 
      class="desktop-multi-action"
      :style="open ? 'transform: translateX(0);' : ''"
    >
      <div class="desktop-multi-action-list">
        <div 
          v-for="(nft, index) in nfts"
          :key="index"
          class="desktop-multi-action-list-item"
        >
          <div class="desktop-multi-action-list-item-image">
            <img v-if="nft?.media" :src="resolveCid(nft?.media ? (nft?.media.mimeType === `video/mp4` ? (nft?.media.thumbnail || '') : nft?.media) : '', 256)" alt="" crossorigin="">
          </div>

          <div class="desktop-multi-action-list-item-name">
            <span>{{ nft?.info.title }}</span>
          </div>

          <div class="desktop-multi-action-list-item-remove">
            <ButtonsIcon @click="$emit('deselect',nft?.id)" class="desktop-multi-action-list-item-remove-button">
              <IconsMinus />
            </ButtonsIcon>
          </div>
        </div>
      </div>

      <div class="desktop-multi-action-divider">
        <div class="desktop-multi-action-divider-line"></div>
      </div>

      <div 
        class="desktop-multi-action-menu"
        :style="`transform: translateX(${expanded ? 'calc(-100% + 40px)' : '0%'})`"
      >
        <div class="desktop-multi-action-menu-selected">
          <span>{{ nfts?.length || 0 }}/10 selected</span>
        </div>


        <ButtonsIcon 
          class="desktop-multi-action-menu-expand" 
          @click="expanded = !expanded"
        >
          <IconsArrowLeft 
            class="desktop-multi-action-menu-expand-icon" 
            :style="`transform: rotate(${expanded ? 180 : 0}deg)`" 
          />
        </ButtonsIcon>

        <div class="desktop-multi-action-menu-actions">
          <ButtonsIcon
            v-for="(action, index) in actions"
            :key="index"
            class="desktop-multi-action-menu-actions-button"
            @click="action.action()"
          >
            <component :is="resolveComponent(action.icon)" />
          </ButtonsIcon>
          <ButtonsIcon @click="$emit('deselectAll')" class="desktop-multi-action-menu-actions-button">
            <IconsRemove />
          </ButtonsIcon>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">

import { resolveCid } from '@/functions/media'
import type { MenuItem } from '@/components/selection/Menu.vue'
import { NftSettings, Nft, GetFixedBidsByArtistQuery } from '@/graphql/client'

type FixedBidNFT = GetFixedBidsByArtistQuery['getFixedBidsByArtist']['listings'][0]['nft']

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  nfts: Object as PropType<Array<NftSettings | Nft | FixedBidNFT>>,
  actions: Array as PropType<Array<MenuItem>>
})

defineEmits(['deselect', 'deselectAll'])

const expanded = ref(false)

</script>

<style scoped lang="scss">

.desktop-multi-action {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 256px;
  max-height: min(412px, 50vh);
  bottom: 32px;
  right: 32px;
  padding: 8px 12px;
  background-color: $c-primary;
  color: $c-on-primary;
  border-radius: $radius-m;
  box-shadow: $shadow-3;
  overflow: hidden;
  transform: translateX(calc(100% + 32px));
  transition: transform 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
  z-index: 1;

  &-list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin-right: -8px;
    padding-right: 8px;
    border-radius: $radius-s;

    @include scrolbar-small($c-divider);

    &-item {
      display: flex;
      align-items: center;
      min-height: 48px;
      gap: 12px;

      &-image {
        display: flex;
        max-width: 36px;
        min-width: 36px;
        max-height: 36px;
        min-height: 36px;
        overflow: hidden;
        border-radius: $radius-s;
        background: $c-flat;

        & img {
          object-fit: cover;
          max-width: 36px;
          min-width: 36px;
          max-height: 36px;
          min-height: 36px;
        }
      }

      &-name {
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;

        & span {
          white-space: nowrap;
          color: inherit;
          font-family: $f-mono;
        }
      }

      &-remove {
        min-width: 40px;

        &-button {
          color: $c-on-primary;

          &:hover {
            background-color: $c-hover-on-primary;
          }
        }
      }
    }
  }

  &-divider {
    display: flex;
    align-items: center;
    min-height: 16px;

    &-line {
      content: "";
      width: 100%;
      height: 2px;
      background-color: $c-divider;
      border-radius: 1px;
    }
  }

  &-menu {
    display: flex;
    align-items: center;
    height: 40px;
    transform: translateX(0%);
    transition: transform 200ms ease-in-out;

    &-selected {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: calc(100% - 40px);

      & span {
        color: inherit;
      }
    }

    &-expand {
      min-width: 40px;
      color: $c-on-primary;

      &-icon {
        transform: rotate(0deg);
        transition: transform 200ms ease-in-out;
      }

      &:hover {
        background-color: $c-hover-on-primary;
      }
    }

    &-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      min-width: calc(100% - 40px);
      gap: 4px;

      &-button {
        min-width: 40px;
        color: $c-on-primary;

        &:hover {
          background-color: $c-hover-on-primary;
        }
      }
    }
  }
}

</style>
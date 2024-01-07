<template>
  <div class="collection-card">
    <div class="collection-card-media">
      <img
        v-if="previewImage"
        :src="previewImage"
      >
      <img
        v-else-if="collection?.media?.card"
        :src="resolveCid(collection.media.card, 776)" 
        crossorigin=""
      >
    </div>

    <div class="collection-card-overlay">
      <div class="collection-card-overlay-info">
        <div class="collection-card-overlay-info-title">
          <span>{{ collection.title }}</span>
        </div>

        <div class="collection-card-overlay-info-stats">
          <div class="collection-card-overlay-info-stats-section">
            <p class="collection-card-overlay-info-stats-section-name">Volume sold</p>
            <p class="collection-card-overlay-info-stats-section-value">{{ resolveFiat(collection.stats.volume) }}</p>
          </div>

          <div class="collection-card-overlay-info-stats-section">
            <p class="collection-card-overlay-info-stats-section-name">Floor price</p>
            <p class="collection-card-overlay-info-stats-section-value">{{ resolveFiat(collection.stats.floor) }}</p>
          </div>

          <div class="collection-card-overlay-info-stats-section">
            <p class="collection-card-overlay-info-stats-section-name">NFTs</p>
            <p class="collection-card-overlay-info-stats-section-value">{{ numberFormater.format(collection.stats.nNFTs) }}</p>
          </div>

          <div class="collection-card-overlay-info-stats-section">
            <p class="collection-card-overlay-info-stats-section-name">Sales</p>
            <p class="collection-card-overlay-info-stats-section-value">{{ numberFormater.format(collection.stats.sales) }}</p>
          </div>
        </div>
      </div>

      <router-link :to="`/collections/${collection.normalizedTitle}`" class="collection-card-overlay-link">
      </router-link>
      
      <div class="collection-card-overlay-creators">
        <router-link 
          v-for="artist in collection.artists"
          :to="`/artists/${artist.normalizedName}`"
        >
          <div class="collection-card-overlay-creators-avatar">
            <img
              v-if="artist.profileImage"
              :src="resolveCid(artist.profileImage, 256)" 
              alt=""
              crossorigin=""
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { CollectionSettings, Collection } from '@/graphql/client'
import { resolveCid } from '@/functions/media'

defineProps({
  collection: {
    type: Object as PropType<CollectionSettings | Collection>,
    required: true
  },
  previewImage: {
    type: String,
    required: false
  }
})

const settingsStore = useSettingsStore()

const currencyFormater = useCurrencyFormater()

const numberFormater = Intl.NumberFormat('en', { 
  notation: 'compact',
  maximumFractionDigits: 1,
  minimumFractionDigits: 0,
})

function resolveFiat (fiatObject: Record<string, number>) {
  return currencyFormater.value.format(fiatObject[settingsStore.appSettings.currency] || 0)
}

</script>

<style scoped lang="scss">

.collection-card {
  position: relative;
  display: flex;
  width: min(320px, 100%);
  border-radius: $radius-m;
  box-shadow: $shadow-0;
  height: 388px;
  background-color: $c-background-1;

  &-media {
    position: absolute;
    display: flex;
    width: min(320px, 100%);
    overflow: hidden;
    border-radius: $radius-m;

    & img {
      width: min(320px, 100%);
      height: 388px;
      object-fit: cover;
    }
  }

  &-overlay {
    position: absolute;
    display: flex;
    width: min(320px, 100%);
    height: 100%;

    &-creators {
      position: absolute;
      top: 8px;
      left: 8px;
      display: flex;
      justify-content: center;
      padding: 4px;
      gap: 4px;

      background-color: $c-overlay-background;
      backdrop-filter: blur(4px);
      border-radius: $radius-s;
      box-shadow: $shadow-2;


      &-avatar {
        display: flex;
        width: 42px;
        height: 42px;
        overflow: hidden;
        border-radius: $radius-ss;

        & img {
          width: 42px;
          height: 42px;
          object-fit: cover;
        }
      }
    }

    &-link {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: min(320px, 100%);
      height: 100%;
    }

    &-info {
      position: absolute;
      bottom: 8px;
      left: 8px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 8px;
      gap: 4px;

      background-color: $c-overlay-background;
      backdrop-filter: blur(4px);
      border-radius: $radius-s;
      box-shadow: $shadow-2;
      width: calc(100% - 32px);

      &-title {
        color: $c-on-background;
        font-size: 1.25rem;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        cursor: default;
      }

      &-stats {
        display: flex;
        gap: 16px;

        &-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
          &-name {
            font-size: 0.85rem;
            font-weight: 500;
            margin: 0px;
          }

          &-value {
            font-size: 0.95rem;
            font-weight: 600;
            margin: 0px;
          }
        }
      }
    }
  }
}

</style>
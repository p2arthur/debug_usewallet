<template>
  <router-link :to="`/artists/${artist.normalizedName}`" class="artist-card">
    <div class="artist-card-header">
      <div class="artist-card-header-banner">
        <img
          v-if="artist.page.bannerImage" 
          :src="resolveCid(artist.page.bannerImage, 192)" 
          alt=""
          crossorigin=""
        >
      </div>

      <div class="artist-card-header-avatar">
        <img v-if="artist.page.profileImage" :src="resolveCid(artist.page.profileImage, 128)" alt="">
      </div>

      <div class="artist-card-header-name">
        <span>{{ artist.name }}</span>
      </div>
    </div>

    <div class="artist-card-stats">
      <div class="artist-card-stats-section">
        <p class="artist-card-stats-section-name">Volume sold</p>
        <p class="artist-card-stats-section-value">{{ resolveFiat(artist.stats.totalSold) }}</p>
      </div>

      <div class="artist-card-stats-section">
        <p class="artist-card-stats-section-name">Floor price</p>
        <p class="artist-card-stats-section-value">{{ resolveFiat(artist.stats.floor) }}</p>
      </div>

      <div class="artist-card-stats-section">
        <p class="artist-card-stats-section-name">NFTs</p>
        <p class="artist-card-stats-section-value">{{ numberFormater.format(artist.stats.totalMinted) }}</p>
      </div>

      <!-- <div class="artist-card-stats-section">
        <p class="artist-card-stats-section-name">Followers</p>
        <p class="artist-card-stats-section-value">{{ numberFormater.format(15000) }}</p>
      </div> -->
    </div>

    <div class="artist-card-description">
      <p>{{ artist.page.description }}</p>
    </div>
  </router-link> 
</template>

<script setup lang="ts">

import type { UserAritstInfo } from '@/graphql/client'
import { resolveCid } from '@/functions/media'

defineProps({
  artist: {
    type: Object as PropType<UserAritstInfo>,
    required: true
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

.artist-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(320px, 100%);
  min-width: min(320px, 100%);
  border-radius: $radius-m;
  box-shadow: $shadow-0;
  min-height: 296px;
  height: 296px;
  max-height: 296px;
  background-color: $c-background-1;
  scroll-snap-align: center;


  &-header {
    position: relative;
    display: flex;
    padding: 4px;
    margin-bottom: 32px;

    &-banner {
      display: flex;
      border-radius: $radius-s;
      overflow: hidden;
      min-width: 312px;
      max-width: 312px;
      min-height: 64px;
      max-height: 64px;
      background-color: $c-flat;

      & img {
        min-width: 312px;
        max-width: 312px;
        min-height: 64px;
        max-height: 64px;
        object-fit: cover;
      }
    }

    &-avatar {
      position: absolute;
      top: 32px;
      left: 32px;
      display: flex;
      border-radius: $radius-s;
      min-width: 64px;
      max-width: 64px;
      min-height: 64px;
      max-height: 64px;
      margin: 4px;
      outline: 4px solid $c-background-1;
      background-color: $c-flat;

      & img {
        min-width: 64px;
        max-width: 64px;
        min-height: 64px;
        max-height: 64px;
        object-fit: cover;
      }
    }

    &-name {
      position: absolute;
      top: 68px;
      left: 112px;
      display: flex;
      height: 32px;
      align-items: flex-end;
      max-width: calc(100% - 116px);
      overflow: hidden;

      & span {
        color: $c-on-background;
        font-size: 1.25rem;
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }

  &-description {
    display: flex;
    padding: 8px;
    color: $c-on-background;
    max-height: 120px;
    overflow: hidden;

    & p {
      color: inherit;
      margin: 0px;
      font-size: 1rem;
      font-weight: 400;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &-stats {
    display: flex;
    padding: 12px 8px;
    gap: 16px;
    height: 48px;

    &-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $c-on-background;
          
      &-name {
        color: inherit;
        font-size: 0.9rem;
        font-weight: 500;
        margin: 0px;
      }

      &-value {
        color: inherit;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0px;
      }
    }
  }
}

</style>
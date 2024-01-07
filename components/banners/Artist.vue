<template>
  <div class="artist-banner" v-if="isDesktop">
    <div class="artist-banner-image">
      <img src="https://cdn.dartroom.xyz/artists/featured-banners/quintam-wide.png" alt="">
    </div>

    <div class="artist-banner-overlay">
      <div class="artist-banner-overlay-info">
        <h2>Explore our featured artists</h2>

        <p>{{ `+${nArtists} curated artists from \n+${nSections} different backgrounds and disciplines` }}</p>
      </div>

      <router-link v-if="bannerAritst" class="artist-banner-overlay-avatar" :to="`/artists/${bannerAritst.normalizedName}`">
        <div class="artist-banner-overlay-avatar-image">
          <img :src="resolveMediaToCDN(bannerAritst.page.profileImage, 256)" alt="" crossorigin="">
        </div>
      </router-link>
    </div>
  </div>

  <div class="artist-banner-mobile" v-else>
    <div class="artist-banner-mobile-image">
      <img src="https://cdn.dartroom.xyz/artists/featured-banners/quintam-tall-v2.png" alt="">
    </div>

    <div class="artist-banner-mobile-overlay">
      <div class="artist-banner-mobile-overlay-info">
        <h2>Explore our featured artists</h2>

        <p>{{ `+${nArtists} curated artists from \n+${nSections} different backgrounds and disciplines` }}</p>
      </div>

      <router-link v-if="bannerAritst" class="artist-banner-mobile-overlay-avatar" :to="`/artists/${bannerAritst.normalizedName}`">
        <div class="artist-banner-mobile-overlay-avatar-image">
          <img :src="resolveMediaToCDN(bannerAritst.page.profileImage, 256)" alt="" crossorigin="">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

import { resolveMediaToCDN } from "@/functions/media"

const isDesktop = useIsDesktop()
const artistStore = useArtistStore()

const nSections = computed(() => {
  return artistStore.featuredSections.length
})

const nArtists = computed(() => {
  return artistStore.featuredSections.map((section) => section.artists).flat(1).length
})

const bannerAritst = computed(() => {
  return artistStore.featuredSections.map((section) => section.artists).flat(1).find((artist) => artist.normalizedName === 'quintam')
})

</script>

<style scoped lang="scss">

.artist-banner {
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: $radius-l;


  &-image {
    display: flex;
    width: 100%;
    height: 300px;
    min-width: 100%;
    overflow: hidden;

    & img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      object-position: right;
    }
  }

  &-overlay {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    padding: 8px;

    &-info {
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      padding: 16px;
      color: #0024c3;
      gap: 128px;

      & p {
        color: inherit;
        white-space: pre-wrap;
        line-height: 1.5rem;
        margin: 0px;
        font-size: 1rem;
        font-weight: 600;
      }

      & h2 {
        color: inherit;
        margin: 0px;
        font-size: 2rem;
        font-weight: 700;
      }
    }

    &-avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      width: 52px;
      height: 52px;
      background-color: $c-overlay-background;
      border-radius: $radius-m;

      &-image {
        display: flex;
        width: 44px;
        height: 44px;
        overflow: hidden;
        border-radius: $radius-s;

        & img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          object-position: right;
        }
      }
    }
  }
}

.artist-banner-mobile {
  position: relative;
  height: 400px;
  overflow: hidden;
  max-width: 100%;
  border-radius: $radius-l;

  &-image {
    display: flex;
    width: 100%;
    height: 400px;
    min-width: 100%;
    overflow: hidden;

    & img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  &-overlay {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    padding: 8px;

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px;

      & p {
        color: inherit;
        white-space: pre-wrap;
        line-height: 1.5rem;
        margin: 0px;
        font-size: 1rem;
        font-weight: 600;
        color: white;
      }

      & h2 {
        color: inherit;
        margin: 0px;
        font-size: 1.4rem;
        font-weight: 700;
        color: #0024c3;
      }
    }

    &-avatar {
      position: absolute;
      bottom: 64px;
      right: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      min-width: 52px;
      max-width: 52px;
      min-height: 52px;
      max-height: 52px;
      background-color: $c-overlay-background;
      border-radius: $radius-m;

      &-image {
        display: flex;
        min-width: 44px;
        max-width: 44px;
        min-height: 44px;
        max-height: 44px;
        overflow: hidden;
        border-radius: $radius-s;

        & img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          object-position: right;
        }
      }
    }
  }
}

</style>
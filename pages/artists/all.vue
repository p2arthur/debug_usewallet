<template>
  <div class="artists">
    <div class="artists-banner" v-show="isDesktop || (!isDesktop && artistStore.searchTerm.length == 0)">
      <BannersArtist />
    </div>

    <div class="artists-header">
      <InputsSearchBar 
        placeholder="Search artist"
        v-model:value="artistStore.searchTerm"
        @input="search()"
        :showResults="isDesktop"
      >
        <router-link
          v-for="result in artistStore.searchResults" 
          :key="result.normalizedName"
          class="search-results-item" 
          :to="`/artists/${result.normalizedName}`"
        >
          <div class="search-results-item-selector" />
          <div class="search-results-item-row">
            <div class="search-results-item-row-avatar">
              <img
                v-if="result.page.profileImage"
                :src="resolveMediaToCDN(result.page.profileImage, 256)" 
                :alt="result.name" 
                crossorigin=""
              >
            </div>
            <span class="search-results-item-row-text" >{{ result.name }}</span>
          </div>
        </router-link>
      </InputsSearchBar>
    </div>

    <template
      v-for="(section, index) in artistStore.featuredSections"
      :key="section.id"
    >
      <div class="artists-section" v-show="isDesktop || (!isDesktop && artistStore.searchTerm.length == 0)">
        <div class="artists-section-info">
          <h3>{{ section.title }}</h3>
          <!-- <router-link :to="`/artists/curated/${section.normalizedTitle}`" class="artists-section-info-button">
            <span>View category</span>
            <IconsArrowForward />
          </router-link> -->
        </div>

        <div class="artists-section-grid">
          <CardsArtist 
            v-for="artist in section.artists"
            :key="artist.normalizedName"
            :artist="artist"
          />
        </div>
      </div>
    </template>
      
    <div class="intersection-target" ref="intersectionTarget"></div>

    <div class="artists-search-results" v-show="!isDesktop && artistStore.searchTerm.length > 0">
      <router-link
        v-for="result in artistStore.searchResults" 
        :key="result.normalizedName" 
        :to="`/artists/${result.normalizedName}`"
        class="artists-search-results-item"
      >
        <div class="artists-search-results-item-image">
          <img
            v-if="result.page.profileImage"
            :src="resolveMediaToCDN(result.page.profileImage, 256)" 
            :alt="result.name" 
            crossorigin=""
          >
        </div>

        <div class="artists-search-results-item-info">
          <span class="artists-search-results-item-info-artist">{{ result.name }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

import { resolveCid, resolveMediaToCDN } from '@/functions/media'

const isDesktop = useIsDesktop()
const artistStore = useArtistStore()

useAsyncData(async () => {
  await artistStore.getFeaturedArtists()
})

const intersectionTarget = ref()
const { stop } = useIntersectionObserver(intersectionTarget,async ([{ isIntersecting }], observerElement) => {
  if (isIntersecting) {
    await artistStore.getFeaturedArtists()
  }
})

// Search
const searchTimeout = ref()

function search () {
  clearTimeout(searchTimeout.value)

  searchTimeout.value = setTimeout(() => {
    artistStore.search()
  }, 150)
}

// Metadata
useHead({
  title: "Featured artists",
  titleTemplate: "Featured artists",
  meta: [
    {
      hid: "og:title",
      name: "og:title",
      content: "Featured artists",
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:image",
      name: "og:image",
      content: "https://dart-test.ams3.digitaloceanspaces.com/test/633b49e5db0e038a59909f16.jpg",
    },
    {
      hid: "og:image:type",
      name: "og:image:type",
      content: "image/png",
    },
    {
      hid: "og:url",
      name: "og:url",
      content: "https://v2.dartroom.xyz/artists/all"
    },
    {
      hid: "og:description",
      name: "og:description",
      content: "Explore our featured artists, +100 curated artists from +20 different backgrounds and disciplines.",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Dartroom",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@_Dartroom",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
  ]
})

</script>

<style scoped lang="scss">

.artists {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px 0px;

  &-banner {
    display: flex;
    width: 100%;
    max-width: min(100%, 1920px);

    @media screen and (max-width: $sidebar-thin-breakpoint) {
      padding: 0px 16px;
      margin-bottom: 16px;
      width: calc(100% - 32px);
    }
  }

  &-header {
    display: flex;
    width: 100%;
    padding: 0px;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: $c-background-0;
    padding: 16px 16px;
    margin-top: -16px;
    margin-bottom: -16px;

    @media screen and (max-width: $sidebar-thin-breakpoint) {
      width: calc(100% - 32px);
      margin-top: -16px;
      margin-bottom: 0px;
    }
  }

  &-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: min(100%, 1920px);
    color: $c-on-background;

    &-info {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: $sidebar-thin-breakpoint) {
        padding: 0px 16px;
      }

      & h3 {
        margin: 0px;
        color: inherit;
        margin: 0px;
        font-size: 2rem;
        font-weight: 600;

        @media screen and (max-width: $sidebar-thin-breakpoint) {
          font-size: 1.5rem;
        }
      }

      &-button {
        display: flex;
        background-color: transparent;
        border: none;
        align-items: center;
        gap: 12px;
        color: $c-on-background;
        transition: color 150ms ease;
        cursor: pointer;
        padding: 0px;
        margin: 0px;

        & svg {
          color: inherit;
          height: 32px !important;
          width: 32px !important;
        }

        & span {
          font-size: 1rem;
          font-weight: 500;
          color: inherit;
        }

        &:hover {
          color: $c-secondary;
        }
      }
    }

    &-grid {
      width: calc(100% - 32px);
      display: flex;
      gap: 25px;
      overflow-x: auto;
      padding: 16px;
      scroll-snap-type: mandatory;
      scroll-snap-points-y: repeat(300px);
      scroll-snap-type: x mandatory;

      @include scrolbar-small($c-scroll-on-background);
    }
  }

  &-search-results {
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
    gap: 16px;
    width: calc(100% - 32px);

    &-item {
      display: flex;
      align-items: center;
      gap: 16px;

      &-image {
        display: flex;
        width: 64px;
        height: 64px;
        min-width: 64px;
        overflow: hidden;
        border-radius: $radius-s;
        background-color: $c-primary-transparent;

        & img {
          width: 64px;
          height: 64px;
          object-fit: cover;
        }
      }

      &-info {
        display: flex;
        flex-direction: column;
        overflow: hidden;

        &-artist {
          font-size: 1.25rem;
          font-weight: 500;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}

.search-results-item {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 8px;

  &:focus-within {
    outline: none;

    .search-results-item-selector {
      transform: scaleY(1);
    }
  }

  &:hover {
    .search-results-item-selector {
      transform: scaleY(1);
    } 
  }

  &-selector {
    position: absolute;
    left: 0;
    content: "";
    min-height: 24px;
    width: 4px;
    border-radius: 3px;
    background-color: $c-secondary;
    transform: scaleY(0);
    transition: transform 200ms ease;
  }

  &-row {
    display: flex;
    align-items: center;
    gap: 16px;
    overflow: hidden;

    &-avatar {
      display: flex;
      width: 32px;
      height: 32px;
      min-width: 32px;
      overflow: hidden;
      border-radius: $radius-ss;
      background-color: $c-primary-transparent;

      & img {
        width: 32px;
        height: 32px;
        object-fit: cover;
      }
    }

    &-text {
      font-weight: 400;
      font-size: 0.95rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}

</style>
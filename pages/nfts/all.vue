<template>
  <div class="all-nfts">
    <div class="all-nfts-header" v-if="isDesktop">
      <div class="all-nfts-header-search">
        <InputsSearchBar 
          placeholder="Search NFT"
          v-model:value="nftStore.searchTerm"
          @input="search()"
        >
          <router-link
            v-for="result in nftStore.searchResults" 
            :key="result.id"
            class="search-results-item" 
            :to="`/nfts/${result.token.index}`"
          >
            <div class="search-results-item-selector" />
            <div class="search-results-item-row">
              <div class="search-results-item-row-avatar">
                <img
                  v-if="result.media"
                  :src="resolveMediaToCDN(result.media, 256)" 
                  :alt="result.info.title + ' by ' + result.artist.name" 
                  crossorigin=""
                >
              </div>
              <span class="search-results-item-row-text" >{{ result.info.title }} - by: {{ result.artist.name }}</span>
            </div>
          </router-link>
        </InputsSearchBar>
      </div>

      <div class="all-nfts-header-filters">
        <div class="all-nfts-header-filters-sort" v-show="isDesktop">
          <SelectionSort 
            :selected="activeSort" 
            :options="sortOptions" 
            @change="changeSort" 
          />
        </div>
      </div>
    </div>

    <div class="all-nfts-header-mobile" v-else>
      <InputsSearchBar 
        placeholder="Search NFT"
        v-model:value="nftStore.searchTerm"
        :showResults="false"
        @input="search()"
      />
      <SelectionSort 
        v-show="nftStore.searchTerm.length === 0"
        :selected="activeSort" 
        :options="sortOptions"
        @change="changeSort" 
      />
    </div>

    <div v-show="isDesktop || (!isDesktop && nftStore.searchTerm.length == 0)">
      <GridsNFT 
        :nfts="nftStore.all"
        @endReached="getMoreListings()"
      />
    </div>

    <div class="all-nfts-search-results" v-show="!isDesktop && nftStore.searchTerm.length > 0">
      <router-link
        v-for="result in nftStore.searchResults" 
        :key="result.id"
        class="all-nfts-search-results-item" 
        :to="`/nfts/${result.token.index}`"
      >
        <div class="all-nfts-search-results-item-image">
          <img
            v-if="result.media"
            :src="resolveMediaToCDN(result.media, 512)" 
            :alt="result.info.title + ' by ' + result.artist.name" 
            crossorigin=""
          >
        </div>

        <div class="all-nfts-search-results-item-info">
          <span class="all-nfts-search-results-item-info-title">{{ result.info.title }}</span>
          <span class="all-nfts-search-results-item-info-artist">by: {{ result.artist.name }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

import { AllNftSort } from '@/graphql/client'
import { resolveCid, resolveMediaToCDN } from '@/functions/media'

const isDesktop = useIsDesktop()
const nftStore = useNFTStore()

useAsyncData(async () => {
  await nftStore.getAll()
})

async function getMoreListings () {
  await nftStore.getAll()
}

// Sort
const activeSort = computed(() => {
  return sortOptions.find((s) => s.value === nftStore.allSort) || sortOptions[0]
})

const sortOptions = [
  { display: "New", value: "NEW" },
  { display: "Old", value: "OLD" },
  { display: "Sale descending", value: "SALE_DESCENDING" },
  { display: "Sale ascending", value: "SALE_ASCENDING" }
]

async function changeSort (option: { display: string, value: AllNftSort }) {
  nftStore.allSort = option.value
  await nftStore.getAll(true)
}

// Search 
const searchTimeout = ref()

function search () {
  clearTimeout(searchTimeout.value)

  searchTimeout.value = setTimeout(() => {
    nftStore.search()
  }, 150)
}

</script>

<style scoped lang="scss">

.all-nfts {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 16px;

  &-header {
    position: sticky;
    top: 0;
    display: flex;
    width: 100%;
    background-color: $c-background-0;
    z-index: 2;
    padding: 16px 0px;

    &-search {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0px 170px;
    }

    &-filters {
      position: relative;

      &-sort {
        display: flex;
        position: absolute;
        right: 0;
      }
    }

    &-mobile {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: center;
      width: calc(100% - 32px);
      background-color: $c-background-0;
      z-index: 2;
      padding: 16px;
      gap: 16px;
    }
  }

  &-search-results {
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
    gap: 16px;
   
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

        &-title {
          height: 36px;
          font-weight: 500;
          font-size: 1.2rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        &-artist {
          height: 28px;
          font-weight: 00;
          font-size: 1rem;
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
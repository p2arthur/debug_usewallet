<template>
  <div class="nft-about" v-if="nftStore.nft">
    <SectionsHeaderExpand title="Details" :open="true">
      <template v-slot:icon>
        <IconsQuickReference />
      </template>
      <template v-slot:content>
        <div class="nft-about-details">
          <div class="nft-about-details-section">
            <span class="nft-about-details-section-title">Medium:</span>
            <span class="nft-about-details-section-value">{{ nftStore.nft.media.mimeType }}</span>

            <span class="nft-about-details-section-title">Dimensions:</span>
            <span class="nft-about-details-section-value">{{ nftStore.nft.media.dimensions }}</span>

            <span class="nft-about-details-section-title">Size:</span>
            <span class="nft-about-details-section-value">{{ humanFileSize(nftStore.nft.media.storageSize, true) }}</span>

            <span class="nft-about-details-section-title">Creator royalty:</span>
            <span class="nft-about-details-section-value">{{ nftStore.nft.token.royalty }}%</span>
          </div>

          <div class="nft-about-details-section">
            <span class="nft-about-details-section-title">Asset index:</span>
            <a :href="indexLink" target="_blank" class="nft-about-details-section-value">{{ nftStore.nft.token.index }}</a> 

            <span class="nft-about-details-section-title">Metadata standard:</span>
            <span class="nft-about-details-section-value">{{ nftStore.nft.metadata.standard }}</span>

            <span class="nft-about-details-section-title">Metadata file:</span>
            <a :href="resolveCid(nftStore.nft.metadata.cid)" target="_blank" class="nft-about-details-section-value">ipfs://{{ nftStore.nft.metadata.cid }}</a>

            <span class="nft-about-details-section-title">Media file:</span>
            <a :href="resolveCid(nftStore.nft.media.cid)" target="_blank" class="nft-about-details-section-value">ipfs://{{ nftStore.nft.media.cid }}</a>
          </div>
        </div>
      </template>
    </SectionsHeaderExpand>

    <SectionsHeaderExpand v-if="nftStore.nft.c ? (nftStore.nft.c.attributes.length) : false" :title="`Traits (${nftStore.nft.c?.attributes.length})`" :open="(nftStore.nft.c?.attributes.length || 0 ) > 0">
      <template v-slot:icon>
        <IconsLabel />
      </template>
      <template v-slot:content>
        <div class="nft-about-traits" v-if="nftStore.nft.c">
          <CardsTrait 
            v-for="(trait, index) in nftStore.nft.c.attributes"
            :key="index"
            :trait="trait"
          />
        </div>
      </template>
    </SectionsHeaderExpand>

    <SectionsHeaderExpand :title="`Owners (${nftStore.nftOwners.length})`" :open="true">
      <template v-slot:icon>
        <IconsWallet />
      </template>
      <template v-slot:content>
        <TablesOwners 
          :owners="nftStore.nftOwners"
          :nft="nftStore.nft"
        />
      </template>
    </SectionsHeaderExpand>
  </div>
</template>

<script setup lang="ts">

import { humanFileSize } from '@/functions/format/storageSize'
import { resolveCid } from '@/functions/media'
import { openAsset } from '@/functions/Explorer'

const nftStore = useNFTStore()
const settingsStore = useSettingsStore()
const nfdStore = useNFDStore()
const router = useRouter()

const indexLink = computed(() => {
  return openAsset(
    nftStore.nft?.token.index || 0, 
    settingsStore.appSettings.blockChainExplorer, 
    settingsStore.appSettings.network
  )
})

const id = computed(() => {
  return Number(router.currentRoute.value.params.id)
})

useAsyncData(async () => {
  await nftStore.getOwners(id.value)
})

onMounted(() => {
  nfdStore.fetchNFDs(nftStore.nftOwners.map((a) => a.address))
})

</script>

<style scoped lang="scss">

.nft-about {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;

  &-traits {
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    gap: 16px;
  }

  &-details {
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    column-gap: 32px;

    &-section {
      display: grid;
      grid-template-columns: repeat(2, auto);
      row-gap: 2px;
      // column-gap: 16px;

      & span {
        font-size: 1rem;
        font-weight: 400;
        font-family: $f-mono;
        white-space: nowrap;
        color: $c-on-background;
      }

      & a {
        font-size: 1rem;
        font-weight: 400;
        font-family: $f-mono;
        white-space: nowrap;
        cursor: pointer;
        color: $c-on-background;
        transition: color 150ms ease;

        &:hover {
          color: $c-secondary;
        }
      }

      &-title {
        min-width: 196px;
      }

      &-value {
        max-width: 256px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}

</style>
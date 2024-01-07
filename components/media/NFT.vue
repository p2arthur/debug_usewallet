<template>
  <div class="nft-media">
    <div class="nft-media-base">
      <MediaVideo 
        v-if="type ? type === 'video/mp4' : false"
        :media="media"
        :previewSrc="src"
        :type="type"
      />

      <MediaImage 
        v-else
        :src="media ? resolveCid(media, 2048) : src"
      />
    </div>

    <div class="nft-media-overlay">
      <div class="nft-media-overlay-ai" v-show="nft?.info.ai">
        <span>AI</span>
      </div>

      <!-- <div class="nft-media-overlay-like" :style="liked ? `transform: translateY(0); visibility: visible;` : ''">
        <button class="nft-media-overlay-like-button" @click="liked = !liked">
          <IconsLike v-if="!liked" />
          <IconsLiked v-else />
        </button>
      </div> -->

      <div class="nft-media-overlay-expand">
        <a class="nft-media-overlay-expand-button" :href="src ? src : (media ? resolveCid(media.cid) : '')" target="_blank">
          <IconsFullscreen />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { NftMedia, Nft } from '@/graphql/client'
import { resolveCid } from '@/functions/media'

defineProps({
  media: {
    type: Object as PropType<NftMedia>,
    required: false,
  },
  src: String,
  type: String,
  nft: Object as PropType<Nft>
})

const liked = ref(false)

</script>

<style scoped lang="scss">

.nft-media {
  position: relative;
  display: flex;
  max-width: min(100%, 1024px);
  max-height: 1024px;
  background-color: $c-media-background;
  padding: 8px;
  border-radius: $radius-l;

  &-base {
    position: relative;
    display: flex;
    border-radius: $radius-s;
    max-width: min(100%, 1024px);
    max-height: min(1024px, 80vh);
    overflow: hidden;
  }

  &:hover {
    .nft-media-overlay-like {
      visibility: visible;
      transform: translateY(0);
    }

    .nft-media-overlay-expand {
      visibility: visible;
      transform: translateY(0);
    }
  }

  &-overlay {
    display: flex;
    position: absolute;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    pointer-events: none;
    overflow: hidden;

    &-ai {
      position: absolute;
      top: 8px;
      left: 8px;
      height: 36px;
      width: 36px;

      @include media-overlay;

      & span {
        color: $c-on-background;
        font-size: 1.1rem;
        font-weight: 500;
        font-family: $f-mono;
      }
    }

    &-like {
      position: absolute;
      top: 8px;
      right: 8px;
      height: 36px;
      width: 36px;
      display: flex;
      cursor: default;
      visibility: hidden;
      overflow: hidden;
      transform: translateY(-52px);
      transition: opacity 150ms ease, visibility 150ms ease, transform 250ms ease;

      @include media-overlay;

      &-button {
        height: 36px;
        width: 36px;
        transition: background-color 150ms ease;

        &:hover {
          background-color: $c-background-1;
        }
      }
    }

    &-expand {
      position: absolute;
      top: 8px;
      // right: 52px;
      right: 8px;
      height: 36px;
      width: 36px;
      display: flex;
      cursor: default;
      visibility: hidden;
      overflow: hidden;
      transform: translateY(-52px);
      transition: opacity 150ms ease, visibility 150ms ease, transform 250ms ease;

      @include media-overlay;

      &-button {
        height: 36px;
        width: 36px;
        transition: background-color 150ms ease;

        &:hover {
          background-color: $c-background-1;
        }
      }
    }
  }
}

</style>
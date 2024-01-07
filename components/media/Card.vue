<template>
  <div class="nft-card-media-preview">

    <video
      v-if="(media && media.mimeType === 'video/mp4') || (src && type === 'video/mp4')"
      ref="cardVideo"
      :muted="true"
      crossorigin=""
      loop
      :poster="media ? resolveCid(media.thumbnail || '', 1024) : ''" 
    >
      <source :src="media ? resolveCid(media, 720) : src" type="video/mp4">
    </video>

    <img
      v-else-if="media || src"
      :src="src ? src : (media ? resolveCid(media.thumbnail ? media.thumbnail : media, 1024) : '')" 
      alt="" 
      crossorigin=""
      :style="nft ? `object-position: ${Number(nft.card.x)}% ${Number(nft.card.y)}%;` : ''"
    >
  </div>
</template>

<script setup lang="ts">

import { NftMedia } from '@/graphql/client'
import { resolveCid } from '@/functions/media'
import { Nft } from '@/graphql/client'

const props = defineProps({
  media: {
    type: Object as PropType<NftMedia>,
    required: false,
  },
  nft: {
    type: Object as PropType<Nft>,
    required: true
  },
  playing: {
    type: Boolean,
    required: true
  },
  src: String,
  type: String
})

const playing = computed(() => {
  return props.playing
})

const cardVideo = ref()

watch(playing,() => {
  if ((props.media?.mimeType === 'video/mp4' || props.type === 'video/mp4') && cardVideo.value) {
    if (playing.value) {
      cardVideo.value.play()
    } else {
      cardVideo.value.pause()
    }
  }
})

</script>

<style scoped lang="scss">

.nft-card-media-preview {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 320px;
  min-height: 320px;
  max-height: 320px;
  background-color: $c-flat;

  & img {
    min-width: 320px;
    max-width: 320px;
    min-height: 320px;
    max-height: 320px;
    object-fit: cover;
  }

  & video {
    object-fit: cover;
    position: absolute;
    min-width: 320px;
    max-width: 320px;
    min-height: 320px;
    max-height: 320px;
  }
}

</style>
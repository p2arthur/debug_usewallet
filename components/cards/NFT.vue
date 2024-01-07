<template>
  <div class="nft-card">
    <div class="nft-card-media" ref="player">
      <MediaCard 
        :media="nft.media"
        :src="previewSrc"
        :playing="!isOutside"
        :nft="nft"
        :type="type"
      />

      <a
        class="nft-card-media-link" 
        :href="`/nfts/${nft.token.index}`"
        @click.prevent="doubleClick(`/nfts/${nft.token.index}`)"
      >
      </a>

      <div class="nft-card-media-overlay">
        <div class="nft-card-media-overlay-nsfw" v-show="nft?.info.nsfw && !settings.nsfw && !nsfwOverwrite">
          <button class="nft-card-media-overlay-nsfw-button" @click="nsfwOverwrite = true">
            <span>Show sensitive content</span>
          </button>
        </div>

        <div class="nft-card-media-overlay-ai" v-show="nft?.info.ai">
          <span>AI</span>
        </div>

        <!-- <div class="nft-card-media-overlay-like" :style="liked ? `transform: translateY(0); visibility: visible;` : ''">
          <button class="nft-card-media-overlay-like-button" @click="liked = !liked">
            <IconsLike v-if="!liked" />
            <IconsLiked v-else />
          </button>
        </div> -->

        <div class="nft-card-media-overlay-play" v-show="(nft.media?.mimeType === 'video/mp4' || type === 'video/mp4') && isOutside">
          <button class="nft-card-media-overlay-play-button">
            <IconsPlay style="height: 42px; width: 42px;" />
          </button>
        </div>

        <!-- <div class="nft-card-media-overlay-auction" v-show="false">
          <div class="nft-card-media-overlay-auction-blinker">
            <div class="nft-card-media-overlay-auction-blinker-icon"></div>
          </div>

          <div class="nft-card-media-overlay-auction-timer">
            <span>ends in: {{ timeLeft }}</span>
          </div>

          <div class="nft-card-media-overlay-auction-price" >
            <span>current bid: {{ numberFormater.format(500) }}</span>
            <IconsCurrencyByTag 
              tag="USDC" 
              style="heigth: 20px; width: 20px; min-height: 20px; min-width: 20px;" 
            />
          </div>
        </div> -->
      </div>
    </div>

    <div class="nft-card-info">
      <router-link :to="`/artists/${nft.artist.normalizedName}`" class="nft-card-info-avatar">
        <img 
          v-if="artistCID"
          :src="artistCID" 
          alt=""
          crossorigin=""
        >
        <span v-else>{{ nft?.artist.address ? nft.artist.address.slice(0,2) : 0 }}</span>
      </router-link>

      <div class="nft-card-info-title">
        <span>{{ nft?.info.title || 'Title' }}</span>
      </div>

      <div class="nft-card-info-editions">
        <span>{{ nft?.token.editions || 1 }} ed.</span>
      </div>

      <div 
        class="nft-card-info-price"
        v-if="isForSale && bestPrice"
      >
        <span>min. price: {{ numberFormater.format(bestPrice.price) }}</span>
        <IconsCurrencyByTag :tag="bestPrice.currency" style="heigth: 16px; width: 16px;" />
      </div>

      <div 
        class="nft-card-info-price"
        v-else-if="nft.statistics && nft.statistics.latestSale && nft.statistics.latestSale.price && nft.statistics.latestSale.currency"
      >
        <span>last sale: {{ numberFormater.format(nft.statistics.latestSale.price) }}</span>
        <IconsCurrencyByTag :tag="nft.statistics.latestSale.currency" style="heigth: 16px; width: 16px;" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { PropType } from 'vue';
import { Nft, NftFixedBid } from '@/graphql/client'
import { resolveCid } from '@/functions/media'

const props = defineProps({
  nft: {
    type: Object as PropType<Nft>,
    required: true
  },
  previewSrc: String,
  type: String
})

const router = useRouter()
const numberFormater = Intl.NumberFormat('en', { 
  notation: 'compact',
  maximumFractionDigits: 3,
  minimumFractionDigits: 0,
})
const settings = useSettings()
const fiatQuote = useFiatQuote()
const nsfwOverwrite = ref(false)
const liked = ref(false)
const time = ref(86400)

useAnimationInterval(1000, () => { 
  time.value -= 1
})

const timeLeft = computed(() => {
  let timeString

  if (time.value >= 172800) {
    // more then two days

    timeString =`${Math.floor(time.value / 86400)} days`

  } else if (time.value >= 86400) {
    // more then a day

    timeString = '1 day'

  } else if (time.value < 0) {
    // ended

    timeString = 'ended'

  } else {
    // less then a day

    timeString = new Date(time.value * 1000).toISOString().substr(11, 8)

  }

  return timeString
})

// doulbe click handler
const clickCounter = ref(0)
const timer: any = ref(null)

function doubleClick (route: string) {
  clickCounter.value += 1

  if (clickCounter.value === 1) {
    timer.value = setTimeout(() => {
      clickCounter.value = 0
      router.push(route)
    }, 300)

    return
  }

  clearTimeout(timer.value)
  clickCounter.value = 0
  liked.value = !liked.value
}

const artistCID = computed(() => {
  if (props.nft?.artist.profileImage) {
    return resolveCid(props.nft.artist.profileImage, 256)
  } else {
    return null
  }
})

const player = ref()
const { isOutside } = useMouseInElement(player)

const isForSale = props.nft.listings.fixedBid.length > 0

interface BestPrice extends NftFixedBid {
  usdValue: number
}

let bestPrice: Ref<BestPrice | null> = ref(null)

if (isForSale) {

  const convertedListings = props.nft.listings.fixedBid.map((bid) => {
    return {
      ...bid,
      usdValue: fiatQuote.value.get(bid.currency) * bid.price
    }
  })

  bestPrice.value = convertedListings.reduce((prev, curr) => {
    return prev.usdValue < curr.usdValue ? prev : curr
  })
}

</script>

<style scoped lang="scss">

.nft-card {
  display: flex;
  flex-direction: column;
  width: min(320px, 100%);
  background-color: $c-background-1;
  border-radius: $radius-m;
  box-shadow: $shadow-0;

  &-media {
    position: relative;
    display: flex;
    width: min(320px, 100%);
    overflow: hidden;
    border-radius: $radius-m;

    &:hover {

      .nft-card-media-overlay-like {
        // opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .nft-card-media-overlay-auction {
        // opacity: 0;
        visibility: hidden;
        transform: translateY(72px);
      }
    }

    & img {
      width: min(320px, 100%);
      height: 320px;
      object-fit: cover;
    }

    &-link {
      display: flex;
      position: absolute;
      width: min(320px, 100%);
      height: 320px;
      -webkit-tap-highlight-color: transparent;
    }

    &-overlay {
      display: flex;
      position: absolute;
      width: min(320px, 100%);
      height: 320px;
      pointer-events: none;
      overflow: hidden;

      &-nsfw {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        min-width: 100%;
        min-height: 100%;
        backdrop-filter: blur(12px);
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;

        &-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          border: none;
          margin: 0px;
          padding: 0px;
          color: $c-on-background;
          cursor: pointer;
          background-color: $c-overlay-background;
          backdrop-filter: blur(4px);
          border-radius: $radius-s;
          padding: 8px;
          pointer-events: all;
          transition: background-color 150ms ease;

          & span {
            display: flex;
            font-size: 0.9rem;
            font-weight: 500;
            align-items: center;
          }

          &:hover {
            background-color: $c-background-1;
          }
        }
      }

      &-ai {
        position: absolute;
        top: 8px;
        left: 8px;
        height: 36px;
        width: 36px;

        @include nft-card-overlay;

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
        // opacity: 0;
        visibility: hidden;
        overflow: hidden;
        transform: translateY(-52px);
        transition: opacity 150ms ease, visibility 150ms ease, transform 250ms ease;

        @include nft-card-overlay;

        &-button {
          height: 36px;
          width: 36px;
          transition: background-color 150ms ease;

          &:hover {
            background-color: $c-background-1;
          }
        }
      }

      &-play {
        position: absolute;
        top: calc(50% - 24px);
        left: calc(50% - 24px);

        @include nft-card-overlay;

        &-button {
          height: 48px;
          width: 48px;
        }
      }

      &-auction {
        position: absolute;
        bottom: 8px;
        left: 8px;
        min-height: 36px;
        width: calc(100% - 32px);
        box-shadow: $shadow-2;
        @include nft-card-overlay;

        justify-content: space-between;
        padding: 0px 8px;
        gap: 8px;

        // opacity: 1;
        visibility: visible;
        overflow: hidden;
        transform: translateY(0);
        transition: opacity 150ms ease, visibility 150ms ease, transform 250ms ease;
        flex-wrap: wrap;

        &-blinker {
          display: flex;
          height: 14px;
          width: 14px;
          display: flex;
          align-content: center;

          &-icon {
            height: 14px;
            width: 14px;
            border-radius: 50%;
            background-color: $c-secondary;
            animation: blinker 1.5s linear infinite;

            @keyframes blinker {
              50% {
                opacity: 0;
              }
            }
          }
        }

        &-timer {
          display: flex;
          font-size: 0.9rem;
          font-weight: 500;
          white-space: nowrap;
        }

        &-price {
          display: flex;
          font-size: 0.9rem;
          font-weight: 500;
          align-items: center;
          gap: 4px;
          color: $c-on-background;
          white-space: nowrap;
        }
      }
    }
  }

  &-info {
    display: grid;
    height: 52px;
    width: min(304px, calc(100% - 16px));
    padding: 8px;
    grid-template-areas:
      "avatar title    title"
      "avatar editions price"
    ;
    grid-template-columns: 52px auto auto;
    column-gap: 8px;

    &-avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: avatar;
      width: 52px;
      height: 52px;
      overflow: hidden;
      border-radius: $radius-s;
      background-color: $c-primary-transparent;

      & img {
        width: 52px;
        height: 52px;
        object-fit: cover;
      }
      
      & span {
        color: $c-on-primary-transparent;
        font-size: 1.75rem;
        font-weight: 400;
        font-family: $f-mono;
      }
    }

    &-title {
      color: $c-on-background;
      grid-area: title;
      font-size: 1.25rem;
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor: default;
    }

    &-editions {
      color: $c-on-background;
      grid-area: editions;

      & span {
        cursor: default;
        font-family: $f-mono;
        font-size: 0.95rem;
        // font-weight: 500;
      }
    }

    &-price {
      color: $c-on-background;
      display: flex;
      justify-content: flex-end;
      grid-area: price;
      align-items: center;
      gap: 4px;

      & span {
        cursor: default;
        font-size: 0.95rem;
        // font-weight: 500;
      }
    }
  }
}

</style>
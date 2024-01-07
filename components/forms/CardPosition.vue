<template>
  <div class="frame">
    <CardsNFT class="prevent-select" :nft="formatedNFT" :previewSrc="previewSrc" :type="type" />
    
    <div class="slider-horizontal">
      <div
        class="slider-horizontal-drag"
        ref="sliderH"
        @mousedown="sliderHDragging = true"
      >
        <div
          class="slider-horizontal-drag-progression"
          :style="`transform: translateX(-${100 - x}%);`"
        >
          <button 
            class="slider-horizontal-drag-progression-selector"
            @keydown="keyNavigationX"
          >
            <div class="slider-horizontal-drag-progression-selector-label">
              <span>x: {{ x }}</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div class="slider-vertical">
      <div
        class="slider-vertical-drag"
        ref="sliderV"
        @mousedown="sliderVDragging = true"
      >
        <div
          class="slider-vertical-drag-progression"
          :style="`transform: translateY(-${100 - y}%);`"
        >
          <button 
            class="slider-vertical-drag-progression-selector"
            @keydown="keyNavigationY"
          >
            <div 
              class="slider-vertical-drag-progression-selector-label"
            >
              <span>y: {{ y }}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { PropType } from 'vue';
import { NftSettings, Nft } from '@/graphql/client'

const props = defineProps({
  x: Number,
  y: Number,
  nft: {
    type: Object as PropType<NftSettings>,
    required: true
  },
  previewSrc: String,
  type: String
})

const formatedNFT = computed(() => {
  return {
    ...props.nft,
    artist: {
      ...props.nft.artist,
      suspended: false,
      deleted: false,
    },
    metadata: {
      id: "",
      cid: "",
      imeType: "",
      integrity: "",
      standard: ""
    },
    listings: {
      listed: false,
      fixedBid: [],
      auctions: []
    },
    statistics: {
      sold: false,
      latestSale: null
    }
  } as unknown as Nft
})

const emits = defineEmits(['update:x', 'update:y'])

// Horizontal position
const sliderH = ref()
const sliderHDragging = ref(false)
const x = ref(Number(props.x))
const sliderElement = useMouseInElement(sliderH)
const sliderSwipe = useSwipe(sliderH)

function stopSliderH () {
  sliderHDragging.value = false
}

watch([sliderHDragging, sliderElement.elementX], () => {
  const progress = Math.max(0, Math.min(1, (sliderElement.elementX.value) / sliderElement.elementWidth.value))

  if (sliderHDragging.value) {
    x.value = Math.round(progress * 100)
    emits('update:x', x.value)
  }
})

watch([sliderSwipe.isSwiping, sliderSwipe.lengthX], () => {
  const progress = Math.max(0, 
    Math.min(1, 
      (sliderSwipe.coordsEnd.x - sliderElement.elementPositionX.value) / sliderElement.elementWidth.value
    )
  )

  if (sliderSwipe.isSwiping) {
    x.value = Math.round(progress * 100)
    emits('update:x', x.value)
  }
})

// Vertical position
const sliderV = ref()
const sliderVDragging = ref(false)
const y = ref(Number(props.y))
const sliderVElement = useMouseInElement(sliderV)
const sliderVSwipe = useSwipe(sliderV)

function stopSliderV () {
  sliderVDragging.value = false
}

watch([sliderVDragging, sliderVElement.elementY], () => {
  const progress = Math.max(0, Math.min(1, (sliderVElement.elementY.value) / sliderVElement.elementHeight.value))

  if (sliderVDragging.value) {
    y.value = Math.round(progress * 100)
    emits('update:y', y.value)
  }
})

watch([sliderVSwipe.isSwiping, sliderVSwipe.lengthY], () => {
  const progress = Math.max(0, 
    Math.min(1, 
      (sliderVSwipe.coordsEnd.y - sliderVElement.elementPositionY.value) / sliderVElement.elementHeight.value
    )
  )

  if (sliderVSwipe.isSwiping) {
    y.value = Math.round(progress * 100)
    emits('update:y', y.value)
  }
})

function preventScroll (event: TouchEvent) {
  if (sliderVSwipe.isSwiping.value) {
    event.preventDefault()
  }
}

onMounted(() => {
  addEventListener('mouseup', stopSliderH)
  addEventListener('mouseup', stopSliderV)
  addEventListener('touchstart', preventScroll)
  addEventListener('touchmove', preventScroll)
})

onBeforeUnmount(() => {
  removeEventListener('mouseup', stopSliderH)
  removeEventListener('mouseup', stopSliderV)
  removeEventListener('touchstart', preventScroll)
  removeEventListener('touchmove', preventScroll)
})

function keyNavigationX (event: KeyboardEvent) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault()
    event.stopImmediatePropagation()
    event.stopPropagation()
  }

  if (event.key === 'ArrowRight') {
    if (x.value < 100) {
      x.value += 1
      emits('update:x', x.value)
    }
  } else if (event.key === 'ArrowLeft') {
    if (x.value > 0) {
      x.value -= 1
      emits('update:x', x.value)
    }
  }
}

function keyNavigationY (event: KeyboardEvent) {
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault()
    event.stopImmediatePropagation()
    event.stopPropagation()
  }

  if (event.key === 'ArrowDown') {
    if (y.value < 100) {
      y.value += 1
      emits('update:y', y.value)
    }
  } else if (event.key === 'ArrowUp') {
    if (y.value > 0) {
      y.value -= 1
     emits('update:y', y.value)
    }
  }
}

</script>

<style scoped lang="scss">

.frame {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.slider-horizontal {
  top: -24px;
  position: absolute;
  content: "";
  height: 8px;
  border-radius: 4px;
  width: min(calc(100% - 32px), calc(320px - 32px));
  background-color: $c-primary-transparent;
  padding: 0px 16px;

  &:hover {
    .slider-horizontal-drag-progression-selector-label {
      opacity: 1;
    }
  }

  &:focus-within {
    .slider-horizontal-drag-progression-selector-label {
      opacity: 1;
    }
  }

  &-drag {
    cursor: pointer;
    position: absolute;
    height: 8px;
    width: calc(100% - 32px);
    left: 16px;
    -webkit-tap-highlight-color: transparent;

    &-progression {
      position: absolute;
      height: 8px;
      width: 100%;
      background-color: transparent;
      border-radius: $radius-ss;
      pointer-events: none;
      transform: translateX(-100%);

      &-selector {
        right: 0;
        position: absolute;
        border: none;
        margin: 0px;
        padding: 0px;
        height: 8px;
        width: 32px;
        border-radius: 4px;
        background-color: $c-on-primary-transparent;
        transform: translateX(50%);

        &:focus-visible {
          .slider-horizontal-drag-progression-selector-label {
            opacity: 1;
          }
        }

        &-label {
          display: flex;
          align-items: center;
          opacity: 0;
          position: absolute;
          top: -30px;
          white-space: nowrap;
          left: 16px;
          color: $c-on-background;
          background-color: $c-overlay-background;
          backdrop-filter: blur(4px);
          box-shadow: $shadow-1;
          border-radius: $radius-ss;
          height: 24px;
          padding: 0px 8px;
          transition: opacity 150ms ease;
          transform: translateX(-50%);

          & span {
            font-family: $f-mono;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}

.slider-vertical {
  left: 0;
  position: absolute;
  content: "";
  height: 320px;
  width: 8px;
  border-radius: 4px;
  background-color: $c-primary-transparent;
  padding: 16px 0px;

  &:hover {
    .slider-vertical-drag-progression-selector-label {
      opacity: 1;
    }
  }

  &:focus-within {
    .slider-vertical-drag-progression-selector-label {
      opacity: 1;
    }
  }

  &-drag {
    cursor: pointer;
    position: absolute;
    width: 8px;
    height: calc(100% - 32px);
    top: 16px;
    -webkit-tap-highlight-color: transparent;

    &-progression {
      position: absolute;
      width: 8px;
      height: 100%;
      background-color: transparent;
      border-radius: $radius-ss;
      pointer-events: none;
      transform: translateY(-100%);

      &-selector {
        bottom: 0;
        position: absolute;
        border: none;
        margin: 0px;
        padding: 0px;
        width: 8px;
        height: 32px;
        border-radius: 4px;
        background-color: $c-on-primary-transparent;
        transform: translateY(50%);

        &:focus-visible {
          .slider-vertical-drag-progression-selector-label {
            opacity: 1;
          }
        }

        &-label {
          display: flex;
          align-items: center;
          opacity: 0;
          position: absolute;
          white-space: nowrap;
          top: -30px;
          left: 4px;
          color: $c-on-background;
          background-color: $c-overlay-background;
          backdrop-filter: blur(4px);
          box-shadow: $shadow-1;
          border-radius: $radius-ss;
          height: 24px;
          padding: 0px 8px;
          transition: opacity 150ms ease;
          transform: translateX(-50%);

          & span {
            font-family: $f-mono;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}

</style>
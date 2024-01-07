<template>
  <ClientOnly>
    <div 
      ref="wrapper"
      class="prevent-select"
      :class="fullScreen ? 'video-wrapper-fullscreen' : 'video-wrapper'" 
      :style="`height: ${videoSize.height}px; width: ${videoSize.width}px`"
    >
      <video
        :class="fullScreen ? 'full-video-fullscreen' : 'full-video'"
        :style="`cursor: ${controlsOpen ? 'default' : 'none'};`"
        ref="video"
        :autoplay="savedPlaying"
        loop
        playsinline
        :controls="false"
        :muted="true"
        @click.stop="playing = !playing"
        @canplay="setOldTime(), setCloseControls()"
        crossorigin=""
        :poster="resolveCid(media?.thumbnail || '', 2024)"
      >
      </video>

      <div class="video-controls" :class="controlsOpen ? 'video-controls-open' : ''">
        <div class="video-controls-scrub" @mousedown="scrubbing = true" ref="scrubber">
          <div 
            class="video-controls-scrub-buffer" 
            :style="`transform: translateX(-${100 - (buffered.length > 0 ? buffered[buffered.length - 1][1] : 0) / duration * 100}%);`"
          />
          <div 
            class="video-controls-scrub-progression"
            :style="`transform: translateX(-${100 - currentTime / duration * 100}%);`"
          />

          <div 
            class="video-controls-scrub-time"
            :style="`transform: translateX(${pendingValue / duration * 100}%);`"
          >
            <div class="video-controls-scrub-time-label">
              <span>{{ formatDuration(pendingValue) }}</span>
            </div>
          </div>
        </div>

        <div class="video-controls-functions">
          <button class="video-controls-functions-button" @click.stop="playing = !playing">
            <IconsPlay style="height: 32px; width: 32px;" v-if="!playing" />
            <IconsPause style="height: 32px; width: 32px;" v-else />
          </button>

          <div class="video-controls-functions-volume" v-click-outside @clickOutside="volumeDragging = false">
            <button class="video-controls-functions-button" @click.stop="muted = !muted">
              <IconsVolume style="height: 32px; width: 32px;" v-if="!muted" />
              <IconsVolumeOff style="height: 32px; width: 32px;" v-else />
            </button>
          
            <div class="video-controls-functions-volume-bar" @mousedown="volumeDragging = true" ref="volumeBar">
              <div 
                class="video-controls-functions-volume-bar-progression"
                :style="`transform: translateX(-${100 - volume * 100}%);`"
              ></div>
            </div>
          </div>

          <div class="video-controls-functions-time">
            <span>{{ formatDuration(currentTime) }}/{{ formatDuration(duration) }}</span>
          </div>

          <div class="spacer"></div>

          <button v-if="media" class="video-controls-functions-button" @click.stop="qualityOpen = !qualityOpen" v-click-outside @clickOutside="qualityOpen = false">
            <IconsSettings style="height: 32px; width: 32px;" />

            <div class="video-controls-functions-quality" v-show="qualityOpen">
              <button 
                :class="activeQuality === 'original' ? 'video-controls-functions-quality-option-active' : ''"
                class="video-controls-functions-quality-option" 
                @click="changeQuality('original')"
              >
                <span>original</span>
              </button>
              <button
                :class="activeQuality === preview.size ? 'video-controls-functions-quality-option-active' : ''"
                class="video-controls-functions-quality-option"
                v-for="(preview, index) in mediaPreviews"
                :key="index"
                @click="changeQuality(preview.size)"
              >
                <span>{{ preview.size }}p</span>
              </button>
            </div>
          </button>

          <button class="video-controls-functions-button" @click="changeFullScreen()">
            <IconsFullscreen style="height: 32px; width: 32px;" />
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">

import { NftMedia } from '@/graphql/client'
import { useMediaControls, useMouseInElement } from '@vueuse/core'
import type { PropType, Ref } from 'vue'
import { resolveCid, Media } from '@/functions/media'

const props = defineProps({
  media: {
    type: Object as PropType<NftMedia>,
    required: false,
  },
  previewSrc: String,
  type: String
})
const wrapper = ref()
const video = ref()
const scr = ref({
  src: props.previewSrc ? props.previewSrc : (props.media ? resolveCid(props.media, 1920) : ''),
  type: props.type ? props.type : props.media ? props.media.mimeType : ''
})

const {
  playing,
  buffered,
  currentTime,
  duration,
  volume,
  muted,
} = useMediaControls(video, {
  src: scr
})
const formatDuration = (seconds: number) => new Date(1000 * seconds).toISOString().slice(14, 19)

// controls
const controlsOpen = ref(true)
const controlsTimeout: any = ref(null)

const inWrapper = useMouseInElement(wrapper)

function setCloseControls () {
  controlsTimeout.value = setTimeout(() => {
    controlsOpen.value = false
  }, 3000)
}

watch(inWrapper.isOutside, () => {
  if (inWrapper.isOutside.value) {
    controlsOpen.value = false
  } else {
    controlsOpen.value = true
  }
})

watch(inWrapper.elementX, () => {
  if (!inWrapper.isOutside.value && !scrubbing.value && !volumeDragging.value) {
    controlsOpen.value = true
    clearTimeout(controlsTimeout.value)
    setCloseControls()
  } else {
    clearTimeout(controlsTimeout.value)
  }
})

// Scrubbing
const scrubber = ref()
const scrubbing = ref(false)
const scrubPause = ref(false)
const pendingValue = ref(0)
const { elementX, elementWidth } = useMouseInElement(scrubber)

function stopScrubbing () {
  scrubbing.value = false
}

watch([scrubbing, elementX], () => {
  const progress = Math.max(0, Math.min(1, (elementX.value) / elementWidth.value))
  pendingValue.value = progress * duration.value
  if (scrubbing.value) {
    if (playing.value) {
      scrubPause.value = true
    }
    currentTime.value = pendingValue.value
  }
})

watch([scrubPause, scrubbing],() => {
  if (scrubPause.value && scrubbing.value) {
    playing.value = false
  } else if (scrubPause.value && !scrubbing.value) {
    scrubPause.value = false
    playing.value = true
  }
})

// Volume
const volumeBar = ref()
const volumeDragging = ref(false)
const pendingVolume = ref(0)
const volumeBarElement = useMouseInElement(volumeBar)

function stopVolume () {
  volumeDragging.value = false
}

watch([volumeDragging, volumeBarElement.elementX], () => {
  const progress = Math.max(0, Math.min(1, (volumeBarElement.elementX.value) / volumeBarElement.elementWidth.value))
  pendingVolume.value = progress
  if (volumeDragging.value)
    volume.value = pendingVolume.value
})

// Quality controls
const activeQuality: Ref<number | 'original'> = ref(1920)
const qualityOpen = ref(false)
const savedTime = ref(0)
const savedPlaying = ref(true)
const videoSize: Ref<{ width: null | number, height: null | number }> = ref({ width: null, height: null })

function changeQuality (size: number | 'original') {
  if (props.media) {
    setVideoSize()

    savedPlaying.value = playing.value
    playing.value = false
    savedTime.value = currentTime.value

    if (size === 'original') {
      scr.value.src = resolveCid(props.media.cid)
    } else {
      scr.value.src = resolveCid(props.media, size)
    }

    activeQuality.value = size
  }
}

function setVideoSize () {
  const videoElement = video.value as HTMLVideoElement

  let generalPadding = 0

  if (window.innerWidth >= 1400) {
    generalPadding = 256 + 64
  } else if (window.innerWidth >= 800) {
    generalPadding = 80 + 64
  } else {
    generalPadding = 32
  }

  const scaleX = videoElement.videoWidth / (Math.min(1024 - 16, window.innerWidth - 16 - 8 - generalPadding))
  const scaleY = videoElement.videoHeight / (Math.min(1024 - 16, window.innerHeight - 56))
  const scale = Math.max(scaleX, scaleY)

  videoSize.value = {
    width: videoElement.videoWidth / scale,
    height: videoElement.videoHeight / scale,
  }
}

function setOldTime () {
  if (savedTime.value !== 0) {
    currentTime.value = savedTime.value
    playing.value = savedPlaying.value
    savedTime.value = 0
    // videoSize.value = { width: null, height: null }
  }
}

// Fullscreen
const fullScreen = ref(false)

function changeFullScreen() {
  if (fullScreen.value) {
    fullScreen.value = false

    if (document.exitFullscreen) {
      document.exitFullscreen();

    //@ts-ignore
    } else if (document.webkitExitFullscreen) { /* Safari */
      //@ts-ignore
      document.webkitExitFullscreen();
    //@ts-ignore
    } else if (document.msExitFullscreen) { /* IE11 */
      //@ts-ignore
      document.msExitFullscreen();
    }
  } else {
    fullScreen.value = true
    if (wrapper.value.requestFullscreen) {
      wrapper.value.requestFullscreen();
    } else if (wrapper.value.webkitRequestFullscreen) { /* Safari */
      wrapper.value.webkitRequestFullscreen();
    } else if (wrapper.value.msRequestFullscreen) { /* IE11 */
      wrapper.value.msRequestFullscreen();
    }
  }
}


onMounted(() => {
  addEventListener('mouseup', stopScrubbing)
  addEventListener('mouseup', stopVolume)
  addEventListener('resize', setVideoSize)
  muted.value = true
})

onBeforeUnmount(() => {
  removeEventListener('mouseup', stopScrubbing)
  removeEventListener('mouseup', stopVolume)
  addEventListener('resize', setVideoSize)
})

const cid = computed(() => {
  return props.media?.cid
})

watch(cid, () => {
  if (props.previewSrc && props.type) {
    scr.value = {
      src: props.previewSrc,
      type: props.type
    }
  }
})

function compare (a: NftMedia['previews'][0], b: NftMedia['previews'][0]) {
  if (a.size < b.size) {
    return 1
  }
  
  if (a.size > b.size) {
    return -1
  }

  return 0
}

const mediaPreviews = computed(() => {
  return props.media?.previews.sort(compare)
})

</script>

<style scoped lang="scss">

.full-video {
  max-width: min(100%, 1024px);
  max-height: min(1024px, 80vh);
  cursor: none;

  &-fullscreen {
    max-width: 100vw;
    max-height: 100vh;
  }
}

.video-wrapper {
  display: flex;
  max-width: min(100%, 1024px);
  max-height: min(1024px, 80vh);

  // @media screen and (min-width: $sidebar-wide-breakpoint) {
  //   max-width: min(calc(100% - $sidebar-thin - 64px), 800px);
  // }

  // @media screen and (min-width: calc($sidebar-thin-breakpoint + 0px)) and (max-width: calc($sidebar-wide-breakpoint - 1px)) {
  //   max-width: min(calc(100% - $sidebar-wide - 64px), 800px);
  // }

  &-fullscreen {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    max-height: 100vh;
  }
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: $c-overlay-background;
  backdrop-filter: blur(4px);
  border-radius: $radius-ss $radius-ss 0px 0px;
  width: 100%;
  height: 48px;
  opacity: 0.0;
  transition: opacity 150ms ease;

  &-open {
    opacity: 1.0;
  }

  &-scrub {
    position: relative;
    min-height: 4px;
    max-height: 4px;
    height: 4px;
    background-color: $c-media-player-bar;
    border-radius: $radius-ss;
    cursor: pointer;

    &:hover {
      .video-controls-scrub-time-label {
        opacity: 1;
      }
    }

    &-buffer {
      position: absolute;
      min-height: 4px;
      max-height: 4px;
      height: 4px;
      width: 100%;
      background-color: $c-media-player-bar;
      border-radius: $radius-ss;
      pointer-events: none;
      top: 0;
      left: 0;
      transform: translateX(-100%);
    }

    &-progression {
      position: absolute;
      min-height: 4px;
      max-height: 4px;
      height: 4px;
      width: 100%;
      background-color: $c-on-background;
      border-radius: $radius-ss;
      pointer-events: none;
      top: 0;
      left: 0;
      transform: translateX(-100%);
    }

    &-time {
      position: absolute;
      min-height: 4px;
      max-height: 4px;
      height: 4px;
      width: 100%;
      background-color: transparent;
      pointer-events: none;
      top: 0;
      left: 0;
      transform: translateX(-100%);

      &-label {
        opacity: 0;
        position: absolute;
        top: -30px;
        left: 0;
        color: $c-on-background;
        background-color: $c-overlay-background;
        backdrop-filter: blur(4px);
        box-shadow: $shadow-1;
        border-radius: $radius-ss;
        height: 24px;
        padding: 0px 8px;
        transform: translateX(-50%);
        transition: opacity 150ms ease;

        & span {
          font-family: $f-mono;
          font-size: 0.8rem;
        }
      }
    }
  }

  &-functions {
    position: relative;
    display: flex;
    align-items: center;
    padding: 6px;
    gap: 6px;
    height: 32px;

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      margin: 0px;
      border: none;
      width: 32px;
      height: 32px;
      background-color: transparent;
      color: $c-on-background;
      border-radius: $radius-s;
      transition: background-color 150ms ease;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background-color: $c-primary-transparent;
      }
    }

    &-time {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      cursor: default;

      & span {
        font-family: $f-mono;
        font-size: 0.9rem;
      }
    }

    &-volume {
      display: flex;
      gap: 6px;
      align-items: center;

      &:hover {
        .video-controls-functions-volume-bar {
          width: 64px;
          margin-right: 16px;
        }
      }

      &-bar {
        display: flex;
        position: relative;
        min-height: 4px;
        max-height: 4px;
        height: 4px;
        width: 0px;
        background-color: $c-media-player-bar;
        border-radius: $radius-ss;
        overflow: hidden;
        cursor: pointer;
        transition: width 150ms ease;

        &-progression {
          flex-grow: 1;
          position: absolute;
          min-height: 4px;
          max-height: 4px;
          height: 4px;
          width: 100%;
          background-color: $c-on-background;
          border-radius: $radius-ss;
          pointer-events: none;
          top: 0;
          left: 0;
          transform: translateX(-100%);
        }
      }
    }

    &-quality {
      position: absolute;
      display: flex;
      flex-direction: column;
      bottom: 56px;
      right: 8px;
      color: $c-on-background;
      background-color: $c-overlay-background;
      backdrop-filter: blur(4px);
      box-shadow: $shadow-1;
      border-radius: $radius-s;
      padding: 8px;

      &-option {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 8px;
        margin: 0px;
        background-color: transparent;
        border-radius: $radius-ss;
        border: none;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: background-color 150ms ease;
        color: $c-on-background;

        &-active {
          color: $c-secondary;
        }
        
        & span {
          color: inherit;
          font-family: $f-mono;
        }

        &:hover {
          background-color: $c-primary-transparent;
        }
      }
    }
  }
}

</style>
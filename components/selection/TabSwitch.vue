<template>
  <div 
    class="switch"
    ref="boundingBox"
    :style="`width: ${totalWidth}px;`"
  >
    <div 
      class="switch-container"
      :style="`transform: translateX(${- center}px);`"
    >
      <div 
        class="switch-container-tracker"
        :style="`width: ${trackerWidth}px; transform: translateX(${trackerPosition}px);`"
      />

      <button
        v-for="tab in tabs"
        :key="tab.value"
        class="switch-container-button"
        :class="activeTab.value === tab.value ? 'switch-container-button-active' : ''"
        :style="`width: ${buttonWidth(tab.name)}px;`"
        @click="$emit('change', tab)"
      >
        <span>{{ tab.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

type Tab = { name: string, value: any }

const props = defineProps({
  tabs: {
    type: Array as PropType<Array<Tab>>,
    required: true
  },
  activeTab: {
    type: Object as PropType<Tab>,
    required: true
  }
})

defineEmits(['change'])

const boundingBox = ref()
const maxWidth = ref(0)
const buttonPadding = 16
const gap = 4
const boxPadding = 8

function buttonWidth (text: string) {
  const textLength = text.length * 8

  return textLength + buttonPadding
}

function handleResize () {
  maxWidth.value = boundingBox.value.clientWidth
}

const position = computed(() => {
  return props.tabs.findIndex((tab) => tab.value === props.activeTab.value)
})

const totalWidth = computed(() => {
  const padding = (props.tabs.length - 1) * gap
  let buttons = 0

  for (let i = 0; i < props.tabs.length; i++) {
    const text = props.tabs[i].name
    const textLength = text.length * 8
    buttons += textLength + buttonPadding 
  }

  return padding + buttons
})

const trackerWidth = computed(() => {
  const text = props.tabs[position.value]
  const textLength = text.name.length * 8

  return textLength + buttonPadding
})

const trackerPosition = computed(() => {
  if (position.value > 0) {
    const padding = position.value * gap
    let buttons = 0

    for (let i = 0; i < position.value; i++) {
      const text = props.tabs[i]
      const textLength = text.name.length * 8
      buttons += textLength + buttonPadding
    }

    return padding + buttons
  } else {
    return 0
  }
})

const center = computed(() => {
  if (totalWidth.value > maxWidth.value) {
    const maxRight = totalWidth.value - (maxWidth.value / 2)
    const minLeft = maxWidth.value / 2

    if (trackerPosition.value + (trackerWidth.value / 2) < minLeft) {
      return 0
    } else if (trackerPosition.value + (trackerWidth.value / 2) > maxRight) {
      return totalWidth.value - maxWidth.value + boxPadding
    } else {
      return (trackerPosition.value + trackerWidth.value / 2) - maxWidth.value / 2
    }

  } else {
    return 0
  }
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

</script>

<style scoped lang="scss">

.switch {
  display: flex;
  max-width: 100%;
  border-radius: $radius-m;
  overflow: hidden;
  padding: 4px;
  background-color: $c-primary-transparent;

  &-container {
    display: flex;
    position: relative;
    gap: 4px;
    transition: transform 200ms ease;

    &-tracker {
      content: "";
      position: absolute;
      height: 40px;
      border-radius: $radius-s;
      background-color: $c-primary;
      transition: transform 200ms ease, width 100ms ease;
      z-index: 1;
    }

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      margin: 0px;
      padding: 0px 12px;
      height: 40px;
      border-radius: $radius-s;
      font-weight: 500;
      font-size: 1rem;
      transition: background-color 150ms ease;
      border: none;
      background-color: transparent;
      text-decoration: none;
      cursor: pointer;
      z-index: 2;

      &:hover {
        background-color: $c-primary-transparent;
      }

      & span {
        color: $c-on-background;
        transition: color 150ms ease;
      }

      &-active {
        color: $c-on-primary;
        
        &:hover {
          background-color: transparent;
        }

        & span {
          color: $c-on-primary;
        }
      }
    }
  }
}

</style>
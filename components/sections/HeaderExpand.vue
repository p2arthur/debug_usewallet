<template>
  <div class="expand-wrapper">
    <div class="expand-header" @click="expaned = !expaned">
      <div class="expand-header-icon">
        <slot name="icon"></slot>
      </div>

      <div class="expand-header-title">
        <h4>{{ title }}</h4>
      </div>

      <div class="expand-header-close">
        <button 
          class="expand-header-close-button" 
          @click="expaned = !expaned"
        >
          <IconsExpandMore :style="`transform: rotate(${expaned ? -180 : 0}deg);`" />
        </button>
      </div>

      <div class="expand-header-line"></div>
    </div>

    <TransitionsExpand>
      <div class="expand-content" v-if="expaned">
        <slot name="content"></slot>
      </div>
    </TransitionsExpand>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: "Title"
  },
  open: {
    type: Boolean,
    default: false,
  }
})

const expaned = ref(false)

onMounted(() => {
  expaned.value = props.open
})

</script>

<style lang="scss">

.expand {

  &-wrapper {
    display: flex;
    flex-direction: column;
    max-width: min(100%, 800px);
  }

  &-header {
    position: relative;
    display: flex;
    align-items: center;
    background-color: $c-primary-transparent;
    color: $c-on-primary-transparent;
    border-radius: $radius-s $radius-s 0px 0px;
    height: 36px;
    gap: 8px;
    cursor: pointer;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;

      & svg {
        min-height: 24px;
        min-width: 24px;
      }
    }

    &-title {
      display: flex;
      align-items: center;
      flex-grow: 1;

      & h4 {
        margin: 0px;
        padding: 0px;
        font-size: 1.1rem;
        font-weight: 600;
      }
    }

    &-close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      pointer-events: none;

      &-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        width: 36px;
        height: 36px;
        cursor: pointer;
        color: $c-on-background;

        & svg {
          transition: transform 150ms ease;
          min-height: 28px;
          min-width: 28px;
        }
      }
    }

    &-line {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: $c-on-primary-transparent;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
  }
}

</style>
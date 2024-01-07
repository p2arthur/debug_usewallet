<template>
  <div class="notification">
    <div class="notification-bubbel" :class="`${inline ? 'notification-bubbel-inline' : 'notification-bubbel-top'}`" v-if="count > 0">
      <span class="notification-bubbel-count">{{ formatter.format(count) }}</span>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">

defineProps({
  count: {
    required: false,
    type: Number,
    default: 0,
  },
  inline: {
    required: false,
    type: Boolean,
    default: false,
  }
})

const formatter = Intl.NumberFormat('en', { notation: 'compact' })

</script>

<style scoped lang="scss">

.notification {
  flex-grow: 1;
  display: flex;
  position: relative;

  &-bubbel {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 10px;
    height: 10px;     
    padding: 6px;
    background-color: $c-secondary;
    border-radius: 11px;
    cursor: default;
    pointer-events: none;

    &-count {
      font-size: 0.8rem;
      font-weight: 600;
      color: $c-on-secondary;
    }

    &-top {
      right: 0;
      top: 0;
    }

    &-inline {
      right: 0;
      top: calc(50% - 11px);
    }
  }
}

</style>
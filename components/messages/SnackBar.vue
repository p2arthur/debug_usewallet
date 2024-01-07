<template>
  <div class="snack-bar">
    <div class="snack-bar-icon" :class="`${message.type.toLowerCase()}`">
      <IconsInfo />
    </div>

    <div class="snack-bar-content">
      <span>{{ message.details }}</span>
    </div>

    <div class="spacer"></div>
    
    <button class="snack-bar-remove" @click="$emit('close', message)">
      <IconsRemove />
    </button>
  </div>
</template>

<script setup lang="ts">

import type { PropType } from 'vue'
import type { Message } from '@/stores/messages'

defineProps({
  message: {
    required: true,
    type: Object as PropType<Message>
  }
})

defineEmits<{
  (event: 'close', message: Message): void
}>()

</script>

<style scoped lang="scss">

.snack-bar {
  display: flex;
  align-items: center;
  box-shadow: $shadow-2;
  background-color: $c-background-1;
  border-radius: $radius-m;
  min-height: 32px;
  min-width: min(480px - 8px, 100% - 8px);
  max-width: min(480px - 8px, 100% - 8px);
  padding: 4px;
  pointer-events: all;

  &-icon {
    display: flex;
    min-width: 32px;
    justify-content: center;
    align-items: center;
  }
  
  &-content {
    display: flex;
    align-items: center;
    color: $c-on-background;
    padding: 0px 8px;

    & span {
      font-size: 0.95rem;
      color: inherit;
    }
  }

  &-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 0px;
    padding: 4px;
    border-radius: $radius-s;
    background-color: transparent;
    color: $c-on-background;
    cursor: pointer;
    transition: background-color 150ms ease, color 150ms ease;

    &:hover {
      color: $c-secondary;
      background-color: $c-background-secondary;
    }

    & svg {
      height: 18px !important;
      width: 18px !important;
    }
  }
}

</style>
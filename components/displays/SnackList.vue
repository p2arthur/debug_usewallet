<template>
  <div class="snack-list">
    <MessagesSnackBar v-for="(message, i) in messageStore.messages" :key="i" :message="message" @close="close" />
  </div>
</template>

<script setup lang="ts">

import type { Message } from '@/stores/messages'

const messageStore = useMessageStore()

function close(message: Message) {
  messageStore.removeMessage(message.id)
}

</script>

<style scoped lang="scss">
.snack-list {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  z-index: 94;
  pointer-events: none;

  @media screen and (max-width: calc($headerbar-thin-breakpoint - 1px)) {
    left: 0;
    top: 0;
    min-width: calc(100vw - 32px);
    max-width: calc(100vw - 32px);
  }

  @media screen and (min-width: $headerbar-thin-breakpoint) and (max-width: calc($headerbar-wide-breakpoint - 1px)) {
    left: $headerbar-thin;
    bottom: 0;
    min-width: calc(100vw - 32px - $headerbar-thin);
    max-width: calc(100vw - 32px - $headerbar-thin);
  }

  @media screen and (min-width: $headerbar-wide-breakpoint) {
    left: $headerbar-wide;
    bottom: 0;
    min-width: calc(100vw - 32px - $headerbar-wide);
    max-width: calc(100vw - 32px - $headerbar-wide);
  }
}
</style>
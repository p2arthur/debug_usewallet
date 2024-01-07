<template>
  <button class="txn-item">
    <div class="txn-item-leader">
      <IconsMint v-if="decodedTxn.type === 'acfg'" />
      <IconsArrowOutward v-else-if="decodedTxn.type === 'pay' || decodedTxn.type === 'axfer'" />
      <IconsTerminal v-else-if="decodedTxn.type === 'appl'" />
    </div>

    <div class="txn-item-info">
      <span class="txn-item-info-description">{{ txn.description }}</span>
      <span class="txn-item-info-id">{{ txn.txID }}</span>
    </div>

    <div class="txn-item-trailing">
      <IconsRadioChecked v-if="signed" />
      <IconsRadioUnchecked v-else />
    </div>
  </button>
</template>

<script setup lang="ts">

import type { PropType } from 'vue'
import type { UsignedTxn } from '@/graphql/client'

const { $algosdk } = useNuxtApp()

const props = defineProps({
  txn: {
    type: Object as PropType<UsignedTxn>,
    required: true
  },
  signed: {
    type: Boolean,
    required: true
  }
})

const decodedTxn = computed(() => {
  return $algosdk.decodeUnsignedTransaction(props.txn.blob)
})

</script>

<style scoped lang="scss">

.txn-item {
  display: flex;
  align-items: center;
  height: 48px;
  background-color: transparent;
  border: none;
  border-radius: $radius-m;
  padding: 6px;
  max-width: 100%;
  cursor: pointer;
  transition: background-color 150ms ease;
  gap: 12px;
  color: $c-on-background;

  &:hover {
    background-color: $c-hover-on-background;
  }

  &-leader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    min-height: 36px;
    background-color: $c-primary-transparent;
    // outline: 2px solid $c-on-background;
    border-radius: $radius-s;

    & svg {
      color: $c-on-primary-transparent;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;

    &-description {
      font-size: 1rem;
      font-weight: 500;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: inherit;
      text-align: left;
    }

    &-id {
      font-size: 0.9rem;
      font-weight: 400;
      font-family: $f-mono;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: inherit;
    }
  }

  &-trailing {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    min-height: 36px;

    & svg {
      min-width: 28px;
      min-height: 28px;
    }
  }
}

</style>
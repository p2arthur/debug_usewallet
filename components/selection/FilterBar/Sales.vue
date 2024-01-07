<template>
  <SelectionFilterBar v-model:combine="filter.combine" @change="$emit('change')">
    <template v-slot:active>
      <div class="active-option" v-for="currency in currencies" :key="currency.symbol">
        <IconsCurrencyByTag :tag="currency.symbol" />
        <span>{{ currency.symbol }}</span>
        <button @click="removeCurrency(currency.apiKey as AsaCode)">
          <IconsRemove />
        </button>
      </div>

      <div class="active-option" v-for="saletype in activeSaleTypes" :key="saletype.key">
        <span>{{ saletype.name }}</span>
        <button @click="removeSaletypes(saletype.key)">
          <IconsRemove />
        </button>
      </div>
    </template>

    <template v-slot:options>
      <div class="option-section">
        <span class="option-section-title">Currency</span>

        <div class="option-section-list">
          <button
            v-for="currency in asaList" 
            :key="currency.symbol"
            class="option-section-list-button"
            :class="filter.currency?.includes(currency.apiKey as AsaCode) ? 'option-section-list-button-active' : ''"
            @click="updateCurrency(currency.apiKey as AsaCode)"
          >
            <IconsCurrencyByTag :tag="currency.symbol" />
            <span>{{ currency.symbol }}</span>
          </button>
        </div>
      </div>

      <div class="option-section">
        <span class="option-section-title">Sale type</span>

        <div class="option-section-list">
          <button 
            v-for="saletype in saleTypes" :key="saletype.key"
            class="option-section-list-button"
            :class="filter.saleType?.includes(saletype.key) ? 'option-section-list-button-active' : ''"
            @click="updateSaletypes(saletype.key)"
          >
            <span>{{ saletype.name }}</span>
          </button>
        </div>
      </div>
    </template>
  </SelectionFilterBar>
</template>

<script setup lang="ts">

import { ASACode, asaList } from "@/functions/prices/currencyLists"
import { SaleFilter, AsaCode, SaleType } from "@/graphql/client"

const props = defineProps({
  filter: {
    type: Object as PropType<SaleFilter>,
    required: true
  }
})

const emits = defineEmits(["update:filter","change"])

const currencies = computed(() => {
  return asaList.filter((asa) => props.filter.currency?.includes(asa.apiKey as AsaCode))
})

const activeSaleTypes = computed(() => {
  return saleTypes.filter((type) => props.filter.saleType?.includes(type.key))
})

const saleTypes: Array<{ name: string, key: SaleType }> = [
  { name: "Fixed Bid V2", key: SaleType.FixedBid },
  { name: "Auction V2", key: SaleType.Auction },
  { name: "Offer", key: SaleType.Offer },
  { name: "Fixed Bid V1", key: SaleType.FixedBidV1 },
  { name: "Auction V1", key: SaleType.AuctionV1 },
]

function removeCurrency(apiKey: AsaCode) {
  
  if (!props.filter.currency) {
    return
  }

  const index = props.filter.currency.findIndex((c) => c === apiKey)

  if (index >= 0) {
    props.filter.currency.splice(index, 1)
    emits('update:filter', props.filter)
    emits('change')
  }
}

function updateCurrency(apiKey: AsaCode) {
  if (!props.filter.currency) {
    return
  }

  const index = props.filter.currency.findIndex((c) => c === apiKey)

  if (index === -1) {
    props.filter.currency.push(apiKey)
  } else {
    props.filter.currency.splice(index, 1)
  }
    
  emits('update:filter', props.filter)
  emits('change')
}

function removeSaletypes(saletype: SaleType) {
  if (!props.filter.saleType) {
    return
  }

  const index = props.filter.saleType.findIndex((c) => c === saletype)

  if (index >= 0) {
    props.filter.saleType.splice(index, 1)
    emits('update:filter', props.filter)
    emits('change')
  }
}

function updateSaletypes(saletype: SaleType) {
  if (!props.filter.saleType) {
    return
  }

  const index = props.filter.saleType.findIndex((c) => c === saletype)

  if (index === -1) {
    props.filter.saleType.push(saletype)
  } else {
    props.filter.saleType.splice(index, 1)
  }
    
  emits('update:filter', props.filter)
  emits('change')
}

</script>

<style scoped lang="scss">

.option-section {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &-title {
    font-size: 1rem;
    font-weight: 500;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      background-color: $c-primary;
      color: $c-on-primary;
      height: 32px;
      padding: 4px 6px;
      border-radius: $radius-s;
      border: none;
      background-color: transparent;
      color: $c-primary;
      transition: color 150ms ease, background-color 150ms ease;
      outline: 2px solid $c-primary;
      cursor: pointer;

      & span {
        color: $c-on-background;
        font-weight: 500;
        font-size: 0.9rem;
      }

      &:hover {
        background-color: $c-primary-transparent;
      }

      & svg {
        height: 20px !important;
        width: 20px !important;
      }

      &-active {
        background-color: $c-primary;
        color: $c-on-primary;

        &:hover {
          background-color: $c-primary;
        }

        & span {
          color: $c-on-primary;
        }
      }
    }
  }
}

.active-option {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: $c-primary;
  color: $c-on-primary;
  height: 32px;
  padding: 4px 6px;
  border-radius: $radius-s;

  & span {
    color: $c-on-primary;
    font-weight: 500;
    font-size: 0.9rem;
  }

  & svg {
    height: 20px !important;
    width: 20px !important;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 20px;
    width: 20px;
    margin: 0px;
    padding: 0px;
    background-color: transparent;
    color: $c-on-primary;
    transition: color 150ms ease;
    cursor: pointer;

    &:hover {
      color: $c-secondary;
    }

    & svg {

    }
  }
}

</style>
<template>
  <ModalsBaseModal>
    <div class="deposit">
      <h1>Change price of a listing</h1>

      <p>Change the unit price of a number of listings. All listed tokens in the contract will be available for the newly selected price.</p>

      <div class="deposit-form">
        <FormsTextInput 
          label="Price of each token"
          type="number"
          inputmode="numeric"
          :min="minPrice"
          :step="minPrice"
          :max="maxPrice"
          v-model:value="form.price"
          @input="valid.price.valid = true" 
          :validation="valid.price"
          @focusout="validate()"
        />
      </div>

      <div class="deposit-actions">
        <ButtonsOutlinedButton @click="$emit('close')">
          <span>Cancel</span>
        </ButtonsOutlinedButton>
        
        <ButtonsFilledButton @click="submit()" :disabled="!formValid">
          <span>{{ listings.length > 1 ? `Generate ${listings.length} transactions` : `Generate transaction` }}</span>
        </ButtonsFilledButton>
      </div>
    </div>
  </ModalsBaseModal>
</template>

<script setup lang="ts">

import type { GetFixedBidsByArtistQuery } from '@/graphql/client'
import type { Currency } from '@/functions/prices/currencyLists'
import { asaList } from '@/functions/prices/currencyLists'

const props = defineProps({
  listings: {
    type: Array as PropType<GetFixedBidsByArtistQuery['getFixedBidsByArtist']['listings']>,
    required: true
  }
})

const emit = defineEmits(['close'])

const transactionStore = useTransactionStore()
const fixedBidStore = useFixedBidStore()

const form = ref({
  price: asaList.find((asa) => asa.symbol === props.listings[0].currency)?.minPrice || 1,
  currency: asaList.find((asa) => asa.symbol === props.listings[0].currency)?.symbol || "ALGO"
})

const formValid = ref(true)
const valid = useValidationForm(form.value)

function validate () {

  form.value.price = Number(form.value.price)

  formValid.value = true

  if (form.value.price < minPrice.value) {
    valid.value.price = {
      valid: false,
      warning: `The minimum allowed price in ${form.value.currency} is ${minPrice.value}.`
    }
    formValid.value = false
  }

  if (form.value.price > maxPrice.value) {
    valid.value.price = {
      valid: false,
      warning: `The maximum allowed price in ${form.value.currency} is ${maxPrice.value}.`
    }
    formValid.value = false
  }
}

const selectedCurrency: Ref<Currency> = ref(asaList.find((asa) => asa.symbol === props.listings[0].currency) || asaList[0])

const step = computed(() => {
  // minimum step is 1000x the base unit to allow for a 0.1% granularity in payouts
  return 1 / ((10 ** selectedCurrency.value.decimals) / 1000)
})

const minPrice = computed(() => {
  // min price is set to ~1 USD
  return Math.max(step.value, selectedCurrency.value.minPrice)
})

const maxPrice = computed(() => {
  // max price is 1000000x the min price, for a max price of ~1M USD
  return minPrice.value * 1000000
})

function submit () {

  const settings = props.listings.map((listing) => {
    return {
      appId: listing.appId,
      price: form.value.price
    }
  })

  emit('close')

  transactionStore.getTxns = fixedBidStore.getUpdatePrice(settings)
  transactionStore.submitTxns = fixedBidStore.updatePrice
  transactionStore.open = true
}



</script>

<style scoped lang="scss">

.deposit {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 32px);

  & h1 {
    text-align: center;
    margin: 0px;
  }

  & p {
    max-width: 400px;
    font-weight: 500;
    font-size: 1rem;
    margin: 0px;
  }

  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px 0px;
    gap: 24px;
    max-width: 400px;

    &-select {
      display: flex;
      flex-direction: column;
      width: 100%;

      &-title {
        margin-bottom: 5px;
        font-size: 1.1rem;
        font-weight: 500;
      }
    }
  }

  &-actions {
    width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
  }
}

</style>
<template>
  <ModalsBaseModal>
    <div class="fixed-bid">
      <h1>Setup Fixed-bid listing</h1>

      <p>Set up your fixed bid listings. These settings will be applied to all NFTs in the selection.</p>

      <div class="fixed-bid-form">

        <div class="fixed-bid-form-select">
          <span class="fixed-bid-form-select-title">Payment currency</span>
          <FormsCurrencySelection 
            :selected="selectedCurrency"
            :options="asaList"
            placeholder="Select a collection"
            @change="changeCurrency"
          />
        </div>

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

        <FormsTextInput 
          label="Number of tokens to list"
          type="number"
          inputmode="numeric"
          :min="1"
          :step="1"
          :max="maxTokens"
          v-model:value="form.nTokens"
          @input="valid.nTokens.valid = true" 
          :validation="valid.nTokens"
          @focusout="validate()"
        />
      </div>

      <div class="fixed-bid-actions">
        <ButtonsOutlinedButton @click="$emit('close')">
          <span>Cancel</span>
        </ButtonsOutlinedButton>
        
        <ButtonsFilledButton @click="deployListings()" :disabled="!formValid">
          <span>{{ nfts.length > 1 ? `Generate ${nfts.length} listings` : `Generate listing` }}</span>
        </ButtonsFilledButton>
      </div>
    </div>
  </ModalsBaseModal>
</template>

<script setup lang="ts">

import type { CreatedNft, DeployFixedBidParams } from '@/graphql/client'
import type { Currency } from '@/functions/prices/currencyLists'
import { asaList } from '@/functions/prices/currencyLists'
 
const props = defineProps({
  nfts: {
    type: Array as PropType<Array<CreatedNft>>,
    required: true
  }
})

const emit = defineEmits(['close'])

const transactionStore = useTransactionStore()
const fixedBidStore = useFixedBidStore()
const accountStore = useAccountStore()

const form = ref({
  currency: "ALGO",
  price: 1,
  nTokens: 1
})

const formValid = ref(true)
const valid = useValidationForm(form.value)

function validate () {

  form.value.price = Number(form.value.price)
  form.value.nTokens = Number(form.value.nTokens)

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

  if (form.value.nTokens > maxTokens.value) {
    valid.value.nTokens = {
      valid: false,
      warning: `You need to hold more tokens from some of the selected NFTs to list this many tokens. The maximum token amount from the selection is ${maxTokens.value}.`
    }
    formValid.value = false
  }

  if (form.value.nTokens < 1) {
    valid.value.nTokens = {
      valid: false,
      warning: `Please list at least one token in the contract.`
    }
    formValid.value = false
  }
}

const selectedCurrency: Ref<Currency> = ref(asaList[0])

function changeCurrency (option: Currency) {
  selectedCurrency.value = option
  form.value.currency = option.apiKey
  form.value.price = option.minPrice
}

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

const maxTokens = computed(() => {
  const balances = props.nfts.map((nft) => nft.balance)

  if (balances && balances.length > 0) {
    return Math.min(...balances)
  } else {
    return 1
  }
})

function deployListings () {
  
  const settings = props.nfts.map((nft) => {

    let sellerAddress

    if (accountStore.wallet.active.address === nft.nft.artist.address) {
      sellerAddress = nft.nft.token.mintAddress
    } else {
      sellerAddress = accountStore.wallet.active.address
    }

    return {
      currency: form.value.currency,
      nftIndex: nft.nft.token.index,
      payoutAddress: sellerAddress,
      sellerAddress: sellerAddress,
      price: form.value.price
    } as DeployFixedBidParams
  })

  emit('close')
  fixedBidStore.setupForm = form.value
  transactionStore.getTxns = fixedBidStore.getDeploy(settings)
  transactionStore.submitTxns = fixedBidStore.deploy
  transactionStore.open = true
}

</script>

<style lang="scss">

.fixed-bid {
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
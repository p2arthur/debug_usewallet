<template>
  <ModalsBaseModal>
    <div class="deposit">
      <h1>Extract Fixed-bid listing</h1>

      <p>Extract a number of tokens from your fixed bid listing contract back into your acount.</p>

      <div class="deposit-form">
        <FormsTextInput 
          label="Number of tokens to extract"
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
  nTokens: 1
})

const formValid = ref(true)
const valid = useValidationForm(form.value)

function validate () {

  form.value.nTokens = Number(form.value.nTokens)

  formValid.value = true
  
  if (form.value.nTokens > maxTokens.value) {
    valid.value.nTokens = {
      valid: false,
      warning: `The contract needs to hold more tokens from some of the selected listings to extract this many tokens. The maximum token amount from the selection is ${maxTokens.value}.`
    }
    formValid.value = false
  }

  if (form.value.nTokens < 1) {
    valid.value.nTokens = {
      valid: false,
      warning: `Please extract at least one token from the contract.`
    }
    formValid.value = false
  }
}

const maxTokens = computed(() => {
  const balances = props.listings.map((listing) => listing.status.balance)

  if (balances && balances.length > 0) {
    return Math.min(...balances)
  } else {
    return 1
  }
})

function submit () {

  const settings = props.listings.map((listing) => {
    return {
      appId: listing.appId,
      nNFTs: form.value.nTokens
    }
  })

  emit('close')

  transactionStore.getTxns = fixedBidStore.getExtract(settings)
  transactionStore.submitTxns = fixedBidStore.extract
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
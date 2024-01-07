<template>
  <ModalsBaseModal>
    <div class="deposit">
      <h1>Deposit Fixed-bid listing</h1>

      <p>Deposit a number of tokens from your account into the existing fixed bid listing contract.</p>

      <div class="deposit-form">
        <FormsTextInput 
          label="Number of tokens to deposit"
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

}

const maxTokens = computed(() => {
  const balances = props.listings.map((listing) => listing.nft?.token.editions || 0)

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

  transactionStore.getTxns = fixedBidStore.getDeposit(settings)
  transactionStore.submitTxns = fixedBidStore.deposit
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
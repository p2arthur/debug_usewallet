<template>
  <ModalsBaseModal>
    <div class="txns">
      <h1>Sign transactions</h1>

      <p>Sign each of the following transactions and send them to complete the action. We will submit these to the
        Algorand network.</p>

      <TransitionsExpand>
        <div class="txns-section" v-if="transactionStore.txns && !transactionStore.loading">
          <h2>Transactions:</h2>

          <div class="txns-section-list">
            <template v-for="(txns, index) in transactionStore.txns">
              <span class="txns-section-list-group">Group: {{ index + 1 }}</span>

              <ListItemsTransaction v-for="(txn, index) in txns" :txn="txn" :key="index"
                :signed="transactionStore.signed" />
            </template>
          </div>
        </div>
      </TransitionsExpand>

      <!-- <div class="txns-section" v-if="transactionStore.txns && !transactionStore.loading">
        <h2>Costs:</h2>

        <div class="txns-section-list">
          <ListItemsTransactionCost />
        </div>
      </div> -->

      <div class="txns-section" v-if="!transactionStore.txns || transactionStore.loading">
        <div class="txns-section-loading">
          <IconsNoderoomLoading />
          <span>{{ transactionStore.signed ? 'Submitting transactions to the network' : 'Preparing transactions' }}</span>
        </div>
      </div>

      <div class="txns-actions">
        <ButtonsOutlinedButton @click="transactionStore.clear()">
          <span>Cancel</span>
        </ButtonsOutlinedButton>

        <ButtonsFilledButton @click="submit" :disabled="!transactionStore.txns || transactionStore.loading">
          <span>{{ transactionStore.signed ? 'Submit' : 'Sign transactions' }}</span>
        </ButtonsFilledButton>
      </div>
    </div>
  </ModalsBaseModal>
</template>

<script setup lang="ts">

const transactionStore = useTransactionStore()

console.log('Transactions On')

onMounted(() => {
  transactionStore.resolveGetTxns()
})

function submit(e: Event) {
  if (transactionStore.signed) {
    transactionStore.resolveSubmit()
  } else {
    transactionStore.signTxns()
  }
}

const getTxns = computed(() => {
  return transactionStore.getTxns
})

watch(getTxns, () => {
  transactionStore.resolveGetTxns()
})

</script>

<style scoped lang="scss">
.txns {
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

  &-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 8px;

    & h2 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0px;
    }

    &-list {
      display: flex;
      flex-direction: column;
      // max-height: 512px;
      // border-radius: $radius-m;
      // overflow: auto;
      // @include scrolbar-right($c-scroll-on-background, $c-background-1);

      &-group {
        font-size: 0.95rem;
        font-weight: 500;
        margin-bottom: 2px;
      }
    }

    &-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;

      & svg {
        min-height: 96px !important;
        min-width: 96px !important;
        color: $c-on-background;
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
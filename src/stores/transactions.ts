import {
  UsignedTxn,
  SignedTxn,
} from '@/graphql/client'

interface ClearModal {
  open: boolean
  signed: boolean
  loading: boolean
  getTxns: null | Promise<Array<Array<UsignedTxn>>>
  signedTxns: null | Array<Array<SignedTxn>>
  submitTxns: null | SubmitTxns
  txns: null | Array<Array<UsignedTxn>>
}

type SubmitTxns = (txns: Array<Array<SignedTxn>>) => Promise<Partial<ClearModal> | void>

const nestedStores = {
  messageStore: useMessageStore,
  accountStore: useAccountStore
}

export const useTransactionStore = defineStore('transaction', {
  state: () => {
    console.log('transaction store')
    return useNestedStores(nestedStores, {
      open: false,
      signed: false,
      loading: false,
      getTxns: null as null | Promise<Array<Array<UsignedTxn>>>,
      submitTxns: null as null | SubmitTxns,
      txns: null as null | Array<Array<UsignedTxn>>,
      signedTxns: null as null | Array<Array<SignedTxn>>
    })
  },

  hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async resolveGetTxns() {
      try {
        this.txns = await this.getTxns
      } catch (err) {
        this.open = false
      }
    },

    async signTxns() {
      if (!this.txns) {
        return this.messageStore.pushSnackError("Transactions are not loaded yet.")
      }

      try {
        this.signedTxns = await this.accountStore.wallet.signTransactions(JSON.parse(JSON.stringify(this.txns)))
        this.signed = true
        this.resolveSubmit()
      } catch (err) {
        this.messageStore.pushSnackError(`${err}`)
      }
    },

    async resolveSubmit() {

      if (!this.submitTxns) {
        return this.messageStore.pushSnackError('Submit function is not set.')
      }

      if (!this.signedTxns) {
        return this.messageStore.pushSnackError("Transactions are not loaded yet.")
      }

      try {
        this.loading = true
        const response = await this.submitTxns(this.signedTxns)

        if (response) {
          this.clear(response)
        } else {
          this.clear()
        }
      } catch (err) {
        this.loading = false
      }
    },

    clear(clearResponse?: Partial<ClearModal>) {

      if (clearResponse) {
        this.open = clearResponse.open || false
        this.signed = clearResponse.signed || false
        this.loading = clearResponse.loading || false
        this.getTxns = clearResponse.getTxns || null
        this.signedTxns = clearResponse.signedTxns || null
        this.submitTxns = clearResponse.submitTxns || null
        this.txns = clearResponse.txns || null
      } else {
        this.open = false
        this.signed = false
        this.loading = false
        this.getTxns = null
        this.signedTxns = null
        this.submitTxns = null
        this.txns = null
      }
    }
  },

  getters: {
  },
})
import { 
  dartClient,
  DestroyV1ListingParams,
  GetDestroyV1ListingParamsDocument,
  GetV1ListingsByAddressDocument,
  SubmitDestroyV1ListingDocument,
  SignedTxn,
  V1Listing
} from '@/graphql/client'

const nestedStores = {
  messageStore: useMessageStore,
  accountStore: useAccountStore,
  transactionStore: useTransactionStore
}

export const useV1ListingsStore = defineStore("v1Listings",{
  state: () => {
    return useNestedStores(nestedStores, {
      listings: [] as Array<V1Listing>
    })
  },

  hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async getListings () {

      if (!this.accountStore.activeWallet) {
        return
      }

      const { data, error } = await dartClient.query(GetV1ListingsByAddressDocument,{ 
        address: this.accountStore.activeWallet.address
      }).toPromise()

      if (error) {
        this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        throw new Error(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getV1ListingsByAddress) {
        this.listings = data.getV1ListingsByAddress
      } else {
        throw new Error('Failed to extract transaction.')
      }
    },

    async destroyAllListings () {

      const batch = this.listings.slice(0, 10)
      const settings = batch.map(({ listingAddress }) => {
        return {
          listingAddress
        }
      })

      this.transactionStore.getTxns = this.getDestory(settings)
      this.transactionStore.submitTxns = this.destroy
      this.transactionStore.open = true
    },

    async getDestory (settings: Array<DestroyV1ListingParams>) {

      const { data, error } = await dartClient.query(GetDestroyV1ListingParamsDocument,{ settings }).toPromise()

      if (error) {
        this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        throw new Error(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getDestroyV1ListingParams) {
        return data.getDestroyV1ListingParams
      } else {
        throw new Error('Failed to extract transaction.')
      }
    },

    async destroy (signedTxns: Array<Array<SignedTxn>>) {

      const { data, error } = await dartClient.mutation(SubmitDestroyV1ListingDocument, {
        txns: signedTxns
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.submitDestroyV1Listing){

        if (data.submitDestroyV1Listing.partialErrors && data.submitDestroyV1Listing.partialErrors.length > 0) {
          for (let i = 0; i <  data.submitDestroyV1Listing.partialErrors.length; i++) {
            this.messageStore.pushSnackError(data.submitDestroyV1Listing.partialErrors[i])
          }
        } else {
          this.messageStore.pushSnackSucces('Transactions were successfully submitted to the network.')
        }

        for (let i = 0; i < data.submitDestroyV1Listing.listings.length; i++) {

          const listing = data.submitDestroyV1Listing.listings[i]

          const index = this.listings.findIndex((l) => l.listingAddress === listing.listingAddress)

          if (index >= 0) {
            this.listings.splice(index, 1)
          }
        }

        if (this.listings.length > 0) {
          const batch = this.listings.slice(0, 10)
          const settings = batch.map(({ listingAddress }) => {
            return {
              listingAddress
            }
          })

          return {
            open: true,
            getTxns: this.getDestory(settings),
            submitTxns: this.destroy,
          }
        }
      }
    }
  },

  getters: {
    
  }
})
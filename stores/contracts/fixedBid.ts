import { 
  dartClient,
  GetDeployFixedBidParamsDocument,
  SubmitDeployFixedBidDocument,
  GetSetupFixedBidParamsDocument,
  SubmitSetupFixedBidDocument,
  GetDepositFixedBidParamsDocument,
  SubmitDepositFixedBidDocument,
  GetExtractFixedBidParamsDocument,
  SubmitExtractFixedBidDocument,
  GetUpdatePriceFixedBidParamsDocument,
  SubmitUpdatePriceFixedBidDocument,
  GetDestroyFixedBidParamsDocument,
  SubmitDestroyFixedBidDocument,
  GetBuyFixedBidParamsDocument,
  SubmitBuyFixedBidDocument,
  SignedTxn,
  DeployFixedBidParams,
  SetupFixedBidParams,
  DepositFixedBidParams,
  ExtractFixedBidParams,
  UpdatePriceFixedBidParams,
  DestroyFixedBidParams,
  BuyFixedBidParams
} from '@/graphql/client'

const nestedStores = {
  messageStore: useMessageStore,
  accountStore: useAccountStore,
  transactionStore: useTransactionStore,
  createdNFTsStore: useCreatedNFTsStore,
  collectedNFTsStore: useCollectedNFTsStore,
  NFTStore: useNFTStore
}

export const useFixedBidStore = defineStore('fixedBid', {
  state: () => {
    return useNestedStores(nestedStores, {
      setupForm: {
        currency: "ALGO",
        price: 1,
        nTokens: 1,
      }
    })
  },

  hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async getDeploy (settings: Array<DeployFixedBidParams>) {
      const { data, error } = await dartClient.query(GetDeployFixedBidParamsDocument,{ settings }).toPromise()

      if (error) {
        this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        throw new Error(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getDeployFixedBidParams) {
        return data.getDeployFixedBidParams
      } else {
        throw new Error('Failed to extract transaction.')
      }
    },

    async deploy (signedTxns: Array<Array<SignedTxn>>) {

      const { data, error } = await dartClient.mutation(SubmitDeployFixedBidDocument, {
        txns: signedTxns
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.submitDeployFixedBid){
        if (data.submitDeployFixedBid.partialErrors && data.submitDeployFixedBid.partialErrors.length > 0) {
          for (let i = 0; i <  data.submitDeployFixedBid.partialErrors.length; i++) {
            this.messageStore.pushSnackError(data.submitDeployFixedBid.partialErrors[i])
          }
        } else {
          this.messageStore.pushSnackSucces('Transactions were successfully submitted to the network.')
        }

        this.createdNFTsStore.updateStoredFixedBids(data.submitDeployFixedBid.listings)
        this.collectedNFTsStore.updateStoredFixedBids(data.submitDeployFixedBid.listings)

        const setupSettings = data.submitDeployFixedBid.listings.map((listing) => {
          return {
            appId: listing.appId,
            nNFTs: this.setupForm.nTokens
          }
        })

        return {
          open: true,
          getTxns: this.getSetup(setupSettings),
          submitTxns: this.setup,
        }
      }
    },

    async getSetup (settings: Array<SetupFixedBidParams>) {
      const { data, error } = await dartClient.query(GetSetupFixedBidParamsDocument,{ settings }).toPromise()

      if (error) {
        this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        throw new Error(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getSetupFixedBidParams) {
        return data.getSetupFixedBidParams
      } else {
        throw new Error('Failed to extract transaction.')
      }
    },

    async setup (signedTxns: Array<Array<SignedTxn>>) {

      const { data, error } = await dartClient.mutation(SubmitSetupFixedBidDocument, {
        txns: signedTxns
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.submitSetupFixedBid){
        if (data.submitSetupFixedBid.partialErrors && data.submitSetupFixedBid.partialErrors.length > 0) {
          for (let i = 0; i <  data.submitSetupFixedBid.partialErrors.length; i++) {
            this.messageStore.pushSnackError(data.submitSetupFixedBid.partialErrors[i])
          }
        } else {
          this.messageStore.pushSnackSucces('Transactions were successfully submitted to the network.')
        }

        this.createdNFTsStore.updateStoredFixedBids(data.submitSetupFixedBid.listings)
        this.collectedNFTsStore.updateStoredFixedBids(data.submitSetupFixedBid.listings)
      }
    },

    async getDeposit (settings: Array<DepositFixedBidParams>) {
      const { data, error } = await dartClient.query(GetDepositFixedBidParamsDocument,{ settings }).toPromise()

      if (error) {
        this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        throw new Error(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getDepositFixedBidParams) {
        return data.getDepositFixedBidParams
      } else {
        throw new Error('Failed to extract transaction.')
      }
    },

    async deposit (signedTxns: Array<Array<SignedTxn>>) {

      const { data, error } = await dartClient.mutation(SubmitDepositFixedBidDocument, {
        txns: signedTxns
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.submitDepositFixedBid){
        if (data.submitDepositFixedBid.partialErrors && data.submitDepositFixedBid.partialErrors.length > 0) {
          for (let i = 0; i <  data.submitDepositFixedBid.partialErrors.length; i++) {
            this.messageStore.pushSnackError(data.submitDepositFixedBid.partialErrors[i])
          }
        } else {
          this.messageStore.pushSnackSucces('Transactions were successfully submitted to the network.')
        }

        this.createdNFTsStore.updateStoredFixedBids(data.submitDepositFixedBid.listings)
        this.collectedNFTsStore.updateStoredFixedBids(data.submitDepositFixedBid.listings)
      }
    },

    async getExtract (settings: Array<ExtractFixedBidParams>) {
      const { data, error } = await dartClient.query(GetExtractFixedBidParamsDocument,{ settings }).toPromise()

      if (error) {
        this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        throw new Error(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getExtractFixedBidParams) {
        return data.getExtractFixedBidParams
      } else {
        throw new Error('Failed to extract transaction.')
      }
    },

    async extract (signedTxns: Array<Array<SignedTxn>>) {

      const { data, error } = await dartClient.mutation(SubmitExtractFixedBidDocument, {
        txns: signedTxns
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.submitExtractFixedBid){
        if (data.submitExtractFixedBid.partialErrors && data.submitExtractFixedBid.partialErrors.length > 0) {
          for (let i = 0; i <  data.submitExtractFixedBid.partialErrors.length; i++) {
            this.messageStore.pushSnackError(data.submitExtractFixedBid.partialErrors[i])
          }
        } else {
          this.messageStore.pushSnackSucces('Transactions were successfully submitted to the network.')
        }

        this.createdNFTsStore.updateStoredFixedBids(data.submitExtractFixedBid.listings)
        this.collectedNFTsStore.updateStoredFixedBids(data.submitExtractFixedBid.listings)
      }
    },

    async getUpdatePrice (settings: Array<UpdatePriceFixedBidParams>) {
      const { data, error } = await dartClient.query(GetUpdatePriceFixedBidParamsDocument,{ settings }).toPromise()

      if (error) {
        this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        throw new Error(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getUpdatePriceFixedBidParams) {
        return data.getUpdatePriceFixedBidParams
      } else {
        throw new Error('Failed to extract transaction.')
      }
    },

    async updatePrice (signedTxns: Array<Array<SignedTxn>>) {

      const { data, error } = await dartClient.mutation(SubmitUpdatePriceFixedBidDocument, {
        txns: signedTxns
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.submitUpdatePriceFixedBid){
        if (data.submitUpdatePriceFixedBid.partialErrors && data.submitUpdatePriceFixedBid.partialErrors.length > 0) {
          for (let i = 0; i <  data.submitUpdatePriceFixedBid.partialErrors.length; i++) {
            this.messageStore.pushSnackError(data.submitUpdatePriceFixedBid.partialErrors[i])
          }
        } else {
          this.messageStore.pushSnackSucces('Transactions were successfully submitted to the network.')
        }

        this.createdNFTsStore.updateStoredFixedBids(data.submitUpdatePriceFixedBid.listings)
        this.collectedNFTsStore.updateStoredFixedBids(data.submitUpdatePriceFixedBid.listings)
      }
    },

    async getDestroy (settings: Array<DestroyFixedBidParams>) {
      const { data, error } = await dartClient.query(GetDestroyFixedBidParamsDocument,{ settings }).toPromise()

      if (error) {
        this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        throw new Error(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getDestroyFixedBidParams) {
        return data.getDestroyFixedBidParams
      } else {
        throw new Error('Failed to extract transaction.')
      }
    },

    async destroy (signedTxns: Array<Array<SignedTxn>>) {

      const { data, error } = await dartClient.mutation(SubmitDestroyFixedBidDocument, {
        txns: signedTxns
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.submitDestroyFixedBid){
        if (data.submitDestroyFixedBid.partialErrors && data.submitDestroyFixedBid.partialErrors.length > 0) {
          for (let i = 0; i <  data.submitDestroyFixedBid.partialErrors.length; i++) {
            this.messageStore.pushSnackError(data.submitDestroyFixedBid.partialErrors[i])
          }
        } else {
          this.messageStore.pushSnackSucces('Transactions were successfully submitted to the network.')
        }

        this.createdNFTsStore.removeStoredFixedBids(data.submitDestroyFixedBid.listings)
        this.collectedNFTsStore.removeStoredFixedBids(data.submitDestroyFixedBid.listings)
      }
    },

    async getBuy (settings: Array<BuyFixedBidParams>) {
      const { data, error } = await dartClient.query(GetBuyFixedBidParamsDocument,{ settings }).toPromise()

      if (error) {
        this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        throw new Error(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getBuyFixedBidParams) {
        return data.getBuyFixedBidParams
      } else {
        throw new Error('Failed to extract transaction.')
      }
    },

    async buy (signedTxns: Array<Array<SignedTxn>>) {

      const { data, error } = await dartClient.mutation(SubmitBuyFixedBidDocument, {
        txns: signedTxns
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.submitBuyFixedBid){
        if (data.submitBuyFixedBid.partialErrors && data.submitBuyFixedBid.partialErrors.length > 0) {
          for (let i = 0; i <  data.submitBuyFixedBid.partialErrors.length; i++) {
            this.messageStore.pushSnackError(data.submitBuyFixedBid.partialErrors[i])
          }
        } else {
          this.messageStore.pushSnackSucces('Transactions were successfully submitted to the network.')
        }

        this.NFTStore.updateFixedBids(data.submitBuyFixedBid.listings)
      }
    },
  },

  getters: {
  },
})
import { 
  dartClient,
  GetCollectedNfTsDocument,
  GetCollectedNfTsQuery,
  GetFixedBidsByCollectorDocument,
  GetFixedBidsByCollectorQuery,
  PageInfo,
  CreatedNft
} from '@/graphql/client'

export type CollectedNFT = GetCollectedNfTsQuery['getCollectedNFTs']['nfts'][0]
export type Listings = GetFixedBidsByCollectorQuery['getFixedBidsByCollector']['listings']

const nestedStores = {
  messageStore: useMessageStore,
  accountStore: useAccountStore
}

export const useCollectedNFTsStore = defineStore('collectedNFTs', {
  state: () => {
    return useNestedStores(nestedStores, {
      nfts: [] as Array<CreatedNft>,
      nftsPageInfo: null as null | PageInfo,
      collectorAddress: '',
      fixedBids: [] as Listings,
      fixedBidPageInfo:  null as null | PageInfo
    })
  },

  hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async getCollectedNFTs ({ address, page, refresh }: { address: string, page: number, refresh: boolean }) {

      let mustRefresh = refresh || this.collectorAddress !== address

      if (!refresh && this.nftsPageInfo && !this.nftsPageInfo.hasNextPage && this.collectorAddress === address) {
        return
      }

      this.collectorAddress = address
      const limit = this.nftsPageInfo?.limit || 10

      const { data, error } = await dartClient.query(GetCollectedNfTsDocument,{
        address: address,
        limit: limit,
        offset: mustRefresh ? ((page - 1) * limit) : this.nfts.length
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getCollectedNFTs) {
        if (data.getCollectedNFTs.nfts) {
          if (mustRefresh) {
            this.nfts = data.getCollectedNFTs.nfts
          } else {
            this.nfts.push(...data.getCollectedNFTs.nfts)
          }
          this.nftsPageInfo = data.getCollectedNFTs.pageInfo
        }
      }
    },

    async getFixedBids ({ address, page, refresh }: { address: string, page: number, refresh: boolean }) {

      let mustRefresh = refresh || this.collectorAddress !== address

      if (!refresh && this.fixedBidPageInfo && !this.fixedBidPageInfo.hasNextPage && this.collectorAddress === address) {
        return
      }

      this.collectorAddress = address
      const limit = this.nftsPageInfo?.limit || 10

      const { data, error } = await dartClient.query(GetFixedBidsByCollectorDocument,{
        address: address,
        limit: limit,
        offset: mustRefresh ? ((page - 1) * limit) : this.fixedBids.length
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getFixedBidsByCollector) {
        if (data.getFixedBidsByCollector.listings) {
          if (mustRefresh) {
            this.fixedBids = data.getFixedBidsByCollector.listings
          } else {
            this.fixedBids.push(...data.getFixedBidsByCollector.listings)
          }
          this.fixedBidPageInfo = data.getFixedBidsByCollector.pageInfo
        }
      }
    },

    async storeFixedBids (listings: Listings) {
      this.fixedBids.unshift(...listings)
    },

    async updateStoredFixedBids (listings: Listings) {
      for (let i = 0; i < listings.length; i++) {

        const listing = listings[i]

        if (!listing){
          continue
        }

        const foundIndex = this.fixedBids.findIndex((l) => l.appId === listing.appId)

        if (foundIndex < 0){
          continue
        }

        this.fixedBids[foundIndex] = {
          ...this.fixedBids[foundIndex],
          ...listing
        }
      }
    },

    async removeStoredFixedBids (listings: Listings) {
      for (let i = 0; i < listings.length; i++) {

        const listing = listings[i]

        if (!listing){
          continue
        }

        const foundIndex = this.fixedBids.findIndex((l) => l.appId === listing.appId)

        if (foundIndex < 0){
          continue
        }

        this.fixedBids.splice(foundIndex, 1)
      }
    }
  },

  getters: {
  },
})
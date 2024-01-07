import { 
  dartClient,
  GetCreatedNfTsDocument,
  GetFixedBidsByArtistDocument,
  GetFixedBidsByArtistQuery,
  CreatedNft,
  PageInfo
} from '@/graphql/client'

type Listings = GetFixedBidsByArtistQuery['getFixedBidsByArtist']['listings']

const nestedStores = {
  messageStore: useMessageStore,
  accountStore: useAccountStore
}

export const useCreatedNFTsStore = defineStore('createdNFTs', {
  state: () => {
    return useNestedStores(nestedStores, {
      nfts: [] as Array<CreatedNft>,
      nftsPageInfo: null as null | PageInfo,
      creatorAddress: '',
      fixedBids: [] as Listings,
      fixedBidPageInfo:  null as null | PageInfo
    })
  },

  hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async getCreatedNFTs ({ address, page, refresh }: { address: string, page: number, refresh: boolean }) {

      let mustRefresh = refresh || this.creatorAddress !== address

      if (!refresh && this.nftsPageInfo && !this.nftsPageInfo.hasNextPage && this.creatorAddress === address) {
        return
      }

      this.creatorAddress = address
      const limit = this.nftsPageInfo?.limit || 10

      const { data, error } = await dartClient.query(GetCreatedNfTsDocument,{
        limit: limit,
        offset: mustRefresh ? ((page - 1) * limit) : this.nfts.length
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getCreatedNFTs) {
        if (data.getCreatedNFTs.nfts) {
          if (mustRefresh) {
            this.nfts = data.getCreatedNFTs.nfts
          } else {
            this.nfts.push(...data.getCreatedNFTs.nfts)
          }
          this.nftsPageInfo = data.getCreatedNFTs.pageInfo
        }
      }
    },

    async getFixedBids ({ address, page, refresh }: { address?: string, page: number, refresh: boolean }) {

      if (!refresh && this.fixedBidPageInfo && !this.fixedBidPageInfo.hasNextPage) {
        return
      }

      const limit = this.fixedBidPageInfo?.limit || 10

      const { data, error } = await dartClient.query(GetFixedBidsByArtistDocument,{
        address: address || this.accountStore.userInfo?.user.walletAddress || '',
        limit: limit,
        offset: refresh ? ((page - 1) * limit) : this.fixedBids.length
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getFixedBidsByArtist) {
        if (data.getFixedBidsByArtist.listings) {
          if (refresh) {
            this.fixedBids = data.getFixedBidsByArtist.listings
          } else {
            this.fixedBids.push(...data.getFixedBidsByArtist.listings)
          }
          this.fixedBidPageInfo = data.getFixedBidsByArtist.pageInfo
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
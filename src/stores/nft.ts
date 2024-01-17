import { 
  dartClient,
  GetNftDetailsDocument,
  GetNfTsByArtistDocument,
  GetNfTsByCollectorDocument,
  GetFixedBidsByNftDocument,
  GetNftOwnersDocument,
  GetListedNfTsDocument,
  GetNfTsByCollectionDocument,
  GetAllNfTsDocument,
  SearchNftDocument,
  Nft,
  PageInfo,
  GetFixedBidsByNftQuery,
  NftOwner,
  NftCollectedSort,
  NftCollectedStatus,
  NftSort,
  NftSaleStatus,
  ListingType,
  AllNftSort,
  SearchNftQuery
} from '@/graphql/client'

const nestedStores = {
  messageStore: useMessageStore,
  accountStore: useAccountStore
}

export const useNFTStore = defineStore('nft', {
  state: () => {
    return useNestedStores(nestedStores, {
      nft: null as null | Nft,
      nfts: [] as Array<Nft>,
      nftsPageInfo: null as null | PageInfo,
      sort: 'NEW',
      status: 'ALL',
      nftFixedBids: [] as GetFixedBidsByNftQuery['getFixedBidsByNFT'],
      nftOwners: [] as Array<NftOwner>,
      collectedSort: 'NEW',
      collectedStatus: 'ALL',
      collected: [] as Array<Nft>,
      collectedPageInfo: null as null | PageInfo,
      collectedId: "",
      listed: [] as Array<Nft>,
      listedPageInfo: null as null | PageInfo,
      collectionSort: 'NEW',
      collectionStatus: 'ALL',
      collection: [] as Array<Nft>,
      collectionPageInfo: null as null | PageInfo,
      collectionId: "",
      all: [] as Array<Nft>,
      allSort: 'NEW' as AllNftSort,
      allPageInfo: null as null | PageInfo,
      searchTerm: "",
      searchResults: [] as SearchNftQuery['searchNFT'],
    })
  },

  hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async getNFTDetails (index: number, refresh?: boolean) {

      if (refresh || index !== this.nft?.token.index) {

        const { data, error } = await dartClient.query(GetNftDetailsDocument,{ index }).toPromise()
  
        if (error) {
          return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
        }
  
        if (data && data.getNFTDetails) {
          this.nft = data.getNFTDetails
        }

      }
    },

    async getNFTsByArtist (id: string, refresh?: boolean) {

      const mustRefresh = refresh || !(
        id === this.nfts[0]?.artist.address ||
        id === this.nfts[0]?.artist.name ||
        id === this.nfts[0]?.artist.normalizedName
      )

      if (
        !mustRefresh && 
        this.nftsPageInfo && 
        !this.nftsPageInfo.hasNextPage
      ) {
        return
      }

      const limit = this.nftsPageInfo?.limit || 20

      const { data, error } = await dartClient.query(GetNfTsByArtistDocument,{ 
        id,
        limit: limit,
        offset: mustRefresh ? 0 : this.nfts.length,
        sort: this.sort as NftSort,
        status: this.status as NftSaleStatus,
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getNFTsByArtist) {
        if (mustRefresh) {
          this.nfts = data.getNFTsByArtist.nfts
        } else {
          this.nfts.push(...data.getNFTsByArtist.nfts)
        }
        this.nftsPageInfo = data.getNFTsByArtist.pageInfo
      }
    },

    async getNFTsByCollector (id: string, refresh?: boolean) {

      const mustRefresh = refresh || this.collectedId !== id

      if (
        !mustRefresh && 
        this.collectedPageInfo && 
        !this.collectedPageInfo.hasNextPage
      ) {
        return
      }

      if (mustRefresh) {      
        this.collected = []  
      }

      this.collectedId = id
      
      const limit = this.collectedPageInfo?.limit || 20

      const { data, error } = await dartClient.query(GetNfTsByCollectorDocument,{ 
        id,
        limit: limit,
        offset: mustRefresh ? 0 : this.collected.length,
        sort: this.collectedSort as NftCollectedSort,
        status: this.collectedStatus as NftCollectedStatus
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getNFTsByCollector) {
        if (mustRefresh) {
          this.collected = data.getNFTsByCollector.nfts
        } else {
          this.collected.push(...data.getNFTsByCollector.nfts)
        }
        this.collectedPageInfo = data.getNFTsByCollector.pageInfo
      }
    },

    async getFixedBids (index: number) {

      const { data, error } = await dartClient.query(GetFixedBidsByNftDocument,{ index }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getFixedBidsByNFT) {
        this.nftFixedBids = data.getFixedBidsByNFT
      }
    },

    async getNFTsByCollection (id: string, refresh?: boolean) {

      const mustRefresh = refresh || id !== this.collectionId

      if (
        !mustRefresh && 
        this.collectionPageInfo && 
        !this.collectionPageInfo.hasNextPage
      ) {
        return
      }

      if (mustRefresh) {
        this.collection = []
      }

      this.collectionId = id

      const limit = this.collectionPageInfo?.limit || 20

      const { data, error } = await dartClient.query(GetNfTsByCollectionDocument,{ 
        id,
        limit: limit,
        offset: mustRefresh ? 0 : this.collection.length,
        sort: this.collectionSort as NftSort,
        status: this.collectionStatus as NftSaleStatus,
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getNFTsByCollection) {
        if (mustRefresh) {
          this.collection = data.getNFTsByCollection.nfts
        } else {
          this.collection.push(...data.getNFTsByCollection.nfts)
        }
        this.collectionPageInfo = data.getNFTsByCollection.pageInfo
      }
    },

    updateFixedBids (listing: GetFixedBidsByNftQuery['getFixedBidsByNFT']) {
      for (let i = 0; i < listing.length; i++) {

        const index = this.nftFixedBids.findIndex((fixedbid) => fixedbid.appId === listing[i].appId)

        if (index >= 0) {
          this.nftFixedBids[index] = listing[i]
        }
      }
    },

    async getOwners (index: number) {

      const { data, error } = await dartClient.query(GetNftOwnersDocument,{ index }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getNFTOwners) {
        this.nftOwners = data.getNFTOwners
      }
    },

    async getListed (refresh?: boolean) {

      const mustRefresh = refresh

      if (!mustRefresh && this.listedPageInfo && !this.listedPageInfo.hasNextPage) {
        return
      }

      const limit = this.listedPageInfo?.limit || 20
      const skip = this.listed.map((collection) => collection.id)

      const { data, error } = await dartClient.query(GetListedNfTsDocument,{ 
        listingType: ListingType.FixedBid,
        limit: limit,
        offset: mustRefresh ? 0 : this.listed.length,
        skip: skip
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getListedNFTs) {
        if (mustRefresh) {
          this.listed = data.getListedNFTs.nfts
        } else {
          this.listed.push(...data.getListedNFTs.nfts)
        }
        this.listedPageInfo = data.getListedNFTs.pageInfo
      }
    },

    async getAll (refresh?: boolean) {

      const mustRefresh = refresh

      if (!mustRefresh && this.allPageInfo && !this.allPageInfo.hasNextPage) {
        return
      }

      const limit = this.allPageInfo?.limit || 20

      const { data, error } = await dartClient.query(GetAllNfTsDocument,{
        limit: limit,
        offset: mustRefresh ? 0 : this.all.length,
        sort: this.allSort
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getAllNFTs) {
        if (mustRefresh) {
          this.all = data.getAllNFTs.nfts
        } else {
          this.all.push(...data.getAllNFTs.nfts)
        }
        this.allPageInfo = data.getAllNFTs.pageInfo
      }
    },

    async search () {
      if (this.searchTerm.length < 1) {
        return
      }

      const { data, error } = await dartClient.query(SearchNftDocument,{ 
        searchTerm: this.searchTerm
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.searchNFT) {
        this.searchResults = data.searchNFT
      }
    }
  },

  getters: {
  },
})
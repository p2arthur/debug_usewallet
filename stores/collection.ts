import {
	dartClient,
  GetCollectionsByArtistDocument,
  GetAllCollectionsDocument,
  GetCollectionDetailsDocument,
  SearchCollectionDocument,
  Collection,
  PageInfo,
  CollectionSort
} from "@/graphql/client"

const nestedStores = {
  messageStore: useMessageStore,
  accountStore: useAccountStore
}

export const useCollectionStore = defineStore("collection",{
  state: () => {
    return useNestedStores(nestedStores, {
      artist: '',
      collectionDetails: null as null | Collection,
      all: [] as Array<Collection>,
      allPageInfo: null as null | PageInfo,
      allSort: 'RANDOM' as CollectionSort,
      byArtist: [] as Array<Collection>,
      byAritsPageInfo: null as null | PageInfo,
      searchTerm: "", 
      searchResults: [] as Array<Collection>,
    })
  },

  hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async getByArtist (artist: string, refresh?: boolean) {

      const mustRefresh = refresh || this.artist !== artist

      if (!mustRefresh && this.byAritsPageInfo && !this.byAritsPageInfo.hasNextPage) {
        return
      }

      if (mustRefresh) {
        this.byArtist = []
      }

      this.artist = artist
      const limit = this.byAritsPageInfo?.limit || 10

      const { data, error } = await dartClient.query(GetCollectionsByArtistDocument,{ 
        id: artist,
        limit,
        offset: mustRefresh ? 0 : this.byArtist.length
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getCollectionsByArtist) {
        if (data.getCollectionsByArtist.collections) {
          if (mustRefresh) {
            this.byArtist = data.getCollectionsByArtist.collections
          } else {
            this.byArtist.push(...data.getCollectionsByArtist.collections)
          }
          this.byAritsPageInfo = data.getCollectionsByArtist.pageInfo
        }
      }
    },

    async getAll (page: number, refresh?: boolean) {

      let mustRefresh = refresh

      if (!refresh && this.allPageInfo && !this.allPageInfo.hasNextPage) {
        return
      }

      const limit = this.byAritsPageInfo?.limit || 10
      let skip

      if (this.allSort === 'RANDOM') {
        skip = this.all.map((collection) => collection.id)
      }

      const { data, error } = await dartClient.query(GetAllCollectionsDocument,{
        limit,
        offset: mustRefresh ? ((page - 1) * limit) : this.all.length,
        sort: this.allSort,
        skip
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getAllCollections) {
        if (data.getAllCollections.collections) {
          if (mustRefresh) {
            this.all = data.getAllCollections.collections
          } else {
            this.all.push(...data.getAllCollections.collections)
          }
          this.allPageInfo = data.getAllCollections.pageInfo
        }
      }
    },

    async getDetails (name: string, refresh?: boolean) {

      if (!refresh &&
        (
          name === this.collectionDetails?.title ||
          name === this.collectionDetails?.normalizedTitle
        )
      ) {
        return
      }

      this.collectionDetails = null

      const { data, error } = await dartClient.query(GetCollectionDetailsDocument,{ id: name }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getCollectionDetails) {
        this.collectionDetails = data.getCollectionDetails
      }
    },

    async search () {

      if (this.searchTerm.length < 2) {
        return
      }

      const { data, error } = await dartClient.query(SearchCollectionDocument,{ 
        searchTerm: this.searchTerm
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.searchCollection) {
        this.searchResults = data.searchCollection
      }
    }
  },

  getters: {
    
  }
})
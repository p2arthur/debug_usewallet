import {
  dartClient,
  GetAllSalesDocument,
  GetSalesByArtistDocument,
  GetSalesByCollectionDocument,
  GetSalesByNftDocument,
  SubAllNewSalesDocument,
  GetAllSalesQuery,
  GetSalesByNftQuery,
  Sale,
  PageInfo,
  SaleSortingOptions,
  SaleFilter
} from "@/graphql/client"

const nestedStores = {
  messageStore: useMessageStore,
  nfdStore: useNFDStore
}

export const useSaleStore = defineStore("sale",{
  state: () => {
    return useNestedStores(nestedStores, {
      subscription: null as any,
      all: [] as GetAllSalesQuery["getAllSales"]["sales"],
      allSort: "NEW" as SaleSortingOptions,
      allFilter: {
        combine: "AND",
        currency: [],
        saleType: []
      } as SaleFilter,
      allPageInfo: null as null | PageInfo,
      latest: [] as GetAllSalesQuery["getAllSales"]["sales"],
      latestPageInfo: null as null | PageInfo,
      nftIndex: 0,
      nft: [] as GetSalesByNftQuery["getSalesByNFT"]["sales"],
      nftPageInfo: null as null | PageInfo,
      artistId: "",
      artist: [] as GetSalesByNftQuery["getSalesByNFT"]["sales"],
      artistPageInfo: null as null | PageInfo,
    })
  },

  hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async getAll (page: number, refresh?: boolean) {

      let mustRefresh = refresh

      if (!refresh && this.allPageInfo && !this.allPageInfo.hasNextPage) {
        return
      }

      const limit = this.allPageInfo?.limit || 20

      const { data, error } = await dartClient.query(GetAllSalesDocument,{
        limit,
        offset: mustRefresh ? ((page - 1) * limit) : this.all.length,
        sort: this.allSort,
        filter: this.allFilter
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getAllSales) {
        if (data.getAllSales.sales) {
          if (mustRefresh) {
            this.all = data.getAllSales.sales
          } else {
            this.all.push(...data.getAllSales.sales)
          }
          this.allPageInfo = data.getAllSales.pageInfo
        }

        this.nfdStore.fetchNFDs(data.getAllSales.sales.map((sale) => [sale.buyerAddress, sale.sellerAddress]).flat(1))
      }
    },

    async getLatest (page: number, refresh?: boolean) {

      let mustRefresh = refresh

      if (!refresh && this.latestPageInfo && !this.latestPageInfo.hasNextPage) {
        return
      }

      const limit = this.latestPageInfo?.limit || 20

      const { data, error } = await dartClient.query(GetAllSalesDocument,{
        limit,
        offset: mustRefresh ? ((page - 1) * limit) : this.latest.length,
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getAllSales) {
        if (data.getAllSales.sales) {
          if (mustRefresh) {
            this.latest = data.getAllSales.sales
          } else {
            this.latest.push(...data.getAllSales.sales)
          }
          this.latestPageInfo = data.getAllSales.pageInfo
        }

        this.nfdStore.fetchNFDs(data.getAllSales.sales.map((sale) => [sale.buyerAddress, sale.sellerAddress]).flat(1))
      }
    },

    async getByNFT (index: number, page: number, refresh?: boolean) {

      const mustRefresh = refresh || index !== this.nftIndex

      if (
        !mustRefresh && 
        this.nftPageInfo && 
        !this.nftPageInfo.hasNextPage
      ) {
        return
      }

      this.nftIndex = index
      const limit = this.nftPageInfo?.limit || 20

      const { data, error } = await dartClient.query(GetSalesByNftDocument,{
        index: index,
        limit: limit,
        offset: mustRefresh ? 0 : this.nft.length
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getSalesByNFT) {
        if (mustRefresh) {
          this.nft = data.getSalesByNFT.sales
        } else {
          this.nft.push(...data.getSalesByNFT.sales)
        }
        this.nftPageInfo = data.getSalesByNFT.pageInfo
      }
    },

    async getByArtist (id: string, page: number, refresh?: boolean) {

      const mustRefresh = refresh || id !== this.artistId

      if (
        !mustRefresh && 
        this.artistPageInfo && 
        !this.artistPageInfo.hasNextPage
      ) {
        return
      }

      this.artistId = id
      const limit = this.artistPageInfo?.limit || 20

      const { data, error } = await dartClient.query(GetSalesByArtistDocument,{
        id: id,
        limit: limit,
        offset: mustRefresh ? 0 : this.artist.length
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.getSalesByArtist) {
        if (mustRefresh) {
          this.artist = data.getSalesByArtist.sales
        } else {
          this.artist.push(...data.getSalesByArtist.sales)
        }
        this.artistPageInfo = data.getSalesByArtist.pageInfo
      }

    },

    async subscribe () {
      if (this.subscription) {
        return
      }

      this.subscription = dartClient.subscription(SubAllNewSalesDocument,{}).subscribe(({ data }) => {
        if (data && data.subAllNewSales) {
          this.all.unshift(data.subAllNewSales)

          if (data.subAllNewSales.nftIndex === this.nftIndex) {
            this.nft.unshift(data.subAllNewSales)
          }

          this.nfdStore.fetchNFDs([
            data.subAllNewSales.buyerAddress,
            data.subAllNewSales.sellerAddress
          ])
        }
      })
    }
  },

  getters: {
    
  }
})
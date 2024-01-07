import { 
  dartClient,
  GetNfdByAddressDocument,
  GetNfdListByAddressesDocument,
  Nfd
} from '@/graphql/client'

export const useNFDStore = defineStore('nfd', {
  state: () => {
    return {
      addressList: new Map<string, string>(),
      nfdList: new Map<string, Nfd>()
    }
  },

  actions: {
    async fetchNFDs (addresses: Array<string>) {

      const newAddresses = []
      // const uniqueAddresses = [...new Set(addresses)]

      for (let i = 0; i < addresses.length; i++) {
        if (this.addressList.get(addresses[i]) === undefined) {
          newAddresses.push(addresses[i])
        }
      }

      if (newAddresses.length > 0) {

        const { data } = await dartClient.query(GetNfdListByAddressesDocument,{ 
          addresses: newAddresses
        }).toPromise()

        if (data?.getNFDListByAddresses) {

          for (let i = 0; i < data.getNFDListByAddresses.length; i++) {

            const address = data.getNFDListByAddresses[i]

            if (address && address.nfd) {
              this.addressList.set(address.address, address.nfd.i.name)
            } else {
              this.addressList.set(address.address, '')
            }
          }
        }
      }
    },

    async fetchNFDDetails (address: string) {
      
      const NFDDetails = this.nfdList.get(address)

      if (NFDDetails !== undefined) {
        return
      }
      
      const { data } = await dartClient.query(GetNfdByAddressDocument,{ address: address }).toPromise()

      if (data && data.getNFDByAddress) {

        if (data.getNFDByAddress.nfd) {
          this.nfdList.set(address, data.getNFDByAddress.nfd)
        } else {
          this.nfdList.set(address, {} as Nfd)
        }
      }
    }
  },

  getters: {
    NFDConversion: (state) => {
      return (address: string) => state.addressList.get(address)
    },

    NFDDetails: (state) => {
      return (address: string) => state.nfdList.get(address)
    }
  },
})
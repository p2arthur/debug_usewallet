import { 
  dartClient,
  GetNfdByAddressDocument,
  GetNfdListByAddressesDocument
} from '@/graphql/client'

const AddressList = new Map<string, string>()
const NFDList = new Map()

/**
 * Fetch all NFDs for a list of addresses. 
 * 
 * The function will check against the existing map and only check for new addresses.
 * 
 * @param addresses
 */
export async function fetchNFDs (addresses: Array<string>) {

  const newAddresses = []

  for (let i = 0; i < addresses.length; i++) {
    if (!AddressList.get(addresses[i])) {
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
          AddressList.set(address.address, address.nfd.i.name)
        } else {
          AddressList.set(address.address, '')
        }
      }
    }
  }
}

/**
 * Convert address to NFD name (.algo). Will return the address if no NDF is found.
 * 
 * Make sure to always call fetchNFDs with the new addresses to fill the conversion map.
 * 
 * @param address
 */
export function NFDConversion (address: string) {

  const nfd = AddressList.get(address)

  if (nfd) {
    return nfd
  }
}
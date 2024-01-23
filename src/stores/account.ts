import { Wallet, Address } from '@dartroom/signer'
import {
  dartClient,
  UserLoginInfoDocument,
  UserLoginDocument,
  UserLoginInfo,
  SignedTxn,
  UsignedTxn,
  UserLoginMutation,
  User
} from '@/graphql/client'
import { useCookies } from '@vueuse/integrations/useCookies'
import { env } from '@/functions/env'

enum Ledgers {
  MAINNET = 'MainNet',
  TESTNET = 'TestNet'
}

enum Wallets {
  MYALGO = 'MyAlgo',
  PERA = 'PeraWallet',
  ALGOSIGNER = 'AlgoSigner',
  EXODUS = 'Exodus'
}

const cookie = useCookies()

function getNumericDate(exp: number | Date): number {
  return Math.round(
    (exp instanceof Date ? exp.getTime() : Date.now() + exp * 1000) / 1000,
  );
}

function setUserInfo () {
  const userInfo = useCookie('userInfo')

  if (userInfo.value) {
    const info = userInfo.value as unknown as UserLoginMutation['userLogin']

    if (info && info.exp < getNumericDate(-60 * 60)) {
      return null
    } else {
      return userInfo.value as unknown as UserLoginMutation['userLogin']
    }
  } else {
    return null
  }
}

function setLoggedInUsers () {
  const loggedInUsers = useCookie('loggedInUsers')

  if (loggedInUsers.value) {
    return loggedInUsers.value as unknown as Array<UserLoginMutation['userLogin']>
  } else {
    return [] as Array<UserLoginMutation['userLogin']>
  }
}

function setActiveWallet () {
  const wallet = useCookie('wallet',{ path: '/', secure: true, sameSite: true })

  if (wallet.value) {
    return wallet.value as unknown as Wallet['active']
  } else {
    return null
  }
}

const nestedStores = {
  messageStore: useMessageStore,
  settingsStore: useSettingsStore,
  nfdStore: useNFDStore
}

export const useAccountStore = defineStore('account', {
  state: () => {
    return useNestedStores(nestedStores, {
      loginModal: false,
      addressModal: false,
      authModal: false,
      wallet: {} as Wallet,
      loginInfo: {} as UserLoginInfo,
      userInfo: setUserInfo(),
      loggedInUsers: setLoggedInUsers(),
      verifyTxn: null as Array<Array<Omit<UsignedTxn,"__typename">>> | null
    })
  },

  async hydrate(state, oldstate) {
    useHydrateNestedStores(nestedStores, state)
    state.userInfo = setUserInfo()
    
    // import Dart-signer (only possible on client side due to window requirement)
    window.global = window
    const dartSigner = await import('@dartroom/signer')
    const { PeraWalletConnect } = await import('@perawallet/connect')
    state.wallet = new dartSigner.Wallet({
      ledger: env.LEDGER === 'MainNet' ? "MAINNET" : "TESTNET"
    })

    // Pera class is created outside of the package for now due to a bug in the PeraWallet package
    state.wallet.pera = new PeraWalletConnect({ 
      shouldShowSignTxnToast: true,
      chainId: env.LEDGER === 'MainNet' ? 416001 : 416002
    })

    // check if JWT is expired
    const userInfo = useCookie('userInfo') as unknown as null | UserLoginMutation['userLogin']

    if (userInfo) {
      if (userInfo.exp < getNumericDate(-60 * 60)) {
        cookie.remove('userInfo')
        state.userInfo = null
      }
    }

    const activeUsers: Array<UserLoginMutation['userLogin']> = []

    for (let i = 0; i < oldstate.loggedInUsers.length; i++) {

      if (oldstate.loggedInUsers[i].exp > getNumericDate(-60 * 60)) {
        activeUsers.push(JSON.parse(JSON.stringify(oldstate.loggedInUsers[i])))
      }
    }

    state.loggedInUsers = activeUsers
    cookie.set('loggedInUsers',JSON.stringify(activeUsers),{ path: '/', secure: true, sameSite: true })

    // Fetch NFDs for the Address modal
    state.nfdStore = useNFDStore()
    state.nfdStore.fetchNFDs(state.wallet.addresses.map((a) => a.address))
    if (state.wallet && state.wallet.active && state.wallet.active.address) {
      state.nfdStore.fetchNFDDetails(state.wallet.active.address)
    }
  },

  actions: {
    async autoLogin () {
      this.userInfo = setUserInfo()

      // check if JWT is expired
      const userInfo = useCookie('userInfo') as unknown as null | UserLoginMutation['userLogin']

      if (userInfo) {
        if (userInfo.exp > getNumericDate(-60 * 60)) {
          cookie.remove('userInfo')
          this.userInfo = null
        }
      }

      const activeUsers: Array<UserLoginMutation['userLogin']> = []

      for (let i = 0; i < this.loggedInUsers.length; i++) {

        if (this.loggedInUsers[i].exp > getNumericDate(-60 * 60)) {
          activeUsers.push(JSON.parse(JSON.stringify(this.loggedInUsers[i])))
        }
      }

      this.loggedInUsers = activeUsers
      cookie.set('loggedInUsers',JSON.stringify(activeUsers),{ path: '/', secure: true, sameSite: true })
    },

    async getUserLoginInfo (address: string) {
      const { data, error } = await dartClient.query(UserLoginInfoDocument,{ address: address }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.userLoginInfo) {
        this.loginInfo = data.userLoginInfo
      }

      if (data && data.verifyTxn) {
        this.verifyTxn = data.verifyTxn
      }
    },

    async login (auth: { password?: string, txn?: SignedTxn }) {
      const { data, error } = await dartClient.mutation(UserLoginDocument,{ 
        address: this.wallet.active.address, 
        password: auth.password,
        txn: auth.txn 
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.userLogin) {
        this.userInfo = data.userLogin
        
        const index = this.loggedInUsers.findIndex((u) => u.user.walletAddress === this.userInfo?.user.walletAddress)

        if (index >= 0) {
          this.loggedInUsers[index] = JSON.parse(JSON.stringify(this.userInfo))
        } else {
          this.loggedInUsers.push(JSON.parse(JSON.stringify(this.userInfo)))
        }

        this.updateUserCookie()
      }
    },

    async removeUser (address: string) {
      const index =  this.loggedInUsers.findIndex((u) => u.user.walletAddress === address)

      if (index >= 0) {
        this.loggedInUsers.splice(index, 1)
        cookie.set('loggedInUsers',JSON.stringify(this.loggedInUsers),{ path: '/', secure: true, sameSite: true })

        if (address === this.userInfo?.user.walletAddress) {
          this.userInfo = null
          cookie.remove('userInfo')
        }
      }
    },

    updateUserCookie () {
      cookie.set('userInfo',JSON.stringify(this.userInfo),{ path: '/', secure: true, sameSite: true })
      cookie.set('loggedInUsers',JSON.stringify(this.loggedInUsers),{ path: '/', secure: true, sameSite: true })
    }
  },

  getters: {
    activeWallet: (state): Address | null => {
      if (process.client) {
        if (state.wallet && state.wallet.active) {
          return state.wallet.active
        } else {
          return setActiveWallet()
        }
      } else {
        return setActiveWallet()
      }
    },
  },
})

export { Wallets }
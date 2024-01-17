import { 
  dartClient,
  GetCurrentQuotesDocument,
  GetHistoricalQuotesDocument,
  Quote,
  AsaCode,
  FiatCode
} from '@/graphql/client'
import { AppSettings } from '@/stores/settings'
import { useCookies } from '@vueuse/integrations/useCookies'
import { ASACode } from '@/functions/prices/currencyLists'

const cookie = useCookies()

const asaCodeList = [ 
  "goBTC", "goETH", "USDC", "ALGO", "STBL2", "GOLD", "SILVER"
] as Array<AsaCode>

function getCurrentQuoteTimeStamp() {
  return new Date(new Date().setHours(new Date().getHours() - 1,59, 0, 0)).toISOString()
}

async function fetchCurrentQuotes(fiat: FiatCode) {
  const { data } = await dartClient.query(GetCurrentQuotesDocument,{
    asa: asaCodeList,
    fiat: [fiat],
  }).toPromise()

  if (data && data.getCurrentQuotes) {

    cookie.set('currentQuotes',JSON.stringify(data.getCurrentQuotes),{ path: '/', secure: true, sameSite: true })

    return data.getCurrentQuotes
  } else {
    return {} as Quote
  }
}

export function setCurrentQuotes () {
  const lastPriceSheet = useCookie('currentQuotes')

  if (!lastPriceSheet.value) {
    return null
  }

  const quote = lastPriceSheet.value as unknown as Quote

  if (quote.timestamp !== getCurrentQuoteTimeStamp()) {
    return null
  }

  if (quote.quotes) {
    let fiat = "" as FiatCode
    const appSettings = useCookie('appSettings')

    if (appSettings.value) {
      const settings = appSettings.value as unknown as AppSettings
      fiat = settings.currency as FiatCode
    }

    if (!quote.quotes['ALGO'][fiat]) {
      return null
    }
  }

  return quote
}

const nestedStores = {
  settingsStore: useSettingsStore,
}

export const usePriceStore = defineStore('price', {
  state: () => {

    const currentQuote = setCurrentQuotes()

    return useNestedStores(nestedStores, {
      currentQuote: currentQuote
    })
  },

  async hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
    state.currentQuote = setCurrentQuotes()

    if (!state.currentQuote) {
      state.currentQuote = await fetchCurrentQuotes(state.settingsStore.appSettings.currency as FiatCode)
      cookie.set('currentQuotes',JSON.stringify(state.currentQuote),{ path: '/', secure: true, sameSite: true })
    }
  },

  actions: {
    async fetchCurrentQuotes (refresh?: boolean) {

      if (refresh && this.settingsStore.appSettings) {
        const { data } = await dartClient.query(GetCurrentQuotesDocument,{
          asa: asaCodeList,
          fiat: [this.settingsStore.appSettings.currency as FiatCode],
        }).toPromise()
  
        if (data && data.getCurrentQuotes) {
          this.currentQuote = data.getCurrentQuotes
          cookie.set('currentQuotes',JSON.stringify(this.currentQuote),{ path: '/', secure: true, sameSite: true })
        }
      }

      return this.currentQuote
    }
  },

  getters: {
    async getCurrentQuote (state) {
      if (state.currentQuote) {
        return state.currentQuote.quotes
      }

      const currentQuote = await fetchCurrentQuotes(this.settingsStore.appSettings.currency as FiatCode)
      state.currentQuote = currentQuote
      return currentQuote.quotes
    }
  },
})
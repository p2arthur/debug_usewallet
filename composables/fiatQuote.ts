import type { ASACode } from '@/functions/prices/currencyLists'
import { setCurrentQuotes } from "@/stores/price"

export const useFiatQuote = () => {

  const settingsStore = useSettingsStore()
  const priceStore = usePriceStore()

  if (!priceStore.currentQuote) {
    priceStore.fetchCurrentQuotes(true)
  }

  const currency = computed(() => {
    return settingsStore.appSettings.currency || 'ALGO'
  })

  const quotes = computed(() => {
    return priceStore.currentQuote?.quotes
  })

  const formater = computed(() => {
    return {
      get (asa: ASACode) {
        if (quotes.value && quotes.value[asa]) {
          return quotes.value[asa][currency.value]
        } else {
          return 0
        }
      }
    } 
  })

  return formater
}
export const useCurrencyFormater = (settings?: {
  maximumFractionDigits?: number
  minimumFractionDigits?: number
}) => {
  const settingsStore = useSettingsStore()

  const currency = computed(() => {
    return settingsStore.appSettings.currency || 'ALGO'
  })

  const formater = computed(() => {
    if (currency.value.length > 3) {
      return {
        format (value: number) {
          const display = Intl.NumberFormat('en', { 
            notation: 'compact',
            maximumFractionDigits: 1,
            minimumFractionDigits: 0,
          }).format(value)

          return `${display} ${currency.value}`
        }
      } 

    } else {
      return Intl.NumberFormat('en', { 
        notation: 'compact', 
        style: "currency", 
        maximumFractionDigits: settings?.maximumFractionDigits || 1,
        minimumFractionDigits: settings?.minimumFractionDigits ||  0,
        currency: currency.value
      }) 
    }
  })

  return formater
}
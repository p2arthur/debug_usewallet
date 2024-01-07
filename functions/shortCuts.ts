import { ColorMode, Network } from '@/stores/settings'

function checkShortCuts (e: KeyboardEvent): string | undefined {
  
  const settingsStore = useSettingsStore()

  let operation

  if (e.altKey) {
    switch (e.key.toLowerCase()) {
      case 'n':
        settingsStore.appSettings.colorMode = ColorMode.DARK
        document.getElementsByTagName('html')[0].classList.add(ColorMode.DARK)
        document.getElementsByTagName('html')[0].classList.remove(ColorMode.LIGHT)
        settingsStore.updateSettings()
        break
      case 'm':
        settingsStore.appSettings.colorMode = ColorMode.LIGHT
        document.getElementsByTagName('html')[0].classList.add(ColorMode.LIGHT)
        document.getElementsByTagName('html')[0].classList.remove(ColorMode.DARK)
        settingsStore.updateSettings()
        break
    }
  }

  return operation
}

export { checkShortCuts }
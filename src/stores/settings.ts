import { useCookies } from '@vueuse/integrations/useCookies'
import { env } from '@/functions/env'

export enum ColorMode {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark'
}

export type Network = 'MAINNET' | 'TESTNET'

const MANGAGE_LAYOUT = {
  DENSE: "DENSE",
  DEFAULT: "DEFAULT"
} as const

type ObjectValues<T> = T[keyof T]

export type ManageLayout = ObjectValues<typeof MANGAGE_LAYOUT>

export interface AppSettings {
  colorMode: ColorMode
  nsfw: boolean
  blockChainExplorer: string
  currency: string
  network: Network
  manageLayout: ManageLayout
}

const cookie = useCookies()

const standardAppSettings = {
  colorMode: ColorMode.SYSTEM,
  nsfw: false,
  blockChainExplorer: "ALGO_EXPLORER",
  currency: "ALGO",
  network: env.LEDGER.toUpperCase(),
  manageLayout: 'DEFAULT'
} as AppSettings

function setAppSettings (): AppSettings {
  const appSettings = useCookie('appSettings')
  
  if (appSettings.value) {
    return {
      ...standardAppSettings,
      ...appSettings.value as unknown as AppSettings,
      network: env.LEDGER.toUpperCase() as Network
    }
  } else {
    return standardAppSettings
  }
}

function setColorScheme (): Boolean {
  const prefersColorSchemeDark = useCookie('prefersColorSchemeDark')
  
  if (prefersColorSchemeDark.value) {
    return Boolean(prefersColorSchemeDark)
  } else {
    return false
  }
}

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      appSettings: setAppSettings(),
      prefersColorSchemeDark: setColorScheme(),
    }
  },

  // hydration happens on the client side, allowing us to call localstorage -> (https://pinia.vuejs.org/cookbook/composables.html#ssr)
  hydrate(state, initialState) {
    state.appSettings = setAppSettings(),
    state.prefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    cookie.set('prefersColorSchemeDark', state.prefersColorSchemeDark,{ path: '/', secure: true, sameSite: true })
  },

  actions: {
    updateSettings() {
      cookie.set('appSettings', this.appSettings,{ path: '/', secure: true, sameSite: true })
    }
  },

  getters: {
   colorMode (state): ColorMode {
      if (state.appSettings.colorMode === ColorMode.SYSTEM) {
        return state.prefersColorSchemeDark ? ColorMode.DARK : ColorMode.LIGHT
      } else {
        return state.appSettings.colorMode
      }
    }
  }
})
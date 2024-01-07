export const useSettings = () => {
  return useState('settings', () => {

    // const store = await import('@/stores/settings')
    // const settingsStore = store.useSettingsStore()

    const settingsStore = useSettingsStore()

    return settingsStore.appSettings
  })
}
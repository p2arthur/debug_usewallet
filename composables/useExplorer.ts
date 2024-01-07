import {
  openAddress,
  openAsset,
  openGroup
} from "@/functions/Explorer"

export const useExplorer = () => {

  const settingsStore = useSettingsStore()

  const explorer = computed(() => {
    return settingsStore.appSettings.blockChainExplorer || "ALGO_EXPLORER"
  })

  const network = computed(() => {
    return settingsStore.appSettings.network || "MAINNET"
  })

  const explore = computed(() => {
    return {
      address: (address: string) => {
        return openAddress(address, explorer.value, network.value)
      },

      asset: (asset: number) => {
        return openAsset(asset, explorer.value, network.value)
      },

      group: (groupId: string) => {
        return openGroup(groupId, explorer.value, network.value)
      }
    } 
  })

  return explore
}
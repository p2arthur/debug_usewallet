const nestedStores = {
  
}

export const useTestStore = defineStore("test",{
  state: () => {
    return useNestedStores(nestedStores, {
      
    })
  },

  hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    
  },

  getters: {
    
  }
})
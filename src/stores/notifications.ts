import {
  dartClient,
  GetNotificationSettingsDocument,
  UpdateNotificationCategoriesDocument,
  AddNotificationSubscriptionDocument,
  RemoveNotificationSubscriptionDocument,
  NotificationSubscription,
  NotificationSettings,
  TestNotificationDocument
} from '@/graphql/client'

const nestedStores = {
  messageStore: useMessageStore
}

export const useNotifcationsStore = defineStore('notifications', {
  state: () => {
    return useNestedStores(nestedStores, {
      settings: {
        subscriptions: [],
        enabled: []
      } as NotificationSettings
    })
  }, 
  
  async hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async getSettings () {

      const { data } = await dartClient.query(GetNotificationSettingsDocument,{}).toPromise()

      if (data && data.getNotificationSettings) {
        this.settings = data.getNotificationSettings
      }

    },

    async setCategory (type: string, category: string) {

      const newCategories = JSON.parse(JSON.stringify(this.settings.enabled)) || []

      const index = this.settings.enabled.findIndex((c) => 
        c.category === category &&
        c.type === type
      )

      if (index >= 0) {
        newCategories.splice(index, 1)
      } else {
        newCategories.push({ type: type, category: category })
      }

      await this.updateCategories(newCategories)
    },

    async updateCategories (categories: NotificationSettings['enabled']) {
      
      const { data, error } = await dartClient.mutation(UpdateNotificationCategoriesDocument,{ 
        categories: categories
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.updateNotificationCategories) {
        this.settings = data.updateNotificationCategories
      }
    },

    async addSubscription (sub: NotificationSubscription) {

      const { data, error } = await dartClient.mutation(AddNotificationSubscriptionDocument,{ 
        subscription: sub
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.addNotificationSubscription) {
        this.settings = data.addNotificationSubscription
      }
    },

    async removeSubscription (subscriptionHash: string) {

      const { data, error } = await dartClient.mutation(RemoveNotificationSubscriptionDocument,{ 
        subscriptionHash: subscriptionHash
      }).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.removeNotificationSubscription) {
        this.settings = data.removeNotificationSubscription
      }
    },

    async testSubscription () {

      const { data, error } = await dartClient.query(TestNotificationDocument,{}).toPromise()

      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      if (data && data.testNotification) {
        this.messageStore.pushSnackSucces(data.testNotification)
      }

    }
  },

  getters: {
    getCategoryStatus (state) {
      return (type: string, category: string) => state.settings.enabled.find((c) => 
        c.category === category &&
        c.type === type
      ) ? true : false
    }
  },
})
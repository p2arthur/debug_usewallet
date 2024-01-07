import { 
  createClient, 
  subscriptionExchange,
  fetchExchange
} from '@urql/core'
import { createClient as createWSClient } from 'graphql-ws'
import { env } from '@/functions/env'
export * from '@/graphql/codegen/operation-types'
import { UserInfo } from '@/graphql/client'
import type { AppSettings } from "@/stores/settings"

const exchanges = [
  fetchExchange
]

if (process.client) {

  const wsClient = createWSClient({
    url: env.DARTROOM_WS,
    keepAlive: 10_000
  })

  exchanges.push(
    subscriptionExchange({
      forwardSubscription(operation) {
        return {
          subscribe: (sink) => {
            const dispose = wsClient.subscribe({
              ...operation,
              query: operation.query || '' 
            }, sink)
            return {
              unsubscribe: dispose
            }
          }
        }
      }
    })
  )
}

const dartClient = createClient({
  url: env.DARTROOM_API,
  requestPolicy: 'network-only',
  maskTypename: true,
  exchanges: exchanges,
  fetchOptions: () => {
    const userInfo = useCookie('userInfo')
    const info = userInfo.value as unknown as null | UserInfo

    const appSettings = useCookie('appSettings')
    const settings = appSettings.value as unknown as null | AppSettings

    return {
      headers: {
        authorization: info?.authToken ? `Bearer ${info?.authToken}` : '',
        currency: settings?.currency || 'ALGO'
      }
    }
  }
})

export { dartClient }
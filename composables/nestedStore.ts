import type { StateTree } from 'pinia'

type StoresObject = Record<string, () => any>

type ReturnStores<T extends StoresObject> = {
  [K in keyof T]: ReturnType<T[K]>
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export const useNestedStores = <S extends StoresObject, T extends StateTree> (stores: S, state: T) => {

  const resolvedStores = {} as ReturnStores<S>
  const entries = Object.entries(stores) as Entries<S>

  for (const [key, value] of entries) {
    resolvedStores[key] = process.client ? value() : {} as typeof value
  }

  return Object.assign(state, resolvedStores)
}

export const useHydrateNestedStores = (stores: Record<string, () => unknown>, state:Record<any, any>) => {
  for (const [key, value] of Object.entries(stores)) {
    state[key] = value()
  }
}
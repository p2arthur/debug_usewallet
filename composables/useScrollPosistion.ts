import type { RouteLocationNormalized } from 'vue-router'

export const useScrollPosistion = (scrollContainerName: string) => {
  
  const router = useRouter()

  const scrollMap = new Map<string, number>()

  router.beforeEach((to, from) => {

    let scrollPosition = document.getElementById(scrollContainerName)?.scrollTop

    scrollMap.set(getRouteKey(from), scrollPosition || 0)

    return true
  })

  router.afterEach(async (to, from) => {

    await router.isReady()

    if (to.path !== from.path) {

      const foundPosistion = scrollMap.get(getRouteKey(to))

      document.getElementById(scrollContainerName)?.scrollTo({
        top: foundPosistion || 0,
        left: 0
      })
    }

    return true
  })

  return { scrollMap }
}

function getRouteKey (route: RouteLocationNormalized) {

  let path = route.path

  if (route.matched.length > 1) {
    path = route.matched[route.matched.length - 2].path
  }

  let params = ""

  if (route.params) {
    for (const [key, value] of Object.entries(route.params)) {
      params += `-${key}=${value}`
    }
  }

  return path + params
}
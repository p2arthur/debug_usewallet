import { UserLoginMutation } from '@/graphql/client'

export default defineNuxtRouteMiddleware((to) => {

  const userInfo = useCookie('userInfo')

  if (userInfo.value) {
    const info = userInfo.value as unknown as UserLoginMutation['userLogin']

    if (info.user.isAdmin) {
      return
    }
  }

  return '/'
})
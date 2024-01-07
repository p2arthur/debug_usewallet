export default defineNuxtRouteMiddleware((to) => {
  return `/artists/${to.params.name}?details=true`
})
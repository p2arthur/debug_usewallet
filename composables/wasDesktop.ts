// import MobileDetect from 'mobile-detect'
// import { useCookies } from '@vueuse/integrations/useCookies'

// export const useWasDesktop = () => {
//   const header = useRequestHeaders()
//   const md = new MobileDetect(header['user-agent'] || '')
//   const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
//   const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
//   const desktop = !isMobile && !isTablet

//   const clientIsDesktop = useMediaQuery('(min-width: 800px)')
//   const cookie = useCookies()

//   // const isDesktop = ref(cookie.get('clientIsDesktop') || desktop)

//   const isDesktop = computed(() => {
//     if (process.server) {
//       return cookie.get('clientIsDesktop') || desktop
//     } else {

//       cookie.set('clientIsDesktop',clientIsDesktop.value,{ path: '/', secure: true, sameSite: true })

//       return clientIsDesktop.value
//     }
//   })

//   // function handleResize () {

//   //   console.log('resize', isDesktop.value)
  
//   //   if (window.innerWidth >= 800) {
//   //     isDesktop.value = true
//   //   } else {
//   //     isDesktop.value = false
//   //   }
//   // }

//   // onMounted(() => {

//   //   if (!process.server) {
//   //     window.addEventListener('resize', handleResize)
//   //   }
//   // })

//   // onBeforeUnmount(() => {
//   //   window.removeEventListener('resize', handleResize)
//   // })

//   // console.log('inital state', isDesktop.value)

//   return isDesktop
// }
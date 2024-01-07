import MobileDetect from 'mobile-detect'
import { useCookies } from '@vueuse/integrations/useCookies'
import { useState } from '#app'

export function useIsDesktop () {
  const header = useRequestHeaders()
  const md = new MobileDetect(header['user-agent'] || '')
  const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
  const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
  const desktopAgent = !isMobile && !isTablet

  const cookie = useCookies()
  const clientDevice = useCookie('clientDevice')
  const intialState = clientDevice.value ? (clientDevice.value === 'desktop') : desktopAgent

  const isDesktop = ref(Boolean(intialState))

  function handleResize () {
  
    if (window.innerWidth >= 800) {
      isDesktop.value = true
    } else {
      isDesktop.value = false
    }

    cookie.set('clientDevice', isDesktop.value ? 'desktop' : 'mobile', { path: '/', secure: true, sameSite: true })
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  return isDesktop
}

// export default function () {
//   return useState('isDesktop', () => {
//     const header = useRequestHeaders()
//     const md = new MobileDetect(header['user-agent'] || '')
//     const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
//     const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
//     const desktopAgent = !isMobile && !isTablet

//     const cookie = useCookies()

//     console.log('desktopAgent', desktopAgent)
//     console.log('cookie', cookie.get('clientDevice'))

//     const isDesktop = ref(desktopAgent)

//     function handleResize () {
    
//       if (window.innerWidth >= 800) {

//         console.log('Desktop')
//         isDesktop.value = true
//       } else {

//         console.log('Mobile')
//         isDesktop.value = false
//       }

//       console.log('set cookie to', isDesktop.value)
//       cookie.set('clientDevice', isDesktop.value ? 'desktop' : 'mobile', { path: '/', secure: true, sameSite: true })
//     }

//     onMounted(() => {
//       console.log('mounted',isDesktop.value)
//       window.addEventListener('resize', handleResize)
//       handleResize()
//     })

//     onBeforeUnmount(() => {
//       window.removeEventListener('resize', handleResize)
//     })

//     console.log('inital state', isDesktop.value)

//     return isDesktop
//   })
// }
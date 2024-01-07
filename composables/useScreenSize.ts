import { useCookies } from '@vueuse/integrations/useCookies'
import type { Ref } from 'vue'

export function useScreenSize () {

  const cookie = useCookies()
  const clientScreenWidth = useCookie('clientScreenWidth',{
    default: () => ({ width: 0, height: 0 })
  })

  const size = ref(JSON.parse(JSON.stringify(clientScreenWidth.value))) as Ref<{ width: number, height: number }>

  function handleResize () {

    size.value.width = window.innerWidth
    size.value.height = window.innerHeight

    cookie.set('clientScreenWidth', { width:  size.value.width, height: size.value }, { path: '/', secure: true, sameSite: true })
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  return size
}
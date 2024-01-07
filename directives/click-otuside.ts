import { ObjectDirective } from "vue";
import { generateUUID } from '@/functions/math/MathUtils'

export const clickOutside: ObjectDirective = {
  mounted: (el, binding, vnode) => {
    if (!vnode.el.id) {
      vnode.el.id = generateUUID()
  
      el.clickOutsideEvent = (event: Event) => {
        if (!(event.target === el || el.contains(event.target))) {
          vnode.el.dispatchEvent(new CustomEvent('clickOutside'));
        }
      }
  
      document.body.addEventListener('click', el.clickOutsideEvent)
    }
  },

  unmounted: (el, binding, vnode) => {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
}
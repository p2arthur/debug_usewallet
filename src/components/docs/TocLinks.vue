<template>
  <ul class="docs-toc-links">
    <li 
      v-for="link in links"
      :keys="link.text"
      :class="`docs-toc-links-li-${link.depth}`"
      class="docs-toc-links-li"
    >
      <a 
        :href="`#${link.id}`"
        @click="scrollToHeading(link.id)"
        class="docs-toc-links-li-link"
        :class="activeHeadings.includes(link.id) ? 'docs-toc-links-li-link-active' : ''"
      >
        {{ link.text }}
      </a>

      <DocsTocLinks
        v-if="link.children"
        :links="link.children"
        @move="childMove($event)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">

import type { TocLink } from '@nuxt/content/dist/runtime/types'

defineProps({
  links: {
    type: Array as PropType<TocLink[]>,
    default: () => []
  }
})

const emit = defineEmits(['move'])
const router = useRouter()
const { activeHeadings, updateHeadings } = useScrollspy()

function scrollToHeading (id: string) {
  router.push(`#${id}`)
  emit('move', id)
}

function childMove(id: string) {
  emit('move', id)
}

if (process.client) {
  setTimeout(() => {
    updateHeadings([
      ...document.querySelectorAll('.docs-layout-doc h1'),
      ...document.querySelectorAll('.docs-layout-doc h2'),
      ...document.querySelectorAll('.docs-layout-doc h3'),
      ...document.querySelectorAll('.docs-layout-doc h4')
    ])
  }, 300)
}

</script>

<style scoped lang="scss">

.docs-toc-links {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  color: $c-on-background;

  &-li {
    padding: 1px 0px;

    &-2 {
      margin-left: 8px;
    }

    &-3 {
      margin-left: 16px;
    }

    &-4 {
      margin-left: 24px;
    }

    &-link {
      font-size: 0.9rem;

      &-active {
        color: $c-secondary;
      }
    }
  }
}

</style>
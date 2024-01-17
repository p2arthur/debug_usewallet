<template>
  <ul class="docs-nav-tree">
    <li 
      v-for="link in links" 
      class="docs-nav-tree-li"
      :class="`docs-nav-tree-li-level-${level}`"
    >
      <button 
        v-if="link.children" 
        class="docs-nav-tree-li-button"
        @click="toggleCollapse(link)"
      >
        <span>{{ link?.navigation?.title || link.title || link._path }}</span>

        <IconsUnfold v-if="isCollapsed(link)" class="docs-nav-tree-li-button-icon" />
        <IconsFold v-else class="docs-nav-tree-li-button-icon" />
      </button>

      <!-- <NuxtLink
        v-else-if="!parent || link._path !== parent._path"

        :to="link.redirect ? link.redirect : localePath('/docs' + link._path)"
        class="docs-nav-tree-li-link"
        :class="isActive(link) ? 'docs-nav-tree-li-link-active' : ''"
      >
        <span class="docs-nav-tree-li-link-span" >{{ link?.navigation?.title || link.title || link._path }}</span>
      </NuxtLink> -->
      <NuxtLink
        v-else-if="!parent || link._path !== parent._path"

        :to="link.redirect"
        class="docs-nav-tree-li-link"
        :class="isActive(link) ? 'docs-nav-tree-li-link-active' : ''"
      >
        <span class="docs-nav-tree-li-link-span" >{{ link?.navigation?.title || link.title || link._path }}</span>
      </NuxtLink>

      <DocsNavigationTree
        v-show="!isCollapsed(link)"
        v-if="link.children?.length && (max === null || level + 1 < max)"
        :links="link.children"
        :level="level + 1"
        :parent="link"
        :max="max"
        :slug="slug"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">

import { PropType } from 'vue'

// const localePath = useLocalePath()

const props = defineProps({
  links: {
    type: Array as PropType<any>
  },
  level: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: null
  },
  parent: {
    type: Object as PropType<any>,
    default: null
  },
  slug: {
    type: String
  }
})

function isActive (link: any) {
  return props.slug === link._path
}

const collapsedMap = useState(`docs-nav-tree-${props.parent?._path || '/'}`, () => {

  if (props.level === 0) {
    return {}
  }

  return (props.links as any [])
    .filter(link => !!link.children)
    .reduce((map, link) => {
      map[link._path] = true
      return map
    }, {})
})

const isCollapsed = (link: any) => {
  if (link.children) {
    // Directory has been toggled manually, use its state
    if (typeof collapsedMap.value[link._path] !== 'undefined') {
      return collapsedMap.value[link._path]
    }

    // Check if aside.collapsed has been set in YML
    if ([true, false].includes(link?.aside?.collapsed)) { return link.aside.collapsed }

    // Return value grabbed from the link
    if (link?.collapsed) { return link?.collapsed }
  }

  return false
}

const toggleCollapse = (link: any) => (collapsedMap.value[link._path] = !isCollapsed(link))

</script>

<style scoped lang="scss">

.docs-nav-tree {
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  &-li {

    &-level-1 {
      margin-left: 16px;
    }

    &-level-2 {
      margin-left: 32px;
    }

    &-level-3 {
      margin-left: 48px;
    }

    &-button {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      justify-content: space-between;
      width: 100%;
      margin: 0px;
      padding: 4px 8px;
      cursor: pointer;
      border-radius: $radius-s;
      transition: background-color 150ms ease;

      &:hover {
        background-color: $c-primary-transparent;
      }

      &:focus-visible {
        outline: none;
        background-color: $c-primary-transparent;
      }

      & span {
        font-weight: 600;
        font-size: 1rem;
      }

      &-icon {
        color: $c-on-background;
        max-height: 20px;
        max-width: 20px;
      }
    }

    &-link {
      display: flex;

      &-span {
        border-radius: $radius-s;
        padding: 4px 8px;
        font-weight: 400;
        font-size: 0.9rem;
        transition: background-color 150ms ease, color 150ms ease;
        font-weight: 500;
      }

      &:hover {
        & span {
          color: $c-secondary;
          background-color: $c-secondary-transparent;
        }
      }

      &-active {

        & span {
          color: $c-secondary;
          background-color: $c-secondary-transparent;
        }
      }
    }
  }
}

</style>
<template>
  <div class="code-block">
    <slot />
    <span class="code-block-filename">{{ filename || language }}</span>
  </div>
</template>

<script lang="ts">

import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  }
})

</script>

<style lang="scss">

.code-block {
  position: relative;
  background-color: $c-background-1;
  border-radius: $radius-m;
  overflow: hidden;
  padding-top: 16px;
  
  &-filename {
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px 8px;
    font-weight: 500;
    font-size: 0.9rem;
  }
}

pre {
  display: flex;
  margin: 0px;
  padding: 16px;
  overflow-x: auto;
  @include scrolbar-small($c-scroll-on-background);
}

code {
}

pre code .line {
  display: block;
  min-height: 1rem;
  padding-right: 16px;
}

pre code span {
  font-weight: 400;
  font-size: 0.9rem;
  font-family: $f-mono;
}

</style>
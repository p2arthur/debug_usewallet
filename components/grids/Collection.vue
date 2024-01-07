<template>
  <div class="collection-grid">
    <CardsCollection
      v-for="collection in collections"
      :collection="collection"
    />

    <div class="intersection-target" ref="intersectionTarget"></div>
  </div>
</template>

<script setup lang="ts">

import { Collection } from '@/graphql/client'

defineProps({
  collections: {
    type: Array as PropType<Array<Collection>>,
    required: true
  }
})

const emits = defineEmits(['endReached'])

const intersectionTarget = ref()
const { stop } = useIntersectionObserver(intersectionTarget,async ([{ isIntersecting }], observerElement) => {
  if (isIntersecting) {
    emits('endReached')
  }
})

</script>

<style scoped lang="scss">

.collection-grid {
  width: 100%;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, min(320px, 100%));
  justify-items: stretch;
  justify-content: center;
  gap: 25px;
  max-width: 1920px;
  padding-top: 16px;
}

.intersection-target {
  position: absolute;
  bottom: 800px;
}

</style>
<template>
  <div class="home-grid">
    <CardsNFT
      v-for="nft in nfts"
      :key="nft.token.index"
      :nft="nft"
    />

    <div class="intersection-target" ref="intersectionTarget"></div>
  </div>
</template>

<script setup lang="ts">

import { Nft } from '@/graphql/client'

defineProps({
  nfts: Array as PropType<Array<Nft>>
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

.home-grid {
  position: relative;
  width: 100%;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, min(320px, 100%));
  justify-items: stretch;
  justify-content: center;
  gap: 25px;
  max-width: 1920px;
}

.intersection-target {
  position: absolute;
  bottom: 800px;
}

</style>
<template>
  <div class="docs-toc">
    <template v-if="toc?.links?.length">
      <div class="docs-toc-title">
        <span>On this page</span>
      </div>

      <DocsTocLinks 
        :links="toc.links"
        @move="emit('move')"
      />
    </template>
  </div>
</template>


<script setup lang="ts">

defineProps({
  toc: {
    type: Object as PropType<any>
  }
})

const emit = defineEmits(['move'])

</script>

<style scoped lang="scss">
.docs-toc {
  display: block;
  height: 100%;
  box-sizing: border-box;

  &-title {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 8px;
  }
}


</style>
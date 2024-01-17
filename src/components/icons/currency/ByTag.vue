<template>
  <component :is="Icon" />
</template>

<script setup lang="ts">

const props = defineProps({
  tag: {
    type: String,
    required: true
  }
})

const Icon = resolveComponent(`IconsCurrency${props.tag.toUpperCase()}`)

</script>

<style scoped lang="scss">

</style>
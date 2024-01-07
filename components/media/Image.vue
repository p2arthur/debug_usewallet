<template>
  <img :src="src" alt="" crossorigin="">
</template>

<script setup lang="ts">

defineProps({
  src: {
    typeof: String,
    required: true,
    default: ''
  }
})

</script>

<style scoped lang="scss">

img {
  max-width: min(100%, 1024px);
  max-height: min(1024px, 80vh);
}

</style>
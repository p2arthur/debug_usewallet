<!-- @format -->

<script setup lang="ts">
  import ItemCard from '~/components/marketplace/ItemCard.vue';
  const props = defineProps(['allItems']);
  console.log(props.allItems);
</script>

<template>
  <div class="marketplace-itens-list">
    <ItemCard v-for="items in props.allItems" />
  </div>
</template>

<style scoped lang="scss">
  .marketplace-itens-list {
    min-height: 100vh;
    padding: 32px 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 32px;
    background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
  }
</style>

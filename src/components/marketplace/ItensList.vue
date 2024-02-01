<!-- @format -->

<script setup lang="ts">
  import ItemCard from '~/components/marketplace/ItemCard.vue';
  const props = defineProps(['allItems']);
  const loading = ref(true);
  console.log(props.allItems);

  onBeforeMount(() => {
    loading.value = true;

    setTimeout(() => {
      loading.value = false;
    }, 1000);
  });
</script>

<template>
  <div
    class="marketplace-itens-loading"
    v-if="loading">
    loading
  </div>
  <div
    v-if="!loading"
    class="marketplace-itens-list">
    <ItemCard
      v-for="item in props.allItems"
      :item="item" />
  </div>
</template>

<style scoped lang="scss">
  .marketplace-itens-loading {
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .marketplace-itens-list {
    min-height: 10vh;
    padding: 16px 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 32px;
    background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
  }

  @media (max-width: 1300px) {
    .marketplace-itens-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 768px) {
    .marketplace-itens-list {
      grid-template-columns: repeat(2, 1fr);
      padding: 10px 0;
      gap: 10px;
    }
  }
</style>

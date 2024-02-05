<!-- @format -->

<script setup lang="ts">
import { useItemsStore } from "~/stores/marketplace/items.store";
import ItemProfile from "~/components/profile/item-profile/ItemProfile.vue";

const route = useRoute();
const itemsStore = useItemsStore();
const itemId = Number(route.params.id[0]);

const allItems = itemsStore.filteredItems;

const itemToDisplay = allItems.filter((item) => item.itemId === itemId)[0];
</script>

<template>
  <ItemProfile :item="itemToDisplay" />
</template>

<style>
.something {
  color: red;
}
</style>

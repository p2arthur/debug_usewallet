<template>
  <div class="list-divider">
    <div class="list-divider-line"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.list-divider {
  display: flex;
  align-items: center;
  min-height: 16px;
  width: 100%;

  &-line {
    content: "";
    height: 2px;
    border-radius: 2px;
    background-color: $c-divider;
    width: 100%;
  }
}

</style>
<!-- @format -->

<template>
  <div
    class="main"
    ref="theme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <DisplaysSnackList />
  </div>
</template>

<script setup lang="ts">
  onMounted(() => {});
</script>

<style lang="scss">
  html {
    width: 100%;
    margin: 0px;
    background-color: green;
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
  }
</style>

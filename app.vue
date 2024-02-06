<!-- @format -->

<template>
  <div>
    <NuxtLayout name="connected">
      <NuxtPage />
    </NuxtLayout>
    <DisplaysSnackList />
  </div>
</template>

<script setup lang="ts">
  global = globalThis;
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

<!-- @format -->

<template>
  <div class="unity">
    <div class="unity-container">
      <!-- <img src="/img/nuxt.png" alt="Discover Nuxt 3" /> -->
      <UnityVue :unity="unityContext" />
    </div>
  </div>
</template>

<script setup>
  import UnityWebgl from 'unity-webgl';
  import UnityVue from 'unity-webgl/vue';

  const accountStore = useAccountStore();

  console.log('build unity');

  const unityContext = new UnityWebgl({
    loaderUrl: '/build/builder/V67_builder2.loader.js',
    dataUrl: '/build/builder/webgl.data',
    frameworkUrl: '/build/builder/build.framework.js',
    codeUrl: '/build/builder/build.wasm',
  });

  unityContext.on('device', () => alert('click device ...'));
</script>

<style scoped lang="scss">
  .unity {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;

    &-container {
      width: 1440px;
      height: 810px;
    }
  }
</style>

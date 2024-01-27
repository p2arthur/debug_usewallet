<!-- @format -->

<script setup lang="ts">
  import TypesMenu from '~/components/marketplace/TypesMenu.vue';
  import DataBanner from '~/components/marketplace/DataBanner.vue';
  import ItensList from '~/components/marketplace/ItensList.vue';
</script>

<template>
  <div class="marketplace-page">
    <DataBanner />
    <TypesMenu />
    <ItensList />
  </div>
</template>

<style scoped lang="scss">
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue 300';
    src: url('/fonts/helvetica-neue/300.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  .marketplace-page {
    background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
    padding: 50px;
    padding-top: 70px;
  }

  .marketplace-itens-display {
    background-color: red;
  }

  .menu-content h1 {
    color: #5f5f5f;
    margin-left: 10px;
    font-size: 25px;
    margin-top: -15px;
    margin-bottom: -15px;
    font-family: 'Helvetica Neue 300';
  }
  .filter-card {
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    position: absolute;
    z-index: 100; // Garante que o card fique acima de outros elementos
    // Outros estilos como sombra, bordas arredondadas, etc.
  }

  .filter-option {
    padding: 5px;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  }

  .content-itens {
    width: 1400px;
    margin-top: 20px;
    height: 900px;

    border-radius: 20px;
  }

  .card-item {
    margin: 20px;
    cursor: pointer;
    /* Muda o cursor para indicar que é clicável */
    transition: opacity 0.3s;
    /* Suaviza a transição da opacidade */
  }

  .card-item:hover {
    opacity: 0.5;
    /* Diminui a opacidade quando o mouse passa por cima */
  }
</style>

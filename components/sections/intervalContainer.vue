<!-- @format -->

<template>
  <div class="intervalInfoContainer">
    <div class="center-section">
      <img
        src="/img/intervalo.png"
        alt="Descrição do Card Central" />
    </div>
  </div>
</template>

<style scoped>
  .intervalInfoContainer {
    display: flex;
    width: 100%;

    height: 100%;
    min-height: 500px;
  }

  .center-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* Posição relativa para as seções */
  }

  .center-section img {
    width: auto; /* Largura da imagem */
    height: auto; /* Mantém a proporção da imagem */
    align-content: center;
    max-height: 400px;
    min-width: 1920px;
  }
</style>

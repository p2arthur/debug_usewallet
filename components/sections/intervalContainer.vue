<template>
  <div class="intervalInfoContainer">

    <div class="center-section">
      <img src="/img/intervalo.png" alt="Descrição do Card Central">      
    </div>

  </div>
</template>



  
<style scoped>
.intervalInfoContainer {
  padding-top: -200px;
  display: flex;
  width: 100%;

  height: 100%;
  min-height: 500px;
  position: relative; /* Importante para z-index funcionar */
  z-index: -20; /* Valor menor para ficar atrás de outros elementos */
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
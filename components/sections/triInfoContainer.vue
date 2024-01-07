<template>
  <div class="triInfoContainer">
    <div class="left-section">
      <div class="info-image">
        <div class="card-description">
          <h1>Craft Your Dreams – Shape Your Own Reality in the Metaverse.</h1>
        </div>
      </div>
    </div>
    <div class="center-section">
      <div class="info-image">
        <div class="card-description"><h1>Connect and Collaborate – Share Your Metaverse Creations with the World.</h1></div>
      </div>
    </div>
    <div class="right-section">
      <div class="info-image">
        <div class="card-description"><h1>Explore New Horizons in the Metaverse.</h1></div>
      </div>
    </div>
  </div>
</template>



  
<style scoped>
@font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/400.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}
.triInfoContainer {
  display: flex;
  width: 100%;
  height: 300px;
  padding: 200px;
  padding-top: 100px;
  

  /* background-color: #F4F3F3; */
  min-height: 600px;
}

.left-section, .right-section, .center-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Posição relativa para as seções */
}

.left-section img, .center-section img, .right-section img {
  width: 300px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  display: block; /* Certifica que a imagem não tem espaço extra abaixo */
}

.info-image {
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 300px;
  display: flex; /* Flex para centralizar o conteúdo interno */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
}
.left-section .info-image {
  background-image: url('/img/InfoTable.png');
}
.center-section .info-image {
  background-image: url('/img/InfoTable (2).png');
}

.right-section .info-image {
  background-image: url('/img/InfoTable (3).png');
}


.card-description {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px; /* Largura igual à da imagem */
  height: auto; /* Altura para cobrir o conteúdo */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  padding: 15px; /* Espaçamento interno aumentado */
  text-align: center;
  box-sizing: border-box; /* Inclui o padding na largura total */
}

.card-description h1 {
  font-size: 15px;
  color: #333;
  font-weight: bold;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; /* Permite que o texto quebre em linhas */
  word-wrap: break-word; /* Quebra as palavras para evitar overflow */
}

</style>
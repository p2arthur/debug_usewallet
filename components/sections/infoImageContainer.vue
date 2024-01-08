

<template>
  <div class="fullContainer">
  <div class="infoContainer">
    <div class="left-section">
      <img src="/img/ilustra1.png" alt="Descrição do Card Esquerdo">
      <div class="card-description"></div>
    </div>
    <div class="right-section">
      <img src="/img/card_info1.png" alt="Descrição do Card Direito">
      <div class="card-description">
        <div class="text-container">
          <h1 style="color: #E35151;">Construct</h1>
          In rxelms, building is a journey of creativity and innovation, where users customize virtual spaces with minimal restrictions. It's an opportunity to express individuality and technical skill through unique designs.
          </div>
      </div>
        
    </div>
  </div>
  <div class="infoContainer2">
    <div class="left-section2">
      <img src="/img/card_info1.png" alt="Descrição do Card Direito">
      <div class="card-description2">
        <div class="text-container">
          <h1 style="color: #6C8AF6;">Participate</h1>
          Sharing in rxelms means engaging with a diverse community, showcasing creations, and exchanging ideas. Users can collaborate, participate in events, and display their NFT collections, enriching the collective experience.
          </div>
      </div>
    </div>
    <div class="right-section2">
      <img src="/img/ilustra2.png" alt="Descrição do Card Esquerdo">
      <div class="card-description"></div>
    </div>
  </div>
  <div class="infoContainer3">
    <div class="left-section3">
      <img src="/img/ilustra3.png" alt="Descrição do Card Esquerdo">
      <div class="card-description"></div>
    </div>
    <div class="right-section3">
      <img src="/img/card_info1.png" alt="Descrição do Card Direito">
      <div class="card-description3">
        <div class="text-container3">
          <h1 style="color: #E352A9;">Experience</h1>
          Exploring in rxelms is to delve into a universe of distinct virtual spaces, filled with surprises and interaction opportunities. Users can visit different rxelms, discover exclusive content, and interact with other community members.
          </div>
      </div>
    </div>
  </div>
</div>
</template>



  
<style scoped>
@font-face {
  font-family: 'Helvetica Neue 700';
  src: url('/fonts/helvetica-neue/700.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Helvetica Neue 400';
  src: url('/fonts/helvetica-neue/400.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
.fullContainer {
  background-image: url('/img/background_infoImages.png'); /* Caminho correto para a imagem de fundo */
  background-size: 40%; /* Reduz o tamanho da imagem de fundo para 50% */
  background-repeat: no-repeat; /* Evita a repetição da imagem de fundo */
  background-position: left; 
  background-position-x: 200px;

  display: flex; /* Habilita flexbox */
  flex-direction: column; /* Organiza os filhos em uma coluna */
  align-items: center; /* Centraliza os filhos horizontalmente */
  justify-content: center; /* Centraliza os filhos verticalmente */
  /* Adicione outras propriedades como necessário, como padding, margin, etc. */
}
.infoContainer, .infoContainer2, .infoContainer3 {
  margin-top: -200px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;

  min-height: 600px;
}

.left-section, .right-section {
  display: flex;
  padding-left: 50px;
  justify-content: center;
  align-items: center;
  position: relative; /* Mantém a posição relativa */
  
}

.left-section{
  padding-left: 200px;
}
.left-section img {
  width: 550px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
}

.right-section img {
  width: 430px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */


}

.left-section2, .right-section2 {
  display: flex;
  padding-left: 0px;

  justify-content: center;
  align-items: center;
  position: relative; /* Mantém a posição relativa */
}
.left-section2{
  padding-left: 500px;
  padding-top: -200px;
}
.left-section2 img {
  width: 500px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */

}

.right-section2 img {
  width: 550px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
}

.left-section3, .right-section3 {
  display: flex;
  padding-left: 0px;
  justify-content: center;
  align-items: center;
  position: relative; /* Mantém a posição relativa */
}
.left-section3{
  padding-left: 200px;
}
.left-section3 img {
  width: 700px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  z-index: -10;
}

.right-section3 img {
  width: 450px; /* Largura da imagem */
  padding-left: 50px;
  height: auto; /* Mantém a proporção da imagem */

}

.text-container {
    margin: 30px;
    padding-bottom: 50px;
    font-family: 'Helvetica Neue', sans-serif; /* Certifique-se de que o nome da fonte está correto */
    text-align: justify; /* Alinha o texto justificado */
    display: flex; /* Habilita o flexbox */
    flex-direction: column; /* Define a direção dos itens flex como coluna */
    justify-content: center; /* Centraliza o conteúdo ao longo do eixo principal (vertical) */

    /* Altura do container deve ser definida para centralizar verticalmente */
    height: 200px; /* Exemplo de altura, ajuste conforme necessário */

    /* Adicione outros estilos conforme necessário */
}
.text-container3 {
    margin: 30px;
    padding-bottom: 50px;

    font-family: 'Helvetica Neue', sans-serif; /* Certifique-se de que o nome da fonte está correto */
    text-align: justify; /* Alinha o texto justificado */
    display: flex; /* Habilita o flexbox */
    flex-direction: column; /* Define a direção dos itens flex como coluna */
    justify-content: center; /* Centraliza o conteúdo ao longo do eixo principal (vertical) */

    /* Altura do container deve ser definida para centralizar verticalmente */
    height: 200px; /* Exemplo de altura, ajuste conforme necessário */

    /* Adicione outros estilos conforme necessário */
}
.text-container h1 {
  font-size: 2em; /* Tamanho da fonte maior */
  color: #333; /* Cor da fonte */
  font-weight: bold; /* Peso da fonte */
  margin-bottom: 20px; /* Espaço abaixo do título */

  /* Adicione outros estilos conforme necessário */
}

.card-description {
  position: absolute;
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Ajusta a posição para o centro exato */

  height: auto; /* Altura baseada no conteúdo */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 16px;
  min-width: 400px;
  margin-left: 20px;

  padding: 10px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
}

.card-description2 {
  position: absolute;
  width: auto; /* Largura baseada no conteúdo */
  height: auto; /* Altura baseada no conteúdo */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 16px;

  padding: 10px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
}
.card-description3{
  position: absolute;
  width: 450px; /* Largura baseada no conteúdo */
  height: auto; /* Altura baseada no conteúdo */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 16px;
  margin-left: 40px;

  padding: 10px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
}
/* Estilos adicionais podem ser necessários para ajustar a aparência */
</style>
<template>
  <div class="teamContainer">
    <div class="title">Team</div>
    <!-- Contêiner para section -->
    <div class="sectionContainer">
      <div class="left-section">
        
        <img src="/img/card_team.png" alt="Descrição do Card Esquerdo">
         <div class="pfp"><img src="/img/Teampfp.jpg" alt="Descrição do Card Esquerdo"></div>
         
        
        <div class="card-name"><h4> Ulrik</h4></div>
        <div class="job">GAMEDEV</div>
      </div>
      <div class="center-section">
        <img src="/img/card_team.png" alt="Descrição do Card Central">
          <div class="pfp"><img src="/img/Teampfp.jpg" alt="Descrição do Card Esquerdo"></div>
        <div class="card-name"><h4>David</h4></div>
        <div class="job">CEO</div>
      </div>
      <div class="right-section">
        <img src="/img/card_team.png" alt="Descrição do Card Direito">
          <div class="pfp"><img src="/img/Teampfp.jpg" alt="Descrição do Card Esquerdo"></div>
        <div class="card-name"><h4>Allan</h4></div>
        <div class="job">BACKEND</div>
      </div>
      
    </div>

    <!-- Contêiner para section2 -->
    <div class="section2Container">
      <div class="left-section2">
        <img src="/img/card_team.png" alt="Descrição do Card Esquerdo">
          <div class="pfp"><img src="/img/Teampfp.jpg" alt="Descrição do Card Esquerdo"></div>
        <div class="card-name"><h4>Odi</h4></div>
        <div class="job">3DEV</div>
      </div>
      <div class="right-section2">
        <img src="/img/card_team.png" alt="Descrição do Card Direito">
          <div class="pfp"><img src="/img/Teampfp.jpg" alt="Descrição do Card Esquerdo"></div>
        <div class="card-name"><h4>Stef</h4> 
          <div class="job">DEVCHAIN</div>
          </div>
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
.teamContainer {
  display: flex;
  flex-direction: column; /* Coloca os contêineres em colunas */
  background-color: #FFFFFF;
  min-height: 900px;
}

.sectionContainer, .section2Container {
  display: flex;
  justify-content: space-around; /* Espaçamento uniforme entre os itens */

}


.left-section, .right-section, .center-section, .left-section2, .right-section2 {
  flex: 1; /* Ocupa espaço igual no contêiner */
  display: flex;
  justify-content: center;
  padding-top: 25px;

  align-items: center;
  position: relative; /* Posição relativa para as seções */

  text-align: center;
    font-family: 'Helvetica Neue', sans-serif;

    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.left-section{
  margin-left: 300px;
}
.right-section{
  margin-right: 300px;
}

.left-section2{
  margin-left: 450px;
}
.right-section2{
  margin-right: 450px;
}

.left-section img, .center-section img, .right-section img {
  width: 300px; /* Largura da imagem */

  height: auto; /* Mantém a proporção da imagem */
}

.left-section img, .center-section img, .right-section img, .left-section2 img, .right-section2 img {
  padding: 20px;
  width: 280px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
}

.pfp img {
  position: absolute; /* Posicionamento absoluto em relação ao contêiner pai */
  top: 50%; /* Posição vertical */
  left: 50%; /* Posição horizontal */
  transform: translate(-50%, -50%); /* Centraliza a imagem */
  width: 200px; /* Largura da imagem */
  height: 200px; /* Altura da imagem */
  border-radius: 50%; /* Faz a imagem circular */
}

.card-name {
  /* Estilos da descrição do card */
  font-family: 'Helvetica Neue', sans-serif; /* Especificar a família da fonte se necessário */
  font-weight: 500; /* Mudar para o peso desejado, se houver uma variante carregada para esse peso */


  position: absolute;
  top: 0; /* Começa do topo da seção */
  left: 0; /* Alinha à esquerda da seção */
  width: 100%; /* Largura igual à da seção */
  height: 100%; /* Altura igual à da seção */
  display: flex; /* Usa Flexbox para centralizar */
  justify-content: center; /* Centraliza horizontalmente */

  align-items: flex-end; /* Centraliza verticalmente */
  color: #000000; /* Cor do texto */
  font-size: 16px; /* Tamanho da fonte */
  padding-top: 10px;


  /* Outros estilos para a descrição, como cor de fundo, padding, etc. */
}

.job{
  font-family: 'Helvetica Neue', sans-serif; /* Especificar a família da fonte se necessário */
  font-weight: 200; /* Mudar para o peso desejado, se houver uma variante carregada para esse peso */


  position: absolute;
  top: 0; /* Começa do topo da seção */
  left: 0; /* Alinha à esquerda da seção */
  width: 100%; /* Largura igual à da seção */
  height: 100%; /* Altura igual à da seção */
  display: flex; /* Usa Flexbox para centralizar */
  justify-content: center; /* Centraliza horizontalmente */

  align-items: flex-end; /* Centraliza verticalmente */
  color: #000000; /* Cor do texto */
  font-size: 16px; /* Tamanho da fonte */
  padding-top: 10px;

}

h4 {
    color: #636363;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

.title {
  display: flex;
  justify-content: center;
  color: #494949;
  text-align: center;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 120px;
  font-style: normal;
  font-weight: 400; /* Usa a fonte carregada com peso 200 */
  line-height: normal;
}

</style>
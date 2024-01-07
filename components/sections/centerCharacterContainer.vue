<template>
  <div class="centerCharacterContainer">
    <div class="center-section">
      <img src="/img/center_character.png" alt="Character">
      <div class="card-overlay">
        <img src="/img/center_panel.png" alt="Panel">
        <div class="text-container">
          <h1>Card Title</h1>
          Card Content
        </div>

      </div>      
    </div>
  </div>
  <div class="infoContainer">
    <div class="left-section">
      <img src="/img/nico_token.png" alt="Token Coin">
      <div class="card-description"></div>
    </div>
    <div class="right-section">
      <img src="/img/card_nico.png" alt="Descrição do Card Direito">
      <div class="card-description">
        <div class="text-container">
            <h1>NIKO Coin</h1>
            The NIKO token is the internal currency of the rxelms universe, acting as the foundation for transactions and interactions within the metaverse. It is used in marketplace transactions and voting, and it is also central to participation rewards and encouraging creativity within the community. The distribution strategy of NIKO, managed by Dartroom, emphasizes non-commercialization of the token, prioritizing its use to strengthen the rxelms ecosystem.
          </div>
      </div>
    </div>
  </div>
</template>




  
<style scoped>
.centerCharacterContainer {
  margin-top: -550px;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 1900px;
  position: relative;
  z-index: 10;
}

.text-container h1 {
  font-size: 2em; /* Tamanho da fonte maior */
  color: #333; /* Cor da fonte */
  font-weight: bold; /* Peso da fonte */
  margin-bottom: 20px; /* Espaço abaixo do título */
  /* Adicione outros estilos conforme necessário */
}

.center-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
}

.center-section img {
  width: 50%;
  height: 50%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-overlay img {
  width: 600px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
}

.text-container {
  color: black; /* Cor da fonte preta */
  text-align: center; /* Centraliza o texto */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%; /* Limita a largura máxima do texto */
  font-size: 20px;
  text-align: justify; /* Alinha o texto justificado */
}
.text-container h1 {
  font-size: 2em; /* Tamanho da fonte maior */
  color: #333; /* Cor da fonte */
  font-weight: bold; /* Peso da fonte */
  margin-bottom: 20px; /* Espaço abaixo do título */
  text-align: justify; /* Alinha o texto justificado */
  /* Adicione outros estilos conforme necessário */
}

.infoContainer {
  padding: 200px;
  margin-top: -750px;
  display: flex;
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

.right-section {
  display: flex;
  padding-right: 100px;
  justify-content: center;
  align-items: center;
  position: relative; /* Mantém a posição relativa */
  width: 1000px; /* Defina a largura para corresponder à da imagem */
}

.right-section img {
  width: 700px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  
  
}

.left-section img {
  width: 500px; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
}

.card-description {
  position: absolute;
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Ajusta a posição para o centro exato */
  width: 80%; /* Largura baseada no conteúdo */
  text-align: center; /* Centraliza o texto */
  color: black; /* Cor do texto */
  margin-bottom: 100px;

  /* Adicione outros estilos conforme necessário */
}
</style>
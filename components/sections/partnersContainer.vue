<template>
  <div class="partnersContainer">
    <div class="left-section">
      <img src="/img/rxelms_logo_black.png" alt="Logo Rxelms">
    </div>
    <div class="center-section">
      <div class="center-panel">
          <div class="carrocel-panel">
          <img src="/img/Card (2).png" alt="Partners" class="carousel-item" data-url="https://www.google.com">
          <img src="/img/Card (3).png" alt="Partners" class="carousel-item" data-url="https://www.google.com">
          <img src="/img/Card (4).png" alt="Partners" class="carousel-item" data-url="https://www.google.com">
          <img src="/img/Card (5).png" alt="Partners" class="carousel-item">
          <img src="/img/Card (1).png" alt="Partners" class="carousel-item">
          <img src="/img/Card (6).png" alt="Partners" class="carousel-item">
          <img src="/img/Card (7).png" alt="Partners" class="carousel-item">
        </div>
      </div>
    </div>
    <div class="right-section"></div>
  </div>
</template>


<script>
export default {
  mounted() {
    const centerPanel = this.$el.querySelector('.carrocel-panel');
    let offset = 0;
    const itemWidth = 200; // Substitua 200 pelo valor real de largura do item


    // Adicione o manipulador de eventos de clique aqui
    centerPanel.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('carousel-item')) {
        const url = target.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank'); // Abre o URL em uma nova aba
        }
      }
    })

    setInterval(() => {
      // Move o primeiro item para o final quando ele sai completamente do painel
      if (offset <= -itemWidth) {
        const firstItem = centerPanel.firstElementChild;
        centerPanel.appendChild(firstItem);
        centerPanel.style.transition = 'none'; // Desativa a animação temporariamente
        offset += itemWidth;
        centerPanel.style.transform = `translateX(${offset}px)`;
        // Força o navegador a reconhecer a mudança no transform
        getComputedStyle(centerPanel).transform;
        centerPanel.style.transition = 'transform 0.5s ease'; // Reativa a animação
      }

      // Inicia o deslocamento do próximo item
      offset -= itemWidth;
      centerPanel.style.transform = `translateX(${offset}px)`;
    }, 3000); // Ajuste o tempo conforme necessário
  }
}

</script>
  
<style scoped>
  .partnersContainer {
    display: flex;
    width: 100%;
    height: 300px;
    background-color: #ffffff;
  }

  .left-section, .right-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-item {
  transition: transform 0.5s ease;
}

  .left-section img{
    height: 100px;
  }

  .center-section {
    flex: 0 0 1140px; /* Largura do painel ajustada */
    display: fixed;
    justify-content: center;
    align-items: center;
    padding: 20px
  }

  .center-section {
    width: 1140px;
    height: 247px;


    background-image: url('/img/retangule.png'); /* Imagem de fundo */
    background-size: fixed; /* Garante que a imagem cubra todo o painel */
    background-repeat: no-repeat; /* Impede que a imagem se repita */
    background-position: center; /* Centraliza a imagem no painel */
    
    /* Adicione estilos adicionais conforme necessário */
  }

  .center-panel {
  overflow: hidden; /* Oculta conteúdo que excede os limites */

}
.carrocel-panel{
  display: flex; /* Alinha todos os itens do carrossel em linha */
  transition: transform 0.5s ease; /* Suaviza a animação de movimento */
  will-change: transform; /* Otimiza a animação */
  padding-left: 0px;
  padding-top: 15px;

}

  .center-panel img:not(:last-child) {
    margin-right: 40px; /* Adiciona espaço entre as imagens */

  /* Adiciona uma margem de 40 pixels à direita de cada imagem, exceto a última */
}
</style>
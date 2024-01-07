<template>
  <div class="mapCanvaContainer">
    <div class="center-section">
      <div class="info-image">
        <div class="top"> <h1>Map Rxelms</h1></div>
        <div class="canvadiv">        <canvas ref="mapCanvas" class="react-tile-mapcanvas" 
        @click="handleCanvasClick"
        @mousemove="handleMouseMove"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"></canvas></div>
        <div v-if="selectedGrid" class="info-card" :style="{ top: cardPosition.y + 'px', left: cardPosition.x + 'px' }">
          <p>Coordanete: {{ selectedGrid }}</p>
          <p>Map: {{ mapTitle }}</p>
          <p>Owner: {{ mapOwner }}</p>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Definição das propriedades do Canvas
      gridContainerWidth: 7, // ajuste conforme necessário
      gridContainerHeight: 5, // ajuste conforme necessário
      gridItemSize: 120, // ajuste conforme necessário

      selectedGrid: null,
      cardPosition: { x: 0, y: 0 },
      mapTitle: 'Palace Rxelms',
      mapOwner: 'Owner',

      // Propriedades para arrastar e marcar
      dragging: false,
      dragStartX: 0,
      dragStartY: 0,
      offsetX: 0,
      offsetY: 0,
      markedGrids: [],
    };
  },
  mounted() {
    // Defina o tamanho do canvas aqui
    const canvas = this.$refs.mapCanvas;
    canvas.width = this.gridContainerWidth * this.gridItemSize;
    canvas.height = this.gridContainerHeight * this.gridItemSize;

    this.drawCanvas();

    canvas.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
    canvas.addEventListener('mouseleave', this.handleMouseLeave); // Novo evento
  },
  beforeDestroy() {
    const canvas = this.$refs.mapCanvas;
    canvas.removeEventListener('mousedown', this.handleMouseDown);
    window.removeEventListener('mouseup', this.handleMouseUp);
    canvas.removeEventListener('mouseleave', this.handleMouseLeave); // Novo evento
  },
  methods: {
    drawCanvas() {
      const canvas = this.$refs.mapCanvas;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      

      for (let i = 0; i < this.gridContainerWidth; i++) {
        for (let j = 0; j < this.gridContainerHeight; j++) {
          ctx.fillStyle = this.markedGrids.includes(`${i},${j}`) ? 'red' : '#cccccc';

          // Adiciona bordas cinzas
          ctx.strokeStyle = 'gray';
          ctx.strokeRect(i * this.gridItemSize + this.offsetX, j * this.gridItemSize + this.offsetY, this.gridItemSize, this.gridItemSize);

          ctx.fillRect(i * this.gridItemSize + this.offsetX, j * this.gridItemSize + this.offsetY, this.gridItemSize, this.gridItemSize);
        }
      }
      // Se uma célula está selecionada, desenhe uma borda sobre ela
      if (this.selectedGrid) {
        const [selectedX, selectedY] = this.selectedGrid.split(',').map(Number);
        ctx.strokeStyle = 'blue'; // Cor da borda da célula selecionada
        ctx.lineWidth = 3; // Espessura da borda
        ctx.strokeRect(selectedX * this.gridItemSize + this.offsetX, selectedY * this.gridItemSize + this.offsetY, this.gridItemSize, this.gridItemSize);
      }
    },
    handleMouseDown(event) {
      this.dragging = true;
      this.dragStartX = event.clientX - this.offsetX;
      this.dragStartY = event.clientY - this.offsetY;
    },
    handleMouseUp() {
      this.dragging = false;
    },
    handleMouseMove(event) {
      if (this.dragging) {
        this.offsetX = event.clientX - this.dragStartX;
        this.offsetY = event.clientY - this.dragStartY;
        this.drawCanvas();
      }

      // ... Código existente para o hover
    },
    handleCanvasClick(event) {
    const rect = this.$refs.mapCanvas.getBoundingClientRect();
    const x = event.clientX - rect.left - this.offsetX;
    const y = event.clientY - rect.top - this.offsetY;
    const i = Math.floor(x / this.gridItemSize);
    const j = Math.floor(y / this.gridItemSize);

    if (i < this.gridContainerWidth && j < this.gridContainerHeight) {
      const gridKey = `${i},${j}`;
      if (this.selectedGrid !== gridKey) {
        this.selectedGrid = gridKey;
        // Atualiza a posição do cartão para aparecer ao lado do cursor
        this.cardPosition = { x: event.clientX, y: event.clientY };
      } else {
        this.selectedGrid = null;
      }
      this.drawCanvas();
    }
  },
  },
  
};
</script>




  
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
.mapCanvaContainer {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  width: 100%;
  height: 100vh; /* ou outro valor conforme necessário */
  margin-top: 150px;
  margin-bottom: 150px;

  /* Outros estilos necessários... */

}

.react-tile-mapcanvas {
  /* Certifique-se de que o tamanho do canvas se ajuste dentro da classe info-image */
  max-width: auto;
  max-height: auto;
  margin: 50px;
  background-color: rgb(63, 63, 63);
  border-radius: 20px;
  /* Remova as dimensões fixas se você quiser que ele se ajuste ao contêiner */
}
.mapCanvaContainer {
  display: flex;
  width: 100%;
  height: 1000px;
  padding: 300px;
  padding-top: 400px;

  

  /* background-color: #F4F3F3; */
  min-height: 600px;
}


  .grid-item {
    /* Estilos para cada célula do grid principal */
    background-color:  #aaaaaa;
    position: relative; /* Necessário para posicionar o mini-grid */
    width: 150px;
    height: 150px;
    
  }




 .center-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Posição relativa para as seções */
  font-size: 40px;
}

 .center-section img{
  width: auto; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  display: block; /* Certifica que a imagem não tem espaço extra abaixo */
  
}

.info-image {
  display: flex;
  flex-direction: column; /* Define o layout para coluna */
  justify-content: flex-start; /* Alinha os itens ao início */
  align-items: center; /* Centraliza horizontalmente */
  width: 1000px; /* Ajuste para a largura desejada */
  height: 1000px; /* Ajuste para a altura desejada */
  background-size: cover;
  background-position: center;
  border-radius: 20px;

}

.top {
  width: 100%; /* Ocupa toda a largura da div pai */
  text-align: center; /* Centraliza o texto dentro da div .top */
}

.canvadiv {
  text-align: center;
  display: flex;
}
.info-card {
  position: absolute; /* Posicionamento absoluto */
  background-color: rgb(77, 77, 77);
  border: 1px solid #ddd;
  padding: 8px;
  z-index: 10; /* Garantir que fique acima do canvas */
  border-radius: 10px;
}

.canvadiv {
  position: relative; /* Necessário para o posicionamento absoluto do cartão */
}


.center-section .info-image {
  background-image: url('/img/center_panel.png');
  
}



</style>
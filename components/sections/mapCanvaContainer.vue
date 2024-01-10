<!-- @format -->

<template>
  <div class="map-canva-hero">
    <Header />
    <div class="canva-info-container">
      <div class="info-image">
        <div class="canvadiv">
          <canvas
            ref="mapCanvas"
            class="react-tile-mapcanvas"
            @click="handleCanvasClick"
            @mousemove="handleMouseMove"
            @mousedown="handleMouseDown"
            @mouseup="handleMouseUp"
          ></canvas>
        </div>
        <div
          v-if="selectedGrid"
          class="info-card"
          :style="{ top: cardPosition.y + 'px', left: cardPosition.x + 'px' }"
        >
          <p>Coordinates: {{ selectedGrid }}</p>
          <p>Map: {{ mapTitle }}</p>
          <p>Owner: {{ mapOwner }}</p>
        </div>
      </div>
      <p>Interactive map</p>
    </div>
  </div>
</template>

<script>
import Header from "../map-canvas/Header.vue";

export default {
  components: { Header },

  data() {
    return {
      // Definição das propriedades do Canvas
      gridContainerWidth: 10, // ajuste conforme necessário
      gridContainerHeight: 7, // ajuste conforme necessário
      gridItemSize: 50, // ajuste conforme necessário

      selectedGrid: null,
      cardPosition: { x: 0, y: 0 },
      mapTitle: "Palace Rxelms",
      mapOwner: "Owner",

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

    canvas.addEventListener("mousedown", this.handleMouseDown);
    window.addEventListener("mouseup", this.handleMouseUp);
    canvas.addEventListener("mouseleave", this.handleMouseLeave); // Novo evento
  },
  beforeDestroy() {
    const canvas = this.$refs.mapCanvas;
    canvas.removeEventListener("mousedown", this.handleMouseDown);
    window.removeEventListener("mouseup", this.handleMouseUp);
    canvas.removeEventListener("mouseleave", this.handleMouseLeave); // Novo evento
  },
  methods: {
    drawCanvas() {
      const canvas = this.$refs.mapCanvas;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.gridContainerWidth; i++) {
        for (let j = 0; j < this.gridContainerHeight; j++) {
          ctx.fillStyle = this.markedGrids.includes(`${i},${j}`) ? "red" : "#cccccc";

          // Adiciona bordas cinzas
          ctx.strokeStyle = "gray";
          ctx.strokeRect(
            i * this.gridItemSize + this.offsetX,
            j * this.gridItemSize + this.offsetY,
            this.gridItemSize,
            this.gridItemSize
          );

          ctx.fillRect(
            i * this.gridItemSize + this.offsetX,
            j * this.gridItemSize + this.offsetY,
            this.gridItemSize,
            this.gridItemSize
          );
        }
      }
      // Se uma célula está selecionada, desenhe uma borda sobre ela
      if (this.selectedGrid) {
        const [selectedX, selectedY] = this.selectedGrid.split(",").map(Number);
        ctx.strokeStyle = "blue"; // Cor da borda da célula selecionada
        ctx.lineWidth = 3; // Espessura da borda
        ctx.strokeRect(
          selectedX * this.gridItemSize + this.offsetX,
          selectedY * this.gridItemSize + this.offsetY,
          this.gridItemSize,
          this.gridItemSize
        );
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

          // Adjust the position based on the gridItemSize
          this.cardPosition = {
            x: i * this.gridItemSize + this.offsetX + this.gridItemSize / 1000,
            y: j * this.gridItemSize + this.offsetY + this.gridItemSize / 2,
          };
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
.react-tile-mapcanvas {
  background-color: rgb(20, 17, 38);
  border-radius: 10px;
  /* Remova as dimensões fixas se você quiser que ele se ajuste ao contêiner */
}

.grid-item {
  /* Estilos para cada célula do grid principal */
  background-color: #aaaaaa;
  position: relative; /* Necessário para posicionar o mini-grid */
  width: 150px;
  height: 150px;
}

.canva-info-container img {
  width: 50%;
  width: auto; /* Largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  display: block; /* Certifica que a imagem não tem espaço extra abaixo */
}

.canva-info-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.canvadiv {
  text-align: center;
  display: flex;
}
.info-card {
  position: absolute;
  background-color: rgb(10, 10, 23);
  border: 1px solid #ddd;
  padding: 2px;
  border-radius: 10px;
  opacity: 80%;
}

.map-info-container {
  position: relative;
}

.map-canva-hero {
  display: flex;
  padding: 20px 30px;
  display: flex;
  background-color: rgb(10, 10, 23);
}
</style>

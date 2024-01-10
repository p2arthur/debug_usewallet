<!-- @format -->

<template>
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
        <p>Coordinate: {{ selectedGrid }}</p>
        <p>Map: {{ mapTitle }}</p>
        <p>Owner: {{ mapOwner }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gridContainerWidth: Number,
    gridContainerHeight: Number,
    gridItemSize: Number,

    selectedGrid: String,
    cardPosition: Object,
    mapTitle: String,
    mapOwner: String,

    dragging: Boolean,
    dragStartX: Number,
    dragStartY: Number,
    offsetX: Number,
    offsetY: Number,
    markedGrids: Array,
  },
  mounted() {
    this.drawCanvas();
  },
  methods: {
    drawCanvas() {
      const canvas = this.$refs.mapCanvas;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.gridContainerWidth; i++) {
        for (let j = 0; j < this.gridContainerHeight; j++) {
          ctx.fillStyle = this.markedGrids.includes(`${i},${j}`) ? "red" : "#cccccc";

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

      if (this.selectedGrid) {
        const [selectedX, selectedY] = this.selectedGrid.split(",").map(Number);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 3;
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
      this.dragStartX = event.clientX;
      this.dragStartY = event.clientY;
    },
    handleMouseUp() {
      this.dragging = false;
    },
    handleMouseMove(event) {
      if (this.dragging) {
        this.offsetX += event.clientX - this.dragStartX;
        this.offsetY += event.clientY - this.dragStartY;
        this.dragStartX = event.clientX;
        this.dragStartY = event.clientY;
        this.drawCanvas();
      }
    },
    handleCanvasClick(event) {
      this.$emit("canvasclick", event);
    },
  },
};
</script>

<style scoped>
.react-tile-mapcanvas {
  width: 300px;
  height: 300px; /* Set a height to ensure visibility */
  background-color: rgb(63, 63, 63);
  border-radius: 20px;
}

.canva-info-container {
  background-color: red;
}

.canvadiv {
  display: flex;
  position: relative;
}
.info-card {
  position: absolute;
  background-color: rgb(10, 10, 23);
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 10px;
}

.map-info-container {
  position: relative;
}

.map-canva-hero {
  background-color: rgb(10, 10, 23);
}

/* ... (your existing styles) */
</style>

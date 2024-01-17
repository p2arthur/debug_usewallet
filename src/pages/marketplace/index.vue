<template>
    <div class="home">
        <div class="blur">
            <div class="coming-soon">Coming Soon</div>
        </div>
        <div class="menu-market-div">
            <div class="menu">
                <h1>Lands</h1>
                <h1>Outfit</h1>
                <h1>Furniture</h1>
            </div>
        </div>
        <div class="content-market-div">
            <div class="content-market">
                <div class="content-statics">
                    <h1>Volume:</h1>

                </div>
                <div class="content-itens">
                    <div class="menu-content">
                        <h1 @click="toggleFilterCard">Filter</h1>
                        <!-- Card de Filtro -->
                        <div v-if="isFilterCardVisible" class="filter-card">
                            <div class="filter-option">Newest</div>
                            <div class="filter-option">Price</div>
                            <div class="filter-option">Size</div>
                        </div>
                    </div>
                    <img src="/img/MarketPlace/card_market1.png" alt="ItemSell" class="card-item">
                    <img src="/img/MarketPlace/card_market2.png" alt="ItemSell" class="card-item">
                    <img src="/img/MarketPlace/card_market3.png" alt="ItemSell" class="card-item">
                    <img src="/img/MarketPlace/card_market4.png" alt="ItemSell" class="card-item">
                    <img src="/img/MarketPlace/card_market5.png" alt="ItemSell" class="card-item">
                    <img src="/img/MarketPlace/card_market1.png" alt="ItemSell" class="card-item">
                    <img src="/img/MarketPlace/card_market4.png" alt="ItemSell" class="card-item">
                    <img src="/img/MarketPlace/card_market3.png" alt="ItemSell" class="card-item">
                    <!-- Conteúdo dos itens aqui -->
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const isFilterCardVisible = ref(false);

const toggleFilterCard = () => {
    isFilterCardVisible.value = !isFilterCardVisible.value;
};
</script>



<style scoped lang="scss">
@font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Helvetica Neue 300';
    src: url('/fonts/helvetica-neue/300.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

.blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("/img/MarketPlace/blur.png");
    background-color: #210981;
    background-size: cover;
    z-index: 1000;
    /* Alto z-index para ficar na frente */
    transition: opacity 2s;
    /* Suaviza a transição da opacidade */
    opacity: 80%;
}

.coming-soon {
    padding-top: 300px;
    color: white;
    font-size: 2.5rem;
    /* Ajuste o tamanho da fonte conforme necessário */
    font-weight: bold;
    text-align: center;

}


.menu {
    display: flex;
    /* Mantém o Flexbox */
    justify-content: flex-start;
    /* Alinha os itens à esquerda */
    gap: 50px;
    /* Espaçamento de 50px entre cada item */
    align-items: flex-end;
    /* Alinha os itens na parte inferior */
    height: 100%;
    /* Altura total da div */
    font-size: 10px;
    margin-left: 260px;
}

.menu-market-div {
    height: 200px;
    background-color: #6F6E73;
}

.menu h1 {
    /* Estilos base para os h1 */
    cursor: pointer;
    /* Muda o cursor para indicar que é clicável */
    transition: opacity 0.3s;
    /* Suaviza a transição da opacidade */
}

.menu h1:hover {
    opacity: 0.5;
    /* Diminui a opacidade quando o mouse passa por cima */
}

.content-market-div {
    height: 1000px;
    background-color: #E6E6E6;
    display: flex;
    justify-content: center;
    /* Centraliza horizontalmente */
    filter: grayscale(100%)
}

.content-market {
    border-radius: 20px;
    margin-top: 20px;

    height: auto;
    width: 1400px;
    display: flex;

    flex-direction: column;


}

.content-statics {
    width: 1250px;
    height: 150px;
    background-color: #6F6E73;
    border-radius: 20px;
    justify-content: flex-end;
    /* Alinha os itens à esquerda */
    display: flex;
    align-items: flex-end;
    font-family: 'Helvetica Neue 500';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');




}

.content-statics h1 {
    margin-right: 100px;
    text-align: center;


}

.menu-content h1 {
    color: #5f5f5f;
    margin-left: 10px;
    font-size: 25px;
    margin-top: -15px;
    margin-bottom: -15px;
    font-family: 'Helvetica Neue 300';





}
.filter-card {
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    position: absolute;
    z-index: 100; // Garante que o card fique acima de outros elementos
    // Outros estilos como sombra, bordas arredondadas, etc.
}

.filter-option {
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
}

.content-itens {
    width: 1400px;
    margin-top: 20px;
    height: 900px;

    border-radius: 20px;


}

.card-item {
    margin: 20px;
    cursor: pointer;
    /* Muda o cursor para indicar que é clicável */
    transition: opacity 0.3s;
    /* Suaviza a transição da opacidade */
}

.card-item:hover {
    opacity: 0.5;
    /* Diminui a opacidade quando o mouse passa por cima */
}</style>

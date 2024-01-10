<!-- @format -->

<template>
  <div class="home">
    <div class="home-section">
      <div class="home-section-info">
        <img src="/img/rxelms_logo.png" alt="Logo Rxelms" />

        <h2>Build your place!</h2>
      </div>
    </div>
  </div>
  <MapCanvasContainer />
  <TripleInfoContainer :infoObjects="homeInfo" />
  <InfoImageContainer :infoObjects="infoImage" />
  <PartnersContainer />
  <CenterCharacterContainer />
  <IntervalInfoContainer />
  <TeamContainer :teamList="teamList" />
</template>

<script setup lang="ts">
import MapCanvasContainer from "@/components/sections/mapCanvaContainer.vue";
import PartnersContainer from "@/components/sections/partnersContainer.vue";
import IntervalInfoContainer from "@/components/sections/intervalContainer.vue";
import CenterCharacterContainer from "@/components/sections/centerCharacterContainer.vue";
import TeamContainer from "../components/team/TeamContainer.vue";
import TripleInfoContainer from "~/components/sections/TripleInfoContainer.vue";
import homeInfo from "../content/info/homeInfo";
import infoImage from "../content/info/homeInfoImage";
import teamList from "../content/team/teamList";
</script>

<style scoped lang="scss">
.home {
  background-image: url("/img/backgruond_home2.png");
  background-size: 100% auto; /* Ajusta a largura da imagem para 100% e a altura proporcionalmente */
  background-position: center top; /* Centraliza horizontalmente e alinha ao topo verticalmente */
  background-repeat: no-repeat; /* Evita a repetição da imagem */
  min-height: 100vh;

  height: 100vh; /* Altura total da tela */
  width: 100vw; /* Largura total da tela */

  position: relative;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .home-section {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    min-width: 100%;
    width: 100vw; /* Largura total da viewport */
    height: 80%; /* Altura total (isso pode ser ajustado conforme necessário) */
  }

  .home-section-info {
    width: 100vw; /* Largura total da viewport */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */
    height: 100%; /* Altura ajustada conforme necessário */
  }
  .home-section-info img {
    max-width: 100%; /* Limita a largura da imagem a 100% da div pai */
    height: auto; /* Mantém a proporção da imagem */
  }

  & h1 {
    font-size: 15ch;
    color: $c-secondary;
  }

  &-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: min(100%, 1920px);
    color: #1c1c1c;

    justify-content: center;
    /* Centraliza horizontalmente */
    align-items: center;
    /* Centraliza verticalmente */
    height: 200px;

    &-info {
      margin-top: 15%;
      display: flex;

      flex-direction: column;
      justify-content: center;
      /* Centraliza horizontalmente */
      align-items: center;
      /* Defina uma altura para a div para centralizar verticalmente efetivamente */
    }
  }
}
</style>

<!-- @format -->

<script setup lang="ts">
  import MapCanvasContainer from '@/components/sections/mapCanvaContainer.vue';
  import PartnersContainer from '@/components/sections/partnersContainer.vue';
  import IntervalInfoContainer from '@/components/sections/intervalContainer.vue';
  import CenterCharacterContainer from '@/components/sections/centerCharacterContainer.vue';
  import TeamContainer from '../components/team/TeamContainer.vue';
  import TripleInfoContainer from '~/components/sections/TripleInfoContainer.vue';
  import homeInfo from '../content/info/homeInfo';
  import infoImage from '../content/info/homeInfoImage';
  import teamList from '../content/team/teamList';
  import HeroSection from '../components/hero/HeroSection.vue';
</script>

<template>
  <HeroSection />
  <PartnersContainer />
  <MapCanvasContainer />
  <InfoImageContainer :infoObjects="infoImage" />
  <CenterCharacterContainer />
  <IntervalInfoContainer />
  <TripleInfoContainer :infoObjects="homeInfo" />
  <TeamContainer :teamList="teamList" />
</template>

<style></style>

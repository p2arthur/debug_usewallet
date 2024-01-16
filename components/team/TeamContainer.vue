<!-- @format -->
<script setup lang="ts">
  import TeamCard from '../team/TeamCard.vue';
  const props = defineProps(['teamList']);
</script>

<template>
  <div class="team-container">
    <div class="title-container"><h2 class="title">Team</h2></div>
    <div class="team-list-container">
      <TeamCard
        v-for="teamMember in teamList"
        :teamMember="teamMember" />
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
  }
  .team-container {
    background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
    padding: 10px;
  }

  .team-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 10px;
  }

  .title-container {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 64px;
    margin: 0;
    color: white;
  }
</style>

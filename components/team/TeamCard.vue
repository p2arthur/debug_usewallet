<!-- @format -->

<script setup lang="ts">
  const { teamMember } = defineProps(['teamMember']);
</script>

<template>
  <div class="team-card">
    <div class="team-card-image-container">
      <img
        :src="teamMember.image"
        :alt="`${teamMember.name} Image`"
        class="team-card-image" />
    </div>
    <div class="team-card-text-container">
      <h4 class="team-card-title">{{ teamMember.name }}</h4>
      <div class="team-card-role">{{ teamMember.role.toUpperCase() }}</div>
    </div>
  </div>
</template>

<style scoped>
  .team-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    transition: transform 0.3s ease; /* Added transition for hover effect */
    &:hover {
      transform: scale(1.01);
    }
  }

  .team-card-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
  }

  .team-card-image {
    width: 100%;
    object-fit: cover;
    object-position: top center;
  }

  .team-card-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    background-color: rgb(14, 10, 30);
    bottom: 0;
    border-radius: 0 0 10px 10px;
    padding: 10px 0;
  }

  .team-card-title {
    margin: 0;
    font-size: 2.5rem;
  }

  .team-card-role {
    color: rgb(179, 179, 179);
    font-size: 1.5rem;
  }
</style>

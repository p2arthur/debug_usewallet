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
      <h5 class="team-card-role">{{ teamMember.role.toUpperCase() }}</h5>
    </div>
  </div>
</template>

<style scoped>
  .team-card {
    position: relative;
    overflow: hidden;
    width: 250px;
    height: 300px;
    transition: transform 0.1s ease; /* Added transition for hover effect */

    h5 {
      margin: 0;
    }
  }

  .team-card-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 5px 5px 0px 0px;

    border-bottom: 6px solid rgb(14, 10, 30);
    height: 60%;
    width: 100%;
    transition: 0.1s ease-in-out;

    &:hover {
      scale: 105%;
    }
  }

  .team-card-image {
    width: 100%;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
    object-position: top center;
  }

  .team-card-text-container {
    cursor: pointer;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-radius: 0px 0px 5px 5px;
    border: 2px solid rgb(14, 10, 30);
    position: absolute;
    background-color: rgb(14, 10, 30);
    bottom: 0;
    padding: 10px 0;
    transition: 0.1s ease-in-out;

    &:hover {
      scale: 101%;
      border: 2px solid rgb(14, 10, 30);
      border-bottom: 4px solid white;
    }

    &:active {
      border-bottom: 2px solid white;
    }
  }

  .team-card-title {
    margin: 0;
    font-size: 2.5rem;
  }

  .team-card-role {
    color: rgb(179, 179, 179);
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .team-card {
      height: 200px;
      width: 80%;
    }

    .team-card-image {
      height: 150px;
    }
    .team-card-title {
      margin: 0;
      font-size: 1.5rem;
    }

    .team-card-role {
      color: rgb(179, 179, 179);
      font-size: 1rem;
    }
  }
</style>

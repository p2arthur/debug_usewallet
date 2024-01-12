<!-- @format -->

import { relative } from 'path';
<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['teamMember']);
</script>

<template>
  <div class="team-card">
    <div class="team-card-image-container">
      <img
        class="team-card-image"
        :src="teamMember.image"
        alt="Descrição do Card Esquerdo" />
    </div>
    <div class="team-card-text-container">
      <h4 class="team-card-title">{{ teamMember.name }}</h4>
      <div class="team-card-role">{{ teamMember.role.toUpperCase() }}</div>
    </div>
  </div>
</template>

<style>
  .team-card {
    position: relative;
    border-radius: 10px;
    border: 2px solid #9e86ff;
    overflow: hidden;
    &:hover {
      transform: scale(101%);
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
    bottom: 0%;
    border-radius: 0 0 10px 10px;
    padding: 10px 0;
  }

  .team-card-title {
    opacity: 100%;
    margin: 0;
    font-size: 2.5rem;
  }

  .team-card-role {
    color: rgb(179, 179, 179);
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .team-card {
      width: 40%;
    }
  }
</style>

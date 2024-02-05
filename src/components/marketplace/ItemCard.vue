<!-- @format -->

<script setup lang="ts">
  import { ItemInterface } from '~/interfaces/itemInterface';
  import { capitalizeEachWord } from '~/utils/CapitalizeAllLetters';

  const props = defineProps(['item']);
</script>

<template>
  <NuxtLink :to="`/items/${item.itemId}`">
    <div class="item-card-container">
      <div class="item-card-image-container">
        <!-- <img
          class="item-card-image"
          :src="item.image"
          alt="" /> -->

        <video
          autoplay
          width="100%"
          height="100%"
          muted
          loop>
          <source
            :src="item.image"
            type="video/mp4" />

          Your browser does not support the video tag.
        </video>
      </div>
      <div class="item-card-text-container">
        <h5 class="item-card-collection">{{ item.collection }}</h5>
        <h3 class="item-card-title">{{ capitalizeEachWord(item.name) }}</h3>
        <div class="item-card-baseboard">
          <p>{{ item.price }}A</p>
          <p>{{ item.list_date }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style setup lang="scss">
  .item-card-container {
    background: linear-gradient(to bottom, #1b152b, #100e1d);
    border: 2px solid rgb(53, 31, 74);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 300px;
    gap: 5px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.082);
    transition: transform 0.1s ease;

    &:hover {
      border-color: rgb(125, 79, 178);
      transform: scale(1.01);
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0 0; // Add border-radius if needed
      transition: transform 0.1s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    .item-card-image-container {
      background-color: rgb(0, 0, 0);

      height: 70%;
      width: 100%;
      overflow: hidden;

      .item-card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.1s ease;
        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .item-card-text-container {
      height: 30%;
      padding: 0 10px;
      .item-card-collection {
        font-size: 0.8rem;
        font-weight: 200;
        margin: 0;
      }

      .item-card-title {
        margin: 0;
      }
    }

    .item-card-baseboard {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (max-width: 1300px) {
    .marketplace-itens-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (max-width: 1100px) {
    .marketplace-itens-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 768px) {
    .item-card-container {
      height: 500px;
    }
  }
</style>

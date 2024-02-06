<!-- @format -->

<script setup lang="ts">
  import { ItemInterface } from '~/interfaces/itemInterface';
  import { capitalizeEachWord } from '~/utils/CapitalizeAllLetters';
  import CategoryBadge from '../item/CategoryBadge.vue';
  import MainButton from '../buttons/MainButton.vue';

  const props = defineProps(['item']);
  console.log('item', props.item);
</script>

<template>
  <NuxtLink :to="`/items/${item.itemId}`">
    <div class="item-card-container">
      <CategoryBadge :category="item.category" />
      <div class="item-card-image-container">
        <!-- <img
          class="item-card-image"
          :src="item.image"
          alt="" /> -->

        <video
          class="item-card-image"
          :src="item.image"
          v-if="item.image.slice('.').includes('mp4')"
          autoplay
          width="100%"
          height="100%"
          muted
          loop>
          <source
            :src="item.image"
            type="video/mp4" />
        </video>
        <img
          class="item-card-image"
          v-else
          :src="item.image"
          alt="" />
      </div>
      <div class="item-card-text-container">
        <div>
          <h5 class="item-card-collection">{{ item.collection }}</h5>
          <h3 class="item-card-title">{{ capitalizeEachWord(item.name) }}</h3>
        </div>
        <div class="item-card-baseboard">
          <h3 class="item-card-price">{{ item.price }}A</h3>
          <MainButton
            text="Buy now"
            variant="secondary" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style setup lang="scss">
  .item-card-container {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    border-radius: 5px;

    transition: transform 0.1s ease;
    min-height: 350px;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0px 5px 10px rgba(107, 38, 172, 0.109);
    }

    .item-card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0 0; // Add border-radius if needed
      transition: transform 0.1s ease;

      &:hover {
        transform: scale(1.01);
      }
    }

    .item-card-image-container {
      height: 70%;
      width: 100%;
      position: relative;

      .item-card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.1s ease;
        &:hover {
          transform: scale(1.02);
        }
      }
    }

    .item-card-text-container {
      display: flex;

      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.038) 0%,
        rgba(73, 63, 113, 0.257),
        80%,
        rgba(255, 255, 255, 0.038) 100%
      );
      border-radius: 0px 0px 5px 5px;

      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      gap: 1px;
      transition: 0.1s ease-in-out;

      &:hover {
        scale: 102%;
        background: linear-gradient(
          to bottom right,
          rgba(186, 136, 255, 0.13) 0%,
          rgba(73, 63, 113, 0.257),
          80%,
          rgba(255, 255, 255, 0.038) 100%
        );
        box-shadow: 0px 5px 10px rgba(22, 7, 36, 0.664);
      }

      .item-card-collection {
        padding: 2px 10px;
        font-size: 0.8rem;
        font-weight: 200;
        margin: 0;
      }

      .item-card-title {
        padding: 2px 10px;
        font-size: 1.3rem;
        margin: 0;
      }
    }

    .item-card-baseboard {
      padding: 2px 10px;
      display: flex;
      height: 10%;
      justify-content: space-between;
      align-items: center;

      .item-card-price {
        margin: 0;
        font-size: 1.3rem;
        font-weight: 500;
      }
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
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.038) 0%,
        rgba(73, 63, 113, 0.124),
        80%,
        rgba(255, 255, 255, 0.038) 100%
      );
      gap: 1px;
      justify-content: flex-start;
    }

    .item-card-image-container {
      width: 400px;
      height: 10px;
    }

    .item-card-container .item-card-text-container {
      justify-content: space-between;
      padding: 5px 5px;
      height: 40%;
    }

    .item-card-container .item-card-text-container .item-card-title {
      text-align: center;
      font-size: 1.2rem;
    }

    .item-card-price {
      margin: 0;
      font-size: 1rem;
    }

    .item-card-container .item-card-baseboard .item-card-price {
      font-size: 1rem;
    }

    .item-card-baseboard {
      flex-direction: column;
    }

    .item-card-collection {
      text-align: center;
    }
  }
</style>

<!-- @format -->

<script setup lang="ts">
  import { ItemInterface } from '~/interfaces/itemInterface';
  import { capitalizeEachWord } from '~/utils/CapitalizeAllLetters';

  const props = defineProps(['item']);
  console.log('item', props.item);
</script>

<template>
  <NuxtLink :to="`/items/${item.itemId}`">
    <div class="item-card-container">
      <span class="item-card-category">{{ item.category }}</span>
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
          <p class="item-card-date">
            {{ (item.list_date / 100000000000).toFixed(2) }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style setup lang="scss">
  .item-card-container {
    background: linear-gradient(to bottom, #1b152b, #100e1d);
    border: 2px solid rgba(53, 31, 74, 0.291);
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.082);
    transition: transform 0.1s ease;

    &:hover {
      border-color: rgb(125, 79, 178);
      transform: scale(1.01);
    }

    .item-card-image {
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
      position: relative;

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

    .item-card-category {
      background-color: rgb(125, 79, 178);
      font-size: 1.2rem;
      right: 5px;
      top: 5px;
      padding: 3px;
      border-radius: 2px;
      position: absolute;
      z-index: 10;
    }

    .item-card-text-container {
      height: 30%;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      gap: 1px;

      .item-card-collection {
        font-size: 0.8rem;
        font-weight: 200;
        margin: 0;
      }

      .item-card-title {
        font-size: 1.3rem;
        margin: 0;
      }
    }

    .item-card-baseboard {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item-card-price {
        margin: 0;
        font-size: 1.3rem;
      }

      .item-card-date {
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
    .item-card-image-container {
      width: 400px;
      height: 10px;
    }

    .item-card-container .item-card-text-container {
      justify-content: space-between;
      padding: 5px 5px;
      height: 40%;
    }

    .item-card-container {
      height: 270px;
    }

    .item-card-container .item-card-text-container .item-card-title {
      font-size: 1rem;
    }

    .item-card-price {
      margin: 0;
      font-size: 0.8rem;
    }

    .item-card-container .item-card-baseboard .item-card-price {
      font-size: 1rem;
    }
  }
</style>

<!-- @format -->

<script setup lang="ts">
  import MainButton from '~/components/buttons/MainButton.vue';
  import { capitalizeEachWord } from '~/utils/CapitalizeAllLetters';
  import { ItemInterface } from '~/interfaces/itemInterface';

  interface ItemProfileProps {
    item: ItemInterface;
  }

  const props = defineProps<ItemProfileProps>();
</script>

<template>
  <div class="item-info-card">
    <div class="item-image-container">
      <video
        autoplay
        width="100%"
        height="100%"
        muted
        loop>
        <source
          :src="item.image"
          type="video/mp4" />
      </video>
    </div>
    <div class="item-info-container">
      <div class="item-container">
        <h1 class="item-info-title">
          {{ capitalizeEachWord(props.item.name) }}
        </h1>
        <h3 class="item-info-collection">
          {{ capitalizeEachWord(props.item.collection) }}
        </h3>
        <h3 class="item-info-description">{{ props.item.description }}</h3>
      </div>
      <!-- <div class="item-action-container">
        <span class="item-price-button">{{ props.item.price }}A</span>
        <MainButton
          text="Buy now"
          size="small" />
      </div> -->
    </div>
  </div>
</template>
<style>
  .item-info-card {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.038) 0%,
      rgba(73, 63, 113, 0.257),
      80%,
      rgba(255, 255, 255, 0.038) 100%
    );
    border-radius: 10px;

    .item-image-container {
      padding: 10px;
      width: 30%;
      border-radius: 5px;
      transition: transform 0.1s ease;

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        transform: scale(1.01);
      }
    }

    .item-action-container {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      align-items: center;
      padding: 10px;
      border-bottom: 2px solid rgba(73, 63, 113, 0.257);
    }
  }

  .item-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.05s linear;
    flex-shrink: 80%;

    &:hover {
      scale: 102%;
    }
  }

  .item-info-container {
    width: 70%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    .item-info-title {
      margin: 0;
    }

    .item-info-collection {
      margin: 0;
      font-size: 1rem;
    }
    .item-info-description {
      margin: 0;
      font-weight: 300;
    }

    .item-price-button {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  @media (max-width: 760px) {
    .item-info-card {
      padding: 0;

      .item-info-container {
        background-color: rgba(18, 7, 26, 0.482);
        position: absolute;
        bottom: 0;
        width: 100%;

        padding: 20px 0;

        box-sizing: border-box;
      }

      .item-image-container {
        width: 100%;
      }

      .item-info-title {
        font-size: 2rem;
        text-align: center;
      }

      .item-info-collection {
        text-align: center;
        font-size: 1rem;
      }

      .item-info-description {
        font-size: 0.8rem;
        word-break: break-all;
        text-align: center;
        padding: 0 10px;
        line-height: 0.8rem;
      }
    }
    .item-action-container {
      display: hidden;
    }
  }
</style>

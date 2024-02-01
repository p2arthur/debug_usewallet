<!-- @format -->

<script setup lang="ts">
  import { ItemInterface } from '~/interfaces/itemInterface';

  const props = defineProps(['item']);
</script>

<template>
  <div class="item-card-container">
    <div class="item-card-image-container">
      <img
        class="item-card-image"
        :src="item.image"
        alt="" />
    </div>
    <div class="item-card-text-container">
      <h5 class="item-card-collection">{{ item.collection }}</h5>
      <h3 class="item-card-title">{{ item.name }}</h3>
      <div class="item-card-baseboard">
        <p>{{ item.price }}A</p>
        <p>{{ item.list_date }}</p>
      </div>
    </div>
  </div>
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
</style>

<!-- @format -->

<script setup lang="ts">
  const props = defineProps(['text', 'variant', 'size', 'action']);
</script>

<template>
  <div class="button-container">
    <button
      :class="[
        'main-button',
        { small: props.size === 'small', large: props.size === 'large' },
      ]"
      @click="props.action">
      <div class="button-background-front"></div>
      <!-- <div class="button-background-back"></div> -->
      <h3 class="button-text">{{ text }}</h3>
    </button>
  </div>
</template>

<style lang="scss">
  .button-container {
    display: flex;
    align-items: center;

    height: 44px;
  }

  .main-button {
    pointer-events: all;
    position: relative;
    background-color: #ffffff35;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    border: 2px solid #ffffff;
    border-bottom: 3px solid #ffff;
    font-size: 1.2rem;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: border 0.05s;

    .button-text {
      color: rgb(255, 255, 255);
      margin: 0;
      z-index: 10;
    }

    .button-background-front,
    .button-background-back {
      border-radius: 50%;
      bottom: -50px;
      z-index: 0;
      width: 100%;
      height: 0%;
      position: absolute;
      transition: width 0.2s, height 0.2s, border-radius 0.2s,
        background-color 0.05s; /* Transition properties */
    }

    .button-background-front {
      z-index: 5;
      background-color: rgb(179, 108, 255);
    }

    .button-background-back {
      background-color: rgb(255, 145, 0);
      transition: width 0.1s, height 0.1s, border-radius 0.1s; /* Transition properties */
    }

    &:hover {
      border-bottom: 2px solid #ffff;
    }

    &:active {
      border-bottom: 1px solid #ffff;
      .button-background-front {
        background-color: rgb(161, 99, 227);
      }
    }

    &:hover .button-background-front,
    &:hover .button-background-back {
      width: 100%;
      height: 250%;
      border-radius: 0;
    }

    &:hover .button-text {
      color: #ffffff; /* Change text color on hover */
    }

    &.small {
      font-size: 0.9rem;
      padding: 6px 8px;
    }

    &.large {
      font-size: 1.2rem;
      padding: 12px 16px;
    }

    @media (max-width: 768px) {
      &.small {
        font-size: 0.7rem;
        padding: 6px 8px;
      }

      &.large {
        font-size: 1rem;
        padding: 12px 16px;
      }
    }
  }
</style>

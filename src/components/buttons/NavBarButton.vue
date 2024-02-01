<!-- @format -->

<template>
  <a
    v-if="to"
    :href="to"
    class="nav-button"
    :class="`
      ${active ? 'nav-button-active' : ''}
    `">
    <slot></slot>
  </a>

  <button
    v-else
    :aria-label="name"
    class="nav-button"
    @click="$emit('click')"
    :class="`
      ${active ? 'nav-button-active' : ''}
    `">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  defineProps({
    to: {
      required: false,
      type: String,
    },
    name: {
      required: false,
      type: String,
    },
    active: {
      required: false,
      type: Boolean,
      default: false,
    },
    icon: {
      required: false,
      type: Boolean,
      default: false,
    },
    text: {
      required: false,
      type: Boolean,
      default: true,
    },
  });
</script>

<style lang="scss">
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  .nav-button {
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 0px 8px;
    gap: 16px;
    height: 34px;
    border-bottom: 1px solid transparent;
    font-size: 1rem;
    font-weight: 500;
    outline: 2px solid;
    outline-color: transparent;
    background-color: transparent;
    color: $c-on-secondary !important;
    align-items: center;
    justify-content: center;
    transition: outline-color 100ms ease, background-color 150ms ease,
      color 150ms ease;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &:hover,
    &-active {
      border-bottom: 1px solid white;
    }
  }

  .nav-button-different {
    border: 2px solid #9e86ff;
    border-radius: 20px;
    height: 40px;
    width: 160px;
    align-items: center;
    justify-content: center;
  }
</style>

<template>
  <router-link 
    :to="to" 
    class="button-card-section"
    :class="to === route.path ? 'button-card-section-active' : ''"
  >
    <slot />
  </router-link>
</template>

<script setup lang="ts">

defineProps({
  to: {
    type: String,
    required: true
  }
})

const route = useRoute()

</script>

<style lang="scss">

.button-card-section {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: $c-primary-transparent;
  color: $c-on-primary-transparent;
  padding: 8px 16px;
  border-radius: $radius-m;
  flex-grow: 1;
  transition: background-color 150ms ease;
  outline: 2px solid;
  outline-offset: -2px;
  outline-color: transparent;
  min-height: 40px;

  & svg {
    transition: color 150ms ease !important;
    color: $c-on-primary-transparent;
    min-height: 32px !important;
    min-width: 32px !important;
  }

  & span {
    transition: color 150ms ease !important;
    color: $c-on-primary-transparent !important;
    flex-grow: 1;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
  }

  &:hover {
    background-color: $c-secondary-transparent;
    color: $c-on-secondary-transparent;

    & svg {
      color: $c-on-secondary-transparent;
    }

    & span {
      color: $c-on-secondary-transparent !important;
    }
  }

  &:focus-visible {
    outline-color: $c-on-primary-transparent;
  }

  &-active {
    background-color: $c-secondary-transparent;
    color: $c-on-secondary-transparent;

    & svg {
      color: $c-on-secondary-transparent;
    }

    & span {
      color: $c-on-secondary-transparent !important;
    }
  }
}

</style>
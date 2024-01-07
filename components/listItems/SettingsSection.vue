<template>
  <router-link class="settings-card" :to="to" :title="`${name} settings`">
    <div class="settings-card-icon">
      <slot></slot>
    </div>

    <div class="settings-card-info">
      <span class="settings-card-info-title">{{ name }}</span>
      <span class="settings-card-info-description">{{ description }}</span>
    </div>

    <div class="settings-card-action">
      <IconsChevronRight />
    </div>
  </router-link> 
</template>

<script setup lang="ts">

defineProps({
  name: {
    typeof: String,
    required: true,
  },
  description: {
    typeof: String,
    required: true,
  },
  to: {
    typeof: String,
    required: true,
    default: "/settings",
  }
})

</script>

<style lang="scss">

.settings-card {
  display: flex;
  flex-direction: row;
  height: 48px;
  padding: 16px;
  color: $c-on-background;
  background-color: $c-background-1;
  box-shadow: $shadow-0;
  border-radius: $radius-m;
  gap: 16px;
  max-width: 768px;
  border: none;
  outline: 2px solid;
  outline-color: transparent;
  transition: outline-color 150ms ease;

  &-icon {
    display: flex;
    min-width: 48px;
    min-height: 48px;
    max-width: 48px;
    max-height: 48px;
    align-items: center;
    justify-content: center;
    color: $c-on-background;

    & svg {
      height: 48px !important;
      width: 48px !important;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    max-width: calc(100vw - 48px - 36px - 64px - 32px);
    overflow: hidden;

    & span {
      margin: 0px;
      height: 20px;
    }

    &-title {
      font-size: 1.1rem;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &-description {
      font-size: 0.9rem;
      font-weight: 500;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  &-action {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $c-on-background;
    transition: color 150ms ease;

    & svg {
      height: 36px !important;
      width: 36px !important;
    }
  }

  &:hover {
    .settings-card-action {
      color: $c-secondary;
    }
  }

  &:focus-visible  {
    outline-color: $c-on-background;
  }
}

</style>
<template>
  <router-link class="detailed-link" :to="link">
    <div class="detailed-link-media">
      <img :src="url" alt="" crossorigin="">
    </div>

    <div class="detailed-link-info">
      <span class="detailed-link-info-name">{{ name }}</span>
      <span class="detailed-link-info-address">{{ address }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">

defineProps({
  link: {
    type: String,
    default: "/"
  },
  name: {
    type: String,
    default: ""
  },
  address: {
    type: String,
    default: ""
  },
  url: {
    type: String,
    default: ""
  }
})

</script>

<style scoped lang="scss">

.detailed-link {
  display: flex;
  gap: 8px;
  padding-right: 8px;
  border-radius: $radius-s;
  background-color: transparent;
  color: $c-on-background;
  transition: color 150ms ease, background-color 150ms ease;

  &:hover {
    background-color: $c-primary-transparent;
    color: $c-on-primary-transparent;
  }

  &-media {
    display: flex;
    min-height: 48px; 
    max-height: 48px; 
    min-width: 48px; 
    max-width: 48px;
    border-radius: $radius-s;
    overflow: hidden;
    background-color: $c-flat;
    
    & img {
      min-height: 48px; 
      max-height: 48px; 
      min-width: 48px; 
      max-width: 48px; 
      object-fit: cover;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    max-width: 184px;
    color: inherit;

    &-name {
      height: 24px;
      font-size: 1.1rem;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: inherit;
      overflow: hidden;
    }

    &-address {
      height: 24px;
      font-family: $f-mono;
      font-size: 0.95rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: inherit;
      overflow: hidden;
    }
  }
}

</style>
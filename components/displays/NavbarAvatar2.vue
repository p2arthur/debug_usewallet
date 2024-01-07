<template>
  <button v-if="!detailed" class="navbar-avatar" @click="$emit('click')">
    <img v-if="url && url.length > 0" :src="url" alt="" crossorigin="">
    <span v-else>{{ address.length > 0 ? address.slice(0, 2) : '' }}</span>
  </button>

  <div v-if="detailed" class="navbar-detailed">
    <button class="navbar-avatar" @click="$emit('click')">
      <img v-if="url" :src="url" alt="" crossorigin="">
      <span v-else>{{ address.length > 0 ? address.slice(0, 2) : '' }}</span>
    </button>

    <div class="navbar-name">
      <span class="navbar-name-algo">{{ name }}</span>
      <a class="navbar-name-address" :href="addressLink" target="_blank">{{ address }}</a>
    </div>

    <button class="navbar-logout" @click="$emit('logout')">
      <IconLogout />
    </button>
  </div>
</template>

<script setup lang="ts">

import { openAddress } from '@/functions/Explorer'
import IconLogout from '@/components/icons/Logout.vue'

const settingsStore = useSettingsStore()

const props = defineProps({
  url: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
    default: "",
  },
  detailed: {
    type: Boolean,
    required: false,
    default: false
  }
})

defineEmits(['logout', 'click'])

const addressLink = computed(() => {
  return openAddress(
    props.address,
    settingsStore.appSettings.blockChainExplorer,
    settingsStore.appSettings.network
  )
})

</script>

<style scoped lang="scss">
.navbar-detailed {
  display: flex;
  border: none;
  background-color: transparent;
  padding: 0px;
  max-width: 100%;
  gap: 8px;
}

.navbar-avatar {
  content: "";
  min-height: 48px;
  min-width: 48px;
  max-height: 48px;
  max-width: 48px;
  background-color: $c-on-primary-flat;
  border-radius: $radius-m;
  overflow: hidden;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: 2px solid;
  outline-offset: -2px;
  outline-color: transparent;
  transition: outline-color 150ms ease;

  &:hover {
    outline-color: $c-secondary;
  }

  & span {
    color: $c-on-primary;
    font-size: 1.75rem;
    font-weight: 400;
    font-family: $f-mono;
  }

  & img {
    min-height: 48px;
    min-width: 48px;
    max-height: 48px;
    max-width: 48px;
    object-fit: cover;
  }
}

.navbar-name {
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 48px - 16px - 32px);
  justify-content: space-between;

  &-algo {
    color: $c-on-primary;
    font-weight: 500;
    font-size: 1.15rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &-address {
    color: $c-on-primary;
    font-family: $f-mono;
    font-weight: 400;
    font-size: 0.95rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
  }
}

.navbar-logout {
  border: none;
  background-color: transparent;
  color: $c-on-primary;
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  width: 32px;
  height: 48px;
  padding: 0px;
  border-radius: $radius-m;
  transition: color 150ms ease;

  &:hover {
    color: $c-secondary;
    // background-color: $c-background-secondary;
  }

  & svg {
    min-width: 32px !important;
    min-height: 32px !important;
  }
}
</style>
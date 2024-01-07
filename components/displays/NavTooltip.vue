<template>
  <div class="tooltip">
    <div class="tooltip-card" v-show="on">
      <span class="tooltip-card-text">{{ text }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

defineProps({
  text: {
    required: false,
    type: String,
    default: ""
  },
  on: {
    required: false,
    type: Boolean,
    default: true
  }
})

</script>

<style scoped lang="scss">

.tooltip {
  display: flex;  
}

</style>
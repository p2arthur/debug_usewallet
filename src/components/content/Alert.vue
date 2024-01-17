<template>
  <div :class="`alert alert-${type}`">
    <slot />
  </div>
</template>

<script setup lang="ts">

defineProps({
  type: {
    type: String
  }
})

</script>

<style lang="scss">

.alert {
  display: flex;
  padding: 16px;
  border-radius: $radius-m;
  outline: 2px solid;
  outline-offset: -2px;

  &-warning {
    background-color: #ff910026;
    color: $c-on-warning-transparent;
  }

  & p {
    margin: 0px;
    color: inherit;
  }
}

</style>
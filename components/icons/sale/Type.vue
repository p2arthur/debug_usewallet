<template>
  <div class="sale-type">
    <IconsPriceTag v-if="type.includes('FIXED')" />
    <IconsGavel v-if="type.includes('AUCTION')" />
    <IconsHandshake v-if="type.includes('OFFER')" />

    <div class="sale-type-version">
      <span v-if="type.includes('V1')">V1</span>
      <span v-else>V2</span>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  type: {
    type: String,
    required: true
  }
})

</script>

<style scoped lang="scss">

.sale-type {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $c-primary-transparent;
  width: 52px;
  height: 52px;
  border-radius: $radius-sm;

  & svg {
    min-height: 28px;
    min-width: 28px;
    color: $c-on-background;
  }

  &-version {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: $radius-sm 0px 0px 0px;

    & span {
      color: $c-on-primary-transparent;
      font-size: 0.7rem;
      font-weight: 600;
    }
  }
}
// .sale-type {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   outline: 2px solid $c-on-background;
//   outline-offset: -2px;
//   width: 64px;
//   height: 64px;
//   border-radius: $radius-sm;

//   & svg {
//     min-height: 36px;
//     min-width: 36px;
//     color: $c-on-background;
//   }

//   &-version {
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: $c-on-background;
//     padding: 4px;
//     border-radius: $radius-sm 0px $radius-sm 0px;

//     & span {
//       color: $c-background-0;
//       font-size: 0.7rem;
//     }
//   }
// }

</style>
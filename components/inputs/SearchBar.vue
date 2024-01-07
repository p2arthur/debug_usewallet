<template>
  <div class="search">
    <div class="search-bar">
      <input 
        class="search-bar-input" 
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('update:value', ($event.target as HTMLInputElement).value), $emit('input', ($event.target as HTMLInputElement).value)"
      >
      <IconsSearch />
    </div>

    <div class="search-results" tabindex="1" v-show="value.length > 2 && showResults">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  value: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: "Search"
  },
  showResults: {
    type: Boolean,
    default: true
  }
})

defineEmits(['update:value', 'input'])

</script>

<style scoped lang="scss">

.search {
  position: relative;
  display: flex;
  width: min(100%, 512px);

  &-bar {
    display: flex;
    height: 32px;
    width: 100%;
    background-color: $c-primary-flat;
    color: $c-on-background;
    border-radius: $radius-m;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    outline: 2px solid;
    outline-color: transparent;
    transition: outline-color 150ms ease;

    &:focus-within {
      outline-color: $c-on-background;
    }

    &-input {
      background-color: transparent;
      color: $c-on-background;
      border: none;
      font-family: $f-sans;
      font-weight: 500;
      font-size: 0.95rem;
      outline: none;
      width: 100%;
    }
  }

  &-results {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 64px;
    background-color: $c-primary-flat;
    box-shadow: $shadow-3;
    width: calc(100% - 16px);
    padding: 8px;
    border-radius: $radius-m;
    gap: 8px;
    max-height: 200px;
    overflow: auto;

    @include scrolbar-small($c-scroll-on-background);

    &-item {
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 8px;

      &:focus-within {
        outline: none;

        .search-results-item-selector {
          transform: scaleY(1);
        }
      }

      &:hover {
        .search-results-item-selector {
          transform: scaleY(1);
        } 
      }

      &-selector {
        position: absolute;
        left: 0;
        content: "";
        min-height: 24px;
        width: 4px;
        border-radius: 3px;
        background-color: $c-secondary;
        transform: scaleY(0);
        transition: transform 200ms ease;
      }

      &-row {
        display: flex;
        align-items: center;
        gap: 16px;
        overflow: hidden;

        &-avatar {
          display: flex;
          width: 32px;
          height: 32px;
          min-width: 32px;
          overflow: hidden;
          border-radius: $radius-ss;

          & img {
            width: 32px;
            height: 32px;
            object-fit: cover;
          }
        }

        &-text {
          font-weight: 400;
          font-size: 0.95rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}

</style>
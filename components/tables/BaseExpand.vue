<template>
  <div class="expand-table-wrapper">
    <div class="main-table-y-wrapper">
      <table class="expand-table">
        <thead>
          <tr>
            <slot name="headers"></slot>
          </tr>
        </thead>

        <tbody>
          <slot name="rows"></slot>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

.expand-table-wrapper {
  display: flex;
  overflow-x: auto;

  @include scrolbar-hidden;
}

.main-table-y-wrapper {
  display: flex;
  overflow-y: auto;
  max-height: 494px;
  width: 100%;

  @include scrolbar-hidden;
}

.expand-table {
  table-layout: auto;
  border-collapse: collapse;
  width: 100%;

  & thead {
    position: sticky;
    top: 0;
    z-index: 1;

    & tr {
      height: 36px;
      align-items: center;
      background-color: $c-table-header;
      color: $c-on-table-header;

      & th {
        font-size: 1.15rem;
        font-weight: 500;
      }

      & th:first-of-type {
        border-radius: 0px 0px 0px $radius-s;
      }

      & th:last-of-type {
        border-radius: 0px 0px $radius-s 0px;
      }
    }
  }
  
  & tbody {
    max-height: 100%;
    overflow-y: auto;

    & tr {
      padding: 0px;
      margin: 0px;
      height: 44px;

      & td {
        padding: 0px;
        margin: 0px;
      
        & span {
          font-family: $f-mono;
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }
  }

  &-divider {
    padding: 0px;
    margin: 0px;
    height: 2px !important;

    & td {
      padding: 0px;
      margin: 0px;

      & div {
        display: flex;
        min-height: 2px;
        height: 2px;
        width: 100%;
        background-color: $c-primary-transparent;
        border-radius: $radius-ss;
      }
    }
  }

  &-actions {
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;

    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      color: $c-on-background;
      cursor: pointer;
      min-width: 32px;
      min-height: 32px;
      border-radius: $radius-s;
      transition: background-color 150ms ease;
      gap: 8px;

      &:hover {
        background-color: $c-primary-transparent;
      }

      & svg {
        min-width: 20px;
        min-height: 20px;
        max-width: 20px;
        max-height: 20px;
      }
    }
  }

  &-address {
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    max-width: 96px;
    min-width: 96px;
    width: 100%;
    color: $c-on-background;
  }

  &-price {
    white-space: nowrap;
    max-width: 96px;
    min-width: 96px;
    color: $c-on-background;

    &-group {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;


      & svg {
        height: 20px !important;
        width: 20px !important;
        color: $c-on-background;
      }
    }
  }

  &-fiat {
    white-space: nowrap;
    text-align: center;
    max-width: 96px;
    min-width: 96px;
    color: $c-on-background;
    font-family: $f-mono;
  }
}

</style>
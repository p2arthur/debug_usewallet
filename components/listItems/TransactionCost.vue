<template>
  <button class="txn-cost-item" @click="open = !open">
    <div class="txn-cost-item-leader">
      <IconsMoney />
    </div>

    <div class="txn-cost-item-info">
      <p class="txn-cost-item-info-section">
        <span class="txn-cost-item-info-section-name">Total: </span>
        <span class="txn-cost-item-info-section-amount">{{ '-10.503 ALGO' }}</span>
      </p>
      <span class="txn-cost-item-info-description">{{ "Total free balance: 55.4 ALGO" }}</span>
    </div>

    <div class="txn-cost-item-trailing">
      <IconsChevronRight :style="`transform: rotate(${open ? -90 : 90}deg);`" />
    </div>
  </button>

  <TransitionsExpand>
    <div v-if="open">
      <button class="txn-cost-item" :disabled="true">
        <div class="txn-cost-item-leader">
          <IconsLock />
        </div>

        <div class="txn-cost-item-info">
          <p class="txn-cost-item-info-section">
            <span class="txn-cost-item-info-section-name">Locked balance change: </span>
            <span class="txn-cost-item-info-section-amount">{{ '+0.3 ALGO' }}</span>
          </p>
          <span class="txn-cost-item-info-description">{{ "Total locked balance: 55.4 ALGO" }}</span>
        </div>
      </button>

      <button class="txn-cost-item" :disabled="true">
        <div class="txn-cost-item-leader">
          <IconsCases />
        </div>

        <div class="txn-cost-item-info">
          <p class="txn-cost-item-info-section">
            <span class="txn-cost-item-info-section-name">Deployed in contracts: </span>
            <span class="txn-cost-item-info-section-amount">{{ '+0.2 ALGO' }}</span>
          </p>
          <span class="txn-cost-item-info-description">{{ "Total deployed balance: 12.2 ALGO" }}</span>
        </div>
      </button>

      <button class="txn-cost-item" :disabled="true">
        <div class="txn-cost-item-leader">
          <IconsArrowOutward />
        </div>

        <div class="txn-cost-item-info">
          <p class="txn-cost-item-info-section">
            <span class="txn-cost-item-info-section-name">Payment transfers: </span>
            <span class="txn-cost-item-info-section-amount">{{ '-10 ALGO' }}</span>
          </p>
          <span class="txn-cost-item-info-description">{{ "Balance after payments: 1984.45 ALGO" }}</span>
        </div>
      </button>

      <button class="txn-cost-item" :disabled="true">
        <div class="txn-cost-item-leader">
          <IconsCurrency />
        </div>

        <div class="txn-cost-item-info">
          <p class="txn-cost-item-info-section">
            <span class="txn-cost-item-info-section-name">Transaction fees: </span>
            <span class="txn-cost-item-info-section-amount">{{ '-0.003 ALGO' }}</span>
          </p>
          <span class="txn-cost-item-info-description"></span>
        </div>
      </button>

      <p class="txn-cost-docs">Learn more about the costs of using Algorand in the <a href="https://docs.dartroom.xyz/General/Fees" target="_blank" >documentation</a>.</p>
    </div>
  </TransitionsExpand>
</template>

<script setup lang="ts">

const open = ref(false)

</script>

<style scoped lang="scss">

a {
  color: $c-secondary;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
}

.txn-cost-docs {
  margin: 0px;
  font-size: 0.9rem;
}

.txn-cost-item {
  display: flex;
  align-items: center;
  height: 48px;
  background-color: transparent;
  border: none;
  border-radius: $radius-m;
  padding: 6px;
  max-width: 100%;
  cursor: pointer;
  transition: background-color 150ms ease;
  gap: 12px;
  color: $c-on-background;

  &:hover {
    background-color: $c-hover-on-background;
  }

  &:disabled {
    cursor: default;

    &:hover {
      background-color: transparent;
    }
  }

  &-leader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    min-height: 36px;
    background-color: $c-primary-transparent;
    // outline: 2px solid $c-on-background;
    border-radius: $radius-s;

    & svg {
      color: $c-on-primary-transparent;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;

    &-section {
      margin: 0px;
      font-size: 1rem;
      font-weight: 500;
      display: flex;
      text-overflow: ellipsis;
      white-space: pre-wrap;
      overflow: hidden;
      color: inherit;

      &-amount {
        color: $c-error;
      }
    }

    &-description {
      text-align: left;
      font-size: 0.9rem;
      font-weight: 400;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: inherit;
    }
  }

  &-trailing {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    min-height: 36px;

    & svg {
      transition: transform 150ms ease;
      transform: rotate(90deg);
      min-width: 28px;
      min-height: 28px;
    }
  }
}

</style>
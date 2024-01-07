<template>
  <TooltipsBase>
    <template v-slot:tooltip>
      <div class="currency">
        <div class="currency-header">
          <IconsCurrencyByTag :tag="tag" />

          <div class="currency-header-info">
            <span class="currency-header-info-title">{{ asa.name }}</span>
            <span class="currency-header-info-issuer">by: <a :href="asa.issuer.url" target="_blank">{{ asa.issuer.name }}</a></span>
          </div>
        </div>

        <div class="currency-body">
          <p>price: {{quote}}</p>
        </div>

        <!-- <div class="currency-action">
          <ButtonsTextButton>
            <IconsChevronRight style="transform: rotate(90deg);" />
          </ButtonsTextButton>
        </div> -->
      </div>
    </template>
    <template v-slot:content>
      <slot></slot>
    </template>
  </TooltipsBase>
</template>

<script setup lang="ts">

import { ASACode, asaList } from '@/functions/prices/currencyLists'

const props = defineProps({
  tag: {
    type: String as PropType<ASACode>,
    required: true
  }
})

const quotes = useFiatQuote()
const currencyFormater = useCurrencyFormater({
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const quote = computed(() => {
  return currencyFormater.value.format(quotes.value.get(props.tag))
})

const asa = computed(() => {
  return asaList.find((a) => a.symbol === props.tag) || asaList[0]
})

</script>

<style scoped lang="scss">

.currency {
  display: flex;
  flex-direction: column;
  padding: 12px;
  align-items: center;

  &-header {
    display: flex;
    gap: 16px;

    & svg {
      color: $c-on-background;
      height: 40px !important;
      width: 40px !important;
    }

    &-info {
      display: flex;
      flex-direction: column;

      &-title {
        font-weight: 500;
        font-size: 1rem;
      }

      &-issuer {
        font-weight: 400;
        font-size: 0.9rem;

        & a {
          font-weight: 500;
          text-decoration: underline;
        }
      }
    }
  }

  &-body {
    padding-top: 8px;

    & p {
      font-weight: 400;
      margin: 0px;
      font-family: $f-mono;
    }
  }
}

</style>
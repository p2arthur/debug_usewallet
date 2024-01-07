<template>
  <div class="edit-traits">
    <div class="edit-traits-list">
      <span class="edit-traits-list-header">Trait type</span>
      <span class="edit-traits-list-header">Values</span>
      <span class="edit-traits-list-header"></span>

      <template v-for="(trait, index) in parsedTraits" :key="index">
        <div class="edit-traits-list-item-input">
          <input
            type="text" 
            placeholder="Color"
            v-model="trait.traitType"
            @input="updateTraits()"
          >
        </div>

        <div class="edit-traits-list-item-input">
          <input
            type="text"
            placeholder="Red, Green, Blue"
            v-model="trait.values"
            @input="updateTraits()"
          />
        </div>

        <ButtonsIcon @click="removeTrait(index)">
          <IconsMinus />
        </ButtonsIcon>
      </template>

      <div class="edit-traits-list-action">
        <ButtonsTextButton @click="addTrait()">
          <IconsAdd />
          <span>Add trait</span>
        </ButtonsTextButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { CollectionSettingsAttribute } from '@/graphql/client'

const props = defineProps({
  traits: {
    type: Array as PropType<Array<CollectionSettingsAttribute>>,
    required: true
  }
})

const emits = defineEmits(['update:traits'])

type ParsedTrait = {
  displayType: string,
  traitType: string,
  values: string,
  range: {
    min: number
    max: number
    usedValues: Array<number>
  }
}

const parsedTraits: Ref<Array<ParsedTrait>> = ref([])

const unParsedTraits = computed(() => {
  return props.traits
})

useAsyncData(async () => {
  parsedTraits.value = props.traits.map((trait) => {
    return {
      ...trait,
      values: trait.values.map((value) => value.value).join(', ')
    }
  })
})

watch(unParsedTraits, () => {
  parsedTraits.value = props.traits.map((trait) => {
    return {
      ...trait,
      values: trait.values.map((value) => value.value).join(',')
    }
  })
})

const defaultTrait = {
  displayType: "TEXT",
  traitType: "",
  values: [],
  range: {
    min: 0,
    max: 100,
    usedValues: [] as Array<number>
  }
}

function addTrait () {
  emits('update:traits',[...props.traits, JSON.parse(JSON.stringify(defaultTrait))])
}

function removeTrait (index: number) {
  parsedTraits.value.splice(index, 1)
  emits('update:traits', unParseTraits(parsedTraits.value))
}

function updateTraits () {
  emits('update:traits', unParseTraits(parsedTraits.value))
}

function unParseTraits (traits: Array<ParsedTrait>) {
  return traits.map((trait, t) => {
    const ot = props.traits[t]

    return {
      ...trait,
      values: trait.values.split(',').map((value, v) => {
        const ov = ot.values[v]

        return {
          ...ov,
          value: value,
        }
      })
    }
  })
}

</script>

<style scoped lang="scss">

.edit-traits {
  display: flex;
  max-width: min(100%, 400px);
  min-width: 100%;

  &-list {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(2, calc(50% - 28px)) 40px;
    max-width: 100%;
    min-width: 100%;

    &-header {
      font-weight: 400;
    }

    &-item {

      &-input {
        display: flex;
        
        & input {
          height: 24px;
          margin: 0px;
          font-family: $f-sans;
          font-size: 0.95rem;
          font-weight: 500;
          border: none;
          background-color: transparent;
          outline: 2px solid;
          outline-color: inherit;
          outline-offset: -2px;
          padding: 8px;
          border-radius: $radius-s;
          transition: outline-color 150ms ease, color 150ms ease;
          color: inherit;
          color: $c-on-background;
          max-width: calc(100% - 16px);

          &:focus-visible {
            outline-color: $c-secondary;
          }

          &::placeholder {
            color: $c-primary-transparent;
          }
        }
      }

      &-area {
        display: flex;

        & textarea {
          display: block;
          background-color: transparent;
          border: none;
          outline: 2px solid;
          outline-offset: -2px;
          outline-color: $c-on-background;
          border-radius: $radius-s;
          padding: 8px;
          font-family: $f-sans;
          font-size: 0.95rem;
          font-weight: 500;
          transition: outline-color 150ms ease;
          color: $c-on-background;
          min-width: calc(100% - 16px);
          max-width: calc(100% - 16px);
          resize: none;
          overflow: hidden;
          height: auto;
          
          &:focus-visible {
            outline-color: $c-secondary;
          }
        }
      }
    }

    &-action {
      column-span: 3;
      width: 100%;
      height: 40px;
    }
  }
}

</style>
<template>
  <div class="select-trait">
    <div class="select-trait-list">
      <div class="select-trait-list-header">
        <span>Trait</span>
        <span>Value</span>
        <span></span>
      </div>
    </div>

    <div class="select-trait-list-item">
      <template v-for="(trait, index) in selectedTraits" :key="index">
        <SelectionOption 
          :selected="trait.selected"
          :options="availableTraits"
          placeholder="Select a trait"
          @change="changeTrait(index, $event.value)"
        />

        <SelectionOption 
          :selected="selectedTrait(trait.selected.value)"
          :options="traitValues(trait.selected.value)"
          placeholder="Select a value"
          @change="changeTraitValue(index, $event.value)"
        />

        <ButtonsTextButton @click="removeTrait(index)">
          <IconsRemove />
        </ButtonsTextButton>
      </template>
    </div>

    <div class="select-trait-list-action">
      <ButtonsTextButton @click="addTrait()">
        <IconsAdd />
        <span>Add trait</span>
      </ButtonsTextButton>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { 
  CollectionAttribute, 
  NftSettingsCollectionAttribute 
} from '@/graphql/client'

const props = defineProps({
  available: {
    type: Array as PropType<Array<CollectionAttribute>>,
    required: true
  },
  selected: {
    type: Array as PropType<Array<NftSettingsCollectionAttribute>>,
    required: true
  }
})

const emits = defineEmits(['update:selected'])

const availableTraits = computed(() => {
  return props.available.map((trait) => {
    return {
      display: trait.traitType,
      value: trait
    }
  })
})

const selectedTraits = computed(() => {
  return props.selected.map((trait) => {
    return {
      selected: {
        display: trait.traitType,
        value: trait
      }
    }
  })
}) 

function traitValues (trait: NftSettingsCollectionAttribute) {
  const fullTrait = props.available.find((t) => t.traitType === trait.traitType)

  if (fullTrait) {
    return fullTrait.values.map((value) => {
      return {
        display: value.value,
        value: value.value
      }
    })
  } else {
    return [] as Array<{ display: string, value: any }>
  }
}

function selectedTrait (trait: NftSettingsCollectionAttribute) {
  return {
    display: trait.value,
    value: trait.value
  }
}

function addTrait () {
  emits('update:selected',[...props.selected,{
    displayType: props.available[0].displayType,
    traitType: props.available[0].traitType,
    value: props.available[0].values[0].value
  }])
}

function removeTrait (index: number) {
  const traits = props.selected
  traits.splice(index, 1)
  emits('update:selected', traits)
}

function changeTrait (index: number, trait: CollectionAttribute) {
  const traits = props.selected
  traits[index].traitType = trait.traitType
  traits[index].value = trait.values[0].value
  emits('update:selected', traits)
}

function changeTraitValue (index: number, value: string) {
  const traits = props.selected
  traits[index].value = value
  emits('update:selected', traits)
}

</script>

<style scoped lang="scss">

.select-trait {

  &-list {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 36px;

    &-header {
      grid-column: span 3;
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 1fr 36px;
    }

    &-item {
      grid-column: span 3;
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 1fr 36px;

    }

    &-action {
      grid-column: span 3;
      height: 48px;

    }
  }
}

</style>
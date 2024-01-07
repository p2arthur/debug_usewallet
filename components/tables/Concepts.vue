<template>
  <TablesBaseMultiSelect
    :allSelected="allSelected" 
    :page-info="editNFTStore.nftsPageInfo || undefined"
    @update:allSelected="selectAll"
  >
    <template v-slot:headers>
      <th></th>
      <th>Title</th>
      <th>Type</th>
      <th>Collection</th>
    </template>

    <template v-slot:rows>
      <template
        v-if="nfts"
        v-for="(nft, index) in nfts"
        :key="index"
      >
        <tr v-if="nft.id">
          <td>
            <div class="concepts-table-checkbox">
              <SelectionCheckbox
                :label="'multi-table-row-' + index"
                :value="checkSelected(nft.id)"
                @update:value="select(nft.id || '', $event)"
              />
            </div>
          </td>
          <td class="concepts-table-preview">
            <div class="concepts-table-preview-image">
              <img v-if="nft.media" :src="resolveCid(nft.media ? (nft.media.mimeType === `video/mp4` ? (nft.media.thumbnail || '') : nft.media) : '', 256)" alt=""  crossorigin="">
            </div>
          </td>
          <td>
            <span>{{ nft.info.title  }}</span>
          </td>
          <td>
            <span>{{ nft.media?.mimeType || '' }}</span>
          </td>
          <td>
            <span>{{ nft.c?.id || '' }}</span>
          </td>
        </tr>

        <tr v-if="index + 1 < nfts.length" class="multi-table-divider">
          <td :colspan="5">
            <div></div>
          </td>
        </tr>
      </template>
    </template>
  </TablesBaseMultiSelect>

  <div v-if="isDesktop && mounted">
    <SelectionMultiAction
      :open="settignsStore.appSettings.manageLayout === 'DENSE' && selected.length > 0"
      :actions="actions"
      :nfts="selectedNFTs"
      @deselect="deselect"
      @deselectAll="selectAll(false)"
    />
  </div>
</template>

<script setup lang="ts">

import type { Ref } from 'vue'
import { resolveCid } from '@/functions/media'
import { NftSettings } from '@/graphql/client'
import type { MenuItem } from '@/components/selection/Menu.vue'

type Actions = (nfts: Array<NftSettings>) => Array<MenuItem>

const props = defineProps({
  nfts: Object as PropType<Array<NftSettings>>,
  actions: {
    type: Function as PropType<Actions>,
    required: true
  }
})

const editNFTStore = useEditNFTStore()
const settignsStore = useSettingsStore()
const isDesktop = useIsDesktop()
const mounted = ref(false)

await onMounted(async () => {
  await nextTick()
  mounted.value = true
})

const selected: Ref<Array<string>> = ref([])
const allSelected: Ref<boolean> = ref(false)
const selectedNFTs = computed(() => {
  if (props.nfts) {
    return props.nfts.filter((nft) => nft.id ? selected.value.includes(nft.id) : false)
  } else {
    return []
  }
})

function select (id: string, v: boolean) {
  if (v) {
    selected.value.push(id)

    if (selected.value.length === props.nfts?.length) {
      allSelected.value = true
    }
  } else {
    const index = selected.value.indexOf(id)
    selected.value.splice(index, 1)

    if (selected.value.length !== props.nfts?.length) {
      allSelected.value = false
    }
  }
}

function selectAll (v: boolean) {
  if (v) {
    if (props.nfts) {
      selected.value = props.nfts.map((nft) => { return nft.id || '' })
    }
  } else {
    selected.value = []
  }
  allSelected.value = v
}

function checkSelected (id: string) {
  return Boolean(selected.value.find((nft) => nft === id))
}

function deselect (id: string) {
  select(id, false)
}

const actions = computed(() => {
  return props.actions(selectedNFTs.value)
})

</script>

<style lang="scss">

.concepts-table {

  &-preview {
    width: 36px;
    padding: 4px;

    &-image {
      display: flex;
      max-width: 36px;
      min-width: 36px;
      max-height: 36px;
      min-height: 36px;
      overflow: hidden;
      border-radius: $radius-s;
      background: $c-flat;

      & img {
        object-fit: cover;
        max-width: 36px;
        min-width: 36px;
        max-height: 36px;
        min-height: 36px;
      }
    }
  }

  &-checkbox {
    padding: 10px;
    position: relative;

    & input[id|="multi-table-row"]:checked + svg[id|="multi-table-row"] {
      color: $c-background-0; 
    }
  }
}

</style>
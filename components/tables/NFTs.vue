<template>
  <TablesBaseMultiSelect
    :allSelected="allSelected" 
    :page-info="pageInfo || createdNFTsStore.nftsPageInfo || undefined"
    @update:allSelected="selectAll"
  >
    <template v-slot:headers>
      <th></th>
      <th>Title</th>
      <th>Index</th>
      <th>You hold</th>
    </template>

    <template v-slot:rows>
      <template
        v-for="({ nft, balance }, index) in nfts"
        :key="index"
      >
        <tr>
          <td>
            <div class="nfts-table-checkbox">
              <SelectionCheckbox 
                :label="'multi-table-row-' + index"
                :value="checkSelected(nft.id)"
                @update:value="select(nft.id || '', $event)"
              />
            </div>
          </td>
          <td class="nfts-table-preview">
            <router-link class="nfts-table-preview-image" :to="`/nfts/${nft.token.index}`">
              <img :src="resolveCid(nft.media.thumbnail ? nft.media.thumbnail : nft.media, 256)" alt="">
            </router-link>
          </td>
          <td>
            <span>{{ nft.info.title }}</span>
          </td>
          <td>
            <span>{{ nft.token.index }}</span>
          </td>
          <td>
            <span>{{ balance }}/{{ nft.token.editions }} ed.</span>
          </td>
        </tr>

        <tr v-if="index + 1 < 25" class="multi-table-divider">
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

import type { Nft, CreatedNft, PageInfo } from '@/graphql/client'
import type { MenuItem } from '@/components/selection/Menu.vue'

import { resolveCid } from '@/functions/media'

type Actions = (nfts: Array<Nft>) => Array<MenuItem>

const props = defineProps({
  nfts: {
    type: Array as PropType<Array<CreatedNft>>,
    required: true
  },
  actions: {
    type: Function as PropType<Actions>,
    required: true
  },
  pageInfo: Object as PropType<PageInfo>
})

const emit = defineEmits(['change'])

const router = useRouter()
const createdNFTsStore = useCreatedNFTsStore()
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
    return props.nfts
      .filter((created) => created.nft.id ? selected.value.includes(created.nft.id) : false)
      .map((created) => created.nft)
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
      selected.value = props.nfts.map((created) => { return created.nft.id || '' })
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

watch(selected, () => {
  emit('change')
})

</script>

<style lang="scss">

.nfts-table {

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
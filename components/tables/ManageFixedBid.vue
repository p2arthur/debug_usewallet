<template>
  <TablesBaseMultiSelect
    :allSelected="allSelected" 
    :page-info="createdNFTsStore.fixedBidPageInfo || undefined"
    @update:allSelected="selectAll"
  >
    <template v-slot:headers>
      <th></th>
      <th :colspan="2" style="text-align: center;">price</th>
      <th>tokens</th>
      <th>Title</th>
      <th>Index</th>
    </template>

    <template v-slot:rows>
      <template
        v-for="(listing, index) in listings"
        :key="listing.appId"
      >
        <tr v-if="listing.nft">
          <td>
            <div class="nfts-table-checkbox">
              <SelectionCheckbox
                :label="'multi-table-row-' + index"
                :value="checkSelected(listing.appId)"
                @update:value="select(listing.appId, $event)"
              />
            </div>
          </td>
          <td class="nfts-table-preview">
            <router-link class="nfts-table-preview-image" :to="`/nfts/${listing.nft.token.index}`">
              <img :src="resolveCid(listing.nft.media.thumbnail ? listing.nft.media.thumbnail : listing.nft.media, 256)" alt="">
            </router-link>
          </td>
          <td class="nfts-table-price">
            <div class="nfts-table-price-group">
              <span>{{ listing.price }}</span>
              <IconsCurrencyByTag :tag="listing.currency" />
            </div>
          </td>
          <td>
            <span>~{{ currencyFormater.format(convertPrice(listing)) }}</span>
          </td>
          <td>
            <span>{{ listing.status?.balance || 0 }}/{{ listing.nft.token.editions }} ed.</span>
          </td>
          <td>
            <span>{{ listing.nft.info.title }}</span>
          </td>
          <td>
            <span>{{ listing.nft.token.index }}</span>
          </td>
        </tr>

        <tr v-if="index + 1 < 25" class="multi-table-divider">
          <td :colspan="7">
            <div></div>
          </td>
        </tr>
      </template>
    </template>
  </TablesBaseMultiSelect>

  <div v-if="isDesktop && mounted">
    <SelectionMultiAction
      :open="settingsStore.appSettings.manageLayout === 'DENSE' && selected.length > 0"
      :actions="actions"
      :nfts="selectedNFTs"
      @deselect="deselect"
      @deselectAll="selectAll(false)"
    />
  </div>
</template>

<script setup lang="ts">

import type { GetFixedBidsByArtistQuery } from '@/graphql/client'
import type { PropType } from 'vue'
import type { MenuItem } from '@/components/selection/Menu.vue'

import { resolveCid } from '@/functions/media'
import { list } from 'postcss'

type Actions = (nfts: GetFixedBidsByArtistQuery['getFixedBidsByArtist']['listings']) => Array<MenuItem>

const props = defineProps({
  listings:{
    type: Object as PropType<GetFixedBidsByArtistQuery['getFixedBidsByArtist']['listings']>,
    required: true
  },
  actions: {
    type: Function as PropType<Actions>,
    required: true
  }
})

const emit = defineEmits(['change'])

const router = useRouter()
const priceStore = usePriceStore()
const createdNFTsStore = useCreatedNFTsStore()
const settingsStore = useSettingsStore()
const fiatQuote = useFiatQuote()
const isDesktop = useIsDesktop()
const mounted = ref(false)

await onMounted(async () => {
  await nextTick()
  mounted.value = true
})

const selected: Ref<Array<number>> = ref([])
const allSelected: Ref<boolean> = ref(false)
const selectedNFTs = computed(() => {
  if (props.listings) {
    return props.listings
      .filter((listing) => selected.value.includes(listing.appId))
      .map((listing) => listing.nft)
  } else {
    return []
  }
})

function select (appId: number, v: boolean) {
  if (v) {
    selected.value.push(appId)

    if (selected.value.length === props.listings.length) {
      allSelected.value = true
    }
  } else {
    const index = selected.value.indexOf(appId)
    selected.value.splice(index, 1)

    if (selected.value.length !== props.listings.length) {
      allSelected.value = false
    }
  }
}

function selectAll (v: boolean) {
  if (v) {
    if (props.listings) {
      selected.value = props.listings.map((listing) => { return listing.appId })
    }
  } else {
    selected.value = []
  }
  allSelected.value = v
}

function checkSelected (appId: number) {
  return Boolean(selected.value.find((listing) => listing === appId))
}

function deselect (appId: number) {
  select(appId, false)
}

const actions = computed(() => {
  const listings = props.listings.filter((listing) => selected.value.includes(listing.appId))
  return props.actions(listings)
})

watch(selected, () => {
  emit('change')
})

const currencyFormater = useCurrencyFormater()

function convertPrice (listing: GetFixedBidsByArtistQuery['getFixedBidsByArtist']['listings'][0]) {
  const price = listing.price
  const asa = listing.currency
  
  return fiatQuote.value.get(asa) * price
}

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

  &-price {
    white-space: nowrap;
    max-width: 96px;
    min-width: 96px;
    color: $c-on-background;

    &-group {
      display: flex;
      align-items: center;
      justify-content: center;

      & svg {
        height: 20px !important;
        width: 20px !important;
      }
    }
  }
}

</style>
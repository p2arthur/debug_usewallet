<template>
  <TablesBaseMultiSelect :multiselect="false" :page-info="pageInfo || undefined">
    <template v-slot:headers>
      <th>Name</th>
      <th>Wallets</th>
      <th>Period</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Status</th>
      <th>Options</th>
    </template>

    <template v-slot:rows>
      <template v-for="(band, index) in bands" :key="index">
        <tr>
          <td><span>{{ band.name }}</span></td>
          <td><span v-for="(wallet, i) in band.wallets" :key="i">
              {{ wallet }}
              <br />
            </span></td>
          <td>
            <span v-if="band.date">{{ band.period }}</span>
          </td>
          <td>
            <span v-if="band.date">{{ timestampToDate(band.date.startDate) }}</span>
          </td>
          <td class="default-table-td">
            <span v-if="band.date">{{ timestampToDate(band.date.endDate) }}</span>
          </td>
          <td><span>{{ band.status }}</span></td>
          <td>
            <div class="application-table-actions">
              <ButtonsInlineButton @click="" class="error error-hover" title="Reject">
                <IconsBlock />
              </ButtonsInlineButton>
              <ButtonsInlineButton @click="" class="warning warning-hover" title="Request source material">
                <IconsPrivacy />
              </ButtonsInlineButton>
              <ButtonsInlineButton @click="" class="success success-hover" title="Accept">
                <IconsVerified />
              </ButtonsInlineButton>
            </div>
          </td>
        </tr>

        <tr v-if="index + 1 < (bands?.length || 0)" class="multi-table-divider">
          <td :colspan="5">
            <div></div>
          </td>
        </tr>


      </template>
    </template>
  </TablesBaseMultiSelect>

  <!-- Resto do seu código -->
</template>

<script setup lang="ts">

import { BandStatuses } from '@/stores/admin'
import type { BandDetails, PageInfo } from '@/graphql/client'

defineProps({
  bands: Array as PropType<Array<BandDetails>>,
  pageInfo: Object as PropType<PageInfo>
})


function formatDate(startDate: string, endDate: string) {
  const startTimestamp = parseInt(startDate, 10);
  const endTimestamp = parseInt(endDate, 10);
  const difference = new Date(endTimestamp).getTime() - new Date(startTimestamp).getTime();
  const differenceInMin = difference / (1000 * 60);

  if (differenceInMin < (60 * 24 * 90)) {
    return `${-Math.round(differenceInMin / (60 * 24))} days ago`;
  }
  const res = -Math.round(differenceInMin / (60 * 24 * (365 / 12)));
  return `${res} ${res > 1 ? 'months' : 'month'} ago`;

}

function timestampToDate(timestamp: string) {
  const date = new Date(parseInt(timestamp,10));
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 porque os meses são zero indexados
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}


const adminStore = useAdminStore()
const { text, copy, copied, isSupported } = useClipboard()

</script>

<style scoped lang="scss">
.band-table {

  &-links {
    padding-left: 8px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 96px;
    min-width: 96px;
    width: 99%;
  }

  &-actions {
    display: flex;
    flex-wrap: nowrap;

    & button {
      min-height: 36px;
    }
  }
}

td {

  & span {
    white-space: nowrap;
  }
}
</style>
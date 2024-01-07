<template>
  <TablesBaseMultiSelect
    :multiselect="false"
    :page-info="pageInfo || undefined"
  >
    <template v-slot:headers>
      <th>Name</th>
      <th>Twitter</th>
      <th>Links</th>
      <th>Status</th>
      <th>Actions</th>
    </template>

    <template v-slot:rows>
      <template
        v-for="(application, index) in applications"
        :key="index"
      >
        <tr>
          <td><span>{{ application.name }}</span></td>
          <td class="default-table-td">
            <a 
              v-if="application.twitter" 
              :href="`https://twitter.com/${application.twitter}`" 
              target="_blank"
            >@{{ application.twitter }}</a>
          </td>
          <td class="application-table-links"><span>{{ application.links }}</span></td>
          <td><span>{{ application.status }}</span></td>
          <td>
            <div class="application-table-actions">
              <ButtonsInlineButton 
                @click="changeStatus(application.id, ApplicationStatuses.ApplicationRejected)" 
                class="error error-hover" 
                title="Reject"
              >
                <IconsBlock />
              </ButtonsInlineButton>
              <ButtonsInlineButton
                @click="changeStatus(application.id, ApplicationStatuses.UploadingArtworks)" 
                class="warning warning-hover" 
                title="Request source material"
              >
                <IconsPrivacy />
              </ButtonsInlineButton>
              <ButtonsInlineButton
                @click="changeStatus(application.id, ApplicationStatuses.ApplicationAccepted)" 
                class="success success-hover" 
                title="Accept"
              > 
                <IconsVerified />
              </ButtonsInlineButton>
              <ButtonsInlineButton
                v-if="application.inviteLink"
                @click="copyInviteLink(application.inviteLink)" 
                class="success success-hover" 
                title="Copy invite link"
              > 
                <IconsCopy />
              </ButtonsInlineButton>
            </div>
          </td>
        </tr>

        <tr v-if="index + 1 < (applications?.length || 0)" class="multi-table-divider">
          <td :colspan="5">
            <div></div>
          </td>
        </tr>
      </template>
    </template>
  </TablesBaseMultiSelect>
</template>

<script setup lang="ts">

import { ApplicationStatuses } from '@/stores/admin'
import type { ApplicationDetails, PageInfo } from '@/graphql/client'

defineProps({
  applications: Array as PropType<Array<ApplicationDetails>>,
  pageInfo: Object as PropType<PageInfo>
})

const adminStore = useAdminStore()

function changeStatus (id: string, status: ApplicationStatuses) {
  adminStore.changeApplicationStatus(id, status)
}

const { text, copy, copied, isSupported } = useClipboard()

async function copyInviteLink (link: string) {
  await copy(link)

  if (copied) {
    adminStore.messageStore.pushSnackSucces("Invite linke copied to your clipboard.")
  }
}


</script>

<style scoped lang="scss">

.application-table {

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
<template>
  <div class="invite">
    <h2>Creat a new invite</h2>

    <div class="invite-form">
      <FormsTextInput
        class="invite-form-field" 
        label="Name"
        v-model:value="name"
      />

      <FormsTextInput 
        class="invite-form-field"
        label="Email"
        v-model:value="email"
      />
    </div>

    <ButtonsFilledButton 
      @click="invite()" 
      :disabled="name.length === 0 || email.length === 0"
    >
      <span>Send invite</span>
    </ButtonsFilledButton>

    <div class="invite-link success" v-show="inviteLink.length > 0">
      <span>{{ inviteLink }}</span>
      <ButtonsIcon @click="copyInviteLink()">
        <IconsCopy />
      </ButtonsIcon>
    </div>
  </div>
</template>

<script setup lang="ts">

const adminStore = useAdminStore()

const name = ref("")
const email = ref("")
const inviteLink = ref("")

async function invite () {
  inviteLink.value = ""
  const newInvite = await adminStore.invite(name.value, email.value)

  if (newInvite) {
    name.value = ""
    email.value = ""
    inviteLink.value = newInvite.inviteLink || ""
    adminStore.messageStore.pushSnackSucces("Artist successfully invited.")
  }
}

const { text, copy, copied, isSupported } = useClipboard({ source: inviteLink })

async function copyInviteLink () {
  await copy()

  if (copied) {
    adminStore.messageStore.pushSnackSucces("Invite linke copied to your clipboard.")
  }
}

</script>

<style scoped lang="scss">

.invite {
  display: flex;
  flex-direction: column;
  width: calc(100% - 32px);
  gap: 16px;
  padding: 16px;
  background-color: $c-background-1;
  border-radius: $radius-l;

  & h2 {
    margin: 0px;
  }

  &-form {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    &-field {
      max-width: min(calc(50% - 8px));
    }
  }

  &-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: $radius-m;
    color: $c-success;
    background-color: $c-success-hover;

    & span {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: $c-success;
      font-weight: 500;
    }

    & button:hover {
      background-color: $c-success-hover;
    }

    & svg {
      color: $c-success;

    }
  }
}

</style>
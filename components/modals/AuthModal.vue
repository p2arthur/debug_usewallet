<template>
  <ModalsBaseModal>
    <div class="auth">
      <h1>Login into your account</h1>

      <p v-if="accountStore.loginInfo.hasPassword">Use your password or sign a verification transaction to get full access to your Dartroom account and the full range of features.</p>

      <FormsTextInput 
        v-if="accountStore.loginInfo.hasPassword" 
        label="Password" 
        type="password" 
        v-model:value="form.password" 
        :validation="valid.password" 
        @input="valid.password.valid = true"
        @keydown.enter="login()"
      />

      <p v-if="accountStore.loginInfo.hasPassword">Or</p>

      <p v-if="!accountStore.loginInfo.hasPassword">Sign a verification transaction to get full access to your Dartroom account and the full range of features.</p>

      <button class="list-item" @click="signTxn()" :disabled="form.txn !== null">
        <IconsRadioChecked class="list-item-icon" v-if="form.txn" />
        <IconsRadioUnchecked class="list-item-icon" v-else />
        <span>Sign verification transaction</span>
      </button>

      <div class="auth-actions">
        <!-- <ButtonsTextButton @click="">
          <span>always skip login</span>
        </ButtonsTextButton> -->
        <ButtonsTextButton @click="accountStore.authModal = false">
          <span>skip login</span>
        </ButtonsTextButton>

        <div class="spacer"></div>

        <ButtonsFilledButton @click="login()" :disabled="!Boolean(form.txn) && !Boolean(form.password)">
          <span>Login</span>
        </ButtonsFilledButton>
      </div>

      <div class="modal-actions">
        <button class="modal-actions-button" @click="accountStore.authModal = false">
          <IconsRemove class="modal-actions-button-icon" />
        </button>
      </div>
    </div>
  </ModalsBaseModal>
</template>

<script setup lang="ts">

import { SignedTxn } from '@/stores/apply'

const messageStore = useMessageStore()
const accountStore = useAccountStore()

const form = ref({
  password: "",
  txn: null as null | SignedTxn,
})

const valid = useValidationForm(form.value)

async function signTxn () {
  if (accountStore.verifyTxn) {
    
    let signedTxns

    try {
      signedTxns = await accountStore.wallet.signTransactions(JSON.parse(JSON.stringify(accountStore.verifyTxn)) as typeof accountStore.verifyTxn)
    } catch (e) {
      console.log(e)
      messageStore.pushSnackError(`${e}`)
    }

    if (signedTxns && signedTxns.length > 0) {
      form.value.txn = signedTxns[0][0]
    }
  }
}

async function login () {
  if (form.value.txn) {
    await accountStore.login({ txn: form.value.txn })
  } else {
    await accountStore.login({ password: form.value.password })
  }

  accountStore.authModal = false
}

onMounted(async () => {
  await accountStore.getUserLoginInfo(accountStore.activeWallet?.address || '')
})

</script>

<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
  gap: 24px;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 32px);

  & h1 {
    text-align: center;
    margin: 0px;
  }

  & p {
    max-width: 400px;
    font-weight: 500;
    font-size: 1rem;
    margin: 0px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 400px;
    align-items: center;

    &-button {
      min-width: 40ch;
      max-width: 400px;
      display: flex;
      gap: 12px;
      min-height: 48px;
      max-height: 48px;
      border-radius: $radius-m;
      outline: 2px solid;
      border: none;
      outline-color: $c-on-background;
      outline-offset: -2px;
      padding: 0px 12px;
      align-items: center;
      cursor: pointer;
      color: $c-on-background;
      background-color: transparent;
      transition: background-color 150ms ease, color 150ms ease;

      &:hover {
        background-color: $c-hover-on-background;
      }

      &:focus {
        background-color: $c-hover-on-background;
      }

      &-icon {
        color: $c-on-background;
        height: 48px !important;
        width: 48px !important;
      }

      &-active {
        background-color: $c-on-background;
        
        & .address-list-button-icon {
          color: $c-background-0;
        }

        & span {
          color: $c-background-0;
        }

        & .address-list-button-remove {
          color: $c-background-0;
        }

        &:hover {
          background-color: $c-on-background;
        }

        &:focus {
          background-color: $c-on-background;
        }
      }

      & span {
        font-family: $f-mono;
        font-weight: 500;
        font-size: 0.95rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      &-remove {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        transition: color 150ms ease;
        cursor: pointer;
        color: $c-on-background;
        
        &:hover {
          color: $c-secondary;
        }
      }
    }
  }

  &-actions {
    width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
  }
}

.modal-actions {
  position: absolute;
  top: 0;
  right: 0;

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    color: $c-on-background;
    margin: 8px;
    padding: 4px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 150ms ease, color 150ms ease;

    &-icon {
      height: 28px !important;
      width: 28px !important;
    }

    &:hover {
      color: $c-secondary;
      background-color: $c-background-secondary;
    }
  }
}

.list-item {
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  padding: 0px 12px;
  gap: 12px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: $radius-m;
  transition: background-color 150ms ease;

  &:disabled {
    cursor: default;

    &:hover {
      background-color: transparent;
    }
  }

  &:hover {
    background-color: $c-hover-on-background;
  }
  
  &-icon {
    color: $c-on-background;
    min-height: 36px !important;
    min-width: 36px !important;
  }
}
</style>
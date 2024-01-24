<!-- @format -->

<script setup lang="ts">
  import { useModalStore } from '~/stores/interface/modal.store';
  import MainButton from '../buttons/MainButton.vue';
  const { modalIsOpen, toggleModal } = useModalStore();
</script>

<template>
  <div
    :class="{ open: modalIsOpen }"
    class="modal-page">
    <div
      @click="toggleModal"
      class="modal-backdrop"></div>
    <div class="modal-container">
      <div class="modal-content">
        <h3 class="modal-title">rxelms modal</h3>
        <p class="modal-description">
          This is an example of the modal on the rxelms website
        </p>
      </div>
      <div class="modal-action">
        <MainButton
          text="confirm"
          size="small" />
        <MainButton
          text="deny"
          size="small" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .modal-page {
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;

    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .modal-backdrop {
    position: fixed;
    background-color: black;
    opacity: 20%;
    height: 100%;
    width: 100%;
  }

  .modal-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    width: 70%;
    height: 50%;
    z-index: 101;
    background-color: rgb(19, 17, 33);
    color: white;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .modal-title {
      font-size: 2rem;
      margin: 0;
    }

    .modal-description {
      text-align: center;
    }
  }

  .modal-action {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
</style>

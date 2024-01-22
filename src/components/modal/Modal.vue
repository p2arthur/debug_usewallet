<!-- @format -->

<script setup lang="ts">
  import { useModalStore } from '~/stores/interface/modal.store';
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
      <div class="modal-header">aaaaaaaaaasdasdasdasd</div>
      <div class="modal-content">aaaaaaaaa</div>
      <div class="modal-action">aaaaaaaaaaaaaaaaaaaa</div>
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
    position: fixed;
    border-radius: 10px;
    width: 70%;
    height: 50%;
    z-index: 101;
    background-color: rgb(19, 17, 33);
  }
</style>

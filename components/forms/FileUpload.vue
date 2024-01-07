<template>
  <div class="file-upload">
    <input class="file-upload-input" type="file" :accept="accept" @change="fileChange">
    <div class="file-upload-overlay">
      <div class="file-upload-overlay-container">
        <IconUploadFile />
        <span>Drop your file here</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import IconUploadFile from '../icons/UploadFile.vue';

defineProps({
  accept: {
    type: String,
    required: false
  }
})

function fileChange (e: Event) {
  const input = e.target as HTMLInputElement

  if (!input.files?.length) {
    return
  }

  emit('input',{
    file: input.files[0],
    url: URL.createObjectURL(input.files[0]),
  })

  input.value = ""
}

const emit = defineEmits<{
  (e: 'input', file: { file: File, url: string }): void
}>()

</script>

<style scoped lang="scss">

.file-upload {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: $c-flat;
  border-radius: $radius-m;
  border: none;
  min-height: 64px;

  &-input {
    color: $c-flat;
    height: 100%;
    width: 100%;
    cursor: pointer;

    // Chromium
    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    // Firefox
    &::file-selector-button {
      visibility: hidden;
    }
  }

  &-overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    cursor: pointer;
    pointer-events: none;
    color: $c-on-background;
    align-items: center;
    justify-content: center;

    &-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 16px;
      height: 100%;
      width: min(100%, 200px);
      overflow: hidden;

      & svg {
        height: 48px !important;
        width: 48px !important;
      }

      & span {
        white-space: nowrap;
        font-family: $f-sans;
        font-style: normal;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}

</style>
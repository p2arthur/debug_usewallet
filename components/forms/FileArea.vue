<template>
  <div class="file-area">
    <input class="file-area-input" type="file" multiple @change="fileChange">
    <div class="file-area-overlay">
      <IconUploadFile />
      <span>Drop your files here</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import IconUploadFile from '../icons/UploadFile.vue';

function fileChange (e: Event) {
  const input = e.target as HTMLInputElement

  if (!input.files?.length) {
    return
  }

  let files = []

  for (let i = 0; i < input.files.length; i++) {
    files.push({
      file: input.files[i],
      url: URL.createObjectURL(input.files[i]),
    })
  }

  emit('input', files)

  input.value = ""
}

const emit = defineEmits<{
  (e: 'input', files: Array<{ file: File, url: string }>): void
}>()

</script>

<style scoped lang="scss">

.file-area {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 126px;
  background-color: $c-flat;
  border-radius: $radius-m;

  &-input {
    color: $c-flat;
    height: 100%;
    min-height: 126px;
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
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 32px;
    cursor: pointer;
    pointer-events: none;
    color: $c-on-background;
    
    & svg {
      height: 48px !important;
      width: 48px !important;
    }

    & span {
      font-family: $f-sans;
      font-style: normal;
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
}

</style>
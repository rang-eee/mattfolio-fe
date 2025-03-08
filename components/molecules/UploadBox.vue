<script setup lang="ts">
defineProps<{
  size?: string | number
  color?: string
}>()

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const files = input.files
  if (files && files.length > 0) {
    console.log(files[0])
  }
}

const triggerFileInput = () => {
  const input = document.querySelector('.file-input') as HTMLInputElement
  input?.click()
}
</script>

<template>
  <div class="section border-solid border-gray-200 rounded-3xl w-full h-full p-4">
    <input type="file" class="file-input" @change="handleFileChange" />
    <AtomsVUploadIcon
      class="cursor-pointer"
      :size="size"
      :color="color"
      @click="triggerFileInput"
    />
  </div>
</template>

<style scoped lang="scss">
.section {
  aspect-ratio: 1;
}

.file-input {
  display: none;
}
</style>

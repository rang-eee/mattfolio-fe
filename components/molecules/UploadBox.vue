<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  size?: string | number;
  color?: string;
}>();

const emit = defineEmits<{
  (e: 'file-selected', file: File): void
}>();


const selectedImageUrl = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;
  if (files && files.length > 0) {
    const file = files[0];
    if (selectedImageUrl.value) {
      URL.revokeObjectURL(selectedImageUrl.value);
    }
    selectedImageUrl.value = URL.createObjectURL(file);
    // 자식 컴포넌트에서 부모로 파일 데이터를 emit
    emit('file-selected', file);
  }
};

const triggerFileInput = () => {
  fileInput.value?.click();
};
</script>

<template>
  <div class="section border-solid border-gray-200 rounded-3xl w-full h-full p-4 cursor-pointer" @click="triggerFileInput">
    <input ref="fileInput" type="file" class="file-input" @change="handleFileChange" />
    <template v-if="selectedImageUrl">
      <img :src="selectedImageUrl" alt="Uploaded Image" class="object-cover w-full h-full" />
    </template>
    <template v-else>
      <AtomsVUploadIcon class="cursor-pointer" :size="size" :color="color" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.section {
  aspect-ratio: 1;
  padding: 0;
}

.file-input {
  display: none;
}
</style>

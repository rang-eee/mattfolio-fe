<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>

<template>
  <div class="image-wrapper">
    <img :src="src" :alt="alt" class="image" />
    <button class="close-button">
      <AtomsVIcon class="text-gray-200 cursor-pointer w-12px" icon="close" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.image-wrapper {
  @apply relative inline-block rounded-lg w-full h-full;
  aspect-ratio: 1;
}

.image {
  @apply block w-full h-full object-cover rounded-lg;
}

.close-button {
  @apply absolute flex items-center justify-center top-2 right-2 rounded-full w-6 h-6 cursor-pointer bg-gray-800;
}

.close-button:hover {
  @apply md:(bg-gray-600);
}
</style>

<script setup lang="ts">
import { ImageList } from '~/data/imageList'
</script>

<template>
  <div>
    <VText variant="Body3">다른 사진</VText>

    <div class="photo-list">
      <div v-for="photo in ImageList" :key="photo.id" class="photo">
        <img :src="photo.src" alt="photo" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.photo-list {
  @apply grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-12px mt-10px;
}

.photo {
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

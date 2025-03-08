<script setup lang="ts">
import { ImageList } from '@/data/imageList'
</script>

<template>
  <div class="section">
    <AtomsVText variant="H2">최신 등록 사진</AtomsVText>

    <div class="columns-2 mt-2 sm:(columns-3) lg:(columns-5) xl:(columns-6)">
      <template v-for="image in ImageList" :key="image.id">
        <MoleculesLabelThumbnailImage
          :src="image.src"
          :author="image.author"
          :location="image.location"
          :profileImage="image.profileImage"
          size="24px"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  @apply p-4 md:(p-8);
}
</style>

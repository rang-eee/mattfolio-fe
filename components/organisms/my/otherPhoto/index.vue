<script setup lang="ts">
import { ImageList } from '~/data/imageList'

const tabs = [{ label: '추가된 사진' }, { label: '구매한 사진' }]

const activeIndex = ref(0)
</script>

<template>
  <MoleculesVTab class="mb-40px" :tabs="tabs">
    <template #tab-0>
      <div class="photo-info-wrapper">
        <MoleculesFilmInfoText />

        <div class="more-btn">
          <AtomsVChipButton
            class="!hidden md:(block)"
            label="더 보기"
            color="outline"
            size="small"
          />

          <AtomsVChipButton class="md:(hidden)" label="더 보기" color="outline" size="xxSmall" />
        </div>
      </div>

      <div class="columns-2 mt-2 lg:(columns-3) xl:(columns-4)">
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
    </template>
    <template #tab-1> 구매한 사진 </template>
  </MoleculesVTab>
</template>
<style scoped lang="scss">
.section {
  @apply flex flex-col w-full;
}

.category-button {
  @apply flex gap-2 items-center mb-4 max-w-400px;
}

.photo-info-wrapper {
  @apply flex items-center justify-between w-full;
}

.more-btn {
  @apply max-w-50px w-full md:(max-w-100px);
}

.photo-list {
  @apply grid grid-cols-3 gap-3 mt-3;
}
</style>

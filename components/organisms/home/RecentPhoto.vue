<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { pictureApi } from '@/utils/api/services/pictureServices';
import type { Picture } from '@/utils/api/types/pictureTypes';

// 이미지 리스트를 저장할 상태 변수
const imageList = ref<Picture[]>([]);

onMounted(async () => {
  try {
    console.log(response.list);
    // imageList.vauue = response.data; // API에서 받은 데이터 저장
  } catch (error) {
    console.error("미지 데이터를 불러오는 중 오류 발생:", error);     
  }
});
</script>

<template>
  <div class="section">
    <AtomsVText variant="H2">최신 등록 사진</AtomsVText>

    <div class="columns-2 mt-2 sm:(columns-3) lg:(columns-5) xl:(columns-6)">
      <template v-for="image in imageList" :key="image.pictureId">
        <MoleculesLabelThumbnailImage
          :src="image.registerPhotoUrl"
          :author="image.registerName"
          :location="image.date"
          :profileImage="image.registerPhotoUrl"
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

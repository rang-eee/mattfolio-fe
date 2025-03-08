<script setup lang="ts"></script>

<template>
  <div>
    <div class="title-wrapper">
      <AtomsVText variant="Body2B">내 얼굴 인식 사진 설정</AtomsVText>
      <AtomsVText variant="Body4">
        정면을 비롯한 다양하게 본인 얼굴이 나타난 사진을 올려주세요. (최대 10개)
      </AtomsVText>
    </div>

    <div class="upload-wrapper">
      <div v-for="index in 10" :key="index" class="w-full">
        <MoleculesUploadBox class="upload-box" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-wrapper {
  @apply mb-4;
}

.upload-wrapper {
  @apply grid gap-4 w-full place-items-center grid-cols-2 sm:(grid-cols-4) lg:(grid-cols-5);
}

.upload-box {
  @apply flex justify-center items-center;
}
</style>

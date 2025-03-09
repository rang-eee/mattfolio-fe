<script setup lang="ts"></script>

<template>
  <AtomsVCard>
    <div class="explain-wrapper">
      <AtomsVText variant="Body1B">내 얼굴 인식 사진 설정</AtomsVText>
      <AtomsVText variant="Body4" colorType="gray">
        정면을 비롯한 다양하게 본인 얼굴이 나타난 사진을 올려주세요. (최대 10개)
      </AtomsVText>
    </div>

    <div class="upload-wrapper">
      <div v-for="index in 10" :key="index">
        <MoleculesUploadBox class="upload-box" />
      </div>
    </div>

    <div class="button-wrapper">
      <AtomsVChipButton label="사진 추가하기" />
      <AtomsVChipButton label="시작하기" color="outline" />
    </div>
  </AtomsVCard>
</template>

<style scoped lang="scss">
.explain-wrapper {
  @apply flex flex-col gap-1 mb-4 w-full;
}

.upload-wrapper {
  @apply grid gap-1 w-full place-items-center overflow-x-auto;
  grid-template-columns: repeat(5, 1fr);
}

.upload-box {
  @apply flex justify-center items-center w-148px h-148px md:(w-88px h-88px);
}

.button-wrapper {
  @apply flex gap-2 mt-30px w-full;
}
</style>

<script setup lang="ts"></script>

<template>
  <div class="banner">
    <div class="title-wrapper">
      <AtomsVText variant="Body2" colorType="white" :opacity="75">23년 6월 19일</AtomsVText>
      <AtomsVText variant="MainTitle" colorType="white">
        218명의 포토그래퍼가 678,123장의 작품을 업로드 하였습니다.
      </AtomsVText>
      <AtomsVText variant="H1" colorType="white" :opacity="75">시작하기 ></AtomsVText>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  @apply relative h-400px w-full bg-cover bg-center flex items-center px-5 md:(px-20 h-800px);
  background-image: url('https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg'); /* Replace with your image URL */
}

.banner::before {
  @apply absolute top-0 left-0 h-full w-full bg-black bg-opacity-70 z-1;
  content: '';
}

.title-wrapper {
  @apply max-w-460px w-full flex flex-col gap-4 z-2;
}
</style>

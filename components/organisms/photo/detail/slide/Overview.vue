<script setup lang="ts"></script>

<template>
  <div class="photo-slide-side">
    <div class="author-wrapper">
      <MoleculesLabelProfile author="Yjphoto" />
      <AtomsVText variant="Caption">다운로드 10k회</AtomsVText>
    </div>

    <div class="photo-info">
      <AtomsVText variant="Caption">4월 17일</AtomsVText>
      <AtomsVText variant="Body2B">맽랜드 PBRC 광화문</AtomsVText>
      <AtomsVText variant="Caption" colorType="gray">IMG_0610.jpg</AtomsVText>
    </div>

    <div class="film-info-wrapper">
      <AtomsVIcon class="w-20px" icon="film" />
      <AtomsVText variant="Body4B">1</AtomsVText>
    </div>

    <div class="button-wrapper">
      <AtomsVChipButton color="outline" size="small">장바구니 담기</AtomsVChipButton>
      <AtomsVChipButton size="small">필름으로 구매하기</AtomsVChipButton>

      <AtomsVText variant="Caption" colorType="gray" underline
        >본인 사진이 아닐 시 눌러주세요.</AtomsVText
      >
    </div>

    <div>
      <div class="pixel-info">
        <AtomsVText variant="Body4B">해상도</AtomsVText>
        <AtomsVText variant="Caption" colorType="gray">5184(w) × 3456(h) px</AtomsVText>
      </div>

      <AtomsVText variant="Caption" bold
        >구매하신 사진은 상업적으로 자유롭게 이용 가능합니다.</AtomsVText
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.photo-slide-side {
  @apply h-full w-full flex flex-col gap-6 lg:(w-95 justify-between);
}

.author-wrapper {
  @apply flex items-center justify-between;
}

.photo-info {
  @apply flex flex-col md:(my-5);
}

.film-info-wrapper {
  @apply flex items-center gap-1;
}

.button-wrapper {
  @apply flex flex-col items-center gap-2 md:(my-5);
}

.pixel-info {
  @apply flex items-center gap-1;
}
</style>

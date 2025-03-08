<script setup lang="ts"></script>

<template>
  <div class="w-full md:(min-w-300px max-w-400px)">
    <div class="body-wrapper">
      <AtomsVText variant="Body1B">주문 내역</AtomsVText>
      <AtomsVDivider />
      <MoleculesVAccordion label="프로모션 코드가 있으신 가요?">
        <template #content>
          <AtomsVText variant="Body4B">CODE : MATTFOLIO2025</AtomsVText>
        </template>
      </MoleculesVAccordion>
      <div class="point-wrapper">
        <AtomsVText variant="Body2B">총 결제 포인트</AtomsVText>
        <div class="film-icon-wrapper">
          <AtomsVIcon icon="film" class="w-20px" />
          <AtomsVText variant="Body2B">10</AtomsVText>
        </div>
      </div>
      <AtomsVChipButton label="필름으로 구매하기" size="medium" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.body-wrapper {
  @apply flex flex-col gap-4;
}

.promotion-code {
  @apply flex justify-between items-center;
}

.point-wrapper {
  @apply flex justify-between items-center;
}

.film-icon-wrapper {
  @apply flex items-center gap-2;
}

.icon-film {
  @apply h-4.5;
}
</style>

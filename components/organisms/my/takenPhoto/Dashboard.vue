<script setup lang="ts"></script>

<template>
  <section class="my-dashboard-section">
    <div class="title-wrapper">
      <AtomsVText variant="Body1B">최신 다운로드 실적</AtomsVText>
      <AtomsVText variant="Body1B">5월 1일 ~ 5월 7일</AtomsVText>
    </div>

    <AtomsVDivider />

    <div class="item-wrapper">
      <AtomsVText variant="Body3B">촬영한 인물 수</AtomsVText>
      <AtomsVText variant="Body4B">318</AtomsVText>
    </div>
    <div class="item-wrapper">
      <AtomsVText variant="Body3B">도달한 계정</AtomsVText>
      <AtomsVText variant="Body4B">198</AtomsVText>
    </div>
    <div class="item-wrapper">
      <AtomsVText variant="Body3B">총 팔로워</AtomsVText>
      <AtomsVText variant="Body4B">167</AtomsVText>
    </div>

    <AtomsVDivider />

    <div class="item-wrapper">
      <AtomsVText variant="Body3B">다운로드한 계정</AtomsVText>
      <AtomsVText variant="Body4B">318</AtomsVText>
    </div>
    <div class="item-wrapper">
      <AtomsVText variant="Body3B">다운로드 수</AtomsVText>
      <AtomsVText variant="Body4B">198</AtomsVText>
    </div>
    <div class="item-wrapper">
      <AtomsVText variant="Body3B">평균 다운로드당 포인트</AtomsVText>
      <AtomsVText variant="Body4B">167</AtomsVText>
    </div>

    <div class="contents-wrapper">
      <AtomsVText variant="Body1B">우수 컨텐츠</AtomsVText>
      <AtomsVDivider />

      <div class="item-wrapper">
        <AtomsVText variant="Body3B">4월 17일 맽랜드 광화문</AtomsVText>
        <div class="download-info">
          <AtomsVIcon class="min-w-15px" icon="download" />
          <AtomsVText variant="Body4B">318</AtomsVText>
        </div>
      </div>

      <div class="item-wrapper">
        <AtomsVText variant="Body3B">4월 17일 맽랜드 광화문</AtomsVText>
        <div class="download-info">
          <AtomsVIcon class="min-w-15px" icon="download" />
          <AtomsVText variant="Body4B">318</AtomsVText>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.my-dashboard-section {
  @apply bg-white w-full gap-5 flex flex-col md:(max-w-470px);
}

.title-wrapper {
  @apply flex justify-between;
}

.item-wrapper {
  @apply flex justify-between items-center w-full;
}

.contents-wrapper {
  @apply flex flex-col mt-2.5 gap-5;
}

.download-info {
  @apply flex gap-1 items-baseline flex-shrink-0;
}
</style>

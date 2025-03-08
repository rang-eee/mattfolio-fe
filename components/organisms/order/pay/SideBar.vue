<script setup lang="ts"></script>

<template>
  <OrganismsLayoutsSideBarSection type="right">
    <div class="flex flex-col gap-6 md:(gap-12)">
      <div class="flex items-center gap-5 md:(flex-col gap-10 items-start)">
        <div class="flex items-center gap-2 md:(mt-32px)">
          <AtomsVIcon class="h-40px md:(h-65px)" icon="film" />
          <AtomsVText class="!hidden md:(block)" variant="H2B">필름 <br />충전하기</AtomsVText>
          <AtomsVText class="md:(hidden)" variant="Body2B">필름 <br />충전하기</AtomsVText>
        </div>

        <div class="flex flex-col md:(gap-2)">
          <AtomsVText variant="Body2">총 결제 금액</AtomsVText>
          <AtomsVText variant="H2B" colorType="primary">100,000원</AtomsVText>
        </div>
      </div>

      <div class="md:(mt-60px)">
        <AtomsVChipButton label="결제하기" />
      </div>
    </div>
  </OrganismsLayoutsSideBarSection>
</template>

<script setup lang="ts">
const tabs = [{ label: '대시보드' }, { label: '사진 목록' }, { label: '수익 확인' }]
</script>

<template>
  <MoleculesVTab :tabs="tabs">
    <template #tab-0>
      <OrganismsMyTakenPhotoDashboard />
    </template>

    <template #tab-1>
      <OrganismsMyTakenPhotoList />
    </template>

    <template #tab-2>
      <OrganismsMyTakenPhotoRevenueList />
    </template>
  </MoleculesVTab>

  <div
    class="fixed max-w-150px w-full bottom-20px inset-x-0 mx-auto md:(absolute top-12px right-20px left-auto)"
  >
    <AtomsVChipButton size="xSmall" color="primary">+ 찍은 사진 추가</AtomsVChipButton>
  </div>
</template>

<style scoped></style>

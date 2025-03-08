<script setup lang="ts"></script>

<template>
  <OrganismsLayoutsContentWrapper>
    <div class="w-full flex flex-col gap-20px pt-80px md:(hidden)">
      <OrganismsOrderCartSideBar />
      <AtomsVDivider />
    </div>

    <section class="flex flex-col gap-8 w-full">
      <div class="w-full flex-shrink-0">
        <div class="flex items-center flex-wrap gap-2 mb-16px">
          <MoleculesLabelProfile author="Yjphoto" />
          <AtomsVText variant="Body2">4월 17일 맽랜드 광화문</AtomsVText>
        </div>
        <OrganismsOrderCartImage />
      </div>
    </section>

    <OrganismsOrderCartSideBar class="!hidden !md:(block)" />
  </OrganismsLayoutsContentWrapper>
</template>

<style scoped lang="scss"></style>

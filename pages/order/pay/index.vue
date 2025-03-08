<script setup lang="ts">
definePageMeta({
  layout: 'right-add-side',
})

const tabs = [{ label: '필름 충전' }, { label: '충전 내역' }]
</script>

<template>
  <MoleculesVTab :tabs="tabs">
    <template #tab-0>
      <OrganismsOrderPayProductList />
    </template>

    <template #tab-1>
      <OrganismsOrderPayHistory />
    </template>
  </MoleculesVTab>
</template>

<style scoped lang="scss"></style>

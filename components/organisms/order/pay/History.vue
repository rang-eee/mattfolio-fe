<script setup lang="ts">
const headers = [
  { key: 'date', label: '구매일자' },
  { key: 'quantity', label: '구매수량' },
  { key: 'remaining', label: '잔여수량' },
  { key: 'paymentMethod', label: '결제수단' },
  { key: 'amount', label: '금액' },
  { key: 'action', label: '구매 취소' },
]

const rows = [
  {
    id: 1,
    date: '2025.01.01',
    quantity: '10개',
    remaining: '0개',
    paymentMethod: '네이버페이',
    amount: '5,000원',
    action: '취소하기',
  },
  {
    id: 2,
    date: '2022.01.04',
    quantity: '240개',
    remaining: '0개',
    paymentMethod: '네이버페이',
    amount: '100,000원',
    action: '취소불가',
  },
]
</script>

<template>
  <MoleculesVTable :headers="headers" :rows="rows">
    <template #action="{ row }">
      <AtomsVChipButton
        v-if="row.action === '취소하기'"
        :label="row.action"
        size="xxSmall"
        color="outline"
        class="max-w-100px"
      />
      <AtomsVText v-if="row.action === '취소불가'" variant="Body4">{{ row.action }}</AtomsVText>
    </template>
  </MoleculesVTable>
</template>

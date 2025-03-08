<script setup lang="ts">
interface TableHeader {
  key: string
  label: string
}

interface TableRow {
  id: number
  [key: string]: any
}

defineProps<{
  headers: TableHeader[]
  rows: TableRow[]
}>()
</script>

<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key">
            <AtomsVText variant="Body4" color-type="gray">{{ header.label }}</AtomsVText>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td v-for="header in headers" :key="header.key">
            <template v-if="header.key === 'action'">
              <div class="flex justify-center">
                <slot name="action" :row="row"></slot>
              </div>
            </template>
            <template v-else>
              <VText variant="Body3" color-type="black">{{ row[header.key] }}</VText>
            </template>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex flex-wrap gap-6 lg:(hidden)">
      <div v-for="row in rows" :key="row.id" class="card">
        <div v-for="header in headers" :key="header.key" class="card-item">
          <AtomsVText variant="Body3B">{{ header.label }}</AtomsVText>
          <span v-if="header.key === 'action'">
            <slot name="action" :row="row"></slot>
          </span>
          <span v-else>{{ row[header.key] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table-wrapper {
  .table {
    @apply w-full border-collapse !hidden lg:(!table);
  }

  th,
  td {
    @apply p-2 text-center;
  }

  th {
    @apply font-bold border-solid border-0 border-t border-b border-gray-300;
  }

  th > div {
    @apply flex justify-center;
  }

  tbody tr td {
    @apply border-none;
  }

  .card {
    @apply flex flex-col p-4 border border-gray-300 rounded-lg shadow-md;
    width: 100%;
  }

  .card-item {
    @apply flex justify-between items-center border-solid border-0 border-b border-gray-300 py-8px last-of-type:(border-none pb-0);
  }
}
</style>

<script setup lang="ts">
interface Tab {
  label: string
}

defineProps<{
  tabs: Tab[]
}>()

const activeTab = ref(0)

const selectTab = (index: number) => {
  activeTab.value = index
}

const getVariant = (index: number) => {
  return activeTab.value === index ? 'Body3B' : 'Body3'
}
</script>

<template>
  <div class="tabs">
    <div class="tab-headers">
      <button
        v-for="(tab, index) in tabs"
        :class="{ active: activeTab === index }"
        @click="selectTab(index)"
      >
        <AtomsVText :variant="getVariant(index)">
          {{ tab.label }}
        </AtomsVText>
      </button>
    </div>
    <div class="tab-underline"></div>
    <div class="tab-content">
      <slot :name="`tab-${activeTab}`"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  @apply flex flex-col w-full;
}

.tab-headers {
  @apply flex relative;
}

.tab-headers button {
  @apply px-4 py-2 cursor-pointer bg-none border-solid border-0 border-b-2 border-transparent text-center w-auto text-gray-500;
}

.tab-headers button.active {
  @apply text-black border-solid border-0 border-b-3 border-black;
}

.tab-underline {
  @apply w-full border-solid border-0 border-b border-gray-200;
}

.tab-content {
  @apply py-4;
}
</style>

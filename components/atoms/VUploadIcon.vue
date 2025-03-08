<script setup lang="ts">
const props = defineProps<{
  size?: number | string
  color?: string
}>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size || 40"
    :height="props.size || 40"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="props.color || '#1c51e3'"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- 세로 선 -->
    <line x1="12" y1="4" x2="12" y2="20" />
    <!-- 가로 선 -->
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
</template>

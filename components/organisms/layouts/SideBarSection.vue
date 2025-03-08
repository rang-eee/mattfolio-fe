<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  type: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
})
</script>

<template>
  <section class="sidebar-section" :class="type">
    <slot />
  </section>
</template>

<style scoped lang="scss">
.sidebar-section {
  @apply flex flex-col z-50 w-full bg-white pt-96px px-4 pb-4 z-50 w-full border-0 border-gray-400 border-solid flex justify-between md:(p-12 h-[calc(100vh-80px)] w-256px fixed top-80px);

  &.right {
    @apply md:(right-0 border-l);
  }

  &.left {
    @apply md:(left-0 border-r);
  }
}
</style>

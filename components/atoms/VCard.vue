<script setup lang="ts">
const props = defineProps<{
  border?: boolean
  size?: string
}>()

const cardClass = computed(() => ['section-card', { border: props.border }])
</script>

<template>
  <div :class="cardClass" :style="{ width: props.size, height: props.size }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.section-card {
  @apply w-full h-auto p-6 rounded-t-3xl bg-white flex flex-col justify-center items-center md:(rounded-3xl);
}

.border {
  @apply border-solid border-gray-300;
}
</style>

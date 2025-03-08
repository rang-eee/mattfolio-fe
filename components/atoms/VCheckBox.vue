<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  size?: number
  shape?: 'circle' | 'square'
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isChecked = ref(props.modelValue)

const toggleCheck = () => {
  isChecked.value = !isChecked.value
  emit('update:modelValue', isChecked.value)
}

watch(
  () => props.modelValue,
  (newValue) => {
    isChecked.value = newValue
  }
)

const checkboxClass = computed(() => {
  const baseClass = isChecked.value ? 'primary' : 'gray'
  const shapeClass = props.shape === 'square' ? 'square' : 'circle'
  return `${baseClass} ${shapeClass}`
})
</script>

<template>
  <div class="checkbox-wrapper" :class="checkboxClass" @click="toggleCheck">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="isChecked ? '#fff' : '#adb5bd'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="check-icon"
      style="transform: scale(0.8)"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.checkbox-wrapper {
  @apply flex items-center justify-center cursor-pointer transition-all duration-300;

  svg {
    @apply w-4 h-4;
  }

  &.circle {
    @apply rounded-full;
  }

  &.square {
    @apply rounded-md;
  }

  &.primary {
    @apply bg-blue-700 border-solid border-blue-500;
  }

  &.gray {
    @apply bg-transparent border-solid border-gray-300;
  }
}
</style>

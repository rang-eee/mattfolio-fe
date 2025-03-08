<script setup lang="ts">
defineProps<{
  modelValue: string
  type: 'text' | 'password'
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    class="input-field"
    :value="modelValue"
    @input="updateValue"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<style scoped lang="scss">
.input-field {
  @apply w-full h-10 p-2 rounded-lg border-solid border-gray-300;

  &::placeholder {
    @apply opacity-50;
  }
}
</style>

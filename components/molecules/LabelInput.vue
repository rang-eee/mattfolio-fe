<script setup lang="ts">
defineProps<{
  label?: string
  modelValue: string
  placeholder?: string
  type: 'text' | 'password'
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <label>
    <AtomsVText v-if="label" variant="Body4" colorType="black"> {{ label }} </AtomsVText>
    <AtomsVInputField
      :modelValue="modelValue"
      :type="type"
      @input="updateValue"
      :placeholder="placeholder"
    />
  </label>
</template>

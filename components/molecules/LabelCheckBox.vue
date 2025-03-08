<script setup lang="ts">
defineProps<{
  label?: string
  shape?: 'circle' | 'square'
}>()

const isChecked = ref(false)
</script>

<template>
  <div class="checkbox">
    <AtomsVCheckBox v-model="isChecked" :size="32" :shape="shape" />
    <AtomsVText v-if="label" variant="Body4" colorType="black">{{ label }}</AtomsVText>
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  @apply flex items-center justify-center gap-1;
}
</style>

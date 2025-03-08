<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: null,
  },
  solid: {
    type: Boolean,
    default: false,
  },
  regular: {
    type: Boolean,
    default: false,
  },
  brands: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
})
const selectedSolid = computed(() => {
  if (props.solid) return 'fa-solid'
  if (props.regular) return 'fa-regular'
  if (props.brands) return 'fa-brands'
  if (props.light) return 'fa-light'
  return 'fa-solid'
})
</script>

<template>
  <font-awesome-icon
    class="cursor-pointer"
    :size="props.size"
    :icon="`${selectedSolid} fa-${icon} ${props.light ? 'fa-light' : ''}`"
  />
</template>

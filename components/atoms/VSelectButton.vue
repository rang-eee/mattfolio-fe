<script setup lang="ts">
const emit = defineEmits(['click'])

defineProps({
  label: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <div class="menu-item" :class="{ active }" @click="handleClick">
    {{ label }}
  </div>
</template>

<style scoped lang="scss">
.menu-item {
  @apply w-full rounded-lg p-2 cursor-pointer bg-gray-300 text-gray-500 text-center transition-colors duration-300 ease-in-out;
}

.menu-item.active {
  @apply bg-blue-700 text-white;
}

.menu-item:hover {
  @apply brightness-110;
}
</style>

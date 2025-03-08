<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
})

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="toggle-container">
    <div class="header" @click="toggle">
      <AtomsVText variant="Body4">{{ label }}</AtomsVText>
      <AtomsVIcon class="w-18px" :icon="isOpen ? 'angle-up' : 'angle-down'" />
    </div>
    <transition name="fade">
      <div v-if="isOpen" class="content">
        <slot name="content">{{ content }}</slot>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.toggle-container {
  @apply w-full;
}

.header {
  @apply flex justify-between items-center cursor-pointer select-none;
}

.content {
  @apply p-2;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  label?: string
  color?: 'primary' | 'outline' | 'black' | 'yellow' | 'gray'
  size?: 'xxSmall' | 'xSmall' | 'small' | 'medium' | 'large'
  disabled?: boolean
}>()

const emits = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  emits('click')
}

const buttonClass = computed(() => {
  const typeClass = (() => {
    switch (props.color) {
      case 'outline':
        return 'button-outline'
      case 'black':
        return 'button-black'
      case 'primary':
        return 'button-primary'
      case 'yellow':
        return 'button-yellow'
      case 'gray':
        return 'button-gray'
      default:
        return 'button-primary'
    }
  })()

  const sizeClass = (() => {
    switch (props.size) {
      case 'xxSmall':
        return 'button-xx-small'
      case 'xSmall':
        return 'button-x-small'
      case 'small':
        return 'button-small'
      case 'large':
        return 'button-large'
      case 'medium':
      default:
        return 'button-medium'
    }
  })()

  return `${typeClass} ${sizeClass}`
})
</script>

<template>
  <button :class="buttonClass" @click="handleClick" :disabled="disabled">
    <slot name="icon" />
    <slot>
      <span v-if="label">{{ label }}</span>
    </slot>
  </button>
</template>

<style scoped lang="scss">
button {
  @apply w-full flex items-center justify-center cursor-pointer border-none rounded-lg p-2 gap-2 transition-colors duration-300;

  span {
    @apply flex-shrink-0;
  }

  &.button-xx-small {
    @apply py-1 text-xs;
  }

  &.button-x-small {
    @apply min-h-9 text-sm;
  }

  &.button-small {
    @apply min-h-10 text-base;
  }

  &.button-medium {
    @apply min-h-11 text-lg;
  }

  &.button-large {
    @apply min-h-12 text-xl;
  }
}

.button-primary {
  @apply bg-blue-700 text-white;
}

.button-outline {
  @apply bg-transparent text-blue-500 border border-blue-500 border-solid;
}

.button-black {
  @apply bg-black text-white;
}

.button-yellow {
  @apply bg-yellow-300 text-black;
}

.button-gray {
  @apply bg-gray-700 text-white;
}

button:hover {
  @apply filter brightness-140;
}

button:disabled {
  @apply bg-gray-300 text-gray-500 cursor-not-allowed;
}

button:disabled:hover {
  @apply filter-none;
}
</style>

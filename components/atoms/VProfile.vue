<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '24px',
  },
  alt: {
    type: String,
    default: 'Profile Picture',
  },
  backgroundColor: {
    type: String,
    default: '#ccc',
  },
})

const useBackground = computed(() => !props.src)
</script>

<template>
  <div
    class="profile-picture"
    :style="{
      width: size,
      height: size,
      backgroundColor: useBackground ? backgroundColor : 'transparent',
    }"
  >
    <img v-if="src" :src="src" :alt="alt" />
  </div>
</template>

<style scoped lang="scss">
.profile-picture {
  @apply flex rounded-full overflow-hidden border border-gray-300 flex-shrink-0;
}

.profile-picture img {
  @apply w-full h-full object-cover;
}
</style>

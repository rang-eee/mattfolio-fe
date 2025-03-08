<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'Profile Picture',
  },
  size: {
    type: String,
    default: '24px',
  },
  author: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="profile-wrapper">
    <AtomsVProfile :size="size" :alt="alt" :src="src" />
    <AtomsVText variant="Body2">{{ author }}</AtomsVText>
  </div>
</template>

<style scoped lang="scss">
.profile-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>

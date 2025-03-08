<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'Thumbnail Image',
  },
  author: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '24px',
  },
  profileImage: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  isLabel: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="image-container">
    <img class="masonry-image" :src="src" :alt="alt" />
    <div v-if="isLabel" class="profile-label">
      <MoleculesLabelProfile v-if="author" :author="author" :size="size" :src="profileImage" />
      <AtomsVText v-if="location" class="label-profile" variant="Body2B">{{ location }}</AtomsVText>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-container {
  @apply relative overflow-hidden rounded-lg mb-2;
}

.masonry-image {
  @apply w-full h-auto object-cover;
}
.profile-label {
  @apply hidden md:(block absolute bottom-10px left-5 text-white);
}
</style>

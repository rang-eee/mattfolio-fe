<script setup lang="ts">
import { ImageList } from '~/data/imageList'
</script>

<template>
  <div class="cart-image-wrapper">
    <div v-for="image in ImageList" :key="image.id">
      <MoleculesCloseImage :src="image.src" alt="image.author" size="200px" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-image-wrapper {
  @apply grid grid-cols-grid-cols-2 gap-2 w-full sm:(grid-cols-[repeat(2,1fr)]) lg:(grid-cols-[repeat(3,1fr)]) xl:(grid-cols-[repeat(5,1fr)]);
}

.cart-image-wrapper > div {
  @apply flex justify-center items-center w-full h-200px;
}
</style>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

defineProps<{
  slides: string[]
  slidesPerView?: number
  spaceBetween?: number
  loop?: boolean
  autoplay?: boolean
}>()

const emit = defineEmits<{
  (e: 'active-slide-change', index: number): void
}>()

const onSlideChange = (swiper: any) => {
  console.log('swiper.realIndex >>>', swiper.realIndex)
  emit('active-slide-change', swiper.realIndex)
}
</script>

<template>
  <div class="relative w-full lg:(w-600px)">
    <swiper
      :slides="slides"
      :slides-per-view="slidesPerView ?? 3"
      :space-between="spaceBetween ?? 50"
      :loop="loop"
      :modules="[Navigation, Pagination, Autoplay]"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
      }"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <slot name="slide" :slide="slide">
          <img
            v-if="slide.startsWith('http')"
            :src="slide"
            alt="slide"
            class="w-full h-400px object-contain md:(h-600px)"
          />
          <div v-else class="flex items-center justify-center h-48 bg-gray-200 text-xl font-bold">
            {{ slide }}
          </div>
        </slot>
      </swiper-slide>
    </swiper>

    <!-- 커스텀 네비게이션 버튼 -->
    <button class="swiper-button-prev custom-nav-btn"></button>
    <button class="swiper-button-next custom-nav-btn"></button>

    <!-- 커스텀 페이지네이션 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<style scoped lang="scss">
.custom-nav-btn {
  @apply absolute top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
  w-10 h-10 flex items-center justify-center;
}

/* Navigation 스타일 */
.swiper-button-prev:after,
.swiper-button-next:after {
  @apply text-20px;
}

.custom-nav-btn:hover {
  @apply bg-gray-600;
}

/* Pagination 스타일 */
.swiper-pagination::v-deep {
  @apply absolute bottom-20px w-full flex justify-center;

  .swiper-pagination-bullet {
    @apply w-10px h-10px bg-gray-400 rounded-full opacity-50 cursor-pointer;
  }

  .swiper-pagination-bullet-active {
    @apply w-10px h-10px bg-black opacity-100;
  }
}
</style>

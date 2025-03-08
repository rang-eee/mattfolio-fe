<script setup lang="ts">
const slides = [
  'https://www.harpersbazaar.co.kr/resources/online/online_image/2024/10/02/76e00a9c-7d4e-4028-9484-ec21c49e00d4.jpg',
  'https://www.apparelnews.co.kr/upfiles/manage/202010/fec559517a1bd71b6ffc3d4428401c07.jpg',
  'https://marathonhandbook.com/wp-content/uploads/2022/10/Running-Coach-Certification.jpg',
  'https://kineticfix.com/wp-content/uploads/2017/05/is3a9301_native_600.jpg?w=640g',
]

const selectedSlide = ref(slides[0])

const handleSlideChange = (index: number) => {
  selectedSlide.value = slides[index]
}
</script>

<template>
  <div class="flex flex-col items-center gap-10px w-full xl:(flex-row)">
    <MoleculesSwiper
      :slides="slides"
      :slidesPerView="1"
      :spaceBetween="10"
      :loop="true"
      @active-slide-change="handleSlideChange"
    />

    <div class="w-full overflow-hidden !hidden xl:(!block)">
      <img
        :src="selectedSlide"
        alt="Selected Slide"
        class="w-full h-600px object-cover object-top transform scale-200"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<template>
  <div class="photo-info">
    <div class="film-count-box">
      <AtomsVProfile
        src="https://i.pinimg.com/736x/f1/41/76/f14176e3705f6e42512c09f7168b3ece.jpg"
        size="32px"
      />
      <div class="film-wrapper">
        <AtomsVIcon class="icon-film" icon="film" />
        <AtomsVText variant="Body4B" colorType="white">1</AtomsVText>
      </div>
    </div>

    <AtomsVText class="!hidden md:(block)" variant="Body4">Yjphoto</AtomsVText>
    <AtomsVText variant="Body4B">0420 맽랜드 광화문</AtomsVText>
  </div>
</template>

<style scoped lang="scss">
.photo-info {
  @apply flex items-center gap-18px w-full;
}

.film-count-box {
  @apply min-w-120px h-32px rounded-16px bg-black flex items-center;
}

.film-wrapper {
  @apply flex items-center gap-8px ml-18px w-full;
}

.icon-film {
  @apply text-white h-14px;
}
</style>

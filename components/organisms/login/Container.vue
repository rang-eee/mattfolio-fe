<script setup lang="ts"></script>

<template>
  <section class="login-section">
    <div class="title-wrapper">
      <img src="@/assets/images/icon_mattfolio_white.png" alt="Logo" width="160px" />
      <AtomsVText variant="Body1" colorType="white">아름다운 자신의 순간을 찾으세요.</AtomsVText>
    </div>

    <slot />
  </section>
</template>

<style scoped lang="scss">
.login-section {
  @apply relative bg-cover bg-center flex flex-col justify-center items-center h-screen w-full z-10;
  background-image: url('https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg');
}

.login-section::before {
  @apply absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 -z-1;
  content: '';
}

.title-wrapper {
  @apply flex flex-col items-center gap-4 mb-8 <md:(absolute top-[calc(30%-150px)]);
}
</style>

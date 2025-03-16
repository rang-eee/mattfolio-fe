<script setup lang="ts">
const KAKAO_AUTH_URL = import.meta.env.VITE_KAKAO_AUTH_URL;
const NAVER_AUTH_URL = import.meta.env.VITE_NAVER_AUTH_URL;
const loginWithKakao = async () => {
  window.location.href = KAKAO_AUTH_URL;
}

const loginWithNaver = () => {
  window.location.href = NAVER_AUTH_URL;
}

</script>

<template>
  <AtomsVCard>
    <AtomsVText variant="Body1B">로그인 및 회원가입을 시작합니다</AtomsVText>

    <div class="kakao-login">
      <AtomsVChipButton label="카카오로 쉽게 시작하기" color="yellow" @click="loginWithKakao" />
      <AtomsVChipButton label="네이버로 쉽게 시작하기" color="naver" @click="loginWithNaver" />
    </div>
  </AtomsVCard>
</template>

<style scoped lang="scss">
.input-wrapper {
  @apply flex flex-col gap-2 w-full my-1.5;
}

.checkbox-wrapper {
  @apply w-full flex justify-start items-center gap-5 mb-3.5;
}

.button-wrapper {
  @apply flex flex-col gap-1 w-full;
}

.kakao-login {
  @apply my-8.5 mb-2.5 w-full flex flex-col gap-4;
}
</style>

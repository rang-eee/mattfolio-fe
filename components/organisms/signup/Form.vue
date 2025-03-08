<script setup lang="ts">
const email = ''
const password = ''
</script>

<template>
  <AtomsVCard>
    <AtomsVText variant="Body1B">이메일로 계정 만들기</AtomsVText>

    <div class="kakao-login">
      <AtomsVChipButton label="카카오로 쉽게 시작하기" color="yellow" />
    </div>

    <AtomsVText variant="Body3" colorType="gray">또는</AtomsVText>

    <div class="input-wrapper">
      <MoleculesLabelInput
        label="이메일 주소"
        :modelValue="email"
        placeholder="이메일을 입력해주세요"
        type="text"
      />
      <MoleculesLabelInput
        label="암호"
        :modelValue="password"
        placeholder="패스워드"
        type="password"
      />
    </div>

    <AtomsVChipButton class="w-full" label="계속" />
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
  @apply my-8.5 mb-2.5 w-full;
}
</style>

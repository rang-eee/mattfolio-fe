<script setup lang="ts">
definePageMeta({
  layout: false,
})

const route = useRoute();

// query 파라미터 추출 (타입 단언 필요1 시)
// provider와 code가 문자열 혹은 undefined로 반환됩니다.
const provider = route.query.provider as string | undefined;
const code = route.query.code as string | undefined;

console.log("Provider:", provider);
console.log("Code:", code);

</script>

<template>
  <OrganismsLoginContainer>
    <div class="fixed bottom-0 w-full md:(max-w-512px static)">
      <OrganismsSignupPhotoSetting :provider="provider" :code="code" />
    </div>
  </OrganismsLoginContainer>
</template>

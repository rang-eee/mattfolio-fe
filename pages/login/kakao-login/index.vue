<script setup lang="ts">
import { oauthApi } from "@/utils/api/services/authServices";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";


const router = useRouter();
const route = useRoute();

onMounted(async () => {
  // 현재 URL에서 카카오 로그인 코드(code) 추출
  const code = new URL(window.location.href).searchParams.get("code");

  if (code) {
    const result = await oauthApi.oauthLogin('kakao', code);

    console.log('result', result)

    if (result.resultCode == 200) {
      const rdata = result.data;

      const needSignup = rdata?.needSignup
      if (needSignup) {
        alert('회원가입이 필요한 회원입니다.');
        router.push('/signup/setting');
      } else {
        const accessToken = rdata?.accessToken;
        console.log('>>>>> accessToken', accessToken);

        localStorage.setItem("token", accessToken ?? '');
        alert('로그인이 완료되었습니다.');
        router.push("/");
      }

    } else {
      return alert(result?.resultMessage);
    }
  } else {
    console.error("카카오 로그인 코드가 없습니다.");
    // ro.push("/login");
  }
});
</script>

<template>
  <div>로그인 처리 중...</div>
</template>

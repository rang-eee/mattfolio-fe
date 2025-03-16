<script setup lang="ts">
const props = defineProps<{
  provider?: string;
  code?: string;
}>();

import { oauthApi } from '@/utils/api/services/authServices'; // 백엔드 업로드 API 호출 함수
import { ref } from 'vue';


// 10개의 업로드 박스에 대응하는 파일 배열(초기값 null)
const files = ref<(File | null)[]>(Array(10).fill(null));

// 자식 컴포넌트에서 파일 선택 이벤트 발생 시 호출할 핸들러
const handleFileSelected = (index: number, file: File) => {
  files.value[index] = file;
};


// "시작하기" 버튼 클릭 시 파일들을 백엔드로 전송
const uploadPhoto = async () => {
  // headerStore.setUploadProgress(50);

  if (files == null || files.value.length == 0) {
    return alert("사진을 등록해 주세요.");
  }

  const formData = new FormData();
  files.value.forEach((file, index) => {
    if (file) {
      formData.append('files', file); // 모든 파일을 동일한 키로 추가
    }
  });
  try {
    const response = await oauthApi.signup(formData, props.provider, props.code);

    // 업로드 완료 알림
    console.log("업로드 성공:", response);
    alert("업로드가 완료되었습니다.");
  } catch (error) {
    console.error("업로드 실패:", error);
    alert("업로드에 실패했습니다.");
  }
};
</script>

<template>
  <AtomsVCard>
    <div class="explain-wrapper">
      <AtomsVText variant="Body1B">내 얼굴 인식 사진 설정</AtomsVText>
      <AtomsVText variant="Body4B" colorType="gray">
        정면을 비롯한 다양하게 본인 얼굴이 나타난 사진을 올려주세요. (최대 10개) <br />
        마이페이지 내 사진 설정 화면에서 수정이 가능합니다.
      </AtomsVText>
    </div>

    <div class="upload-wrapper">
      <div v-for="(file, index) in files" :key="index">
        <!-- 자식 컴포넌트에 index를 식별자로 사용하고, file-selected 이벤트를 받아 처리 -->
        <MoleculesUploadBox class="upload-box" @file-selected="(file) => handleFileSelected(index, file)" />
      </div>
    </div>

    <div class="button-wrapper">
      <!-- <AtomsVChipButton label="사진 추가하기" /> -->
      <AtomsVChipButton label="회원가입" color="outline" @click="uploadPhoto" />
    </div>
  </AtomsVCard>
</template>

<style scoped lang="scss">
.explain-wrapper {
  @apply flex flex-col gap-1 mb-4 w-full;
}

.upload-wrapper {
  @apply grid gap-1 w-full place-items-center overflow-x-auto;
  grid-template-columns: repeat(5, 1fr);
}

.upload-box {
  @apply flex justify-center items-center w-148px h-148px md:(w-88px h-88px);
}

.button-wrapper {
  @apply flex gap-2 mt-30px w-full;
}
</style>

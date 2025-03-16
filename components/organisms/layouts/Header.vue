<script setup lang="ts">
import { DropMenuList } from '@/data/dropMenuList';
import { useHeaderStore } from '@/stores/headerStore';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const headerStore = useHeaderStore();

const isLogin = computed(() => headerStore.isLogin);
const isBellDropdownOpen = ref(false);
const bellBadgeCount = computed(() => headerStore.bellBadgeCount);
const bagBadgeCount = computed(() => headerStore.bagBadgeCount);
const isBellClicked = ref(false);
const isBagClicked = ref(false);
const isBellActive = computed(() => isBellClicked.value);
const isBagActive = computed(() => isBagClicked.value);

const uploadProgress = computed(() => headerStore.uploadProgress); // 업로드 진행률 (0~100)

// 기존 함수들
const toggleBellActive = () => {
  // 토글 동작: 클릭 시, 활성 상태와 드롭다운 표시 모두 토글
  isBellClicked.value = !isBellClicked.value;
  isBellDropdownOpen.value = !isBellDropdownOpen.value;
  console.log('Bell clicked, dropdown:', isBellDropdownOpen.value);
};

const handleBellDropdownUpdate = (isOpen: boolean) => {
  isBellDropdownOpen.value = isOpen;
  // 드롭다운이 닫히면, 활성 상태(false)로 변경
  if (!isOpen) {
    isBellClicked.value = false;
  }
};

const handleLogin = () => {
  navigateTo('/login');
};

const handleStart = () => { };

const handleDropMenuSelect = () => { };
</script>

<template>
  <header class="header">
    <nuxt-link to="/" class="header-logo">
      <img src="@/assets/images/icon_mattfolio_black.png" alt="Logo" />
    </nuxt-link>

    <div v-if="!isLogin" class="header-buttons">
      <AtomsVChipButton class="btn" color="outline" label="로그인" size="xSmall" @click="handleLogin" />
      <AtomsVChipButton class="btn" label="시작 하기" size="xSmall" @click="handleStart" />
    </div>

    <div v-else class="header-buttons">
      <!-- 업로드 진행률 퍼센트 표시 (값이 0보다 클 때만) -->
      <span v-if="uploadProgress > 0">{{ uploadProgress }}%</span>

      <AtomsVChipButton color="gray" size="xSmall" label="2,990 +">
        <template #icon>
          <AtomsVIcon icon="film" class="!min-w-20px" />
        </template>
      </AtomsVChipButton>

      <div class="icon-container">
        <AtomsVIcon icon="bell" :class="{ active: isBellActive }" class="icon-bell" @click="toggleBellActive" />
        <span v-if="bellBadgeCount > 0" class="badge">{{ bellBadgeCount }}</span>
        <transition name="fade-dropdown">
          <MoleculesVDropMenu :items="DropMenuList" :isOpen="isBellDropdownOpen" @update:isOpen="handleBellDropdownUpdate" @select="handleDropMenuSelect">
            <template #label>
              <AtomsVText class="!hidden md:(!block)" variant="Body4B">알림</AtomsVText>
              <div class="!hidden <md:(!flex gap-2)">
                <AtomsVIcon class="w-10px text-gray-500" icon="chevron-left" @click="toggleBellActive" />
                <AtomsVText class="flex items-center justify-center" variant="Body2B">알림</AtomsVText>
              </div>
            </template>
          </MoleculesVDropMenu>
        </transition>
      </div>

      <div class="icon-container">
        <AtomsVIcon class="icon-bag" icon="bag-shopping" :class="{ active: isBagActive }" />
        <span v-if="bagBadgeCount > 0" class="badge">{{ bagBadgeCount }}</span>
      </div>

      <div>
        <AtomsVProfile src="https://www.harpersbazaar.co.kr/resources/online/online_image/2024/10/02/e78e67a9-3901-416f-9d84-163bd4ed7b8b.jpg" size="36px" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply flex items-center justify-between h-80px w-full p-4 border-solid border-0 border-b border-gray-400 overflow-x-auto fixed z-999 top-0 bg-white;

  .btn {
    @apply w-128px;
  }

  .header-logo {
    @apply flex items-center flex-shrink-0;

    img {
      @apply w-100px sm:(w-128px);
    }
  }

  .header-buttons {
    @apply flex items-center gap-20px;

    .icon-container {
      @apply relative cursor-pointer flex items-center;

      .upload-progress {
        @apply absolute left-0 top-0 text-xs font-bold text-blue-500;
      }

      .icon-bell,
      .icon-bag {
        @apply relative min-w-18px md:(min-w-20px) !text-gray-600 hover:( !text-blue-500);
      }

      /* active 클래스가 적용되면 아이콘 색상 변경 */
      .icon-bell.active,
      .icon-bag.active {
        @apply !text-blue-500 transition-colors duration-300;
      }

      .badge {
        @apply absolute -top-9px -right-10px !bg-blue-700 !text-white text-xs font-bold py-0.5 px-1.5 rounded-full leading-none;
      }
    }
  }
}
</style>

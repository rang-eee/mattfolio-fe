<script setup lang="ts">
import { DropMenuList } from '~/data/dropMenuList'

const route = useRoute()

const isLogin = ref(true)
const isBellDropdownOpen = ref(false)
const bellBadgeCount = ref(3)
const bagBadgeCount = ref(5)
const isBellClicked = ref(false)
const isBagClicked = ref(false)

const isBellActive = computed(() => isBellClicked.value)
const isBagActive = computed(() => isBagClicked.value)

const toggleBellActive = () => {
  isBellClicked.value = !isBellClicked.value
  isBellDropdownOpen.value = !isBellDropdownOpen.value
  console.log('Bell clicked', isBellDropdownOpen.value)
}

const handleLogin = () => {}

const handleStart = () => {}

const handleDropMenuSelect = () => {}
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header-logo">
      <img src="@/assets/images/icon_mattfolio_black.png" alt="Logo" />
    </NuxtLink>

    <div v-if="!isLogin" class="header-buttons">
      <AtomsVChipButton
        class="btn"
        color="outline"
        label="로그인"
        size="xSmall"
        @click="handleLogin"
      />
      <AtomsVChipButton class="btn" label="시작 하기" size="xSmall" @click="handleStart" />
    </div>

    <div v-else class="header-buttons">
      <AtomsVChipButton color="gray" size="xSmall" label="2,990 +">
        <template #icon>
          <AtomsVIcon icon="film" class="!min-w-20px" />
        </template>
      </AtomsVChipButton>

      <div class="icon-container">
        <AtomsVIcon
          icon="bell"
          :class="{ active: isBellActive }"
          class="icon-bell"
          @click="toggleBellActive"
        />
        <span v-if="bellBadgeCount > 0" class="badge">{{ bellBadgeCount }}</span>
        <transition name="fade-dropdown">
          <MoleculesVDropMenu
            :items="DropMenuList"
            :isOpen="isBellDropdownOpen"
            @update:isOpen="isBellDropdownOpen = $event"
            @select="handleDropMenuSelect"
          >
            <template #label>
              <AtomsVText class="!hidden md:(!block)" variant="Body4B">알림</AtomsVText>
              <div class="!hidden <md:(!flex gap-2)">
                <AtomsVIcon
                  class="w-10px text-gray-500"
                  icon="chevron-left"
                  @click="toggleBellActive"
                />
                <AtomsVText class="flex items-center justify-center" variant="Body2B">
                  알림
                </AtomsVText>
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
        <AtomsVProfile
          src="https://www.harpersbazaar.co.kr/resources/online/online_image/2024/10/02/e78e67a9-3901-416f-9d84-163bd4ed7b8b.jpg"
          size="36px"
        />
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

      .icon-bell,
      .icon-bag {
        @apply relative min-w-18px md:(min-w-20px) !text-gray-600 hover:(!text-blue-500) active:(!text-blue-500) transition-colors duration-300;
      }

      .badge {
        @apply absolute -top-9px -right-10px !bg-blue-700 !text-white text-xs font-bold py-0.5 px-1.5 rounded-full leading-none;
      }
    }
  }
}
</style>

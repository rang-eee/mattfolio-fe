<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const menuItems = ref([
  { label: '찍힌 사진', routePath: '/my/other-photo' },
  { label: '찍은 사진', routePath: '/my/taken-photo' },
])

const handleMenuItemClick = (routePath: string): void => {
  router.push(routePath)
}
</script>

<template>
  <OrganismsLayoutsSideBarSection>
    <div class="sidebar-profile">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-4 md:(flex-col)">
          <AtomsVProfile
            src="https://i.pinimg.com/736x/f1/41/76/f14176e3705f6e42512c09f7168b3ece.jpg"
            size="100px"
          />

          <div class="flex flex-col md:(items-center)">
            <AtomsVText variant="Body1B"> 지홍염소 </AtomsVText>
            <AtomsVText variant="Body2"> jijh1209@naver.com</AtomsVText>
          </div>
        </div>
        <AtomsVIcon class="w-12px md:(hidden)" icon="chevron-right"></AtomsVIcon>
      </div>

      <AtomsVChipButton
        class="!hidden md:(!block)"
        label="내 사진 설정"
        color="outline"
        size="xSmall"
      />

      <div class="sidebar-menu">
        <AtomsVSelectButton
          v-for="(item, index) in menuItems"
          :key="index"
          :label="item.label"
          :active="item.routePath === route.path"
          @click="handleMenuItemClick(item.routePath)"
        />
      </div>
    </div>

    <div class="sidebar-footer">
      <div class="storage-info">
        <AtomsVText variant="Body4"> 저장 용량 </AtomsVText>
        <AtomsVText variant="Body4B"> 15GB 중 10.0GB 사용 </AtomsVText>
      </div>

      <VText variant="Caption"> 로그아웃 </VText>
    </div>
  </OrganismsLayoutsSideBarSection>
</template>

<style scoped lang="scss">
.sidebar-profile {
  @apply flex flex-col items-center gap-2;
}

.profile-info {
  @apply flex flex-col items-center;
}

.sidebar-menu {
  @apply flex gap-2 mt-24px w-full md:(flex-col mt-15);
}

.sidebar-footer {
  @apply !hidden !md:(flex items-center justify-center flex-col gap-2);

  .storage-info {
    @apply flex flex-col items-center;
  }
}
</style>

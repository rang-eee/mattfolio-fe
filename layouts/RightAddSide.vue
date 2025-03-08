<script lang="ts" setup></script>

<template>
  <OrganismsLayoutsContainer>
    <template #default>
      <div class="md:(pr-64 pt-80px)">
        <div class="p-4 min-h-[calc(100vh-80px)] w-full md:(p-8 overflow-y-auto)">
          <slot />
        </div>
      </div>
    </template>
    <template #header>
      <OrganismsLayoutsHeader />
    </template>
    <template #side>
      <div>
        <OrganismsOrderPaySideBar />
      </div>
    </template>
  </OrganismsLayoutsContainer>
</template>

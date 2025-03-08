<script lang="ts" setup></script>

<template>
  <OrganismsLayoutsContainer>
    <template #default>
      <slot />
    </template>
    <template #header>
      <OrganismsLayoutsHeader />
    </template>
  </OrganismsLayoutsContainer>
</template>

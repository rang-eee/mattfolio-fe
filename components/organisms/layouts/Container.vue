<script setup lang="ts"></script>

<template>
  <section>
    <div class="flex min-h-screen flex-col">
      <slot name="header"> </slot>
      <slot name="side"> </slot>
      <div class="relative mx-auto flex h-full w-full flex-1 flex-col">
        <slot />
      </div>
      <slot name="footer"> </slot>
    </div>
  </section>
</template>

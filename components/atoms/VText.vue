<script setup lang="ts">
type TTextVariant =
  | 'MainTitle'
  | 'H1'
  | 'H1B'
  | 'H2'
  | 'H2B'
  | 'Body1'
  | 'Body1B'
  | 'Body2'
  | 'Body2B'
  | 'Body3'
  | 'Body3B'
  | 'Body4'
  | 'Body4B'
  | 'Caption'

type TTextColor = 'primary' | 'yellow' | 'black' | 'white' | 'gray' | 'red'

type TTextOpacity = 0 | 25 | 50 | 75

const props = defineProps<{
  variant: TTextVariant
  colorType?: TTextColor
  opacity?: TTextOpacity
  underline?: boolean
  bold?: boolean
}>()

const textClass = computed(() => `text-${props.variant}`)
const textColorType = computed(() => `text-${props.colorType}`)
const textOpacity = computed(() => `opacity-${props.opacity}`)
const textUnderline = computed(() => (props.underline ? 'underline' : ''))
const textBold = computed(() => (props.bold ? 'font-bold' : ''))
</script>

<template>
  <div :class="[textClass, textColorType, textOpacity, textUnderline, textBold]">
    <slot />
  </div>
</template>

<style scoped lang="scss">
div {
  @apply flex items-center h-full align-baseline;
  word-break: keep-all;
}

.text-black {
  @apply text-black;
}

.text-white {
  @apply text-white;
}

.text-primary {
  @apply text-blue-500;
}

.text-yellow {
  @apply text-yellow-500;
}

.text-gray {
  @apply text-gray-500;
}

.text-red {
  @apply text-red-500;
}

.text-MainTitle {
  @apply text-3xl md:(text-4xl font-bold leading-relaxed);
}

.text-H1 {
  @apply text-2xl font-normal md:(text-3xl);
}

.text-H1B {
  @apply text-2xl font-bold md:(text-3xl);
}

.text-H2 {
  @apply text-xl font-normal  md:(text-2xl);
}

.text-H2B {
  @apply text-xl font-bold md:(text-2xl);
}

.text-Body1 {
  @apply text-lg font-normal md:(text-xl);
}

.text-Body1B {
  @apply text-lg font-bold md:(text-xl);
}

.text-Body2 {
  @apply text-base font-normal md:text-lg;
}

.text-Body2B {
  @apply text-base font-bold md:text-lg;
}

.text-Body3 {
  @apply text-sm font-normal md:text-base;
}

.text-Body3B {
  @apply text-sm font-bold md:text-base;
}

.text-Body4 {
  @apply text-xs font-normal md:text-sm;
}

.text-Body4B {
  @apply text-xs font-bold md:text-sm;
}

.text-Caption {
  @apply text-[12px] font-normal md:text-sm;
}

.opacity-0 {
  @apply opacity-0;
}

.opacity-25 {
  @apply opacity-25;
}

.opacity-50 {
  @apply opacity-50;
}

.opacity-75 {
  @apply opacity-75;
}

.underline {
  @apply underline;
}
</style>

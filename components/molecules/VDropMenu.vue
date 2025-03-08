<script setup lang="ts">
interface DropMenuItem {
  id: number
  title: string
  date: string
  image: string
  strongText: string
}

const props = defineProps({
  items: {
    type: Array as PropType<DropMenuItem[]>,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
  width: {
    type: String,
    default: 'fit-content',
  },
})

const emit = defineEmits(['update:isOpen', 'select'])

const handleSelect = (item: DropMenuItem) => {
  emit('select', item)
}

const handleClose = () => {
  emit('update:isOpen', false)
}

const toggleBodyOverflow = (isOpen: boolean) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
}

watch(
  () => props.isOpen,
  (newVal) => toggleBodyOverflow(newVal)
)
</script>

<template>
  <div class="dropdown-wrapper" v-show="isOpen">
    <div class="dropdown-overlay" @click="handleClose"></div>

    <div class="dropdown" :style="{ width }">
      <div class="dropdown-label">
        <slot name="label"></slot>
      </div>

      <ul class="dropdown-list">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="dropdown-item"
          @click="handleSelect(item)"
        >
          <div class="dropdown-item-text">
            <VText variant="Body3">
              <strong>{{ item.strongText }}</strong>
              {{ item.title }}
            </VText>
          </div>

          <img :src="item.image" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown-wrapper {
  @apply w-full h-full;

  .dropdown-overlay {
    @apply fixed top-0 left-0 w-full h-full bg-transparent z-999;
  }

  .dropdown {
    @apply fixed bg-white border border-gray-300 shadow-md rounded-lg z-1100 max-h-400px min-w-424px max-w-[90%] overflow-y-auto top-100px right-20px
    <md:(fixed inset-0 mx-auto min-w-100vw min-h-100vh max-w-none max-h-none);
  }

  .dropdown-label {
    @apply py-3 px-6;
  }

  .dropdown-list {
    @apply list-none m-0 p-0 w-full;
  }

  .dropdown-item {
    @apply flex items-center justify-between gap-4 py-3 px-6 transition-colors duration-300 w-full overflow-ellipsis;

    &:hover {
      @apply bg-gray-200;
    }

    img {
      @apply min-w-64px h-64px rounded-lg object-cover;
    }
  }
}
</style>

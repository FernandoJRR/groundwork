<script setup lang="ts">
defineProps<{
  hover?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'border border-white/8 bg-surface shadow-xl transition-all duration-300',
      hover && 'hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface-2'
    ]"
  >
    <slot />
  </div>
</template>

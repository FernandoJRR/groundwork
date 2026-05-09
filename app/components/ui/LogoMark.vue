<script setup lang="ts">
const props = defineProps<{
  variant?: 'green' | 'navy'
}>()

const src = computed(() =>
  props.variant === 'navy' ? '/images/logoBlack.png' : '/images/logoGreen.png'
)
</script>

<template>
  <img :src="src" alt="Gembaloft" class="h-9 w-auto" />
</template>

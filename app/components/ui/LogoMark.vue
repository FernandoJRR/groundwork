<script setup lang="ts">
const props = defineProps<{
  variant?: 'green' | 'navy'
}>()

const src = computed(() =>
  props.variant === 'navy' ? '/images/logoBlack.png' : '/images/logoWhite.png'
)
</script>

<template>
  <img :src="src" alt="Gembaloft" class="h-8 w-auto max-w-[150px] object-contain object-left" />
</template>

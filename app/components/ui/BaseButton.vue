<script setup lang="ts">
defineProps<{
  variant?: 'filled' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  tag?: string
}>()
</script>

<template>
  <component
    :is="href ? 'a' : (tag ?? 'button')"
    :href="href"
    :class="[
      'inline-flex items-center justify-center font-display font-bold tracking-wide transition-all duration-200 cursor-pointer',
      size === 'sm'  ? 'px-5 py-2 text-xs' :
      size === 'lg'  ? 'px-8 py-4 text-sm' :
                       'px-6 py-2.5 text-sm',
      variant === 'outline'
        ? 'border border-accent text-accent hover:bg-accent hover:text-bg'
        : variant === 'ghost'
        ? 'text-foreground hover:text-accent underline-offset-4 hover:underline'
        : 'bg-accent text-bg hover:bg-accent-dim shadow-lg shadow-accent/20'
    ]"
  >
    <slot />
  </component>
</template>

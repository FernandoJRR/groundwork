<script setup lang="ts">
defineProps<{
  variant?: 'filled' | 'outline' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  href?: string
  tag?: string
  px?: string
  py?: string
}>()
</script>

<template>
  <component
    :is="href ? 'a' : (tag ?? 'button')"
    :href="href"
    :class="[
      'inline-flex items-center justify-center font-display font-bold tracking-wide transition-all duration-200 cursor-pointer',
      px ?? (
        size === 'xs' ? 'px-3' :
        size === 'sm' ? 'px-5' :
        size === 'lg' ? 'px-8' :
                        'px-6'
      ),
      py ?? (
        size === 'xs' ? 'py-1' :
        size === 'sm' ? 'py-2' :
        size === 'lg' ? 'py-4' :
                        'py-2.5'
      ),
      size === 'xs' ? 'text-xs' :
      size === 'sm' ? 'text-xs' :
      size === 'lg' ? 'text-sm' :
                      'text-sm',
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

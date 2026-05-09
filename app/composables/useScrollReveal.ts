export function useScrollReveal(threshold = 0.12) {
  const el = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  useIntersectionObserver(
    el,
    (entries) => {
      if (entries[0]?.isIntersecting) isVisible.value = true
    },
    { threshold }
  )

  return { el, isVisible }
}

<script setup lang="ts">
const canvas = ref<HTMLCanvasElement | null>(null)

const FONT_SIZE = 14
const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ｦｧｨｩｪｫｬｭｮｯABCDEF'
const TARGET_FPS = 18

let rafId = 0
let lastTime = 0
let drops: number[] = []
let cols = 0
let ro: ResizeObserver | null = null

function rnd(str: string) {
  return str[Math.floor(Math.random() * str.length)]
}

function initCanvas(c: HTMLCanvasElement) {
  c.width = c.offsetWidth
  c.height = c.offsetHeight
  const newCols = Math.floor(c.width / FONT_SIZE)
  if (newCols !== cols) {
    cols = newCols
    drops = Array.from({ length: cols }, () =>
      Math.floor(Math.random() * -(c.height / FONT_SIZE))
    )
  }
}

function draw(c: HTMLCanvasElement) {
  const ctx = c.getContext('2d')!

  // Fade old characters to create trail
  ctx.fillStyle = 'rgba(0,0,0,0.06)'
  ctx.fillRect(0, 0, c.width, c.height)

  ctx.font = `${FONT_SIZE}px monospace`

  for (let i = 0; i < cols; i++) {
    const x = i * FONT_SIZE
    const y = drops[i] * FONT_SIZE

    if (drops[i] >= 0) {
      // Bright head
      ctx.fillStyle = '#d4ffd4'
      ctx.fillText(rnd(CHARS), x, y)

      // Green body one step behind
      if (drops[i] > 1) {
        ctx.fillStyle = '#22C55E'
        ctx.fillText(rnd(CHARS), x, (drops[i] - 1) * FONT_SIZE)
      }
    }

    drops[i]++

    // Reset column randomly once it clears the bottom
    if (y > c.height && Math.random() > 0.975) {
      drops[i] = Math.floor(Math.random() * -30)
    }
  }
}

function animate(c: HTMLCanvasElement, t: number) {
  rafId = requestAnimationFrame(next => animate(c, next))
  if (t - lastTime < 1000 / TARGET_FPS) return
  lastTime = t
  draw(c)
}

onMounted(() => {
  const c = canvas.value!
  initCanvas(c)
  ro = new ResizeObserver(() => initCanvas(c))
  ro.observe(c)
  rafId = requestAnimationFrame(t => animate(c, t))
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  ro?.disconnect()
})
</script>

<template>
  <div
    class="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.28]"
    aria-hidden="true"
    style="mix-blend-mode: screen"
  >
    <canvas ref="canvas" class="absolute inset-0 w-full h-full" />
  </div>
</template>

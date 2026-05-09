<template>
  <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex-pattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon
            points="30,2 58,17 58,35 30,50 2,35 2,17"
            fill="none"
            stroke="#22C55E"
            stroke-width="0.5"
            opacity="0.06"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-pattern)" />
    </svg>
  </div>
</template>

<template>
  <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-40" aria-hidden="true">
    <svg
      class="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hc-fine-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" stroke="#22C55E" stroke-width="0.3" opacity="0.07"/>
        </pattern>
        <filter id="hc-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Subtle grid -->
      <rect width="1440" height="900" fill="url(#hc-fine-grid)"/>

      <!-- ── Traces ──────────────────────────────────────────────── -->

      <!-- A: top-left cluster -->
      <path
        id="hc-a"
        d="M 0 120 L 220 120 L 220 220 L 440 220 L 440 120 L 720 120"
        stroke="#22C55E" stroke-width="1.5" stroke-linecap="square" opacity="0.22"
      />

      <!-- B: top-left down to center-left connector -->
      <path
        id="hc-b"
        d="M 720 120 L 720 280 L 860 280 L 860 160 L 1000 160"
        stroke="#22C55E" stroke-width="1.5" stroke-linecap="square" opacity="0.16"
      />

      <!-- C: top-right column -->
      <path
        id="hc-c"
        d="M 1000 60 L 1200 60 L 1200 240 L 1040 240 L 1040 420 L 1200 420 L 1200 580 L 1340 580"
        stroke="#22C55E" stroke-width="1.5" stroke-linecap="square" opacity="0.20"
      />

      <!-- D: right-side extension -->
      <path
        id="hc-d"
        d="M 1340 580 L 1440 580"
        stroke="#22C55E" stroke-width="1.5" stroke-linecap="square" opacity="0.14"
      />

      <!-- E: bottom-left band -->
      <path
        id="hc-e"
        d="M 0 700 L 180 700 L 180 560 L 360 560 L 360 700 L 560 700 L 560 820 L 0 820"
        stroke="#22C55E" stroke-width="1.5" stroke-linecap="square" opacity="0.18"
      />

      <!-- F: bottom-right band -->
      <path
        id="hc-f"
        d="M 780 780 L 1020 780 L 1020 880 L 1220 880 L 1220 780 L 1440 780"
        stroke="#22C55E" stroke-width="1.5" stroke-linecap="square" opacity="0.16"
      />

      <!-- G: left-side vertical -->
      <path
        id="hc-g"
        d="M 0 360 L 120 360 L 120 480 L 260 480 L 260 360"
        stroke="#22C55E" stroke-width="1.5" stroke-linecap="square" opacity="0.14"
      />

      <!-- H: mid-right horizontal -->
      <path
        id="hc-h"
        d="M 1040 420 L 880 420 L 880 560 L 780 560 L 780 680 L 1020 680"
        stroke="#22C55E" stroke-width="1.5" stroke-linecap="square" opacity="0.15"
      />

      <!-- ── IC chip boxes ────────────────────────────────────────── -->

      <!-- Chip at (440, 120) -->
      <rect x="408" y="88"  width="64" height="64" stroke="#22C55E" stroke-width="1" opacity="0.28" fill="none"/>
      <rect x="420" y="100" width="40" height="40" fill="#22C55E" opacity="0.04"/>
      <rect x="434" y="114" width="12" height="12" fill="#22C55E" opacity="0.9"/>

      <!-- Chip at (1200, 60) -->
      <rect x="1168" y="28"  width="64" height="64" stroke="#22C55E" stroke-width="1" opacity="0.28" fill="none"/>
      <rect x="1180" y="40"  width="40" height="40" fill="#22C55E" opacity="0.04"/>
      <rect x="1194" y="54"  width="12" height="12" fill="#22C55E" opacity="0.9"/>

      <!-- Chip at (260, 480) -->
      <rect x="228" y="448" width="64" height="64" stroke="#22C55E" stroke-width="1" opacity="0.22" fill="none"/>
      <rect x="240" y="460" width="40" height="40" fill="#22C55E" opacity="0.03"/>
      <rect x="254" y="474" width="12" height="12" fill="#22C55E" opacity="0.75"/>

      <!-- Chip at (1020, 780) -->
      <rect x="988" y="748" width="64" height="64" stroke="#22C55E" stroke-width="1" opacity="0.22" fill="none"/>
      <rect x="1000" y="760" width="40" height="40" fill="#22C55E" opacity="0.03"/>
      <rect x="1014" y="774" width="12" height="12" fill="#22C55E" opacity="0.75"/>

      <!-- ── Nodes ───────────────────────────────────────────────── -->
      <!-- Trace A nodes -->
      <rect x="214" y="114" width="12" height="12" fill="#22C55E" opacity="0.45"/>
      <rect x="214" y="214" width="12" height="12" fill="#22C55E" opacity="0.35"/>
      <rect x="714" y="114" width="12" height="12" fill="#22C55E" opacity="0.50"/>
      <!-- Trace B nodes -->
      <rect x="714" y="274" width="12" height="12" fill="#22C55E" opacity="0.35"/>
      <rect x="854" y="274" width="12" height="12" fill="#22C55E" opacity="0.30"/>
      <rect x="854" y="154" width="12" height="12" fill="#22C55E" opacity="0.40"/>
      <rect x="994" y="154" width="12" height="12" fill="#22C55E" opacity="0.45"/>
      <!-- Trace C nodes -->
      <rect x="994" y="54"   width="12" height="12" fill="#22C55E" opacity="0.55"/>
      <rect x="1194" y="234" width="12" height="12" fill="#22C55E" opacity="0.40"/>
      <rect x="1034" y="234" width="12" height="12" fill="#22C55E" opacity="0.35"/>
      <rect x="1034" y="414" width="12" height="12" fill="#22C55E" opacity="0.45"/>
      <rect x="1194" y="414" width="12" height="12" fill="#22C55E" opacity="0.38"/>
      <rect x="1194" y="574" width="12" height="12" fill="#22C55E" opacity="0.30"/>
      <rect x="1334" y="574" width="12" height="12" fill="#22C55E" opacity="0.30"/>
      <!-- Trace E nodes -->
      <rect x="174" y="694" width="12" height="12" fill="#22C55E" opacity="0.40"/>
      <rect x="174" y="554" width="12" height="12" fill="#22C55E" opacity="0.35"/>
      <rect x="354" y="554" width="12" height="12" fill="#22C55E" opacity="0.30"/>
      <rect x="354" y="694" width="12" height="12" fill="#22C55E" opacity="0.38"/>
      <rect x="554" y="694" width="12" height="12" fill="#22C55E" opacity="0.42"/>
      <rect x="554" y="814" width="12" height="12" fill="#22C55E" opacity="0.30"/>
      <!-- Trace F nodes -->
      <rect x="774" y="774" width="12" height="12" fill="#22C55E" opacity="0.38"/>
      <rect x="1214" y="774" width="12" height="12" fill="#22C55E" opacity="0.38"/>
      <rect x="1214" y="874" width="12" height="12" fill="#22C55E" opacity="0.28"/>
      <!-- Trace G nodes -->
      <rect x="114" y="354" width="12" height="12" fill="#22C55E" opacity="0.35"/>
      <rect x="114" y="474" width="12" height="12" fill="#22C55E" opacity="0.30"/>
      <!-- Trace H nodes -->
      <rect x="874" y="414" width="12" height="12" fill="#22C55E" opacity="0.32"/>
      <rect x="874" y="554" width="12" height="12" fill="#22C55E" opacity="0.30"/>
      <rect x="774" y="554" width="12" height="12" fill="#22C55E" opacity="0.28"/>
      <rect x="774" y="674" width="12" height="12" fill="#22C55E" opacity="0.32"/>

      <!-- ── Corner accent marks ─────────────────────────────────── -->
      <rect x="0"    y="0"   width="24" height="2" fill="#22C55E" opacity="0.35"/>
      <rect x="0"    y="0"   width="2"  height="24" fill="#22C55E" opacity="0.35"/>
      <rect x="1416" y="898" width="24" height="2" fill="#22C55E" opacity="0.35"/>
      <rect x="1438" y="876" width="2"  height="24" fill="#22C55E" opacity="0.35"/>
      <rect x="1416" y="0"   width="24" height="2" fill="#22C55E" opacity="0.20"/>
      <rect x="1438" y="0"   width="2"  height="24" fill="#22C55E" opacity="0.20"/>
      <rect x="0"    y="898" width="24" height="2" fill="#22C55E" opacity="0.20"/>
      <rect x="0"    y="876" width="2"  height="24" fill="#22C55E" opacity="0.20"/>

      <!-- ── Animated signals ────────────────────────────────────── -->

      <!-- Signal A1 -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="7s" repeatCount="indefinite" begin="0s">
          <mpath href="#hc-a"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.94;1" dur="7s" repeatCount="indefinite" begin="0s"/>
        <rect x="-4" y="-4" width="8" height="8" fill="#22C55E" opacity="0.9"/>
      </g>
      <!-- Signal A2 (offset) -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="7s" repeatCount="indefinite" begin="3.5s">
          <mpath href="#hc-a"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.06;0.94;1" dur="7s" repeatCount="indefinite" begin="3.5s"/>
        <rect x="-3" y="-3" width="6" height="6" fill="#22C55E" opacity="0.7"/>
      </g>

      <!-- Signal B1 -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="6s" repeatCount="indefinite" begin="1.2s">
          <mpath href="#hc-b"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="6s" repeatCount="indefinite" begin="1.2s"/>
        <rect x="-4" y="-4" width="8" height="8" fill="#22C55E" opacity="0.9"/>
      </g>

      <!-- Signal C1 -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="10s" repeatCount="indefinite" begin="0.4s">
          <mpath href="#hc-c"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="10s" repeatCount="indefinite" begin="0.4s"/>
        <rect x="-4" y="-4" width="8" height="8" fill="#22C55E" opacity="0.9"/>
      </g>
      <!-- Signal C2 (offset) -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="10s" repeatCount="indefinite" begin="5.4s">
          <mpath href="#hc-c"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.05;0.95;1" dur="10s" repeatCount="indefinite" begin="5.4s"/>
        <rect x="-3" y="-3" width="6" height="6" fill="#22C55E" opacity="0.7"/>
      </g>

      <!-- Signal E1 -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="8s" repeatCount="indefinite" begin="2s">
          <mpath href="#hc-e"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.94;1" dur="8s" repeatCount="indefinite" begin="2s"/>
        <rect x="-4" y="-4" width="8" height="8" fill="#22C55E" opacity="0.9"/>
      </g>
      <!-- Signal E2 -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="8s" repeatCount="indefinite" begin="6s">
          <mpath href="#hc-e"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.06;0.94;1" dur="8s" repeatCount="indefinite" begin="6s"/>
        <rect x="-3" y="-3" width="6" height="6" fill="#22C55E" opacity="0.7"/>
      </g>

      <!-- Signal F1 -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="7.5s" repeatCount="indefinite" begin="0.8s">
          <mpath href="#hc-f"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.93;1" dur="7.5s" repeatCount="indefinite" begin="0.8s"/>
        <rect x="-4" y="-4" width="8" height="8" fill="#22C55E" opacity="0.9"/>
      </g>

      <!-- Signal G1 -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="5s" repeatCount="indefinite" begin="3s">
          <mpath href="#hc-g"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.09;0.91;1" dur="5s" repeatCount="indefinite" begin="3s"/>
        <rect x="-4" y="-4" width="8" height="8" fill="#22C55E" opacity="0.9"/>
      </g>

      <!-- Signal H1 -->
      <g filter="url(#hc-glow)">
        <animateMotion dur="7s" repeatCount="indefinite" begin="1.8s">
          <mpath href="#hc-h"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.93;1" dur="7s" repeatCount="indefinite" begin="1.8s"/>
        <rect x="-4" y="-4" width="8" height="8" fill="#22C55E" opacity="0.9"/>
      </g>
    </svg>
  </div>
</template>

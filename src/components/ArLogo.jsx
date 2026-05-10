// ─────────────────────────────────────────
//  ArLogo — shared SVG component
//  Traced from the real Archway Indonesia logo:
//    A = bold triangle with crossbar notch
//    R = bold R with diagonal leg, sharing A's right edge
//  Colors adapt via `color` prop (default: white)
//  Use `glow` prop for the cyan neon variant
// ─────────────────────────────────────────

export default function ArLogo({
  size = 56,
  color = '#ffffff',
  glow = false,
  className = '',
}) {
  const glowFilter = glow ? 'url(#ar-glow)' : undefined

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {glow && (
        <defs>
          <filter id="ar-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}

      {/*
        ── A shape ──
        Bold triangle. Left leg, right leg, crossbar.
        A notch is cut where the R overlaps.
        Outer triangle: apex ~(42,8), left-bottom (6,92), right-bottom (78,92)
        Inner hollow: apex (42,28), left (22,72), right (62,72)  — but right side shared with R
        Crossbar: y=54, from left leg to right leg
      */}

      {/* A — left outer leg */}
      <path
        d="
          M 42 8
          L 6 92
          L 24 92
          L 42 52
          L 60 92
          L 78 92
          L 42 8
          Z
        "
        fill={color}
        filter={glowFilter}
      />

      {/* A — inner cutout (hollow triangle) */}
      <path
        d="
          M 42 30
          L 27 68
          L 57 68
          Z
        "
        fill="transparent"
        style={{ mixBlendMode: 'normal' }}
      />

      {/* We draw A as solid then punch inner + do crossbar manually */}
      {/* Reset: draw A correctly as filled shape with inner hollow */}

      {/*
        ── Final A shape (even-odd fill rule for hollow) ──
      */}
      <path
        d="
          M 42 8
          L 4 94
          L 23 94
          L 42 52
          L 61 94
          L 80 94
          L 42 8
          Z
          M 42 30
          L 26 70
          L 58 70
          Z
        "
        fill={color}
        fillRule="evenodd"
        filter={glowFilter}
      />

      {/* A crossbar — horizontal bar across the middle */}
      <rect
        x="24"
        y="53"
        width="36"
        height="9"
        rx="1"
        fill={color}
        filter={glowFilter}
      />

      {/*
        ── R shape ──
        Bold R sitting to the right, overlapping A slightly.
        Vertical stem: x=58–73, y=18–94
        Top bump: arc from (73,18) curving right to (73,48) — semicircle cap
        Middle bar: y=48 going left back to stem
        Diagonal leg: from (73,48) down-right to (96,94)
        Leg width bar parallel
      */}

      {/* R stem */}
      <rect
        x="58"
        y="18"
        width="16"
        height="76"
        rx="2"
        fill={color}
        filter={glowFilter}
      />

      {/* R bowl (top rounded bump) */}
      <path
        d="
          M 74 18
          L 88 18
          Q 108 18 108 36
          Q 108 54 88 54
          L 74 54
          Z
        "
        fill={color}
        filter={glowFilter}
      />

      {/* R bowl inner cutout */}
      <path
        d="
          M 74 28
          L 86 28
          Q 97 28 97 36
          Q 97 44 86 44
          L 74 44
          Z
        "
        fill="transparent"
      />

      {/* R diagonal leg */}
      <path
        d="
          M 74 54
          L 88 54
          L 112 94
          L 96 94
          Z
        "
        fill={color}
        filter={glowFilter}
      />
    </svg>
  )
}

interface Props {
  className?: string;
}

export default function KeystoneLogo({ className = '' }: Props) {
  const sw = 7.2;

  return (
    <svg
      viewBox="0 0 345 92"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Keystone Software Solutions"
    >
      <title>Keystone Software Solutions</title>

      {/* ── "Ke" ── */}
      <text
        x="0" y="57"
        fontFamily="'Geist Variable', 'Inter', system-ui, sans-serif"
        fontWeight="700"
        fontSize="64"
        letterSpacing="-2"
        aria-hidden="true"
      >
        Ke
      </text>

      {/* ── y + g ligature (custom SVG paths) ── */}
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth={sw}
        aria-hidden="true"
      >
        {/* Left arm of y */}
        <line x1="88"  y1="9"  x2="108" y2="57" />
        {/* Right arm of y → descender */}
        <polyline points="128,9 108,57 102,74" />
        {/* Connector to circle */}
        <line x1="102" y1="74" x2="94" y2="68" />
        {/*
          Open circle = the g.
          Center (82, 80), r=12.
          300° arc leaving a 60° gap at the bottom.
          End-points at ±60° from bottom (120° and 60° in SVG coords):
            60°  → (88,   90.4)
            120° → (76,   90.4)
          large-arc=1, sweep=1 (clockwise long path via top)
        */}
        <path d="M 88,90.4 A 12,12 0 1,1 76,90.4" />
      </g>

      {/* ── "stone" ── */}
      <text
        x="140" y="57"
        fontFamily="'Geist Variable', 'Inter', system-ui, sans-serif"
        fontWeight="700"
        fontSize="64"
        letterSpacing="-2"
        aria-hidden="true"
      >
        stone
      </text>

      {/* ── "Software Solutions" subtitle ── */}
      <text
        x="178" y="79"
        fontFamily="'Geist Variable', 'Inter', system-ui, sans-serif"
        fontWeight="400"
        fontSize="12"
        letterSpacing="0.3"
        aria-hidden="true"
      >
        Software Solutions
      </text>
    </svg>
  );
}

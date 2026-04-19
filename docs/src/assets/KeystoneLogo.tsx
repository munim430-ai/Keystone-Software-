interface Props {
  className?: string;
}

export default function KeystoneLogo({ className = '' }: Props) {
  /*
    The distinctive element of this logo is the y→g ligature:
    the y's descender curves down into an open circle (the g),
    sitting below the baseline. We render this as SVG strokes
    so it scales cleanly at any size and works at any color.
  */
  const sw = 7.2; // stroke width — matches weight of Geist 700 at this scale

  return (
    <svg
      viewBox="0 0 345 92"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Keystone Software Solutions"
    >
      {/* ── "Ke" ── rendered via font */}
      <text
        x="0" y="57"
        fontFamily="'Geist Variable', 'Inter', system-ui, sans-serif"
        fontWeight="700"
        fontSize="64"
        letterSpacing="-2"
      >
        Ke
      </text>

      {/* ── y + g ligature ── hand-drawn SVG at x≈86 ── */}
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth={sw}>
        {/* Left arm of y */}
        <line x1="88"  y1="9"  x2="108" y2="57" />
        {/* Right arm of y, continuing as descender */}
        <polyline points="128,9 108,57 102,74" />
        {/* Connector from descender tip to top of g circle */}
        <line x1="102" y1="74" x2="94" y2="68" />
        {/*
          Open circle = the g.
          Center: (82, 80), radius: 12
          300° arc — gap of 60° at the bottom.
          Arc end points at ±60° from the bottom (i.e. at 120° and 60° in SVG coords):
            60°  → (82 + 12·cos60°,  80 + 12·sin60°)  = (88,   90.4)
            120° → (82 + 12·cos120°, 80 + 12·sin120°) = (76,   90.4)
          large-arc=1, sweep=1 (clockwise, long path via top)
        */}
        <path d="M 88,90.4 A 12,12 0 1,1 76,90.4" />
      </g>

      {/* ── "stone" ── rendered via font, after the gy element (~55px wide) */}
      <text
        x="140" y="57"
        fontFamily="'Geist Variable', 'Inter', system-ui, sans-serif"
        fontWeight="700"
        fontSize="64"
        letterSpacing="-2"
      >
        stone
      </text>

      {/* ── "Software Solutions" subtitle ── below-right */}
      <text
        x="178" y="79"
        fontFamily="'Geist Variable', 'Inter', system-ui, sans-serif"
        fontWeight="400"
        fontSize="12"
        letterSpacing="0.3"
      >
        Software Solutions
      </text>
    </svg>
  );
}

"use client";

import { Box } from '@mui/material';
import { Caption, ACCENT, VIOLET, DIM } from '../paper';

// The same helix drawn twice: seen along its axis it is a closed circle (every turn
// "resets"); seen from the side, every turn sits higher than the last.

const TURNS = 3;
const R = 46;

function helixPath({ cx, baseY, rise, tilt }) {
  const pts = [];
  for (let i = 0; i <= TURNS * 120; i++) {
    const t = (i / 120) * 2 * Math.PI;
    const x = cx + R * Math.cos(t);
    const y = baseY - (rise * t) / (2 * Math.PI) + R * tilt * Math.sin(t);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return 'M' + pts.join(' L');
}

const SIDE = helixPath({ cx: 250, baseY: 150, rise: 34, tilt: 0.28 });

export default function HelixFigure() {
  return (
    <Box component="figure" sx={{ m: 0, my: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <svg viewBox="0 0 340 200" width="100%" style={{ maxWidth: 520 }} role="img"
             aria-label="Left: a circle, the helix seen along its axis. Right: the same helix seen from the side, rising with each turn.">
          <defs>
            <marker id="hx-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={DIM} />
            </marker>
          </defs>

          {/* Top view: the flat circle */}
          <circle cx="80" cy="95" r={R} fill="none" stroke={VIOLET} strokeWidth="2" />
          <circle cx={80 + R} cy="95" r="4" fill={VIOLET} />
          <text x="80" y="178" textAnchor="middle" fill={DIM} fontSize="11">seen along the axis</text>
          <text x="80" y="193" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10">every turn returns: “reset”</text>

          {/* Projection arrow */}
          <line x1="140" y1="95" x2="186" y2="95" stroke={DIM} strokeWidth="1" strokeDasharray="3 3" markerStart="url(#hx-arrow)" />

          {/* Side view: the up-spiral */}
          <path d={SIDE} fill="none" stroke={ACCENT} strokeWidth="2" />
          <text x="250" y="178" textAnchor="middle" fill={DIM} fontSize="11">seen from the side</text>
          <text x="250" y="193" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10">every turn sits higher</text>
        </svg>
      </Box>
      <Caption>
        Figure 1. One helix, two projections. Viewed along its axis, the path closes on itself and every
        turn looks like a return to zero. Viewed from the side, nothing is ever revisited. The reset belongs
        to the viewpoint, not to the path.
      </Caption>
    </Box>
  );
}

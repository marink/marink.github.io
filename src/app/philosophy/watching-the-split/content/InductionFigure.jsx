"use client";

import { Box } from '@mui/material';
import { Caption, ACCENT, VIOLET, DIM } from '../../paper';

// Wireless (inductive) charging, side view. The pad's alternating current drives a
// field that keeps reversing; the phone's coil answers with a current of its own,
// in the opposite sense (Lenz). Two instants alternate; motion stops for readers
// who prefer reduced motion.

const OUT = ({ x, y, c }) => (
  <g>
    <circle cx={x} cy={y} r="7" fill="#0b1324" stroke={c} strokeWidth="1.6" />
    <circle cx={x} cy={y} r="1.8" fill={c} />
  </g>
);
const IN = ({ x, y, c }) => (
  <g>
    <circle cx={x} cy={y} r="7" fill="#0b1324" stroke={c} strokeWidth="1.6" />
    <path d={`M${x - 3.6},${y - 3.6} L${x + 3.6},${y + 3.6} M${x + 3.6},${y - 3.6} L${x - 3.6},${y + 3.6}`} stroke={c} strokeWidth="1.5" />
  </g>
);

const PAD = '#94a3b8';
const PHONE = VIOLET;

function Instant({ flip }) {
  // flip = false: pad current out on the left, in on the right; field points up through the middle.
  const PadL = flip ? IN : OUT, PadR = flip ? OUT : IN;
  const PhL = flip ? OUT : IN,  PhR = flip ? IN : OUT;   // induced current opposes the change
  const up = !flip;
  return (
    <g>
      <PadL x={236} y={214} c={PAD} /><PadL x={258} y={214} c={PAD} />
      <PadR x={342} y={214} c={PAD} /><PadR x={364} y={214} c={PAD} />
      <PhL x={244} y={94} c={PHONE} /><PhL x={264} y={94} c={PHONE} />
      <PhR x={336} y={94} c={PHONE} /><PhR x={356} y={94} c={PHONE} />
      {/* field direction through the middle */}
      <path d={up ? 'M300,186 L300,122' : 'M300,122 L300,186'} stroke={ACCENT} strokeWidth="2.2" markerEnd="url(#ind-arrow)" />
    </g>
  );
}

export default function InductionFigure() {
  return (
    <Box component="figure" sx={{ m: 0, my: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <svg viewBox="0 0 600 290" width="100%" style={{ maxWidth: 640 }} role="img"
             aria-label="Side view of wireless charging: the pad's coil drives a reversing magnetic field that loops through the phone's coil across a gap, and the phone's coil answers with a current of its own.">
          <style>{`
            .ind-a { animation: indA 2.4s steps(1) infinite; }
            .ind-b { animation: indB 2.4s steps(1) infinite; }
            @keyframes indA { 0% { opacity: 1 } 50% { opacity: 0 } }
            @keyframes indB { 0% { opacity: 0 } 50% { opacity: 1 } }
            @media (prefers-reduced-motion: reduce) { .ind-a { animation: none; opacity: 1 } .ind-b { animation: none; opacity: 0 } }
          `}</style>
          <defs>
            <marker id="ind-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={ACCENT} />
            </marker>
          </defs>

          {/* field lines looping through both coils */}
          {[[34, 92], [64, 104], [98, 116]].map(([rx, ry], i) => (
            <ellipse key={i} cx="300" cy="154" rx={rx} ry={ry} fill="none" stroke={ACCENT} strokeOpacity={0.45 - i * 0.1}
                     strokeWidth="1.2" strokeDasharray="4 4" />
          ))}

          {/* phone (top) and pad (bottom) */}
          <rect x="214" y="44" width="172" height="34" rx="9" fill="#111c33" stroke={PHONE} strokeOpacity="0.7" />
          <text x="300" y="66" textAnchor="middle" fontSize="12" fill={PHONE}>phone</text>
          <rect x="198" y="236" width="204" height="28" rx="12" fill="#111c33" stroke={PAD} strokeOpacity="0.7" />
          <text x="300" y="255" textAnchor="middle" fontSize="12" fill={PAD}>charging pad</text>

          <g className="ind-a"><Instant flip={false} /></g>
          <g className="ind-b"><Instant flip={true} /></g>

          {/* the gap */}
          <line x1="410" y1="104" x2="410" y2="204" stroke={DIM} strokeWidth="1" />
          <line x1="404" y1="104" x2="416" y2="104" stroke={DIM} strokeWidth="1" />
          <line x1="404" y1="204" x2="416" y2="204" stroke={DIM} strokeWidth="1" />
          <text x="420" y="158" fontSize="11" fill={DIM}>gap: no contact</text>

          {/* physics, left */}
          <text x="14" y="92" fontSize="11" fill={DIM}>phone coil: a current</text>
          <text x="14" y="106" fontSize="11" fill={DIM}>of its own</text>
          <text x="14" y="158" fontSize="11" fill={ACCENT}>field, reversing</text>
          <text x="14" y="212" fontSize="11" fill={DIM}>pad coil: alternating</text>
          <text x="14" y="226" fontSize="11" fill={DIM}>current</text>

          {/* the analogy, right */}
          <text x="420" y="62" fontSize="11.5" fill={PHONE} fontStyle="italic">you: your own coil turns</text>
          <text x="420" y="178" fontSize="11.5" fill={VIOLET} fontStyle="italic">no wire: nothing poured in</text>
          <text x="420" y="256" fontSize="11.5" fill={PAD} fontStyle="italic">me: showing my way</text>
        </svg>
      </Box>
      <Caption>
        Wireless charging, seen from the side. The pad's current keeps reversing, and so does its field; the phone's coil
        answers with a current of its own, turning the opposite way. Nothing crosses the gap but the field: induction,
        not transmission.
      </Caption>
    </Box>
  );
}

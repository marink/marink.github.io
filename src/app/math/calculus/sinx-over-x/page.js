"use client";

import { useState } from 'react';
import { Box, Typography, Slider, Divider } from '@mui/material';
import { InlineMath, BlockMath } from 'react-katex';

const TEXT   = '#e2e8f0';
const DIM    = '#94a3b8';
const ACCENT = '#60a5fa';
const AMBER  = '#fbbf24';
const GREEN  = '#34d399';
const MUTED  = 'rgba(255,255,255,0.12)';

const M  = ({ m }) => <InlineMath math={m} />;
const MB = ({ m }) => <BlockMath math={m} />;

function P({ children }) {
  return <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.85, mb: 2.5 }}>{children}</Typography>;
}
function Def({ title, children }) {
  return (
    <Box sx={{ my: 3, p: 3, borderRadius: '8px', background: 'rgba(96,165,250,0.06)', borderLeft: `3px solid ${ACCENT}` }}>
      {title && <Typography sx={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: ACCENT, mb: 1 }}>{title}</Typography>}
      <Box sx={{ color: DIM, fontSize: 15, lineHeight: 1.85 }}>{children}</Box>
    </Box>
  );
}
function Thm({ title, children }) {
  return (
    <Box sx={{ my: 3, p: 3, borderRadius: '8px', background: 'rgba(52,211,153,0.05)', borderLeft: `3px solid ${GREEN}` }}>
      {title && <Typography sx={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: GREEN, mb: 1 }}>{title}</Typography>}
      <Box sx={{ color: DIM, fontSize: 15, lineHeight: 1.85 }}>{children}</Box>
    </Box>
  );
}
function Proof({ children }) {
  return (
    <Box sx={{ my: 2.5, pl: 3, borderLeft: '2px solid rgba(255,255,255,0.08)' }}>
      <Typography component="span" sx={{ fontSize: 13, fontStyle: 'italic', fontWeight: 600, color: 'rgba(255,255,255,0.25)', mr: 1 }}>
        Proof.
      </Typography>
      <Typography component="span" sx={{ color: DIM, fontSize: 14, lineHeight: 1.85 }}>
        {children}
      </Typography>
      <Box component="span" sx={{ ml: 1.5, color: 'rgba(255,255,255,0.2)', fontSize: 16 }}>□</Box>
    </Box>
  );
}
function Note({ children }) {
  return (
    <Box sx={{ my: 2.5, p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <Typography sx={{ color: DIM, fontSize: 14, lineHeight: 1.8 }}>{children}</Typography>
    </Box>
  );
}
function H2({ id, children }) {
  return <Typography id={id} variant="h2" sx={{ fontSize: '1.4rem', fontWeight: 700, color: TEXT, mt: 6, mb: 2, scrollMarginTop: '80px' }}>{children}</Typography>;
}
function H3({ children }) {
  return <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 600, color: TEXT, mt: 4, mb: 1.5, letterSpacing: 0.3 }}>{children}</Typography>;
}

// ── Interactive squeeze visualisation ──────────────────────────────────────

function SqueezeVis() {
  const [theta, setTheta] = useState(0.7);

  const W = 340, H = 260;
  const cx = 90, cy = 200, r = 160;

  const px = cx + r * Math.cos(theta);
  const py = cy - r * Math.sin(theta);
  const ax = cx + r, ay = cy;
  const qx = cx + r;
  const qy = cy - r * Math.tan(theta);

  const sinx  = Math.sin(theta);
  const tanx  = Math.tan(theta);
  const ratio  = sinx / theta;

  const sectorPath =
    `M ${cx} ${cy} L ${ax} ${ay} A ${r} ${r} 0 0 0 ${px.toFixed(2)} ${py.toFixed(2)} Z`;

  const areaRows = [
    { label: 'Triangle OAP', expr: '\\tfrac{1}{2}\\sin x', val: (0.5 * sinx).toFixed(4), color: GREEN },
    { label: 'Sector OAP',   expr: '\\tfrac{x}{2}',        val: (0.5 * theta).toFixed(4), color: ACCENT },
    { label: 'Triangle OAQ', expr: '\\tfrac{1}{2}\\tan x', val: (0.5 * tanx).toFixed(4), color: AMBER },
  ];

  return (
    <Box sx={{ my: 4, p: 3, borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <Typography sx={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', mb: 2 }}>
        Interactive — drag to change x
      </Typography>

      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* SVG */}
        <Box sx={{ flexShrink: 0 }}>
          <svg width={W} height={H} style={{ display: 'block' }}>
            {/* Unit circle arc (first quadrant) */}
            <path d={`M ${ax} ${ay} A ${r} ${r} 0 0 0 ${cx} ${cy - r}`}
              fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

            {/* Outer triangle OAQ — amber */}
            <polygon
              points={`${cx},${cy} ${ax},${ay} ${qx.toFixed(2)},${qy.toFixed(2)}`}
              fill="rgba(251,191,36,0.10)" stroke={AMBER} strokeWidth="1.2" strokeOpacity="0.5"
            />

            {/* Sector OAP — blue */}
            <path d={sectorPath}
              fill="rgba(96,165,250,0.14)" stroke={ACCENT} strokeWidth="1.2" strokeOpacity="0.6" />

            {/* Inner triangle OAP — green */}
            <polygon
              points={`${cx},${cy} ${ax},${ay} ${px.toFixed(2)},${py.toFixed(2)}`}
              fill="rgba(52,211,153,0.14)" stroke={GREEN} strokeWidth="1.2" strokeOpacity="0.6"
            />

            {/* Tangent line at A (dashed) */}
            <line x1={ax} y1={ay + 10} x2={ax} y2={qy - 4}
              stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,3" />

            {/* Labels — sin x (vertical drop from P to x-axis) */}
            <line x1={px.toFixed(2)} y1={py.toFixed(2)} x2={px.toFixed(2)} y2={cy}
              stroke={GREEN} strokeWidth="1" strokeDasharray="3,3" strokeOpacity="0.5" />
            <text x={px + 5} y={(py + cy) / 2} fill={GREEN} fontSize="12" fontFamily="serif" fontStyle="italic">sin x</text>

            {/* tan x label */}
            {theta < 1.2 && (
              <text x={qx + 5} y={(ay + qy) / 2} fill={AMBER} fontSize="12" fontFamily="serif" fontStyle="italic">tan x</text>
            )}

            {/* arc label x */}
            <text
              x={cx + (r + 14) * Math.cos(theta / 2)}
              y={cy - (r + 14) * Math.sin(theta / 2)}
              fill={ACCENT} fontSize="13" fontFamily="serif" fontStyle="italic" textAnchor="middle"
            >x</text>

            {/* Points */}
            {[{ x: cx, y: cy, label: 'O', dx: -14, dy: 4 },
              { x: ax, y: ay, label: 'A', dx: 7,   dy: 4 },
              { x: px, y: py, label: 'P', dx: -16, dy: -4 },
              { x: qx, y: qy, label: 'Q', dx: 7,   dy: 4 },
            ].map(({ x, y, label, dx, dy }) => (
              <g key={label}>
                <circle cx={x.toFixed(2)} cy={y.toFixed(2)} r="3" fill="rgba(255,255,255,0.5)" />
                <text x={(x + dx).toFixed(2)} y={(y + dy).toFixed(2)} fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="serif">{label}</text>
              </g>
            ))}

            {/* x-axis */}
            <line x1={cx - 10} y1={cy} x2={ax + 30} y2={cy} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          </svg>
        </Box>

        {/* Right panel */}
        <Box sx={{ flex: 1, minWidth: 180 }}>
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', mb: 0.5 }}>
              x = {theta.toFixed(3)} rad ({(theta * 180 / Math.PI).toFixed(1)}°)
            </Typography>
            <Slider
              value={theta}
              onChange={(_, v) => setTheta(v)}
              min={0.05} max={Math.PI / 2 - 0.05} step={0.01}
              sx={{ color: ACCENT, '& .MuiSlider-thumb': { width: 14, height: 14 } }}
            />
          </Box>

          {/* Area table */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {areaRows.map(({ label, expr, val, color }) => (
              <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '2px', bgcolor: color, opacity: 0.7, flexShrink: 0 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', lineHeight: 1.3 }}>{label}</Typography>
                  <Typography sx={{ fontSize: 12, color, fontFamily: 'monospace' }}>{val}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Divider sx={{ borderColor: MUTED, my: 2 }} />

          <Box sx={{ p: 1.5, borderRadius: '6px', background: 'rgba(96,165,250,0.06)', border: `1px solid rgba(96,165,250,0.2)` }}>
            <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', mb: 0.5 }}>ratio sin(x) / x</Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: ACCENT, fontFamily: 'monospace' }}>
              {ratio.toFixed(6)}
            </Typography>
            <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', mt: 0.5 }}>
              → 1.000000 as x → 0
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

const TOC = [
  { id: 'puzzle',     label: 'The Puzzle' },
  { id: 'why-hard',   label: 'Why It\'s Hard' },
  { id: 'geometry',   label: 'Geometric Setup' },
  { id: 'squeeze',    label: 'The Squeeze' },
  { id: 'proof',      label: 'Formal Proof' },
  { id: 'payoff',     label: 'The Payoff' },
  { id: 'references', label: 'References' },
];

export default function SinxOverxPage() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ flex: 1, minWidth: 0, px: { xs: 3, md: 6 }, py: 7 }}>

        {/* Breadcrumb */}
        <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>
          <a href="/math" style={{ color: DIM, textDecoration: 'none' }}>Mathematics</a>
          {' → '}
          <a href="/math/calculus" style={{ color: DIM, textDecoration: 'none' }}>Calculus</a>
          {' → '}
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>sin(x)/x</span>
        </Typography>

        <Typography variant="h1" sx={{ fontSize: { xs: '1.9rem', md: '2.5rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.1 }}>
          The Fundamental Trigonometric Limit
        </Typography>
        <Box sx={{ mb: 3 }}>
          <MB m="\lim_{x \to 0} \frac{\sin x}{x} = 1" />
        </Box>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.75, mb: 5, maxWidth: 580 }}>
          On the Calculus page we listed this fact alongside <M m="\lim_{x\to 2}(3x+1)=7" /> as
          if they were equally obvious. They are not. This page explains why.
        </Typography>
        <Divider sx={{ borderColor: MUTED, mb: 5 }} />

        {/* ── Act 1 — The Puzzle ── */}
        <H2 id="puzzle">The Puzzle</H2>
        <P>
          Try to evaluate <M m="\lim_{x\to 0}\sin(x)/x" /> by direct substitution.
          You get <M m="0/0" /> — a form that tells you nothing. The limit might be
          0, or 1, or 7, or it might not exist at all. Direct substitution has failed.
        </P>
        <P>
          Now try numerically. Set your calculator to radians and compute:
        </P>
        <Box sx={{ my: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1.5, maxWidth: 460 }}>
          {[
            { x: '1.0',   v: '0.841471' },
            { x: '0.5',   v: '0.958851' },
            { x: '0.1',   v: '0.998334' },
            { x: '0.01',  v: '0.999983' },
            { x: '0.001', v: '0.999999' },
            { x: '→ 0',   v: '→ 1.000000' },
          ].map(({ x, v }) => (
            <Box key={x} sx={{ p: 1.5, borderRadius: '6px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', mb: 0.25, fontFamily: 'monospace' }}>x = {x}</Typography>
              <Typography sx={{ fontSize: 13, color: ACCENT, fontFamily: 'monospace' }}>{v}</Typography>
            </Box>
          ))}
        </Box>
        <P>
          The ratio marches steadily toward 1. But numerical evidence isn't proof —
          it shows us where to aim, not why we get there.
        </P>

        {/* ── Act 2 — Why It's Hard ── */}
        <H2 id="why-hard">Why It's Hard</H2>
        <P>
          The natural instinct is to reach for <strong style={{ color: TEXT }}>L'Hôpital's Rule</strong> —
          differentiate the numerator and denominator separately when facing <M m="0/0" />:
        </P>
        <MB m="\lim_{x\to 0}\frac{\sin x}{x} \;\overset{?}{=}\; \lim_{x\to 0}\frac{\cos x}{1} = 1" />
        <P>
          It gives the right answer. But this argument is <em>circular</em>. L'Hôpital requires us
          to know that <M m="\frac{d}{dx}\sin x = \cos x" />, and the standard proof of
          that derivative begins exactly here:
        </P>
        <MB m="\frac{d}{dx}\sin x = \lim_{h\to 0}\frac{\sin(x+h)-\sin x}{h} = \lim_{h\to 0}\frac{\sin x \cos h + \cos x \sin h - \sin x}{h}" />
        <P>
          Simplify and you need <M m="\lim_{h\to 0}\frac{\sin h}{h}" /> to proceed. We cannot
          use L'Hôpital here without already knowing what we're trying to prove. We need
          an independent argument — and that argument turns out to be geometric.
        </P>

        {/* ── Act 3 — Geometric Setup ── */}
        <H2 id="geometry">Geometric Setup</H2>
        <P>
          Consider a <strong style={{ color: TEXT }}>unit circle</strong> centred at the origin.
          Fix an angle <M m="x \in (0,\, \pi/2)" />. Label three points:
        </P>
        <Box sx={{ my: 2.5, pl: 3, borderLeft: `2px solid rgba(255,255,255,0.1)` }}>
          <P><M m="O = (0,\,0)" /> — the origin</P>
          <P><M m="A = (1,\,0)" /> — where the circle meets the positive <M m="x" />-axis</P>
          <P><M m="P = (\cos x,\, \sin x)" /> — the point on the circle at angle <M m="x" /></P>
          <P><M m="Q = (1,\, \tan x)" /> — where the ray <M m="OP" /> meets the tangent <M m="x=1" /></P>
        </Box>
        <P>
          These four points define three regions whose areas we can compute exactly.
          Drag the slider to see how they relate:
        </P>

        <SqueezeVis />

        <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {[
            { color: GREEN, label: 'Triangle OAP',   tex: '\\tfrac{1}{2}\\cdot 1 \\cdot \\sin x = \\tfrac{\\sin x}{2}', note: 'base = OA = 1, height = sin x' },
            { color: ACCENT, label: 'Sector OAP',    tex: '\\tfrac{1}{2}r^2 x = \\tfrac{x}{2}',                          note: 'unit circle sector formula' },
            { color: AMBER,  label: 'Triangle OAQ',  tex: '\\tfrac{1}{2}\\cdot 1 \\cdot \\tan x = \\tfrac{\\tan x}{2}',  note: 'base = OA = 1, height = tan x' },
          ].map(({ color, label, tex, note }) => (
            <Box key={label} sx={{ display: 'flex', gap: 2, p: 2, borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Box sx={{ width: 3, borderRadius: '4px', bgcolor: color, flexShrink: 0, opacity: 0.7 }} />
              <Box>
                <Typography sx={{ fontSize: 13, color: TEXT, mb: 0.5 }}>{label}</Typography>
                <M m={`\\text{Area} = ${tex}`} />
                <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', mt: 0.5, fontStyle: 'italic' }}>{note}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <P>
          The containment is clear from the diagram: the green triangle fits inside the
          blue sector, which fits inside the amber triangle. Therefore:
        </P>
        <MB m="\frac{\sin x}{2} \;\le\; \frac{x}{2} \;\le\; \frac{\tan x}{2}" />

        {/* ── Act 4 — The Squeeze ── */}
        <H2 id="squeeze">The Squeeze</H2>
        <P>
          We have the area inequality. Now we apply the tool that turns it into a limit.
        </P>
        <Thm title="Theorem — Squeeze Theorem (Sandwich Theorem)">
          If <M m="g(x) \le f(x) \le h(x)" /> near <M m="a" /> (but not necessarily at <M m="a" />),
          and <M m="\lim_{x\to a} g(x) = \lim_{x\to a} h(x) = L" />, then:
          <Box sx={{ mt: 1.5 }}><MB m="\lim_{x\to a} f(x) = L" /></Box>
        </Thm>
        <P>
          The function <M m="f" /> is <em>squeezed</em> between <M m="g" /> and <M m="h" />. If
          both bounds converge to the same value, <M m="f" /> has no room to go anywhere else.
          We now apply this to our area inequality.
        </P>
        <P>
          Divide the inequality <M m="\sin x / 2 \le x/2 \le \tan x / 2" /> through
          by <M m="\sin x / 2" /> (which is positive for <M m="x \in (0, \pi/2)" />):
        </P>
        <MB m="1 \;\le\; \frac{x}{\sin x} \;\le\; \frac{1}{\cos x}" />
        <P>
          Take reciprocals — this reverses the inequalities:
        </P>
        <MB m="\cos x \;\le\; \frac{\sin x}{x} \;\le\; 1" />
        <P>
          Now let <M m="x \to 0^+" />. We know <M m="\cos x \to 1" /> (cosine is continuous
          and <M m="\cos 0 = 1" />). The upper bound is already the constant 1. So our
          function <M m="\sin x / x" /> is squeezed between something approaching 1 and
          the constant 1. The squeeze theorem delivers the result.
        </P>
        <Note>
          The argument for <M m="x \to 0^-" /> follows by symmetry: <M m="\sin(-x)/(-x) = \sin x / x" />, so the left-sided limit equals the right-sided limit. The two-sided limit is therefore 1.
        </Note>

        {/* ── Act 5 — Formal Proof ── */}
        <H2 id="proof">Formal Proof</H2>
        <Thm title="Theorem — Fundamental Trigonometric Limit">
          <MB m="\lim_{x \to 0} \frac{\sin x}{x} = 1" />
        </Thm>
        <Proof>
          Without loss of generality assume <M m="x \in (0, \pi/2)" />. On a unit circle,
          the areas of triangle <M m="OAP" />, sector <M m="OAP" />, and triangle <M m="OAQ" /> satisfy:
          <Box sx={{ my: 1.5 }}><MB m="\frac{\sin x}{2} \;\le\; \frac{x}{2} \;\le\; \frac{\tan x}{2}" /></Box>
          Multiply through by <M m="2/\sin x > 0" />:
          <Box sx={{ my: 1.5 }}><MB m="1 \;\le\; \frac{x}{\sin x} \;\le\; \frac{1}{\cos x}" /></Box>
          Take reciprocals (reversing inequalities, valid since all terms are positive):
          <Box sx={{ my: 1.5 }}><MB m="\cos x \;\le\; \frac{\sin x}{x} \;\le\; 1" /></Box>
          Since <M m="\lim_{x\to 0^+}\cos x = 1" /> and <M m="\lim_{x\to 0^+}1 = 1" />, the
          Squeeze Theorem gives <M m="\lim_{x\to 0^+}\sin x / x = 1" />.
          By evenness of <M m="\sin x / x" />, the full two-sided limit is 1.
        </Proof>

        {/* ── Act 6 — The Payoff ── */}
        <H2 id="payoff">The Payoff — Derivative of sin</H2>
        <P>
          We went through all of this for a reason. With <M m="\lim_{x\to 0}\sin x/x = 1" /> in hand,
          we can now prove the derivative of sine from first principles — no circular reasoning.
          We need one more limit first, which follows directly:
        </P>
        <MB m="\lim_{x\to 0}\frac{1 - \cos x}{x} = 0" />
        <Note>
          Proof: multiply numerator and denominator by <M m="(1 + \cos x)" /> to get{' '}
          <M m="\frac{\sin^2 x}{x(1+\cos x)} = \frac{\sin x}{x} \cdot \frac{\sin x}{1+\cos x} \to 1 \cdot \frac{0}{2} = 0" />.
        </Note>
        <P>Now expand the derivative definition using the angle addition formula:</P>
        <MB m="\frac{d}{dx}\sin x = \lim_{h\to 0}\frac{\sin(x+h) - \sin x}{h}" />
        <MB m="= \lim_{h\to 0}\frac{\sin x \cos h + \cos x \sin h - \sin x}{h}" />
        <MB m="= \sin x \underbrace{\lim_{h\to 0}\frac{\cos h - 1}{h}}_{=\;0} \;+\; \cos x \underbrace{\lim_{h\to 0}\frac{\sin h}{h}}_{=\;1}" />
        <MB m="= \cos x" />
        <P>
          The two limits we just proved slot in exactly where needed. The derivative
          of sine is cosine — derived cleanly, without circularity, from geometry.
        </P>
        <Def title="Why this matters for machine learning">
          Gradient descent — the engine behind every neural network — requires differentiating
          loss functions with respect to weights. Activation functions like sigmoid and softmax
          involve exponentials and logarithms, but the theoretical foundations of differentiation
          all trace back to limit arguments like this one. Understanding why the derivative is
          defined as a limit, and how to evaluate limits that resist direct substitution, is the
          bedrock on which all of that machinery rests.
        </Def>

        {/* ── References ── */}
        <H2 id="references">References</H2>
        <P>
          The geometric squeeze argument is old. Euler used area inequalities on the unit circle
          in <em>Introductio in Analysin Infinitorum</em> (1748) to establish trigonometric
          properties. The squeeze theorem in its modern form — with an explicit statement and
          proof — was formalized by <strong style={{ color: TEXT }}>Augustin-Louis Cauchy</strong> in
          his landmark <em>Cours d'Analyse</em> (1821), the same work that gave us the
          ε-δ definition of a limit.
        </P>
        <P>
          The proof in exactly the form presented here — three nested regions on a unit circle,
          area inequalities, squeeze to the limit — appears in these standard references:
        </P>

        {[
          {
            authors: 'Michael Spivak',
            title: 'Calculus',
            detail: '4th ed., Chapter 15 — Spivak explicitly names the L\'Hôpital circularity trap, which most textbooks silently commit. The most rigorous undergraduate treatment.',
            year: '1967',
          },
          {
            authors: 'Tom M. Apostol',
            title: 'Calculus, Vol. 1',
            detail: '2nd ed., §2.3 — Apostol\'s treatment is careful and terse. The geometric argument is presented with full rigor and the squeeze theorem is proved before it is used.',
            year: '1967',
          },
          {
            authors: 'James Stewart',
            title: 'Calculus: Early Transcendentals',
            detail: '8th ed., §3.3 — The most widely used calculus textbook in the world. The proof here is essentially Stewart\'s, made more explicit about the circularity.',
            year: '2015',
          },
          {
            authors: 'Leonhard Euler',
            title: 'Introductio in Analysin Infinitorum',
            detail: 'Vol. 1 (1748) — The original source of the unit-circle area approach to trigonometric limits. Euler did not yet have the squeeze theorem by name, but the geometric intuition is all here.',
            year: '1748',
          },
        ].map(({ authors, title, detail, year }) => (
          <Box key={title} sx={{ mb: 2.5, pl: 3, borderLeft: '2px solid rgba(255,255,255,0.07)' }}>
            <Typography sx={{ fontSize: 14, color: TEXT, fontWeight: 600 }}>
              {authors} <Box component="span" sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>({year})</Box>
            </Typography>
            <Typography sx={{ fontSize: 14, color: DIM, fontStyle: 'italic', mb: 0.5 }}>{title}</Typography>
            <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.75 }}>{detail}</Typography>
          </Box>
        ))}

        <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <a href="/math/calculus" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none', fontSize: 13 }}>← Calculus</a>
          <a href="/math/calculus" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none', fontSize: 13 }}>Back to Calculus →</a>
        </Box>
      </Box>

      {/* Sticky TOC */}
      <Box sx={{ display: { xs: 'none', xl: 'block' }, width: 200, flexShrink: 0, position: 'sticky', top: 72, height: 'calc(100vh - 72px)', overflowY: 'auto', pt: 7, pr: 4 }}>
        <Typography sx={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', mb: 2 }}>On this page</Typography>
        {TOC.map(t => (
          <a key={t.id} href={`#${t.id}`} style={{ display: 'block', textDecoration: 'none', padding: '3px 0' }}>
            <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', '&:hover': { color: DIM }, lineHeight: 1.5 }}>{t.label}</Typography>
          </a>
        ))}
      </Box>
    </Box>
  );
}

"use client";

import { Box, Typography, Divider } from '@mui/material';
import { InlineMath, BlockMath } from 'react-katex';

const TEXT   = '#e2e8f0';
const DIM    = '#94a3b8';
const ACCENT = '#60a5fa';
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

const TOC = [
  { id: 'limits',       label: 'Limits' },
  { id: 'continuity',   label: 'Continuity' },
  { id: 'derivative',   label: 'The Derivative' },
  { id: 'diff-rules',   label: 'Differentiation Rules' },
  { id: 'integral',     label: 'The Integral' },
  { id: 'ftc',          label: 'Fundamental Theorem' },
];

export default function CalculusPage() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ flex: 1, minWidth: 0, px: { xs: 3, md: 6 }, py: 7 }}>
        <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>Mathematics → Calculus</Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.1 }}>
          Calculus
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.75, mb: 5, maxWidth: 580 }}>
          Calculus is the mathematics of continuous change. Developed independently by Newton and Leibniz in the 17th century, it provides the language for physics, engineering, economics, and every quantitative science.
        </Typography>
        <Divider sx={{ borderColor: MUTED, mb: 5 }} />

        <H2 id="limits">Limits</H2>
        <P>The <strong style={{ color: TEXT }}>limit</strong> is the foundation of calculus. It captures what value a function approaches as its input approaches some point.</P>
        <Def title="Definition — Limit (informal)">
          We write <M m="\lim_{x \to a} f(x) = L" /> if <M m="f(x)" /> can be made arbitrarily close to <M m="L" /> by taking <M m="x" /> sufficiently close to <M m="a" /> (but not equal to <M m="a" />).
        </Def>
        <MB m="\lim_{x \to 2}(3x + 1) = 7 \qquad \lim_{x \to 0}\frac{\sin x}{x} = 1 \qquad \lim_{x \to \infty}\frac{1}{x} = 0" />
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: 13.5, color: DIM, lineHeight: 1.8 }}>
            The first and third limits follow by direct substitution. The middle one —{' '}
            <M m="\sin(x)/x" /> as <M m="x \to 0" /> — is a different story entirely.
            Direct substitution gives <M m="0/0" />, L'Hôpital's rule is circular here,
            and the proof requires a geometric argument about areas on a unit circle.{' '}
            <a href="/math/calculus/sinx-over-x" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>
              See the full proof →
            </a>
          </Typography>
        </Box>
        <H3>Limit laws</H3>
        <P>If <M m="\lim_{x\to a} f(x) = L" /> and <M m="\lim_{x\to a} g(x) = M" />, then:</P>
        <MB m="\lim_{x\to a}[f(x) + g(x)] = L + M \qquad \lim_{x\to a}[f(x)\cdot g(x)] = LM \qquad \lim_{x\to a}\frac{f(x)}{g(x)} = \frac{L}{M}\;(M\neq 0)" />

        <H2 id="continuity">Continuity</H2>
        <Def title="Definition — Continuity">
          A function <M m="f" /> is <strong>continuous at</strong> <M m="a" /> if: (1) <M m="f(a)" /> is defined, (2) <M m="\lim_{x\to a} f(x)" /> exists, and (3) <M m="\lim_{x\to a} f(x) = f(a)" />.
        </Def>
        <P>Intuitively: the graph has no holes, jumps, or vertical asymptotes at <M m="a" />. Polynomials, exponentials, and trigonometric functions are continuous everywhere on their domains.</P>
        <P>The <strong style={{ color: TEXT }}>Intermediate Value Theorem</strong> states that if <M m="f" /> is continuous on <M m="[a,b]" /> and <M m="k" /> is between <M m="f(a)" /> and <M m="f(b)" />, then there exists <M m="c \in (a,b)" /> with <M m="f(c) = k" />. This guarantees roots exist — it's why every polynomial of odd degree has at least one real root.</P>

        <H2 id="derivative">The Derivative</H2>
        <Def title="Definition — Derivative">
          The <strong>derivative</strong> of <M m="f" /> at <M m="a" /> is the limit of the difference quotient:
          <Box sx={{ mt: 1 }}>
            <MB m="f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}" />
          </Box>
          If this limit exists, <M m="f" /> is <strong>differentiable</strong> at <M m="a" />.
        </Def>
        <P>Geometrically, <M m="f'(a)" /> is the slope of the tangent line to the graph of <M m="f" /> at the point <M m="(a, f(a))" />. Physically, if <M m="f(t)" /> is position, then <M m="f'(t)" /> is velocity and <M m="f''(t)" /> is acceleration.</P>
        <Note>The equation of the tangent line to <M m="f" /> at <M m="x = a" /> is: <M m="y = f(a) + f'(a)(x - a)" /></Note>

        <H2 id="diff-rules">Differentiation Rules</H2>
        <P>Rather than computing limits every time, these rules let us differentiate any elementary function:</P>
        <Box sx={{ my: 3, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {[
            { name: 'Power Rule',    eq: '\\dfrac{d}{dx}x^n = nx^{n-1}' },
            { name: 'Sum Rule',      eq: '(f+g)\\prime = f\\prime + g\\prime' },
            { name: 'Product Rule',  eq: '(fg)\\prime = f\\prime g + fg\\prime' },
            { name: 'Quotient Rule', eq: '\\left(\\dfrac{f}{g}\\right)\\prime = \\dfrac{f\\prime g - fg\\prime}{g^2}' },
            { name: 'Chain Rule',    eq: '(f \\circ g)\\prime(x) = f\\prime(g(x))\\cdot g\\prime(x)' },
            { name: 'Exponential',   eq: '\\dfrac{d}{dx}e^x = e^x' },
          ].map(r => (
            <Box key={r.name} sx={{ p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Typography sx={{ fontSize: 11, color: ACCENT, letterSpacing: 1, textTransform: 'uppercase', mb: 1.5 }}>{r.name}</Typography>
              <M m={r.eq} />
            </Box>
          ))}
        </Box>
        <H3>Common derivatives</H3>
        <MB m="\frac{d}{dx}\sin x = \cos x \qquad \frac{d}{dx}\cos x = -\sin x \qquad \frac{d}{dx}\ln x = \frac{1}{x} \qquad \frac{d}{dx}a^x = a^x \ln a" />

        <H2 id="integral">The Integral</H2>
        <Def title="Definition — Definite Integral">
          The <strong>definite integral</strong> of <M m="f" /> from <M m="a" /> to <M m="b" /> is the signed area between the graph and the <M m="x" />-axis:
          <Box sx={{ mt: 1 }}>
            <MB m="\int_a^b f(x)\,dx = \lim_{n\to\infty} \sum_{i=1}^n f(x_i^*)\,\Delta x" />
          </Box>
          where <M m="\Delta x = (b-a)/n" /> and <M m="x_i^*" /> is any sample point in the <M m="i" />-th subinterval.
        </Def>
        <P>The <strong style={{ color: TEXT }}>indefinite integral</strong> (antiderivative) <M m="\int f(x)\,dx" /> is a family of functions <M m="F(x) + C" /> such that <M m="F'(x) = f(x)" />. The constant <M m="C" /> reflects the fact that derivatives of constants vanish.</P>
        <H3>Common antiderivatives</H3>
        <MB m="\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n\neq -1) \qquad \int e^x\,dx = e^x + C \qquad \int \frac{1}{x}\,dx = \ln|x| + C" />
        <MB m="\int \sin x\,dx = -\cos x + C \qquad \int \cos x\,dx = \sin x + C" />

        <H2 id="ftc">Fundamental Theorem of Calculus</H2>
        <P>The Fundamental Theorem unifies differentiation and integration — revealing that they are inverse operations.</P>
        <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Def title="Part I — Differentiation of an Integral">
            If <M m="f" /> is continuous on <M m="[a,b]" /> and <M m="g(x) = \int_a^x f(t)\,dt" />, then <M m="g" /> is differentiable and:
            <Box sx={{ mt: 1 }}><MB m="g'(x) = f(x)" /></Box>
          </Def>
          <Def title="Part II — Evaluation Theorem">
            If <M m="F" /> is any antiderivative of <M m="f" /> on <M m="[a,b]" />, then:
            <Box sx={{ mt: 1 }}><MB m="\int_a^b f(x)\,dx = F(b) - F(a)" /></Box>
          </Def>
        </Box>
        <P>Part II is the engine of calculus: to compute the area under a curve, find an antiderivative and evaluate at the endpoints. What seemed to require an infinite sum reduces to two function evaluations.</P>
        <Note>
          Example: <M m="\int_0^{\pi} \sin x\,dx = [-\cos x]_0^{\pi} = -\cos\pi + \cos 0 = 1 + 1 = 2" />
        </Note>

        <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          Next: <a href="/math/linear-algebra" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Linear Algebra →</a>
        </Typography>
      </Box>

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

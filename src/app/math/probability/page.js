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
  { id: 'sample-space',   label: 'Sample Spaces & Events' },
  { id: 'axioms',         label: 'Probability Axioms' },
  { id: 'conditional',    label: 'Conditional Probability' },
  { id: 'independence',   label: 'Independence' },
  { id: 'bayes',          label: "Bayes' Theorem" },
  { id: 'random-vars',    label: 'Random Variables' },
  { id: 'expectation',    label: 'Expectation & Variance' },
  { id: 'distributions',  label: 'Common Distributions' },
];

export default function ProbabilityPage() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ flex: 1, minWidth: 0, px: { xs: 3, md: 6 }, py: 7 }}>
        <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>Mathematics → Probability</Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.1 }}>
          Probability
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.75, mb: 5, maxWidth: 580 }}>
          Probability is the mathematical language of uncertainty. Grounded in set theory and measure theory, it provides the foundation for statistics, machine learning, information theory, and every rational approach to inference.
        </Typography>
        <Divider sx={{ borderColor: MUTED, mb: 5 }} />

        <H2 id="sample-space">Sample Spaces and Events</H2>
        <Def title="Definition — Sample Space">
          The <strong>sample space</strong> <M m="\Omega" /> is the set of all possible outcomes of a random experiment. An <strong>event</strong> is any subset <M m="A \subseteq \Omega" />.
        </Def>
        <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {[
            { exp: 'Fair coin flip', omega: '\\Omega = \\{H, T\\}', event: 'A = \\{H\\}' },
            { exp: 'Rolling a die',  omega: '\\Omega = \\{1,2,3,4,5,6\\}', event: 'A = \\{2,4,6\\}\\text{ (even)}' },
          ].map(r => (
            <Box key={r.exp} sx={{ p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Typography sx={{ fontSize: 13, color: TEXT, mb: 1, fontWeight: 600 }}>{r.exp}</Typography>
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Box><M m={r.omega} /></Box>
                <Box sx={{ color: DIM, fontSize: 13 }}>Event: <M m={r.event} /></Box>
              </Box>
            </Box>
          ))}
        </Box>
        <P>Since events are sets, set operations apply: <M m="A \cup B" /> is the event that <M m="A" /> or <M m="B" /> occurs; <M m="A \cap B" /> is both; <M m="A^c" /> is the event that <M m="A" /> does not occur.</P>

        <H2 id="axioms">Kolmogorov's Axioms</H2>
        <P>Andrey Kolmogorov (1933) placed probability on a rigorous axiomatic foundation. A <strong style={{ color: TEXT }}>probability measure</strong> is a function <M m="P : \mathcal{F} \to [0,1]" /> satisfying:</P>
        <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { name: 'Non-negativity',  eq: 'P(A) \\geq 0 \\text{ for all events } A' },
            { name: 'Normalization',   eq: 'P(\\Omega) = 1' },
            { name: 'Additivity',      eq: 'P(A \\cup B) = P(A) + P(B) \\text{ if } A \\cap B = \\emptyset' },
          ].map((ax, i) => (
            <Box key={ax.name} sx={{ p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 2 }}>
              <Typography sx={{ fontSize: 13, color: ACCENT, fontWeight: 700, minWidth: 20 }}>{i+1}.</Typography>
              <Box>
                <Typography sx={{ fontSize: 11, color: ACCENT, letterSpacing: 1, textTransform: 'uppercase', mb: 0.75 }}>{ax.name}</Typography>
                <M m={ax.eq} />
              </Box>
            </Box>
          ))}
        </Box>
        <P>From these three axioms, all of probability theory follows. Key consequences:</P>
        <MB m="P(\emptyset) = 0 \qquad P(A^c) = 1 - P(A) \qquad P(A \cup B) = P(A) + P(B) - P(A \cap B)" />

        <H2 id="conditional">Conditional Probability</H2>
        <Def title="Definition — Conditional Probability">
          The probability of event <M m="A" /> given that event <M m="B" /> has occurred (with <M m="P(B) > 0" />):
          <Box sx={{ mt: 1 }}><MB m="P(A \mid B) = \frac{P(A \cap B)}{P(B)}" /></Box>
        </Def>
        <P>Conditioning restricts the sample space to <M m="B" /> and re-normalizes. The <strong style={{ color: TEXT }}>multiplication rule</strong> follows directly:</P>
        <MB m="P(A \cap B) = P(A \mid B)\, P(B) = P(B \mid A)\, P(A)" />
        <H3>Law of Total Probability</H3>
        <P>If <M m="B_1, B_2, \ldots, B_n" /> partition <M m="\Omega" /> (mutually exclusive, exhaustive), then for any event <M m="A" />:</P>
        <MB m="P(A) = \sum_{i=1}^n P(A \mid B_i)\, P(B_i)" />

        <H2 id="independence">Independence</H2>
        <Def title="Definition — Independence">
          Events <M m="A" /> and <M m="B" /> are <strong>independent</strong> if knowing <M m="B" /> occurred gives no information about <M m="A" />:
          <Box sx={{ mt: 1 }}><MB m="P(A \cap B) = P(A)\, P(B) \qquad \text{equivalently,} \quad P(A \mid B) = P(A)" /></Box>
        </Def>
        <Note>Independence and mutual exclusivity are very different concepts. If <M m="P(A) > 0" /> and <M m="P(B) > 0" />, then <M m="A" /> and <M m="B" /> cannot be both independent and mutually exclusive.</Note>

        <H2 id="bayes">Bayes' Theorem</H2>
        <Def title="Theorem — Bayes">
          <MB m="P(A \mid B) = \frac{P(B \mid A)\, P(A)}{P(B)}" />
          Using the law of total probability to expand the denominator:
          <Box sx={{ mt: 1 }}><MB m="P(A \mid B) = \frac{P(B \mid A)\, P(A)}{P(B \mid A)\,P(A) + P(B \mid A^c)\,P(A^c)}" /></Box>
        </Def>
        <P>Bayes' theorem is the engine of <strong style={{ color: TEXT }}>Bayesian inference</strong>: it tells us how to update a prior belief <M m="P(A)" /> in light of new evidence <M m="B" /> to obtain a posterior <M m="P(A \mid B)" />.</P>
        <Note>
          Classic example: a medical test for a disease with 1% prevalence. Sensitivity (true positive rate) = 99%, specificity (true negative rate) = 95%. If you test positive, Bayes' theorem gives <M m="P(\text{disease} \mid +) \approx 16.7\%" /> — far lower than intuition suggests, because the disease is rare.
        </Note>

        <H2 id="random-vars">Random Variables</H2>
        <Def title="Definition — Random Variable">
          A <strong>random variable</strong> <M m="X" /> is a function <M m="X : \Omega \to \mathbb{R}" /> that assigns a numerical value to each outcome. It is <strong>discrete</strong> if it takes countably many values; <strong>continuous</strong> if described by a probability density function (PDF).
        </Def>
        <H3>Discrete: PMF</H3>
        <P>The <strong style={{ color: TEXT }}>probability mass function</strong> of a discrete random variable satisfies:</P>
        <MB m="p(x) = P(X = x) \geq 0 \qquad \sum_x p(x) = 1" />
        <H3>Continuous: PDF and CDF</H3>
        <P>A continuous random variable has a <strong style={{ color: TEXT }}>probability density function</strong> <M m="f(x) \geq 0" /> with:</P>
        <MB m="P(a \leq X \leq b) = \int_a^b f(x)\,dx \qquad \int_{-\infty}^{\infty} f(x)\,dx = 1" />
        <P>The <strong style={{ color: TEXT }}>cumulative distribution function</strong> <M m="F(x) = P(X \leq x)" /> is non-decreasing, right-continuous, with <M m="F(-\infty)=0" /> and <M m="F(\infty)=1" />.</P>

        <H2 id="expectation">Expectation and Variance</H2>
        <Def title="Definition — Expected Value">
          The <strong>expected value</strong> (mean) of <M m="X" /> is its probability-weighted average:
          <MB m="E[X] = \sum_x x\, p(x) \quad \text{(discrete)} \qquad E[X] = \int_{-\infty}^{\infty} x\, f(x)\,dx \quad \text{(continuous)}" />
        </Def>
        <Def title="Definition — Variance">
          The <strong>variance</strong> measures spread around the mean:
          <MB m="\text{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2" />
          The <strong>standard deviation</strong> is <M m="\sigma = \sqrt{\text{Var}(X)}" />.
        </Def>
        <H3>Key properties</H3>
        <MB m="E[aX + b] = aE[X] + b \qquad \text{Var}(aX+b) = a^2\,\text{Var}(X)" />
        <MB m="E[X + Y] = E[X] + E[Y] \qquad \text{(always — linearity of expectation)}" />
        <MB m="\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) \qquad \text{(if } X, Y \text{ independent)}" />

        <H2 id="distributions">Common Distributions</H2>
        <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            {
              name: 'Bernoulli(p)',
              desc: 'Single trial: success with probability p.',
              stats: 'E[X] = p, \\quad \\text{Var}(X) = p(1-p)',
            },
            {
              name: 'Binomial(n, p)',
              desc: 'Number of successes in n independent Bernoulli trials.',
              stats: 'P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}, \\quad E[X] = np, \\quad \\text{Var}(X) = np(1-p)',
            },
            {
              name: 'Poisson(λ)',
              desc: 'Number of rare events in a fixed interval; λ is the average rate.',
              stats: 'P(X=k) = \\dfrac{\\lambda^k e^{-\\lambda}}{k!}, \\quad E[X] = \\text{Var}(X) = \\lambda',
            },
            {
              name: 'Uniform(a, b)',
              desc: 'Equally likely over an interval.',
              stats: 'f(x) = \\dfrac{1}{b-a}, \\quad E[X] = \\dfrac{a+b}{2}, \\quad \\text{Var}(X) = \\dfrac{(b-a)^2}{12}',
            },
            {
              name: 'Normal(μ, σ²)',
              desc: 'The bell curve; arises everywhere by the Central Limit Theorem.',
              stats: 'f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\!\\left(-\\dfrac{(x-\\mu)^2}{2\\sigma^2}\\right), \\quad E[X] = \\mu, \\quad \\text{Var}(X) = \\sigma^2',
            },
            {
              name: 'Exponential(λ)',
              desc: 'Waiting time between Poisson events; memoryless.',
              stats: 'f(x) = \\lambda e^{-\\lambda x}\\;(x\\geq 0), \\quad E[X] = 1/\\lambda, \\quad \\text{Var}(X) = 1/\\lambda^2',
            },
          ].map(d => (
            <Box key={d.name} sx={{ p: 3, borderRadius: '8px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Typography sx={{ fontSize: 14, color: TEXT, fontWeight: 700, mb: 0.5 }}>{d.name}</Typography>
              <Typography sx={{ fontSize: 13, color: DIM, mb: 1.5 }}>{d.desc}</Typography>
              <M m={d.stats} />
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          ← <a href="/math/linear-algebra" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Linear Algebra</a>
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

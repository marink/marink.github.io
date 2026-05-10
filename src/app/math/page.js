"use client";

import { Box, Typography } from '@mui/material';

const TEXT  = '#e2e8f0';
const DIM   = '#94a3b8';
const ACCENT = '#60a5fa';

const TOPICS = [
  { label: 'Set Theory',    href: '/math/set-theory',    desc: 'Collections, operations, cardinality — the language all of mathematics is written in.' },
  { label: 'Logic',         href: '/math/logic',         desc: 'Propositional and predicate logic, truth tables, and rules of inference.' },
  { label: 'Number Theory', href: '/math/number-theory', desc: 'Primes, divisibility, modular arithmetic, and Fermat\'s little theorem.' },
  { label: 'Calculus',      href: '/math/calculus',      desc: 'Limits, derivatives, integrals, and the fundamental theorem.' },
  { label: 'Linear Algebra',href: '/math/linear-algebra',desc: 'Vectors, matrices, determinants, and eigenvalues.' },
  { label: 'Probability',   href: '/math/probability',   desc: 'Sample spaces, Bayes\' theorem, random variables, and common distributions.' },
];

export default function MathIndex() {
  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: 8, maxWidth: 760 }}>
      <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>Mathematics</Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 2, lineHeight: 1.1 }}>
        From First Principles
      </Typography>
      <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.8, mb: 6, maxWidth: 560 }}>
        A collection of mathematical topics explained from the ground up — precise definitions, worked examples, and the ideas behind the formulas.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {TOPICS.map(t => (
          <Box key={t.label} sx={{
            p: 3, borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.07)',
            background: t.soon ? 'transparent' : 'rgba(255,255,255,0.03)',
            opacity: t.soon ? 0.45 : 1,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 0.75 }}>
              {t.soon ? (
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: TEXT }}>{t.label}</Typography>
              ) : (
                <a href={t.href} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: ACCENT }}>{t.label} →</Typography>
                </a>
              )}
              {t.soon && <Typography sx={{ fontSize: 10, color: DIM, letterSpacing: 1.5, textTransform: 'uppercase' }}>Coming soon</Typography>}
            </Box>
            <Typography sx={{ fontSize: 14, color: DIM, lineHeight: 1.6 }}>{t.desc}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

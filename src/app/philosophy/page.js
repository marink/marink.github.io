"use client";

import { Box, Typography } from '@mui/material';

const TEXT   = '#e2e8f0';
const DIM    = '#94a3b8';
const ACCENT = '#60a5fa';

const TOPICS = [
  {
    label: 'Natural Process',
    href: '/philosophy/natural-process',
    desc: 'Why nature balances — from hot water cooling to insulin responding to glucose. The argument that intelligence is not added on top of physics, but encoded within its structure.',
  },
  { label: 'Process Philosophy', soon: true, desc: 'Whitehead\'s metaphysics of events over substances — reality as occasions of experience rather than inert matter.' },
  { label: 'Emergence',          soon: true, desc: 'How global order arises from local rules, and why the whole is sometimes irreducible to its parts.' },
  { label: 'The Mind Problem',   soon: true, desc: 'At what level of complexity does balancing become awareness? The hard problem from a process-philosophy angle.' },
];

export default function PhilosophyIndex() {
  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: 8, maxWidth: 760 }}>
      <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>Philosophy</Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 2, lineHeight: 1.1 }}>
        Nature, Process &amp; Intelligence
      </Typography>
      <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.8, mb: 3, maxWidth: 580 }}>
        These pages explore a single question from several angles: is there an intelligence encoded
        in the structure of nature itself — not a mind watching over it, but a directedness built
        into the way physical systems respond to difference?
      </Typography>
      <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.8, mb: 6, maxWidth: 580 }}>
        The thread runs from pre-Socratic philosophy through thermodynamics and biology, and
        connects — perhaps surprisingly — to how Bayesian inference works.
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
                <>
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: TEXT }}>{t.label}</Typography>
                  <Typography sx={{ fontSize: 10, color: DIM, letterSpacing: 1.5, textTransform: 'uppercase' }}>Coming soon</Typography>
                </>
              ) : (
                <a href={t.href} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: ACCENT }}>{t.label} →</Typography>
                </a>
              )}
            </Box>
            <Typography sx={{ fontSize: 14, color: DIM, lineHeight: 1.6 }}>{t.desc}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

"use client";

import { Box, Typography } from '@mui/material';

const TEXT   = '#e2e8f0';
const DIM    = '#94a3b8';
const ACCENT = '#60a5fa';
const VIOLET = '#a78bfa';

const TOPICS = [
  {
    label: 'Natural Process',
    href: '/philosophy/natural-process',
    desc: 'Why nature balances — from hot water cooling to insulin responding to glucose. The argument that intelligence is not added on top of physics, but encoded within its structure.',
  },
  {
    label: 'Folding',
    href: '/philosophy/folding',
    desc: 'A working paper. Homeostasis answers what Natural Process left open — then the same form is followed upward: limits as features of our projection, definitions as folds of unfinished structure, the fold as an address, the reset as a projection artifact, and an honest stop at the hard problem.',
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
      <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.8, mb: 5, maxWidth: 580 }}>
        The thread runs from pre-Socratic philosophy through thermodynamics and biology, and
        connects — perhaps surprisingly — to how Bayesian inference works.
      </Typography>

      <Box sx={{ mb: 6, p: { xs: 3, md: 4 }, borderRadius: '10px', maxWidth: 640, background: 'rgba(167,139,250,0.05)', borderLeft: `3px solid ${VIOLET}` }}>
        <Typography sx={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: VIOLET, mb: 1.5 }}>
          A soft introduction to folding
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.8, mb: 2 }}>
          In a science-fiction novel, a single proton is unfolded to the size of a planet, etched with
          circuits, and folded back — a computer folded into nothing, still working. That image started
          this. Then the same move kept turning up: a seed holds a whole plant; a long chain of pointers
          in a data structure can be folded flat so it answers in a single step. Compress, keep what
          matters, unfold again.
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.8, mb: 2 }}>
          A more ordinary question joined it: why a habit or a craving holds. The answer was
          homeostasis — a system defending a setpoint, even one that has drifted. That same answer
          closes the question <em>Natural Process</em> left open: living things don&apos;t just balance,
          they balance <em>toward a reference they carry</em>. Followed far enough, the reference itself
          looks like a fold — a tiny address that unfolds into a whole life, the way the single letter
          <em> e</em> names an expansion that never ends.
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.8, mb: 2.5 }}>
          It is not a proof. It is a way of looking: when something seems to go in circles, check
          whether you are seeing a spiral from the wrong angle.
        </Typography>
        <a href="/philosophy/folding" style={{ textDecoration: 'none' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: ACCENT }}>Read the paper →</Typography>
        </a>
      </Box>

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

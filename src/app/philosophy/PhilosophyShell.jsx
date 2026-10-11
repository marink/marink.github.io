"use client";

import { usePathname } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SECTION, MAIN, ASIDES, STAGES, href as wikiHref } from './watching-the-split/pages';

const BG     = '#070d1a';
const TEXT   = '#e2e8f0';
const DIM    = '#94a3b8';
const ACCENT = '#60a5fa';

const TOPICS = [
  { label: 'Natural Process', href: '/philosophy/natural-process' },
  { label: 'Folding',         href: '/philosophy/folding' },
  { label: SECTION.title,     href: SECTION.base },
];

const SOON = [
  { label: 'Process Philosophy' },
  { label: 'Emergence' },
  { label: 'The Mind Problem' },
];

export default function PhilosophyShell({ children }) {
  const path = usePathname();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: BG, color: TEXT, fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>

      <Box sx={{
        position: 'fixed', top: 0, left: 0, right: 0,
        px: { xs: 4, md: 8 }, py: 2.5,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        zIndex: 10,
        background: 'rgba(7,13,26,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <a href="/" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>
          mk
        </a>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <a href="/#projects" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, textDecoration: 'none' }}>Projects</a>
          <a href="https://github.com/marink" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.35)', display: 'flex' }}>
            <GitHubIcon sx={{ fontSize: 17 }} />
          </a>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', pt: '57px' }}>

        <Box component="nav" sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          width: 220,
          flexShrink: 0,
          position: 'sticky',
          top: 57,
          height: 'calc(100vh - 57px)',
          overflowY: 'auto',
          px: 3,
          py: 4,
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}>
          <Typography sx={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', mb: 2.5 }}>
            Philosophy
          </Typography>

          {TOPICS.map(t => {
            const active = path === t.href || path?.startsWith(t.href + '/');
            return (
              <Box key={t.href} sx={{ mb: 0.5 }}>
                <a href={t.href} style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    fontSize: 13, py: 0.75, px: 1.5, borderRadius: '5px',
                    color: active ? TEXT : DIM,
                    background: active ? 'rgba(96,165,250,0.1)' : 'transparent',
                    borderLeft: active ? `2px solid ${ACCENT}` : '2px solid transparent',
                    transition: 'all 0.15s',
                    '&:hover': { color: TEXT, background: 'rgba(255,255,255,0.04)' },
                  }}>
                    {t.label}
                  </Box>
                </a>
              </Box>
            );
          })}

          {path?.startsWith(SECTION.base) && (
            <Box sx={{ ml: 1.5, pl: 1.5, mb: 1, borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              {[...MAIN.flatMap((p, j) => (j === 0 || MAIN[j - 1].stage !== p.stage)
                  ? [{ refrain: STAGES.find(st => st.n === p.stage).refrain }, p] : [p]),
                null, ...ASIDES, null, { slug: 'concepts', title: 'Concepts' }].map((p, i) => p === null ? (
                <Box key={`gap-${i}`} sx={{ height: 10 }} />
              ) : p.refrain ? (
                <Box key={`st-${i}`} sx={{ fontSize: 10.5, fontStyle: 'italic', color: 'rgba(167,139,250,0.7)', mt: i ? 1.25 : 0, mb: 0.25 }}>
                  {p.refrain}
                </Box>
              ) : (
                <a key={p.slug || 'start'} href={wikiHref(p.slug)} style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    fontSize: 12, py: 0.4, lineHeight: 1.45,
                    color: path === wikiHref(p.slug) ? TEXT : 'rgba(148,163,184,0.75)',
                    fontStyle: p.kind === 'aside' ? 'italic' : 'normal',
                    '&:hover': { color: TEXT },
                  }}>
                    {p.kind === 'main' ? `${MAIN.indexOf(p) + 1}. ${p.title}` : p.title}
                  </Box>
                </a>
              ))}
            </Box>
          )}

          {SOON.length > 0 && (
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.12)', mb: 1.5 }}>
                Coming soon
              </Typography>
              {SOON.map(t => (
                <Typography key={t.label} sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)', py: 0.75, px: 1.5 }}>
                  {t.label}
                </Typography>
              ))}
            </Box>
          )}
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          {children}
        </Box>

      </Box>
    </Box>
  );
}

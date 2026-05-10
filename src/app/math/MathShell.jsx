"use client";

import { usePathname } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const BG    = '#070d1a';
const TEXT  = '#e2e8f0';
const DIM   = '#94a3b8';
const ACCENT = '#60a5fa';

const TOPICS = [
  { label: 'Set Theory',     href: '/math/set-theory' },
  { label: 'Logic',          href: '/math/logic' },
  { label: 'Number Theory',  href: '/math/number-theory' },
  { label: 'Calculus',       href: '/math/calculus' },
  { label: 'Linear Algebra', href: '/math/linear-algebra' },
  { label: 'Probability',    href: '/math/probability' },
];

export default function MathShell({ children }) {
  const path = usePathname();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: BG, color: TEXT, fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>

      {/* Ghost nav */}
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

        {/* Sidebar */}
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
            Mathematics
          </Typography>

          {TOPICS.map(t => {
            const active = path === t.href;
            return (
              <Box key={t.href} sx={{ mb: 0.5 }}>
                {t.soon ? (
                  <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)', py: 0.75, px: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {t.label}
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.12)', letterSpacing: 1 }}>SOON</span>
                  </Typography>
                ) : (
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
                )}
              </Box>
            );
          })}
        </Box>

        {/* Page content */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {children}
        </Box>

      </Box>
    </Box>
  );
}

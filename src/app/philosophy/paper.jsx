"use client";

// Shared building blocks for paper-style pages in the Philosophy section.

import { Box, Typography, Divider } from '@mui/material';
import { InlineMath, BlockMath } from 'react-katex';

export const TEXT   = '#e2e8f0';
export const DIM    = '#94a3b8';
export const ACCENT = '#60a5fa';
export const VIOLET = '#a78bfa';
export const MUTED  = 'rgba(255,255,255,0.12)';

export const M  = ({ m }) => <InlineMath math={m} />;
export const MB = ({ m }) => <BlockMath math={m} />;

export function P({ children }) {
  return <Typography component="div" sx={{ color: DIM, fontSize: 15, lineHeight: 1.85, mb: 2.5 }}>{children}</Typography>;
}

export function Em({ children }) {
  return <strong style={{ color: TEXT, fontWeight: 600 }}>{children}</strong>;
}

export function A({ href, children }) {
  const external = href.startsWith('http');
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
       style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>
      {children}
    </a>
  );
}

export function H2({ id, n, children }) {
  return (
    <Typography id={id} variant="h2" sx={{ fontSize: '1.4rem', fontWeight: 700, color: TEXT, mt: 7, mb: 2, scrollMarginTop: '80px' }}>
      {n && <Box component="span" sx={{ color: 'rgba(255,255,255,0.25)', mr: 1.5, fontWeight: 600 }}>{n}</Box>}
      {children}
    </Typography>
  );
}

export function H3({ n, children }) {
  return (
    <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 600, color: TEXT, mt: 4, mb: 1.5, letterSpacing: 0.3 }}>
      {n && <Box component="span" sx={{ color: 'rgba(255,255,255,0.25)', mr: 1.25 }}>{n}</Box>}
      {children}
    </Typography>
  );
}

export function Pullout({ children }) {
  return (
    <Box sx={{ my: 3, p: 3, borderRadius: '8px', background: 'rgba(96,165,250,0.06)', borderLeft: `3px solid ${ACCENT}` }}>
      <Box sx={{ color: DIM, fontSize: 15, lineHeight: 1.85 }}>{children}</Box>
    </Box>
  );
}

export function Note({ label = 'Note', children }) {
  return (
    <Box sx={{ my: 2.5, p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      {label && <Typography sx={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', mb: 1 }}>{label}</Typography>}
      <Box sx={{ color: DIM, fontSize: 14, lineHeight: 1.8 }}>{children}</Box>
    </Box>
  );
}

// A numbered claim, objection or rule, set apart from the prose.
export function Claim({ label, children, color = VIOLET }) {
  return (
    <Box sx={{ my: 3, p: 3, borderRadius: '8px', background: 'rgba(167,139,250,0.05)', borderLeft: `3px solid ${color}` }}>
      {label && <Typography sx={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color, mb: 1 }}>{label}</Typography>}
      <Box sx={{ color: DIM, fontSize: 15, lineHeight: 1.85 }}>{children}</Box>
    </Box>
  );
}

export function List({ ordered, children }) {
  return (
    <Box component={ordered ? 'ol' : 'ul'} sx={{ color: DIM, fontSize: 15, lineHeight: 1.85, pl: 3, mb: 2.5, '& li': { mb: 1 } }}>
      {children}
    </Box>
  );
}

export function Table({ head, rows, caption }) {
  const cell = { p: 1.5, borderBottom: '1px solid rgba(255,255,255,0.07)', textAlign: 'left', fontSize: 14 };
  return (
    <Box component="figure" sx={{ m: 0, my: 3.5 }}>
      <Box sx={{ overflowX: 'auto' }}>
        <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', color: DIM }}>
          <thead>
            <tr>{head.map((h, i) => <Box component="th" key={i} sx={{ ...cell, color: TEXT, fontWeight: 600 }}>{h}</Box>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>{r.map((c, j) => <Box component="td" key={j} sx={{ ...cell, color: j === 0 ? TEXT : DIM }}>{c}</Box>)}</tr>
            ))}
          </tbody>
        </Box>
      </Box>
      {caption && <Caption>{caption}</Caption>}
    </Box>
  );
}

export function Caption({ children }) {
  return (
    <Typography component="figcaption" sx={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, mt: 1.5 }}>
      {children}
    </Typography>
  );
}

// Inline numbered citation. `refs` is the ordered reference list; `k` is a key or array of keys.
export function makeCite(refs) {
  const index = Object.fromEntries(refs.map((r, i) => [r.key, i + 1]));
  return function Cite({ k }) {
    const keys = Array.isArray(k) ? k : [k];
    return (
      <Box component="span" sx={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
        {' ['}
        {keys.map((key, i) => (
          <span key={key}>
            {i > 0 && ', '}
            <a href={`#ref-${key}`} style={{ color: 'rgba(96,165,250,0.8)', textDecoration: 'none' }}>{index[key] ?? '?'}</a>
          </span>
        ))}
        {']'}
      </Box>
    );
  };
}

export function References({ refs }) {
  return (
    <Box component="ol" sx={{ color: DIM, fontSize: 13.5, lineHeight: 1.75, pl: 3.5, '& li': { mb: 1.25, scrollMarginTop: '80px' } }}>
      {refs.map(r => (
        <li key={r.key} id={`ref-${r.key}`}>
          {r.text}
          {r.url && <> <A href={r.url}>link</A></>}
        </li>
      ))}
    </Box>
  );
}

// Page frame: title block, abstract, body and a right-hand table of contents.
export function Paper({ crumb, title, subtitle, byline, abstract, keywords, toc, children }) {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box component="article" sx={{ flex: 1, minWidth: 0, px: { xs: 3, md: 6 }, py: 7, maxWidth: 820 }}>
        <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>{crumb}</Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.1 }}>
          {title}
        </Typography>
        {subtitle && <Typography sx={{ color: DIM, fontSize: 17, lineHeight: 1.6, mb: 2 }}>{subtitle}</Typography>}
        {byline && <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', mb: 5 }}>{byline}</Typography>}

        <Box sx={{ p: 3, mb: 5, borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <Typography sx={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', mb: 1.5 }}>Abstract</Typography>
          <Box sx={{ color: DIM, fontSize: 14.5, lineHeight: 1.85 }}>{abstract}</Box>
          {keywords && (
            <Typography sx={{ fontSize: 12.5, color: 'rgba(255,255,255,0.35)', mt: 2 }}>
              <strong>Keywords:</strong> {keywords.join(' · ')}
            </Typography>
          )}
        </Box>

        <Divider sx={{ borderColor: MUTED, mb: 2 }} />
        {children}
      </Box>

      <Box sx={{ display: { xs: 'none', xl: 'block' }, width: 210, flexShrink: 0, position: 'sticky', top: 72, height: 'calc(100vh - 72px)', overflowY: 'auto', pt: 7, pr: 4 }}>
        <Typography sx={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', mb: 2 }}>Contents</Typography>
        {toc.map(t => (
          <a key={t.id} href={`#${t.id}`} style={{ display: 'block', textDecoration: 'none', padding: '3px 0' }}>
            <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', '&:hover': { color: DIM }, lineHeight: 1.5 }}>
              {t.n && <span style={{ marginRight: 6 }}>{t.n}</span>}{t.label}
            </Typography>
          </a>
        ))}
      </Box>
    </Box>
  );
}

"use client";

// Wiki building blocks: popups, creed labels, construction flags and the page frame.

import { useState } from 'react';
import { Box, Typography, Popover, Drawer, Divider, useMediaQuery } from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { TEXT, DIM, ACCENT, VIOLET, MUTED } from '../paper';
import { SECTION, MAIN, PAGES, STAGES, DISCUSS, href, page } from './pages';
import { POPUPS } from './popups';
export { CC } from './flags';

const CARD_BG = '#0f1729';

// ── Popup ────────────────────────────────────────────────────────────────────
// A dotted term that opens a short aside in place: a card on wide screens, a
// bottom sheet on phones. Closes with Esc, a click outside or the ✕.

export function Pop({ id, children }) {
  const p = POPUPS[id];
  const [anchor, setAnchor] = useState(null);
  const small = useMediaQuery('(max-width:600px)');
  if (!p) return <>{children}</>;

  const close = () => setAnchor(null);
  const card = (
    <Box sx={{ p: 2.5, maxWidth: small ? 'none' : 400, color: DIM, fontSize: 14, lineHeight: 1.75, position: 'relative' }}>
      <Box component="button" onClick={close} aria-label="Close"
           sx={{ all: 'unset', cursor: 'pointer', position: 'absolute', top: 10, right: 12, color: 'rgba(255,255,255,0.35)', fontSize: 15, '&:hover': { color: TEXT } }}>
        ✕
      </Box>
      <Typography sx={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: VIOLET, mb: 1, pr: 3 }}>
        {p.title}
      </Typography>
      <Box sx={{ '& p': { m: 0, mb: 1.25 } }}>{p.body}</Box>
      {p.more && (
        <Box sx={{ mt: 1.5 }}>
          <a href={p.more.href} {...(p.more.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
             style={{ color: ACCENT, textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
            {p.more.label} →
          </a>
        </Box>
      )}
    </Box>
  );
  const paper = { sx: { bgcolor: CARD_BG, border: '1px solid rgba(167,139,250,0.25)', borderRadius: '8px', boxShadow: '0 12px 40px rgba(0,0,0,0.5)' } };

  return (
    <>
      <Box component="span" role="button" tabIndex={0} aria-haspopup="dialog"
           onClick={e => setAnchor(e.currentTarget)}
           onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setAnchor(e.currentTarget); } }}
           sx={{ cursor: 'pointer', outline: 'none', color: TEXT, borderBottom: '1px dotted rgba(167,139,250,0.7)',
                 '&:hover, &:focus-visible': { color: VIOLET, borderBottomColor: VIOLET } }}>
        {children ?? p.title}
      </Box>
      {small ? (
        <Drawer anchor="bottom" open={!!anchor} onClose={close}
                slotProps={{ paper: { sx: { ...paper.sx, borderRadius: '12px 12px 0 0', maxHeight: '70vh' } } }}>
          {card}
        </Drawer>
      ) : (
        <Popover open={!!anchor} anchorEl={anchor} onClose={close}
                 anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                 transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                 slotProps={{ paper }}>
          {card}
        </Popover>
      )}
    </>
  );
}

// ── Creed label ──────────────────────────────────────────────────────────────
// Marks a claim that cannot be checked; links to its entry in the creeds register.

export function Creed({ id }) {
  return (
    <a href={`${href('creeds')}#${id}`} title="A creed, not a conclusion: this claim cannot be checked"
       style={{ textDecoration: 'none', marginLeft: 6, verticalAlign: '0.1em' }}>
      <Box component="span" sx={{ fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', color: VIOLET,
                                  border: '1px solid rgba(167,139,250,0.45)', borderRadius: '4px', px: 0.75, py: 0.1 }}>
        creed
      </Box>
    </a>
  );
}

// ── Speaker turn for the dialogue page ──────────────────────────────────────

export function Turn({ who, children }) {
  const me = who === 'me';
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2.5 }}>
      <Typography sx={{ flexShrink: 0, width: 96, fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase', pt: 0.5,
                        color: me ? VIOLET : 'rgba(255,255,255,0.35)' }}>
        {me ? 'Me' : 'Interlocutor'}
      </Typography>
      <Box sx={{ color: DIM, fontSize: 15, lineHeight: 1.85, flex: 1, minWidth: 0 }}>{children}</Box>
    </Box>
  );
}

// ── Discussion link ─────────────────────────────────────────────────────────
// Explained once, in the invitation's "How to read this"; elsewhere just the icon.

export const DISCUSS_LABEL = 'Objections, questions, another node of the graph? Discuss this in the open';

export function DiscussIcon({ inline = false }) {
  return (
    <a href={DISCUSS} target="_blank" rel="noreferrer" aria-label={DISCUSS_LABEL} title={DISCUSS_LABEL}
       style={{ display: 'inline-flex', alignItems: 'center', color: VIOLET, opacity: inline ? 1 : 0.75, verticalAlign: inline ? '-0.2em' : undefined }}>
      <ForumOutlinedIcon sx={{ fontSize: inline ? 18 : 20 }} aria-hidden="true" />
    </a>
  );
}

// ── Page frame ──────────────────────────────────────────────────────────────

const link = { color: 'rgba(255,255,255,0.3)', textDecoration: 'none' };

export function WikiFrame({ slug, children }) {
  const meta = page(slug);
  const i = MAIN.findIndex(p => p.slug === slug);
  const prev = i > 0 ? MAIN[i - 1] : null;
  const next = i >= 0 && i < MAIN.length - 1 ? MAIN[i + 1] : null;
  const stage = meta.kind === 'main' ? STAGES.find(st => st.n === meta.stage) : null;
  const opensStage = stage && (i === 0 || MAIN[i - 1].stage !== meta.stage);
  const kindLabel = meta.kind === 'main' ? `${stage.refrain} · ${i + 1} of ${MAIN.length}` : meta.kind === 'aside' ? 'Aside' : null;

  return (
    <Box component="article" sx={{ px: { xs: 3, md: 6 }, py: 7, maxWidth: 780 }}>
      <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>
        <a href="/philosophy" style={{ color: DIM, textDecoration: 'none' }}>Philosophy</a>
        {' → '}
        <a href={href('')} style={{ color: DIM, textDecoration: 'none' }}>{SECTION.title}</a>
        {kindLabel && <span style={{ color: 'rgba(255,255,255,0.3)' }}>{' · '}{kindLabel}</span>}
      </Typography>
      {stage && opensStage && (
        <Box sx={{ mb: 3, mt: 1 }}>
          <Typography sx={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: { xs: '1.25rem', md: '1.45rem' }, color: VIOLET, lineHeight: 1.3 }}>
            {stage.refrain}
          </Typography>
          <Typography sx={{ fontSize: 13.5, color: 'rgba(255,255,255,0.4)', mt: 0.75 }}>{stage.intro}</Typography>
        </Box>
      )}
      <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.12 }}>
        {i === 0 ? SECTION.title : meta.title}
      </Typography>
      <Typography sx={{ color: DIM, fontSize: 16.5, lineHeight: 1.65, mb: 4, maxWidth: 620 }}>{meta.lede}</Typography>
      <Divider sx={{ borderColor: MUTED, mb: 4 }} />

      {children}

      <Divider sx={{ borderColor: MUTED, mt: 7, mb: 3 }} />
      {meta.kind === 'main' ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, fontSize: 13.5 }}>
          <span>{prev && <a href={href(prev.slug)} style={link}>← {prev.title}</a>}</span>
          <DiscussIcon />
          <span>{next
            ? <a href={href(next.slug)} style={{ ...link, color: ACCENT }}>Next in the line of thought: {next.title} →</a>
            : <a href={href('concepts')} style={link}>All concepts →</a>}</span>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, fontSize: 13.5 }}>
          <a href={href('')} style={link}
             onClick={e => { if (typeof window !== 'undefined' && document.referrer.includes(SECTION.base)) { e.preventDefault(); window.history.back(); } }}>
            ← Back to where you were
          </a>
          <DiscussIcon />
          <a href={href('concepts')} style={link}>All concepts →</a>
        </Box>
      )}
    </Box>
  );
}

export { PAGES };

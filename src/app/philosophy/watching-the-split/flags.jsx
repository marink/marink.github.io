"use client";

import { Box } from '@mui/material';

const AMBER = '#fbbf24';

// ── Construction flag ───────────────────────────────────────────────────────
// Marks anything Claude constructed rather than Marin stated. Visible only in the
// local dev server, for review; renders as plain content in the published build.

export function CC({ note, block, children }) {
  if (process.env.NODE_ENV !== 'development') return <>{children}</>;
  const tag = (
    <Box component="span" sx={{ fontSize: 11, color: AMBER, fontWeight: 600, ml: children ? 0.75 : 0 }}>
      [CC: {note}]
    </Box>
  );
  return block ? (
    <Box sx={{ outline: `1px dashed ${AMBER}`, outlineOffset: 6, borderRadius: '4px', my: 2 }}>
      {children}{tag}
    </Box>
  ) : (
    <Box component="span" sx={{ background: 'rgba(251,191,36,0.10)', borderBottom: `1px dashed ${AMBER}` }}>
      {children}{tag}
    </Box>
  );
}

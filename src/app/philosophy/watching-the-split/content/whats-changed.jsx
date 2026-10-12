import { Box, Typography } from '@mui/material';
import { P, TEXT, DIM, VIOLET } from '../../paper';
import { CHANGES, formatDate } from '../changes';
import { page, href } from '../pages';
import { useLastVisit } from '../useLastVisit';

export default function WhatsChanged() {
  const previous = useLastVisit();
  return (
    <>
      <P>
        This writing changes as it is reviewed. Each entry below says what changed and where, newest first, so that
        a returning reader can find the new parts without rereading the whole. Pages that changed since your last
        visit are also marked where they appear. That date is kept only in your own browser.
      </P>

      {CHANGES.map(c => {
        const isNew = previous && new Date(c.published) > previous;
        return (
          <Box key={c.id} id={c.id} sx={{ mt: 5, scrollMarginTop: '80px' }}>
            <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: 0.5 }}>
              {formatDate(c.published)}
              {isNew && <Box component="span" sx={{ ml: 1.5, color: VIOLET, fontWeight: 600 }}>● new since your last visit</Box>}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: '1.05rem', fontWeight: 700, color: TEXT, mt: 0.5, mb: 1 }}>{c.title}</Typography>
            <Typography sx={{ color: DIM, fontSize: 14.5, lineHeight: 1.75, mb: 1.5 }}>{c.summary}</Typography>
            {c.pages.length > 0 && (
              <Box component="ul" sx={{ color: DIM, fontSize: 14, lineHeight: 1.75, pl: 3, m: 0, '& li': { mb: 0.75 } }}>
                {c.pages.map((p, i) => (
                  <li key={i}>
                    {p.slug === null ? <em>Throughout</em> : (
                      <a href={href(p.slug)} style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500 }}>
                        {p.slug === '' ? 'An invitation' : page(p.slug)?.title}
                      </a>
                    )}
                    {': '}{p.note}
                  </li>
                ))}
              </Box>
            )}
          </Box>
        );
      })}
    </>
  );
}

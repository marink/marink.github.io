import { Box } from '@mui/material';
import { P, H3, DIM } from '../../paper';
import { Pop } from '../wiki';
import { POPUPS } from '../popups';
import { MAIN, ASIDES, href } from '../pages';

const GROUPS = [
  ['People and ideas', ['hard-problem', 'zombie', 'dennett', 'panpsychism', 'combination', 'horns', 'zeland',
    'excess-potential', 'aikido', 'hershfield', 'hyperbolic', 'pontzer', 'kirkwood', 'hoffman', 'godel', 'cantor',
    'godel-fork', 'mystic-mathematician', 'lucas-penrose', 'halting', 'choice', 'pvsnp', 'paraconsistent', 'nfl', 'feynman',
    'egg-columbus']],
  ['Machinery from Folding', ['seed', 'path-compression', 'union-find-union', 'e', 'reader-address', 'full',
    'bekenstein', 'up-spiral', 'dead-zones']],
  ['Motifs and earlier pages', ['model-not-whole', 'to-be', 'joke', 'joy-of-unfolding', 'proportion', 'natural-process', 'folding-paper']],
];

const linkStyle = { color: DIM, textDecoration: 'none' };

function Grid({ children }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.25, mb: 3, fontSize: 14.5 }}>
      {children}
    </Box>
  );
}

export default function Concepts() {
  return (
    <>
      <P>Every page and every aside in this section. Dotted terms open in place.</P>

      <H3>The line of thought</H3>
      <Box component="ol" sx={{ color: DIM, fontSize: 14.5, lineHeight: 2, pl: 3, mb: 3 }}>
        {MAIN.map(p => <li key={p.slug}><a href={href(p.slug)} style={linkStyle}>{p.title}</a></li>)}
      </Box>

      <H3>Aside pages</H3>
      <Grid>
        {ASIDES.map(p => <a key={p.slug} href={href(p.slug)} style={linkStyle}>{p.title} →</a>)}
      </Grid>

      {GROUPS.map(([label, ids]) => (
        <div key={label}>
          <H3>{label}</H3>
          <Grid>
            {ids.filter(id => POPUPS[id]).map(id => <span key={id}><Pop id={id} /></span>)}
          </Grid>
        </div>
      ))}
    </>
  );
}

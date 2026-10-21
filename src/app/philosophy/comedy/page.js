"use client";

import { Box, Typography, Divider } from '@mui/material';
import { Paper, H2, Em, References, MUTED } from '../paper';
import { REFS } from './references';
import Introduction  from './sections/01-Introduction';
import ShortestForms from './sections/02-ShortestForms';
import Smile         from './sections/03-Smile';
import Pun           from './sections/04-Pun';
import Joke          from './sections/05-Joke';
import Counselor     from './sections/06-Counselor';
import RelatedWork   from './sections/07-RelatedWork';

const TOC = [
  { id: 'introduction',   n: '1', label: 'Comedy is folding' },
  { id: 'shortest-forms', n: '2', label: 'The shortest forms' },
  { id: 'smile',          n: '3', label: 'The smile' },
  { id: 'pun',            n: '4', label: 'The pun' },
  { id: 'joke',           n: '5', label: 'The joke, and Ricky Gervais' },
  { id: 'counselor',      n: '6', label: 'A loop seen from inside' },
  { id: 'related',        n: '7', label: 'Related work' },
  { id: 'references',     label: 'References' },
];

const ABSTRACT = (
  <>
    A joke is a fold: it is compressed when it is told, it unfolds in the listener, and the laugh is the
    moment it lands. That is why comedy carries a message better than a speech does: the listener does the
    unfolding, and the unfolding is a pleasure. I follow the move through its forms in order of length:
    the <Em>smile</Em>, which needs no words; the <Em>pun</Em>, one word carrying two meanings, with this
    site&apos;s own address as a found example; and the <Em>joke</Em>, with Ricky Gervais as the credit for
    a cut aimed at the frame rather than the person. A risk runs alongside: a laugh can be an exit, release
    without the point. The account sits inside the old incongruity tradition and adds only the link to
    Folding. It is a way of looking, not a theory of humour.
  </>
);

export default function ComedyPage() {
  return (
    <Paper
      crumb="Philosophy → Comedy"
      title="Comedy as Folding"
      subtitle="The smile, the pun and the joke: a message that unfolds in the listener, and the laugh as the moment it lands."
      byline="Marin Kokona · Working notes · October 2026 · Nothing here is claimed as proved"
      abstract={ABSTRACT}
      keywords={['comedy', 'folding', 'pun', 'incongruity', 'self-reading address', 'Ricky Gervais']}
      toc={TOC}
    >
      <Introduction />
      <ShortestForms />
      <Smile />
      <Pun />
      <Joke />
      <Counselor />
      <RelatedWork />

      <H2 id="references">References</H2>
      <References refs={REFS} />

      <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          <a href="/philosophy/watching-the-split" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>← Watching the Split</a>
        </Typography>
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          <a href="/philosophy" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Philosophy index →</a>
        </Typography>
      </Box>
    </Paper>
  );
}

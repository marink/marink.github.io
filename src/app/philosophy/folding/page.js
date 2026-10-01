"use client";

import { Box, Typography, Divider } from '@mui/material';
import { Paper, H2, Em, References, MUTED } from '../paper';
import { REFS } from './references';
import Introduction from './sections/01-Introduction';
import Homeostasis  from './sections/02-Homeostasis';
import Observations from './sections/03-Observations';
import Limits       from './sections/04-Limits';
import Substrate    from './sections/05-Substrate';
import Address      from './sections/06-Address';
import Spiral       from './sections/07-Spiral';
import OpenEdge     from './sections/08-OpenEdge';
import Stance       from './sections/09-Stance';
import RelatedWork  from './sections/10-RelatedWork';

const TOC = [
  { id: 'introduction', n: '1',  label: 'Introduction' },
  { id: 'homeostasis',  n: '2',  label: 'Homeostasis' },
  { id: 'observations', n: '3',  label: 'Three observations' },
  { id: 'limits',       n: '4',  label: 'The claim and its limits' },
  { id: 'substrate',    n: '5',  label: 'The substrate question' },
  { id: 'address',      n: '6',  label: 'The address' },
  { id: 'spiral',       n: '7',  label: 'Against the reset' },
  { id: 'open-edge',    n: '8',  label: 'The open edge' },
  { id: 'stance',       n: '9',  label: 'A modelling stance' },
  { id: 'related',      n: '10', label: 'Related work' },
  { id: 'references',   label: 'References' },
];

const ABSTRACT = (
  <>
    Natural Process argued that balancing is what nature does, and left open what living systems balance
    <em> toward</em>. I answer with <Em>homeostasis</Em>: balancing against a stored setpoint. Through
    reward and insulin I show that the setpoint is physical, and that it can drift. I then follow
    the same form upward. Folding, the compression of structure into a recoverable seed, appears in
    fiction, algorithms and biology. I argue that physical limits on folding belong to our spacetime
    projection rather than to structure itself, that every definition (the number e is the example) is
    a fold of an unfinished, self-generating structure, and that what any definition leaves out is more
    than what it holds. A fold is then best understood as an <Em>address</Em> into a full space of
    possibilities, read by nothing but itself, which is homeostasis at the level of reality by analogy
    rather than by proof. Two consequences follow: the "reset" is a projection artefact of an up-spiral,
    and paradoxes generally dissolve when the missing dimension is added back. The argument explains continuation but not felt experience, and stops
    honestly at the hard problem. The result is offered as a modelling stance, not a proof.
  </>
);

export default function FoldingPage() {
  return (
    <Paper
      crumb="Philosophy → Folding"
      title="Folding: Reality as a Self-Referential Address"
      subtitle="From homeostasis in diet and reward to the fold, the address, and the up-spiral."
      byline="Marin Kokona · Working paper · September 2026 · Nothing here is claimed as proved"
      abstract={ABSTRACT}
      keywords={['homeostasis', 'setpoint', 'folding', 'self-reference', 'interface theory', 'hard problem']}
      toc={TOC}
    >
      <Introduction />
      <Homeostasis />
      <Observations />
      <Limits />
      <Substrate />
      <Address />
      <Spiral />
      <OpenEdge />
      <Stance />
      <RelatedWork />

      <H2 id="references">References</H2>
      <References refs={REFS} />

      <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          <a href="/philosophy/natural-process" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>← Natural Process</a>
        </Typography>
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          <a href="/philosophy" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Philosophy index →</a>
        </Typography>
      </Box>
    </Paper>
  );
}

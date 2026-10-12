import { Pop, Invite } from '../wiki';
import { Box } from '@mui/material';
import { P, H3, Claim } from '../../paper';

function FnRef({ n }) {
  return (
    <sup id={`fnref-${n}`} style={{ scrollMarginTop: 80 }}>
      <a href={`#fn-${n}`} style={{ color: '#60a5fa', textDecoration: 'none', fontSize: 11, marginLeft: 2 }}>[{n}]</a>
    </sup>
  );
}

function Fn({ n, children }) {
  return (
    <li id={`fn-${n}`} style={{ scrollMarginTop: 80 }}>
      {children}{' '}
      <a href={`#fnref-${n}`} aria-label="Back to the text" style={{ color: 'rgba(96,165,250,0.8)', textDecoration: 'none' }}>↩</a>
    </li>
  );
}

function Footnotes({ children }) {
  return (
    <Box component="ol" sx={{ mt: 6, pt: 2, pl: 3, borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(148,163,184,0.85)',
                              fontSize: 13.5, lineHeight: 1.75, '& li': { mb: 1.25 } }}>
      {children}
    </Box>
  );
}

export default function RulesAboutNothing() {
  return (
    <>
      <H3>The infinite zoom</H3>
      <P>
        I watched an infinite-zoom video with my daughter (<a href="https://www.youtube.com/watch?v=8Are9dDbW24"
        target="_blank" rel="noreferrer" style={{ color: '#60a5fa', textDecoration: 'none' }}><em>Cosmic Eye</em></a>,
        three minutes): zoom in far enough and you find almost nothing at all.
        The atom is almost entirely empty. What holds a solid hand together is not stuff but <em>rules</em>{' '}
        (distances, ratios, patterns) that do not change with scale. The world is not made of things; it is made
        of rules about almost-nothing, and those rules are mathematics.<Invite /> The eye hits nothing; only the mind
        reaches the pattern.
      </P>

      <H3>“But I cannot feel it”</H3>
      <P>
        I tried an analogy from a first-person-shooter video game: when a player is “killed”, nothing is really shot. A calculation,
        a definition, decides that the player is dead. Her objection was immediate: “but I cannot feel it.”
      </P>
      <P>
        So, the goggles. If goggles had been put on her at birth, and she had been fed and the goggles never taken
        off, the game would be all she knew. She would have no way of knowing there was a reality outside the
        headset.<FnRef n={1} />
      </P>

      <Claim label="How to land it safely" color="#fbbf24">
        Her feeling is real, and it is hers. The mathematics under it does not make it fake, in the same way that
        empty atoms do not make her hand fake. Both are real at once. It must never land as “nothing is real, you
        are just a simulation, feelings do not matter”. That is the red-pill error, the Matrix's dimension
        reduction<FnRef n={2} />: choosing the structure over the rendered world, when both are real at their own level.
      </Claim>

      <Footnotes>
        <Fn n={1}>
          The goggles idea came from a blend of two sources. One is <Pop id="hoffman">Donald Hoffman's</Pop> picture of
        perception as an interface: what we see is not reality as it is, but something more like a headset, tuned by
        evolution to help us survive, and one we never take off. The other is the virtual-reality game in Liu Cixin's{' '}
        <em>The Three-Body Problem</em>, which its players enter through a headset and a full-body suit, and which, while
        they are inside it, feels like a whole world.
        </Fn>
        <Fn n={2}>
          <em>The Matrix</em> (1999): <a href="https://www.whatisthematrix.com" target="_blank" rel="noreferrer"
          style={{ color: '#60a5fa', textDecoration: 'none' }}>whatisthematrix.com</a>, the film's official site.
        </Fn>
      </Footnotes>
    </>
  );
}

import { H2, H3, P, Em, List, Claim } from '../../paper';
import { Cite } from '../references';
import HelixFigure from '../HelixFigure';

export default function Spiral() {
  return (
    <>
      <H2 id="spiral" n="7">Against the reset: the up-spiral</H2>
      <P>
        In <em>Memento</em><Cite k="nolan" />, Leonard solves his crux and then deliberately plants the
        next false lead, so the search starts again from zero. A common reading is that this is simply
        what happens once the crux is solved: you press the reset button.
      </P>
      <Claim label="Position">
        Reject the reset. The error is the assumption that continuity has to return to zero.
      </Claim>
      <List>
        <li>
          <Em>The up-spiral.</Em> A helix, not a circle. Nothing is wiped, everything accumulates, and
          each pass sits higher than the last. <em>Memento</em> is the flat circle.
        </li>
        <li>
          <Em>The reset is a projection artefact.</Em> It is what a higher-dimensional spiral looks like
          when it is viewed along its axis (Figure 1). This is the same move as Section 4.1: a limit that
          belongs to the view is mistaken for a limit of the thing.
        </li>
        <li>
          <Em>No privileged zero.</Em> To see only zero and infinity is to look at half the spectrum. The
          full range runs from negative infinity to positive infinity, and without a privileged zero there
          is nothing to reset <em>to</em>.
        </li>
      </List>
      <HelixFigure />

      <H3 n="7.1">Where choice enters</H3>
      <P>
        Section 6 gave up the steering wheel. It comes back, in a modest form, at the breaks. Continuity
        has dead zones: interruptions, forgetting, gaps between one reading and the next. Choice lives
        there, in picking the path along which the important parts make it through. Reading back what
        was said so that it is encoded better is a small, concrete example.
      </P>

      <H3 n="7.2">A caution: continuity includes others</H3>
      <P>
        Re-encoding an idea makes it one's own in a true and modest sense. It does not license the
        stronger claim that the world is one's own creation. "Favourable to continuity" has to count other
        people as real continuers too.
      </P>
    </>
  );
}

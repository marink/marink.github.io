import { P, Em, A, H3, Claim } from '../../paper';
import { Pop } from '../wiki';
import { href } from '../pages';

export default function TheSpiral() {
  return (
    <>
      <P>
        The <Pop id="up-spiral">up-spiral</Pop> against the flat reset. Nothing is wiped; each pass sits higher
        than the last. Observing rather than collapsing the split is what keeps you in the game without needing
        to win it. Choice enters at the <Pop id="dead-zones">dead zones</Pop>, the breaks between one reading
        and the next.
      </P>
      <P>
        The difference between the loop
        and the spiral is awareness. A drive with no one home to witness it repeats and does not climb. →{' '}
        <A href={href('the-moth')}>The moth</A>
      </P>

      <H3>The guardrail</H3>
      <P>
        There are two kinds of open loop. One you keep open <em>by choice</em>, and it drives you upward. The
        other stays open because closing it was never on offer, and that one is the trap.
      </P>
      <Claim label="Name the day" color="#fbbf24">
        If "observe, don't solve" ever stops being a choice and becomes a wall you cannot get past, that is the
        day to call it what it is.
      </Claim>
      <P>
        A frame that reads ordinary life (dropped calls, falling acorns, a safe arrival) as <em>aimed</em> has
        quietly become unfalsifiable, and it can run away with a person. Keep the safe driver underneath. The
        drive was a drive; the acorn was just an acorn. → <A href={href('the-acorns')}>The acorns</A>
      </P>

      <H3>Track the structure, not the copy</H3>
      <P>
        Even death, on <Pop id="kirkwood">Kirkwood's</Pop> account, is a trade rather than a bug: energy spent on
        reproduction and early survival instead of indefinite repair. On the spiral, what continues is the
        structure, not the copy.
      </P>
      <P>
        And a child is not meant to be
        a copy. What passes between a parent and a child is lossy, and the loss is not the failure. →{' '}
        <A href={href('the-room-they-grow-in')}>The room they grow in</A>
      </P>
      <P>
        <Em>I would rather shape my environment than be shaped by it.</Em>
      </P>
    </>
  );
}

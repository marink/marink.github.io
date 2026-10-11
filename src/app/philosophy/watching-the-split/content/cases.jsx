import { P, Em, A, H3, Pullout, List } from '../../paper';
import { Pop } from '../wiki';
import { href } from '../pages';

const HEALTH = 'https://health.marinkokona.com/health';
const DOPAMINE = 'https://health.marinkokona.com/health/dopamine';

export function SugarTrap() {
  return (
    <>
      <P>
        I freed myself from sugar by <em>reading</em>. Clarity reached the gut and became motivation. That is my
        lever, and it is uncommon; for most people knowledge has a harder road to the gut
        (<Pop id="hyperbolic">hyperbolic discounting</Pop>).
      </P>
      <H3>Containment has two layers</H3>
      <List>
        <li><Em>A reset setpoint</Em> keeps the craving small.</li>
        <li><Em>Structured knowledge</Em> names where "one more" leads before you get there.</li>
      </List>
      <P>
        The faithful version keeps <Pop id="proportion">proportion</Pop>: one chocolate is not a ledge; the
        pattern is the danger.
      </P>
      <P>
        The mechanism, with references, is on the health site:{' '}
        <A href={HEALTH}>Health</A> on insulin and the metabolic setpoint, and{' '}
        <A href={DOPAMINE}>Dopamine and Gaming</A> on the same trap in the reward system.
      </P>
    </>
  );
}

export function TheStreak() {
  return (
    <>
      <P>
        A game: MVP, then three in a row, then five. The open loop never closes, and that is the hook. I drew
        the line at five and reset to the cruel version: lose the first one.
      </P>
      <P>
        It is the same escalation engine as a ball-bouncing game I played as a child. That is a genuine lifelong
        signature, powerful and double-edged.
      </P>
      <P>
        Why the loop holds, in terms of the reward system: <A href={DOPAMINE}>Dopamine and Gaming</A>. Why the
        line is a choice and not a wall: <A href={href('the-spiral')}>The spiral, not the circle</A>.
      </P>
    </>
  );
}

export function TheAcorns() {
  return (
    <>
      <P>
        On a drive home, at what felt like a crux, calls kept dropping and an acorn fell. In the moment, it felt
        aimed. I caught it myself: <em>that is a convenient way to close a loop</em>.
      </P>
      <Pullout>
        The honest reading: calls drop, and acorns fall in October. None of it was aimed.
      </Pullout>
      <P>
        The pattern-matcher wants the consecutive, and a self-referential theory is the perfect fuel for it. The
        same move showed up the same day in argument: at the crux, the theory turned an obstacle into proof
        of its own specialness, like an immune response (<A href={`${href('hard-problem-dialogue')}#crux`}>the
        crux</A>).
      </P>
      <P>
        <Em>Keep the hand on the wheel.</Em> A frame that reads ordinary life as aimed has quietly become
        unfalsifiable, and it can run away with a person. The drive was a drive; the acorn was just an acorn.
      </P>
    </>
  );
}

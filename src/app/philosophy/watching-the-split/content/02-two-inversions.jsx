import { P, Em, A, H3, Claim } from '../../paper';
import { Pop, Creed } from '../wiki';
import { href } from '../pages';

export default function TwoInversions() {
  return (
    <>
      <H3>The question</H3>
      <P>
        <Pop id="hard-problem">Chalmers</Pop> separated the easy problems of mind (attention, memory,
        report, discrimination), which all seem mechanically explicable, from the hard one: why any of it is
        <em> felt</em>. The <Pop id="zombie">philosophical zombie</Pop>, which does everything and is dark
        within, seems conceivable, and nothing in the structure obviously forbids it.
      </P>
      <P>
        I turn that question over twice. The two inversions are the spine of everything that follows.
      </P>

      <Claim label="Inversion 1: “hard” is relative">
        Hardness is not fixed. It equals the charge a person pours into separating hot from cold, good from
        bad. Over-invest in the gap and it becomes hard; stop over-charging it and the hardness drops. The
        amount of excess potential <em>is</em> the distinction they made between the extremes.
      </Claim>
      <P>
        Stated as an identity, that is true by definition, so nothing could check it. Its checkable form: lower
        the charge, and the felt hardness drops. Anyone can test that on themselves.
      </P>

      <Claim label="Inversion 2: “problem” is the wrong label">
        It is not a problem to be solved. It is what keeps life, the unfolding, going. The open, unclosable
        loop is the engine of continuation, and solving it would close the loop. So the unsolvability is the
        feature, not the bug.<Creed id="unsolvable-good" />
      </Claim>
      <P>
        I hold the second inversion most loosely. It is unfalsifiable by construction, so it is a stance to
        be examined, not a proof, and it is labelled as such in <A href={href('creeds')}>the creeds</A>.
      </P>
      <P>
        How I arrived at both, including the objections I accepted on the way, is laid out in full in{' '}
        <A href={href('hard-problem-dialogue')}>The hard problem, worked through</A>. The next stage turns to
        the questions, starting with your own, and then to what the charge actually is.
      </P>
    </>
  );
}

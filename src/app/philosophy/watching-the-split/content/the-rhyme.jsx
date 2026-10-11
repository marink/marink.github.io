import { P, Em, A, H3, Table, Claim } from '../../paper';
import { Pop } from '../wiki';
import { href } from '../pages';

export default function TheRhyme() {
  return (
    <>
      <P>
        Several of the most famous hard problems rhyme. Each is self-reference meeting a limit.
      </P>
            <Table
        head={['', 'Self-reference', 'The limit']}
        rows={[
          ['Halting (Turing)', 'A program asked about programs', 'No finite procedure decides every case'],
          ['Gödel', 'A system describing itself', 'True sentences it cannot prove, including its own consistency'],
          ['P versus NP', 'Checking against constructing', 'Verifying an answer versus building one'],
          ['The hard problem', 'Structure read from within', 'Why the reading is felt at all'],
        ]}
        caption="Four limits that rhyme. P versus NP is used as a data point and a metaphor only."
      />
      
      <P>
        See <Pop id="halting">halting</Pop>, <Pop id="godel">Gödel</Pop> and <Pop id="pvsnp">P versus NP, and
        42</Pop>.
      </P>

      <H3>Four is not infinity</H3>
      <Claim label="What is not claimed" color="#fbbf24">
        A small finite count does not imply infinitely many. What would earn "infinite manifestations" is a
        <Em> generator</Em>: a rule that produces a new instance on demand. I do not have one.
      </Claim>
      <P>
        My stance is to live it: to knock them down as I go, and to treat "infinite" as a bet tested by never
        running out, not as a proven claim. It is listed with the <A href={`${href('creeds')}#infinite-bet`}>creeds</A>{' '}
        for that reason.
      </P>

      <H3>Minds and machines</H3>
      <P>
        The rhyme invites a famous overreach: that minds see truths no formal system can, and so are not
        machines. That is the <Pop id="lucas-penrose">Lucas–Penrose argument</Pop>, and the standard objections
        to it stand. One of them is Gödel turned back on the argument: to "see" your own Gödel sentence as
        true, you would need to know you are consistent, which you cannot.
      </P>
    </>
  );
}

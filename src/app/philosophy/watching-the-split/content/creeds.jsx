import { P, Em, A, H3, Claim, Note } from '../../paper';
import { Pop } from '../wiki';
import { href } from '../pages';

function Entry({ id, title, children }) {
  return (
    <div id={id} style={{ scrollMarginTop: 80 }}>
      <H3>{title}</H3>
      {children}
    </div>
  );
}

export default function Creeds() {
  return (
    <>
      <P>
        I am against anything held sacred and untestable, and that includes my own untestables. So every claim
        in this section that cannot be checked is listed here and labelled as what it is: a creed, a stance I
        choose to live by, not a conclusion I have demonstrated. Wherever one of them appears, its label links
        back to this page.
      </P>

      <Entry id="what-a-creed-is" title="What counts as a creed here">
        <P>
          A claim is a creed when nothing in experience could ever show it wrong. That does not make it
          worthless; it makes it a choice. Any strand that says "this part cannot be checked, only honoured" is
          a strand turning sacred, and it is flagged.
        </P>
                  <P>
            Mathematics has the precise version of this: the <Pop id="choice">axiom of choice</Pop>. Some
            foundations really are chosen, and the system is consistent either way. A labelled creed is a chosen
            foundation, stated as chosen.
          </P>
        
      </Entry>

      <Entry id="unsolvable-good" title="1. “It is unsolvable, and that is good”">
        <Claim label="The creed">
          The hard problem is unsolvable, and that is good, because the open loop keeps the unfolding going.
        </Claim>
        <P>
          <Em>Why it is a creed:</Em> it is unfalsifiable by construction. I state it as a chosen stance to live
          by, not a demonstrated truth. It is the inversion I hold most loosely. Used in{' '}
          <A href={href('two-inversions')}>Two inversions</A> and <A href={href('solve-or-observe')}>Solve or
          observe</A>.
        </P>
      </Entry>

      <Entry id="naming-collapses" title="2. “Naming the dropped dimension would collapse it”">
        <Claim label="The creed">
          Folding drops dimensions the full thing has, but naming the dropped dimension would create the very
          duality that takes you down.
        </Claim>
        <P>
          <Em>The critique, kept beside it:</Em> "I could name it, but naming breaks it" is indistinguishable
          from "I cannot name it". That is the <Pop id="mystic-mathematician">mystic's wall</Pop>, not the
          mathematician's move; <Pop id="godel">Gödel</Pop> and <Pop id="cantor">Cantor</Pop> named their escapes
          exactly. I do not resolve this tension in the theory's favour. The reader judges. →{' '}
          <A href={`${href('hard-problem-dialogue')}#crux`}>The crux, in full</A>
        </P>
      </Entry>

      <Entry id="horn-a" title="3. Horn A, with folding as the answer to combination">
        <Claim label="The creed">
          There is no line between felt and unfelt: self-reference is always felt, even dimly, and the unified "I"
          is the folded form of the many.
        </Claim>
        <P>
          <Em>Why it is held as a stance:</Em> <Pop id="panpsychism">panpsychism</Pop> is a real and respectable
          position, but it owes the <Pop id="combination">combination problem</Pop>, and folding-as-combination
          has not paid that bill. It stays visible.
        </P>
      </Entry>

      <Entry id="infinite-bet" title="And one bet">
        <Note label="Not a creed, a bet">
          That the rhyming limits (halting, Gödel, P versus NP, the hard problem) have infinitely many
          manifestations. Four is not infinity; a proof would need a generator. I treat "infinite" as a bet,
          tested by never running out. → <A href={href('the-rhyme')}>The rhyme</A>
        </Note>
      </Entry>
    </>
  );
}

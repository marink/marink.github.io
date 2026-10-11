import { P, Em, A, H3, Claim, List } from '../../paper';
import { Pop, Creed } from '../wiki';
import { href } from '../pages';

export default function HonestLimit() {
  return (
    <>
      <P>
        This page is what keeps the rest from becoming a sermon. Folding earned its trust by stating its
        limits plainly, and so must this.
      </P>

      <H3>Two shelves</H3>
      <Claim label="What this does not claim" color="#fbbf24">
        It does not solve the <Pop id="hard-problem">hard problem</Pop> as Chalmers posed it. It dissolves the
        <em> suffering</em> the problem causes, not the problem itself. The two belong on separate shelves:
        the practical philosophy (observe, do not over-charge) will not pay the scientist's bill, and the
        scientist's answer, if it ever comes, never dissolved the suffering.
      </Claim>

      <P>
        One line in this writing pushes hardest against that shelf: <em>the hard problem only exists in the
        reading</em>. Stated plainly, it is a claim about the problem itself, not only about the suffering it causes,
        and the shelf above says I do not solve that problem. I keep both, and leave the tension where you can see it.
      </P>
      <P>
        The same tension runs through the thesis itself. When it says the hardness is “not a fact about
        consciousness”, it speaks of the explanatory hardness: why anything is felt at all. What this writing
        dissolves is the felt hardness, the charge. One word is carrying two dimensions, and I name it here rather
        than let it pass.
      </P>

      <H3>Four is not infinity</H3>
      <P>
        Several famous limits rhyme: <Pop id="halting">halting</Pop>, <Pop id="godel">Gödel</Pop>,{' '}
        <Pop id="pvsnp">P versus NP</Pop>, and the hard problem. Each is self-reference meeting a limit. But a
        small, finite count does not imply infinitely many. What would earn "infinite" is a
        <em> generator</em>: a rule that produces a new one on demand. I do not have one. My stance is to live
        it, knocking them down as I go, and to treat "infinite" as a bet that is tested by never running out,
        not as a proven claim. → <A href={href('the-rhyme')}>The rhyme</A>
      </P>

      <H3>Creed, not conclusion</H3>
      <P>Three claims in this section cannot be checked. I hold them, and I label them:</P>
      <List>
        <li>
          <Em>"It is unsolvable, and that is good, because it keeps the unfolding going."</Em> Unfalsifiable
          by construction: a stance to live by, not a demonstrated truth.<Creed id="unsolvable-good" />
        </li>
        <li>
          <Em>"Naming the dropped dimension would collapse it."</Em> This is indistinguishable from "I cannot
          name it". Gödel and Cantor named their escapes exactly. I leave the tension standing rather than
          resolving it in the theory's favour.<Creed id="naming-collapses" />
        </li>
        <li>
          <Em>Horn A, with folding as the answer to combination.</Em> A real and respectable position
          (<Pop id="panpsychism">panpsychism</Pop>), but it owes the{' '}
          <Pop id="combination">combination problem</Pop>, and that bill stays visible.<Creed id="horn-a" />
        </li>
      </List>
      <P>
        Each is set out with its critique in <A href={href('creeds')}>The creeds</A>.
      </P>

      <H3>One good way, not the way</H3>
      <P>
        There is a posture the whole method depends on, and it is easy to miss because it looks like modesty
        when it is actually calibration. My way is probably not the best way. In fact, surely it is not the best
        way. It is one good way to unfold favourably. Not <em>the</em> way; <em>a</em> way. A working branch,
        good enough to walk, never claimed as the trunk. It is the same “with what we know” clause I put on
        binary search (<A href={href('the-tree')}>the tree</A>), turned back on my own method.
      </P>
      <P>
        The discipline shows in what I check and what I state plainly. My own ideas (the folding, the children,
        the moth) I state with conviction, because I unfolded them myself from a seed I trust. A borrowed line,
        a quote absorbed second-hand, I verify before I commit it. That is not insecurity. It is the theory
        applied to itself: fragile knowledge is the transmitted, un-re-derived kind
        (<Pop id="feynman">Feynman</Pop>), so the transmitted kind is exactly what you audit. I trust what I
        unfolded; I check what I inherited.
      </P>
      <P>
        So “one good way among others” is neither false modesty nor shrinking. It is the most defensible stance
        a theory-builder can hold: I believe this enough to build on it, and I know it is not the last word.
        Attraction and suspicion, both awake at once: the suspicion riding quiet in the back seat, not driving,
        but never asleep. The moment it goes fully silent, the favourable unfolding has tipped into hypnosis.
      </P>
      <P>
        The sharpest objection of all, “what is the point?”, is handed over at full strength in{' '}
        <A href={href('the-moth')}>The moth</A>.
      </P>

      <H3>The line that runs through both</H3>
      <P>
        The enemy is not religion and not science. It is any frame, lab coat or robe, arranged so that nothing
        could ever show it wrong. A theory that explains everything and forbids the test fails in exactly the
        way a defended scientific paradigm fails. Good spiritual thinking makes contact with experience; bad
        science defends its laws from testing. Keep every strand checkable: we explain a model, not the
        whole. → <A href={href('real-enemy')}>The real enemy</A>
      </P>
    </>
  );
}

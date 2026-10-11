import { P, Em, A, H3, Pullout, List } from '../../paper';
import { Pop, Creed } from '../wiki';
import { href } from '../pages';

export default function SolveOrObserve() {
  return (
    <>
      <P>
        I put the thesis under stress by arguing the hard problem through with an interlocutor who pressed
        every move. The full exchange is in{' '}
        <A href={href('hard-problem-dialogue')}>The hard problem, worked through</A>. In outline:
      </P>
      <List ordered>
        <li><Em>My instinct.</Em> The <Pop id="zombie">zombie</Pop> is a flattening. If felt experience just is
          the structure read from within itself, the zombie is incoherent.</li>
        <li><Em>The wall.</Em> "From the inside" renames the problem rather than closing it. A thermostat has
          structure read by its own mechanism, and we do not think it feels.</li>
        <li><Em>The fork.</Em> Either self-reference is always felt, or felt experience switches on somewhere
          (<Pop id="horns">Horn A or Horn B</Pop>). I took Horn A: there is no line.</li>
        <li><Em>The bill.</Em> Horn A owes the <Pop id="combination">combination problem</Pop>. My candidate
          answer is folding: the unified "I" is the folded form of the many.</li>
        <li><Em>The press.</Em> Does the fold preserve the small experiences or erase them? My reply: "folding"
          is itself a reduced-dimension word, and preserve-or-erase is another hot-and-cold split.</li>
        <li><Em>The crux.</Em> If no word can capture "folding", no objection can land. That is the{' '}
          <Pop id="mystic-mathematician">mystic's wall rather than the mathematician's move</Pop>. The test:
          name one dropped dimension. My answer, that naming it would create the duality that takes you down,
          is indistinguishable from "I can't".<Creed id="naming-collapses" /></li>
      </List>
      <P>
        That last tension is not resolved in the theory's favour. It is the most honest part of the whole
        exchange, and I leave it with you.
      </P>

      <H3>Where it landed</H3>
      <P>
        Not solved, and not surrendered. What changed was my relationship to the verb. "Solve" is a
        dimension-reducing word, so I observe instead. The one needs the split to continue; it is not
        something to be solved.
      </P>
      <Pullout>
        "Solve" and "observe" are both handles, reduced-dimension words. If "solve" means compress and lose a
        dimension, observe instead. If it means something fuller, try. The verb was never the point; the
        relationship to the verb is.
      </Pullout>
      <P>
        This is <Pop id="aikido">Aikido</Pop> again: do not meet the problem head-on. And it is the question I keep
        returning to: why look at it in a two-dimensional circle?
      </P>
      <P>
        It also explains why the answer cannot simply be handed over. “Give me the validity of your theory” is a
        demand for an O(1) answer to something reachable only by walking the tree yourself. →{' '}
        <A href={href('the-tree')}>The tree</A>
      </P>
      <P>
        The final reframing: the hard problem is hard <em>because we want it hard</em>, to keep the unfolding
        going, and calling it a "problem" is the error, because it is the engine.<Creed id="unsolvable-good" /> The
        theory is a protective guardian, in Zeland's sense: do not increase the excess potential on the split;
        unionise the extremes and watch them in a controllable way, so the spiral goes up.
      </P>
      <P>
        There is a mathematical shape to this inversion: having the answer and having to construct the
        question (<Pop id="pvsnp">P versus NP, and 42</Pop>). I use it as a metaphor only.
      </P>
    </>
  );
}

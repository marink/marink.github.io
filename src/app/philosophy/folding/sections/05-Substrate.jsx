import { H2, H3, P, Em, M, MB, Claim, Pullout } from '../../paper';
import { Cite } from '../references';

export default function Substrate() {
  return (
    <>
      <H2 id="substrate" n="5">The substrate question</H2>
      <P>
        The whole line of thought comes back to one question: <Em>does structure need a place to
        stand?</Em> Does information require a physical substrate, or can it exist free of any location?
      </P>
      <Claim label="Premise (not proved)">
        Suppose structure is primary. The world is then a program: pure structure, which has no physical
        size and so needs no place and no time in which to be stored. The matter we see is a
        <em> rendering</em> of that structure. I do not prove this here. Wheeler and Tegmark argue versions
        of it properly<Cite k={['wheeler', 'tegmark']} />. What follows is what the premise buys.
      </Claim>

      <H3 n="5.1">A symbol is a fold: the number e</H3>
      <P>
        The clearest example I know is a number we treat as finished:
      </P>
      <MB m="e \;=\; \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^{n} \;=\; \sum_{k=0}^{\infty} \frac{1}{k!} \;=\; 2.71828\ldots" />
      <P>
        We write a single letter, and it looks like a thing that is done. It is not. Its digits never end
        and never repeat. The number is transcendental, so no finite algebraic recipe produces it
        either<Cite k="hermite" />. What the symbol actually names is a <em>process</em>, a procedure that
        can always be run one step further and is never complete. The letter is the fold, and the
        never-ending expansion is what it unfolds into<Cite k="euler" />.
      </P>
      <P>
        And the structure is self-generating. The function <M m="e^{x}" /> is the only function, up to a
        constant factor, that is its own derivative:
      </P>
      <MB m="\frac{d}{dx}\, e^{x} = e^{x}" />
      <P>
        This is why e appears wherever something grows in proportion to what it already is: compound
        interest, populations, radioactive decay. It is the signature of a structure that produces more of
        itself from itself.
      </P>
      <Pullout>
        This is the general point. What we define in our reality, whether numbers, objects or laws, is a
        short name for a complicated, self-generating structure that never finishes. We hold the fold. The
        unfolding is never done.
      </Pullout>

      <H3 n="5.2">Nothing is fully defined</H3>
      <P>
        If every definition is a fold of something unfinished, then every definition leaves something
        out. Every theory, however good, leaves something out as well. What is left out is not one stray
        item. It is <em>more</em> than everything inside the definition: the rest of the infinite thing.
      </P>
      <P>
        Mathematics gives this a precise form. A definition is a finite string of symbols, so there are
        only countably many definitions. Cantor showed that there are uncountably many real
        numbers<Cite k="cantor" />. So almost every real number can never be named by any definition at
        all. Whatever our definitions capture, what they miss is strictly larger. Gödel found the same
        shape inside a single formal system: any consistent system rich enough for arithmetic leaves true
        statements it cannot prove.
      </P>

      <H3 n="5.3">Fullness, not incompleteness</H3>
      <P>
        I do not contradict Gödel. I go up a level. Reality is not one consistent system but the
        <Em> full</Em> space that holds all of them: every branch and its negation, the one and the
        not-one, side by side. Each definition, theory or system is incomplete. The space that contains
        them all is not.
      </P>
      <P>
        Call it the <Em>space of possibilities</Em>. All branches already exist, in the way that e has all
        of its digits whether or not anyone computes them. The question is then not what <em>builds</em> a
        branch, but which branch you are in.
      </P>
    </>
  );
}

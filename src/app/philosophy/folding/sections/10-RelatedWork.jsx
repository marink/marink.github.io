import { H2, P, Em, A } from '../../paper';
import { Cite } from '../references';

export default function RelatedWork() {
  return (
    <>
      <H2 id="related" n="10">Related work</H2>
      <P>
        I arrived at these ideas from the particulars above, but several of them have serious precedents.
        They are listed here so the reader can check the argument against them.
      </P>
      <P>
        <Em>The fold in philosophy.</Em> Leibniz's monads each contain the whole universe from one point
        of view<Cite k="leibniz" />, which comes close to an address that is infinitely small and yet a
        complete description. Deleuze made the fold the central figure of his reading of
        Leibniz<Cite k="deleuze" />.
      </P>
      <P>
        <Em>Enfolded order in physics.</Em> Bohm distinguished an <em>implicate</em> (enfolded) order from
        the <em>explicate</em> (unfolded) order we observe<Cite k="bohm" />. That is close to "matter is a
        rendering of structure", in the vocabulary of folding itself.
      </P>
      <P>
        <Em>Structure without substrate.</Em> Wheeler's "it from bit" makes information prior to
        matter<Cite k="wheeler" />. Tegmark's Mathematical Universe Hypothesis holds that physical reality
        <em> is</em> a mathematical structure, and that all such structures exist<Cite k="tegmark" />.
        That is the most formal version of the "fullness" in Section 5.3.
      </P>
      <P>
        <Em>Spacetime as interface.</Em> Hoffman's interface theory of perception holds that spacetime and
        physical objects are a species-specific user interface rather than the structure of
        reality<Cite k={['hoffman2015', 'hoffman2019']} />. Section 4.1 uses this to place the physical
        limits on folding in the projection rather than in the structure.
      </P>
      <P>
        <Em>The undefinable.</Em> Cantor's diagonal argument<Cite k="cantor" /> and Gödel's incompleteness
        theorems are the precise ancestors of Section 5.2: whatever a system of definitions captures, it
        leaves out more.
      </P>
      <P>
        <Em>Homeostasis and allostasis.</Em> The term is Cannon's<Cite k="cannon" />. The moved setpoint
        of Section 2.2 corresponds to allostasis in the addiction literature<Cite k="koob" />. The
        far-from-equilibrium framing is Prigogine's<Cite k="prigogine" />, as discussed in
        <A href="/philosophy/natural-process"> Natural Process</A>.
      </P>
      <P>
        <Em>Self-reference and selection.</Em> Von Neumann's self-reproducing automata<Cite k="vonneumann" />,
        Hofstadter's strange loops<Cite k="hofstadter" /> and the anthropic principle<Cite k="carter" /> are
        each one face of "the reader is the address".
      </P>
    </>
  );
}

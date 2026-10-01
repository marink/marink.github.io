import { H2, P, Em, M, List, Pullout } from '../../paper';
import { Cite } from '../references';

export default function Observations() {
  return (
    <>
      <H2 id="observations" n="3">Three observations of folding</H2>
      <P>
        The word reached me first through ten-fold cross-validation, where a dataset is split into ten
        folds and each is held out in turn<Cite k="stone" />. There, a fold is simply a part. That is
        partition, not compression, and it is not what this paper means. The idea itself was sparked by
        something else, and I then found the same move in two unrelated places.
      </P>
      <List ordered>
        <li>
          <Em>The Sophon.</Em> In <em>The Three-Body Problem</em><Cite k="liu" /> a single proton is
          unfolded from higher dimensions into a surface the size of a planet, etched with circuitry, and
          folded back to subatomic scale. It is a planet-sized computer folded into nothing, with its
          function intact. This is the image that started the paper.
        </li>
        <li>
          <Em>Union-find with path compression.</Em> On naive trees, a sequence of <M m="n" /> unions and
          finds can cost on the order of <M m="n^2" /> steps. Path compression, together with union by
          rank, folds each tree flat as it is traversed. Tarjan showed that this brings the amortised
          cost per operation down to <M m="O(\alpha(n))" />, where <M m="\alpha" /> is the inverse
          Ackermann function<Cite k="tarjan" />. That function stays below 5 for any <M m="n" /> that
          fits in the physical universe, so a deep structure is folded to almost nothing.
        </li>
        <li>
          <Em>A seed.</Em> An entire plant's life is folded into something tiny. Add water and time and
          it unfolds into the whole organism.
        </li>
      </List>
      <P>
        Fiction, algorithms and biology all show the same move. That pervasiveness is what made me
        suspect that folding is not a metaphor borrowed between fields, but an operation reality itself
        performs.
      </P>
      <Pullout>
        <Em>Definition (working).</Em> To <em>fold</em> is to compress a structure into a smaller form
        from which the original can be recovered by <em>unfolding</em>. A fold is <em>good</em> to the
        degree that it preserves the structure that matters.
      </Pullout>
    </>
  );
}

import { H2, P, Em, A, Pullout, Claim } from '../../paper';
import { Cite } from '../references';

export default function Introduction() {
  return (
    <>
      <H2 id="introduction" n="1">Comedy is folding</H2>
      <P>
        <A href="/philosophy/folding">Folding</A><Cite k="folding-paper" /> followed one move through
        metabolism, algorithms and physics: compress a structure into a seed, keep what matters, and let it
        unfold again. <A href="/philosophy/watching-the-split">Watching the Split</A><Cite k="watching" /> kept
        reaching for one example of that move without stopping to look at it: the joke. This page stops to look.
      </P>
      <Claim label="The core idea">
        A joke is a fold. It is compressed when it is told and it unfolds in the listener, and the laugh is the
        moment it lands.
      </Claim>
      <P>
        That is why comedy is such a good way to deliver a message. The unfolding happens in a positive way: it
        makes people laugh. A politician&apos;s speech on a subject is boring. The same message from a comedian
        is interesting, and funny.
      </P>
      <Pullout>
        Think of juice and fibre. The politician hands over the conclusion already unfolded, like juice: easy to
        swallow and gone at once. The comedian hands over the fold, and the listener discovers the point
        themselves. The work of unfolding is what makes it stay.
      </Pullout>
      <P>
        This is also why a joke cannot be explained. Explaining it unfolds it <em>for</em> you, and leaves
        nothing to land. The listener has to perform the last fold.
      </P>
      <Claim label="A risk to watch" color="#fbbf24">
        A laugh can also be an exit: the release arrives and the point is dropped. You laugh, and nothing has
        changed. A good comedian guards against this by leaving a <Em>sting</Em>, something that keeps
        unfolding after the laugh has passed. Section 5 comes back to this.
      </Claim>
    </>
  );
}

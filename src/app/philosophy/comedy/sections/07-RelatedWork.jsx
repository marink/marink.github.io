import { H2, P, Em } from '../../paper';
import { Cite } from '../references';

export default function RelatedWork() {
  return (
    <>
      <H2 id="related" n="7">Related work, and where this stops</H2>
      <P>
        The idea that a joke is a gap between two readings is old. Kant described laughter as an expectation
        that suddenly comes to nothing<Cite k="kant" />, and Schopenhauer located the comic in the incongruity
        between a concept and the real thing it is applied to<Cite k="schopenhauer" />. This is
        the <Em>incongruity</Em> tradition, and the smile of Section 3 sits squarely inside it.
      </P>
      <P>
        Koestler called the same move <Em>bisociation</Em>: one situation perceived in two frames of reference
        at once, each consistent on its own<Cite k="koestler" />. It is the closest earlier statement of
        &ldquo;one thing, two readings&rdquo;, and he too saw it running through humour, science and art
        alike. Freud&apos;s account of the joke as a release of held tension<Cite k="freud" /> is the other
        side: it explains why a laugh can be an exit, the risk named in Section 1. Hurley, Dennett and Adams
        treat humour as the reward for catching a hidden mistake in one&apos;s own reasoning<Cite k="hurley" />,
        which is close to adding back a missing dimension.
      </P>
      <P>
        What this page adds is only the link: that these are the same move as the fold in Folding, the
        compression that unfolds in a reader. It is not a theory of humour and it does not explain why some
        folds land and others do not. Like the papers before it, it is a way of looking, and nothing here is
        claimed as proved.
      </P>
    </>
  );
}

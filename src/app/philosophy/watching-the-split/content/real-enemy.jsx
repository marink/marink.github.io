import { P, Em, A, H3, Pullout, Claim, List } from '../../paper';
import { Pop } from '../wiki';
import { href } from '../pages';

export default function RealEnemy() {
  return (
    <>
      <Pullout>
        The enemy is not religion and not science. It is any frame, lab coat or robe, arranged so that nothing
        could ever show it wrong.
      </Pullout>
      <P>
        Testable versus untestable is the line, and it runs through both. Good spiritual thinking makes contact
        with experience: the <A href={href('sugar-trap')}>sugar-trap</A> liberation did. Bad science defends its
        laws from testing.
      </P>

      <H3>Where the line runs</H3>
      <P>
        <Em>A frame that explains everything.</Em> Thomas Campbell's <em>My Big TOE</em> is one of my inspirations:
        a physicist's attempt to build a bridge from science to the paranormal, beginning from consciousness rather
        than matter, and willing to put its central hypothesis in front of an experiment. It also shows the risk any
        theory of everything carries. Where a single rule explains every result, the absence of evidence included,
        nothing could show that part wrong. The line between testable and untestable runs through the book itself, and
        that is exactly why this section labels its own <A href={href('creeds')}>creeds</A>. →{' '}
        <A href={href('my-big-toe')}>My Big TOE, analysed</A>
      </P>
      <P>
        <Em>A paradigm that defends itself.</Em> Kuhn described how a scientific paradigm can stop testing its
        foundations and start defending them, and Feyerabend pressed the point further. Science can become a
        new religion, and the claim has to be made carefully: what fails is not science, but any frame that has
        stopped being checkable.
      </P>

      <H3><span id="not" style={{ scrollMarginTop: 80 }}>What this writing is not</span></H3>
      <Claim label="A hard guard" color="#fbbf24">
        This writing is <Em>not</Em> a new Bible, not a replacement scripture. It is <Em>not</Em> a new science, not
        a replacement for science. And it is <Em>not</Em> the peace itself: not a treaty that settles everyone, not a
        final resolution that ends the disagreement.
      </Claim>
      <P>
        What it is: an olive branch, an invitation, to the domains that currently challenge or contradict each
        other, to unfold rather than fight:
      </P>
      <List>
        <li>religion and scripture;</li>
        <li>science;</li>
        <li>mathematics;</li>
        <li>philosophy;</li>
        <li>literature, art and comedy;</li>
        <li>new age writing.</li>
      </List>
      <P>
        The meaning of all the branches is not to be the peace. It is only an invitation to unfold rather than fight:
        not a peace handed over to be signed, but an invitation to open one another instead of meeting force with
        force. <Pop id="aikido">Aikido</Pop>, scaled up to whole domains.
      </P>
      <P>
        This is also what keeps it clear of the enemy named above. An olive branch that united every domain could
        become exactly that: a totalising frame that absorbs everything into one true picture, so that nothing could
        show it wrong. The guard is that it is an invitation, not an imposed peace. An invitation can be declined; an
        imposed peace cannot. It does not absorb the domains into one view. Each stays itself, checkable, and
        contradicts where it really contradicts. A truce for unfolding, not a new scripture that dissolves the
        differences.
      </P>

      <H3>The rule that answers both</H3>
      <P>
        <Pop id="model-not-whole">We explain a model, not the whole.</Pop> Keep every strand checkable.
      </P>
    </>
  );
}

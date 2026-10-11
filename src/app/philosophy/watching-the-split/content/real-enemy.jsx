import { P, Em, A, H3, Pullout } from '../../paper';
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

      <H3>Two ways to fail the same way</H3>
      <P>
        <Em>A frame that explains everything.</Em> Thomas Campbell's <em>My Big Toe</em> is an example of a frame
        that explains everything and forbids the test. It is the thing to avoid becoming, and the reason this
        section labels its own <A href={href('creeds')}>creeds</A>.
      </P>
      <P>
        <Em>A paradigm that defends itself.</Em> Kuhn described how a scientific paradigm can stop testing its
        foundations and start defending them, and Feyerabend pressed the point further. Science can become a
        new religion, and the claim has to be made carefully: what fails is not science, but any frame that has
        stopped being checkable.
      </P>

      <H3>The rule that answers both</H3>
      <P>
        <Pop id="model-not-whole">We explain a model, not the whole.</Pop> Keep every strand checkable.
      </P>
    </>
  );
}

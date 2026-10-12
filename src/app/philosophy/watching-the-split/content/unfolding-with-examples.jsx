import { P, Em, A, H3, Pullout, Note } from '../../paper';
import { Pop } from '../wiki';
import { href } from '../pages';
import InductionFigure from './InductionFigure';

export default function UnfoldingWithExamples() {
  return (
    <>
      <H3>Clear to me is not the test</H3>
      <P>
        Reading this writing back, each part felt clear to me, and of course it did: I already hold the folded
        statements. “I understand everything” is not the test. Whether you do is. A sentence still in its folded
        state reads as cryptic, not deep, to anyone who lacks the key, and if the reader cannot unfold it, the
        writing has defeated its own purpose. So the folds have to open on your side too: some compression traded
        back for reach.
      </P>

      <H3>Unfolding has no free bottom</H3>
      <P>
        But unfolding is not free. When you unfold a sentence you add prose, and you pretend the added words are
        simple. They are not: each word has its own folding inside it. Fail to see that and you fall into an
        unending, tedious loop, glossing every word of every gloss, with no bottom.
      </P>
      <Pullout>
        Being aware of that is the lever. It lets you stop at the right depth instead of looping: unfold enough to
        open the fold, not infinitely.
      </Pullout>

      <H3>Unfold with what the reader already holds</H3>
      <P>
        That is the reasoning behind a strategy, not an excuse to stay cryptic. Do not pile on more prose that needs
        its own unfolding. Unfold with <Em>examples that already live, folded, in the reader's own experience</Em>.
        An example is a fold the reader can open because they already hold the key: I point at something you have
        lived, and your experience does the unfolding. It breaks the loop, because the work is handed to what you
        already carry.
      </P>

      <H3>The first example: wireless charging</H3>
      <P>
        Set a phone on a wireless charging pad: no cable, no contact. Inside
        the pad, a coil drives a magnetic field that keeps reversing; across the gap, a coil in the phone answers
        it with a current of its own, moving in its own way, and energy crosses without anything being poured
        from one to the other.
      </P>
              <InductionFigure />
      
      <P>
        That is how I picture what this writing tries to do. The pad is me showing my way; the phone is you. There
        is no wire: I do not pour content into you. Your own coil has to turn to receive it. Induction, not
        transmission. Showing you my way is meant to give you energy for <em>your</em> unfolding, in whatever part
        of your life it applies to.
      </P>
      <Note label="What the example is not">
        It is not a picture of thought against matter, or of the one and the not. It is simply how I conceptualise
        the transfer, and a clean picture of the whole method: re-derived, not transmitted.
      </Note>

      <H3>The catch: scripture already does this</H3>
      <P>
        I arrived at “teach with examples” myself, and then noticed that the Bible has been doing it all along. It
        teaches through passages that work as examples, and the{' '}
        <A href={`${href('unfold-your-scepticism')}#ten`}>Ten Commandments</A> are the live illustration: law folded
        small enough to be remembered, carried, and unfolded by each reader in their own life. So the specimen
        became a mirror. The form I use to explain is the form my example demonstrates.
      </P>
              <P>
          The joke works the same way (<Pop id="joke">a joke is a fold</Pop>): the comedian supplies the setup, and the
          laugh fires from your own recognition.
        </P>
      
    </>
  );
}

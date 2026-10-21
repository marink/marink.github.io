import { H2, H3, P, Em, A, Pullout, Claim } from '../../paper';
import { Cite } from '../references';

export default function Joke() {
  return (
    <>
      <H2 id="joke" n="5">The joke, and Ricky Gervais</H2>
      <P>
        Ricky Gervais is my favourite comedian. For a long time it was Chris Rock; Gervais came later. He is
        controversial and he cuts deep, and for a long time I did not know why I liked him.
      </P>

      <H3 n="5.1">The first sign</H3>
      <P>
        The first sign was his Q&amp;A at the Oxford Union<Cite k="gervais-oxford" />. Talking about Karl
        Pilkington, he said that one of the most amazing facts he knows is that there are as many even numbers
        as even and odd numbers put together. Karl would not have it. It is a real result from the mathematics
        of infinity: an infinite set can be paired off, one to one, with a part of itself<Cite k="dedekind" />.
        My reaction was simple. He knows about that too.
      </P>

      <H3 n="5.2">After that</H3>
      <P>
        After that I started to hear the structure under the jokes. One line of his, which he repeats often
        and says in that same talk, sums it up:
      </P>
      <Pullout>
        &ldquo;Just because you&apos;re offended doesn&apos;t mean you&apos;re right.&rdquo;
      </Pullout>
      <P>
        A feeling cannot be what settles an argument. That is the same guardrail
        as <A href="/philosophy/watching-the-split/real-enemy">the real enemy</A> in Watching the Split: any
        frame arranged so that nothing could ever show it wrong. Offence that ends the discussion is one of
        those frames.
      </P>

      <H3 n="5.3">The tie to folding</H3>
      <Claim label="What the joke does">
        A joke takes what everyone treats as settled and reveals the hidden dimension in it. In Folding,
        paradoxes dissolve when the missing dimension is added back. In comedy, the missing dimension is
        added back in front of an audience, and the laugh is the sound of it landing.
      </Claim>
      <P>
        What makes Gervais a credit here, and not only a favourite, is <em>where</em> he aims. He attacks the
        problem, not the people, and he holds an awareness of not taking the humour too far. <Em>The cut is
        aimed at the frame, not the person.</Em>
      </P>
      <P>
        He also answers the risk from Section 1. His jokes rarely end at the laugh. They leave a sting, and
        the sting is what keeps the fold unfolding after the room has gone quiet. The laugh is not the exit;
        it is the door.
      </P>
    </>
  );
}

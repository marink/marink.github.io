import { H2, P, Em, Pullout } from '../../paper';
import { Cite } from '../references';

export default function OpenEdge() {
  return (
    <>
      <H2 id="open-edge" n="8">The honest open edge</H2>
      <P>
        This is the third question from Section 1, and the model does not answer it. Homeostasis explains
        <em> continuation</em>, meaning why self-sustaining unfoldings persist. It does not explain why
        there is anything it is like to be one. A thermostat regulates temperature and, as far as anyone
        can tell, feels nothing. Why is the self-maintaining structure <em>experienced</em> rather than
        running dark? This is the hard problem<Cite k="chalmers" />.
      </P>
      <P>
        One attempt to dissolve it was that "inside" and "outside" are spatial words, and space has
        already been set aside, so the question is malformed. That was a legitimate strike, but the
        question survives being restated without spatial language: why is there felt experience at all,
        rather than none?
      </P>
      <P>
        Hofstadter argues that a self-referential loop is what an "I" <em>is</em><Cite k="hofstadter" />,
        and the self-reading address is exactly such a loop. That accounts for the self. It does not, by
        itself, account for the felt-ness.
      </P>
      <Pullout>
        The honest claim is that we walked to the edge of the hard problem, not that we solved it. It is
        not a summit with a flag. It is a mirror, the point where the thinking turns and sees itself
        thinking. I am the executed program asking whether programs need executing. <Em>The question
        folds back into the asker.</Em>
      </Pullout>
    </>
  );
}

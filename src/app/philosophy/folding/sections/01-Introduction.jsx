import { H2, P, Em, A, List, Pullout } from '../../paper';
import { Cite } from '../references';

export default function Introduction() {
  return (
    <>
      <H2 id="introduction" n="1">Introduction: the question Natural Process left open</H2>
      <P>
        The <A href="/philosophy/natural-process">Natural Process</A> page<Cite k="natural-process" /> argued
        that balancing is what nature does. Heat flows from hot to cold, ions settle into salt, and
        the pancreas releases insulin in proportion to blood glucose. It ended with three questions it
        could name but not fully answer:
      </P>
      <List ordered>
        <li>
          <Em>The monitor.</Em> If every step in the insulin cascade is plain chemistry, what makes the
          whole look purposeful? The page's answer was <em>self-reference</em>: the system models its own
          state and acts on the discrepancy. But a model of one's own state compared <em>against what</em>?
        </li>
        <li>
          <Em>Equilibrium.</Em> Prigogine's warning<Cite k="prigogine" /> was that perfect equilibrium is
          death. Living systems balance, yet they stay far from equilibrium. So what exactly are they
          balancing <em>toward</em>?
        </li>
        <li>
          <Em>The mind.</Em> At what point does balancing become awareness?
        </li>
      </List>
      <P>
        This paper answers the first two with one word, <Em>homeostasis</Em>, and then follows that word
        much further than I expected it to go. It turns out to run through diet, through habit, and
        finally through a picture of reality itself as a folded, self-reading structure. The third
        question is not answered. Section 8 marks exactly where the argument stops.
      </P>
      <Pullout>
        The path, in one line: <em>balancing</em> becomes <em>homeostasis</em> once there is a setpoint;
        a setpoint is stored structure; stored structure is a <em>fold</em>; and a fold that reads itself
        in whatever way keeps it unfolding has the same form as homeostasis, one level up.
      </Pullout>
      <P>
        Nothing here is claimed as proved. It is a structure I find coherent, laid down one base at a
        time and walked to the edge where the questions run out. Where the argument makes empirical
        contact (neuroscience, metabolism, algorithms, physics) I have tried to state that contact
        accurately and say where it is contested.
      </P>
    </>
  );
}

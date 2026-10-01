import { H2, H3, P, Em, Pullout, Note, Claim, Table } from '../../paper';
import { Cite } from '../references';

export default function Homeostasis() {
  return (
    <>
      <H2 id="homeostasis" n="2">Homeostasis: balancing toward a setpoint</H2>

      <H3 n="2.1">Balancing is not yet homeostasis</H3>
      <P>
        Sodium and chloride balance toward equilibrium. Nothing in the reaction stores where it
        <em> should</em> end up. The end state is simply wherever the forces cancel. The pancreas is
        different. It returns blood glucose to a <Em>reference value</Em> and defends that value against
        disturbance in both directions. Cannon named this <em>homeostasis</em><Cite k="cannon" />, and
        Jason Fung made the word central to his account of metabolism<Cite k="fung" />.
      </P>
      <P>
        That difference answers the questions Natural Process left open:
      </P>
      <Claim label="Answer to the monitor question">
        The self-reference Natural Process pointed to is concrete: it is a <Em>setpoint</Em>, a stored
        piece of structure that the system compares itself against. The "global monitor" is not a
        separate supervisor. It is the reference value, written into receptor densities, channel
        thresholds and hormone sensitivities, and read continuously by the chemistry it governs.
      </Claim>
      <Claim label="Answer to the equilibrium question">
        A living system does not balance toward equilibrium. It balances toward its <Em>setpoint</Em>,
        which is a steady state held far from equilibrium and paid for with energy. This is exactly
        Prigogine's point<Cite k="prigogine" />: balancing at one level sustains disequilibrium at the
        level above.
      </Claim>
      <P>
        The information-content distinction on the Natural Process page falls out naturally. NaCl
        formation processes zero bits because there is no reference to compare against. The insulin
        response processes a continuous variable because it carries one.
      </P>

      <H3 n="2.2">When the setpoint moves</H3>
      <P>
        Once balancing has a reference, a new failure becomes possible. The system can balance
        perfectly toward the <em>wrong</em> target. Two ordinary cases show the same architecture.
      </P>
      <P>
        <Em>Reward.</Em> Once a reward has been learned, dopamine neurons fire at the cue that predicts
        it, not at the reward itself. A fully expected reward produces almost no response, and a missed
        one produces a dip<Cite k="schultz" />. Dopamine tracks anticipation, not arrival. A reward loop
        designed never to close, with always another level, rank or unlock, keeps anticipation running
        indefinitely. An unclosed loop is felt as a debt, and a debt as a duty.
      </P>
      <P>
        The real question is why anyone keeps refilling. The answer is that a repeated flood raises the
        baseline, so that ordinary life registers as a deficit. You refill to escape lack, not to gain
        pleasure. In addiction research this shift of the reference point is called
        <em> allostasis</em><Cite k="koob" />, and its physical form includes reduced dopamine-receptor
        availability, which partly recovers with abstinence<Cite k="volkow" />.
      </P>
      <P>
        <Em>Food.</Em> Insulin sensitivity behaves the same way. Chronically high insulin blunts the
        response to it, so normal food begins to register as not enough<Cite k="fung" />. Here too the
        craving is homeostasis faithfully defending a corrupted setpoint.
      </P>
      <Table
        head={['', 'Slow reset', 'Accelerator']}
        rows={[
          ['Diet', 'Reducing refined carbohydrate', 'Fasting'],
          ['Reward', 'Gradual reduction', 'Clean, total abstention from the cue'],
        ]}
        caption="Table 1. Two ways to move a setpoint back. In both registers the accelerator works by removing the flood entirely, so sensitivity can recover."
      />
      <Note label="On the evidence">
        Receptor down-regulation is well established for drugs of abuse<Cite k="volkow" />. How far
        behavioural rewards such as games produce the same change is still debated. The argument here
        needs only the architecture, a defended reference that can drift, and not a claim that the two
        cases are equal in magnitude. The popular "dopamine fast" is best read the same way: it removes
        the cue, not dopamine itself.
      </Note>

      <H3 n="2.3">What actually moves a setpoint: articulation</H3>
      <P>
        Facts that are already known often do nothing. What makes them land is <Em>precise
        articulation</Em>: seeing the mechanism stated so clearly that it can be held in one piece. The
        lever is clarity, not emotional charge. It is the difference between unindented code and
        well-organised code. The logic is identical, but one is maintainable and the other is unusable.
      </P>
      <P>
        For most people, clarity and motivation are separate systems. For me, clarity is sufficient
        motivation. That is an uncommon signal, not a general rule. It is also, I will argue in
        Section 9, a small instance of the paper's main idea, because a clear model is a good fold.
      </P>
      <Pullout>
        Diet and habit therefore reveal a law about defended reference points. The rest of this paper
        asks how far that law can be followed.
      </Pullout>
    </>
  );
}

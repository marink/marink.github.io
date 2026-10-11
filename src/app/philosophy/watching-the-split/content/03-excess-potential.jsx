import { P, Em, A, H3, Pullout, Claim, List } from '../../paper';
import { Pop } from '../wiki';
import { href } from '../pages';

export default function ExcessPotential() {
  return (
    <>
      <P>
        <Pop id="zeland">Zeland</Pop> calls it <Pop id="excess-potential">excess potential</Pop>: the charge
        you pour into an outcome or a distinction. I use only the core, which needs no metaphysics.
        Over-focus creates self-sabotage; reduce the excess potential and the self-sabotage stops. The calm
        itself does the work. Reality need not be "listening".
      </P>
      <Pullout>
        This is the bridge to the hard problem. The hardness of a problem equals the excess potential
        invested in its split. Hardness is charge, not substance. In checkable form: lower the charge, and the
        felt hardness drops.
      </Pullout>

      <H3>Diverting, not meeting</H3>
      <P>
        Zeland illustrates this with <Pop id="aikido">Aikido</Pop>, and for me the analogy is not borrowed: I
        trained in Aikido for years and hold a black belt. The Aikido move is not to meet force with force, but
        to divert the opponent's energy. Meeting force with force is exactly what drives excess potential higher
        and higher. Fighting a problem pours force into the collision and makes it harder; diverting it,
        observing rather than bracing, lets it through. So reducing excess potential is the embodied form of the
        Aikido move, and both are the embodied form of observing rather than solving.
      </P>

      <H3>How “choose to feel good” became believable</H3>
      <P>
        Zeland's advice to choose to feel good, told flat, bounces, like a fridge magnet. It became believable
        to me only when I unfolded it back to its reason: <Pop id="to-be">at the point of action</Pop> the sphere
        of possibilities collapses to a binary on purpose, and the choice of pole is still mine. Re-derived, it
        lands from the inside. Transmitted belief bounces; re-derived belief lands. That is also why rote
        knowledge is, in <Pop id="feynman">Feynman's</Pop> word, fragile.
      </P>

      <H3>Three cases</H3>
      <List>
        <li>
          <Em>The sugar trap.</Em> I freed myself by reading: clarity reached the gut and became motivation.
          → <A href={href('sugar-trap')}>The sugar trap</A>
        </li>
        <li>
          <Em>The streak.</Em> An open loop that never closes is the hook, and I had to draw a line.
          → <A href={href('the-streak')}>The streak</A>
        </li>
        <li>
          <Em>The acorns.</Em> On a drive home, ordinary events felt aimed, and I caught it.
          → <A href={href('the-acorns')}>The acorns</A>
        </li>
      </List>

      <H3>Clarity is my lever, and it is uncommon</H3>
      <P>
        Clarity as motivation is my specific lever. For most people, knowing does not stop the second Baci:
        knowledge has a harder road to the gut, because delayed, probabilistic, small-each-time costs do not
        have the shape the gut responds to (<Pop id="hyperbolic">hyperbolic discounting</Pop>). My counter is
        to fold the delayed risk until it is felt as present, as <Pop id="hershfield">Hershfield's</Pop> work on
        the vivid future self supports. But a faithful fold preserves <Pop id="proportion">proportion</Pop>.
      </P>
      <P>
        The body defends other budgets in the same way; see{' '}
        <Pop id="pontzer">Pontzer on constrained energy expenditure</Pop>.
      </P>

      <H3>The guardrail</H3>
      <Claim label="The dark version" color="#fbbf24">
        I have lived the dark version: I challenged reality, thinking it could not get worse, and it always
        got worse. The discipline I landed on is not to rely on changing reality. Keep the safe driver
        underneath whatever frame rides on top, and keep these ideas <em>entertaining, not urgent</em>. That
        stance is itself the safeguard.
      </Claim>
    </>
  );
}

import { H2, P, Em, Note, Pullout } from '../../paper';
import { Cite } from '../references';

export default function Counselor() {
  return (
    <>
      <H2 id="counselor" n="6">An example: a loop seen from inside</H2>
      <Note label="Spoiler">This section gives away the fate of a character in <em>The Counselor</em> (2013).</Note>
      <P>
        In Ridley Scott&apos;s <em>The Counselor</em><Cite k="counselor" />, Westray, played by Brad Pitt, explains
        early on a device called the bolito: a wire loop that, once fastened, closes on its own and cannot be
        stopped. Late in the film, Westray is killed with exactly that device. The loop he described closes on
        him.
      </P>
      <P>
        In that moment there is something close to a smile on his face. The film leaves it open. My reading
        is that it is not resignation. He is laughing at the irony.
      </P>
      <Pullout>
        &ldquo;I did this to myself.&rdquo; There is some comedy in that. It is the same gap I smile at in a
        serious room: a loop seen from inside, and seen, for one moment, as funny.
      </Pullout>
      <P>
        That puts the scene on the comedy side. It is an example, not the lead: what it shows is that
        the <Em>recognition</Em> a joke produces does not need a comedian. It can arrive on its own, even at
        the worst possible time, whenever someone sees the fold they are standing in.
      </P>
    </>
  );
}

import { H2, H3, P, Em, A, Claim, Pullout, Note } from '../../paper';
import { Cite } from '../references';

export default function Address() {
  return (
    <>
      <H2 id="address" n="6">The address, and who reads it</H2>

      <H3 n="6.1">The fold as an address</H3>
      <Claim label="Claim 3">
        The fold, meaning the seed or the compressed thing, is an <Em>address</Em> into the space of
        possibilities. It is not physical and not a number. Thinking it must be a coordinate in space and
        time is the same mistake as thinking the Sophon needs room to exist. The address is infinitely
        small and at the same time an infinite description, in the way that the single letter e names an
        expansion that never ends.
      </Claim>
      <P>
        "Infinitely small" does not collide with the floors of Section 4. Those floors belong to the
        projection, and the address is not in the projection. It is what the projection is a rendering
        of.
      </P>
      <P>
        A life, everything that is experienced, is that address <Em>unravelling</Em>. Living is the fold
        opening: the seed becoming the plant, the proton unfolding into the planet-sized computer.
      </P>

      <H3 n="6.2">The fork: determinism or steering?</H3>
      <P>
        If a life is an address unravelling, the obvious objection is determinism. The plant is already
        in the seed, so nothing is chosen and you only watch it read out. The alternative, that intention
        jumps you to a different address, owes an answer to the question of what does the jumping.
      </P>
      <P>
        I dissolve the fork rather than choose a side. The address is neither read out mechanically nor
        steered from outside. It is read <em>in a way favourable to its own unfolding</em>: the reading
        sustains itself, keeps opening and keeps going.
      </P>
      <P>
        This also gives a precise meaning to an old phrase. <Em>Eternal life</Em> is not a duration on
        a timeline. That would be the bounded-circle picture of a loop again. It is the unfolding that
        never finishes. We picture a "loop" as a circle with limits because we think in space and time.
        A real loop is infinite: an unfolding that keeps generating more of itself without closing, as
        <em> e</em><sup>x</sup> does.
      </P>

      <H3 n="6.3">Favourable to what, and chosen by what?</H3>
      <Claim label="Claim 4: the reader is the address">
        There is no external reader and no substrate coming back in through the door. The reader of the
        address <em>is</em> the address, a self-referential structure that reads itself in whatever way
        keeps itself reading. <Em>"Favourable" simply means continuity.</Em>
      </Claim>
      <Note label="A biological precedent">
        This is less exotic than it sounds. Von Neumann showed that a self-reproducing machine needs a
        description together with a constructor that reads it<Cite k="vonneumann" />. Life solved this by
        writing the constructor into the description itself: the genome encodes the ribosomes and
        polymerases that read the genome. The reader is part of the address.
      </Note>
      <Claim label="Cost, acknowledged" color="#fbbf24">
        This buys continuity <em>without intention</em>. It is a selection principle with no chooser,
        close to anthropic reasoning<Cite k="carter" />: only self-sustaining patterns persist, so the
        persisting patterns are self-sustaining. That borders on tautology, and it gives up any steering
        wheel. Section 7 looks for where steering can come back in.
      </Claim>

      <H3 n="6.4">Is this homeostasis?</H3>
      <P>
        A structure that continues because continuing is what it does needs no wanter and no chooser. It
        is tempting to call this homeostasis at the level of reality, but the claim has to be stated
        carefully. Homeostasis in Section 2 has two parts: a setpoint, and correction of errors against
        it.
      </P>
      <P>
        At the scale of reality, the only candidate setpoint is <Em>continuation itself</Em>. Unfoldings
        that keep unfolding persist, and the rest stop. That has the same form as homeostasis, a reference
        defended by the structure that carries it. What is missing is a demonstrated mechanism of error
        correction. So I hold it as a strong analogy, not as an identity.
      </P>
      <Pullout>
        Homeostasis runs through diet and reward as a mechanism, and through reality itself as an analogy
        I find hard to resist. It is also what <A href="/philosophy/natural-process">Natural Process</A> was
        reaching for when it named self-reference as the hidden variable.
      </Pullout>
    </>
  );
}

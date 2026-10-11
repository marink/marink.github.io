import { P, H3, Note } from '../../paper';
import { Pop, Creed, Turn } from '../wiki';

function Part({ id, children }) {
  return <H3><span id={id} style={{ scrollMarginTop: 80 }}>{children}</span></H3>;
}

export default function HardProblemDialogue() {
  return (
    <>
      <P>
        This is the stress test behind <em>Solve or observe</em>, kept with its moves and its walls. The
        honesty is the point: where an objection landed, it stays landed.
      </P>
              <Note label="About this exchange">
          The objections were put by an interlocutor who pressed every move. The wording below is a
          reconstruction of the argument, faithful to its steps rather than verbatim.
        </Note>

        <Part id="setting">Setting the problem</Part>
        <Turn who="them">
          Chalmers separates the easy problems (attention, memory, report, discrimination), which all seem
          mechanically explicable, from the hard one: why any of it is felt. The philosophical zombie does
          everything and is dark within, and nothing in the structure obviously forbids it.
        </Turn>
        <Turn who="me">
          The zombie is a flattening. "Inside" and "outside" are spatial words, and they do not apply. If felt
          experience just <em>is</em> the structure read from within itself (the reader of the address is the
          address) then the zombie is incoherent, like asking for 42 without its value.
        </Turn>

        <Part id="wall">The wall</Part>
        <Turn who="them">
          "Experience is structure from the inside" renames the problem; it does not close it. You can still ask
          why there is an inside to be read. A thermostat has structure read by its own mechanism, and we do not
          think it feels. "From the inside" smuggles in the very thing to be explained.
        </Turn>
        <Turn who="me">Accepted.</Turn>

        <Part id="fork">The fork</Part>
        <Turn who="them">
          A thermostat also self-regulates: feedback, a setpoint, homeostasis, your own building blocks. So either
          self-reference is <em>always</em> felt, even dimly, and the thermostat has a dim inside (Horn A,
          panpsychism). Or felt experience switches on somewhere, and you owe an account of the threshold, which
          is the hard problem back in full (Horn B).
        </Turn>
        <Turn who="me">
          Horn A, cleanly. There is no line. Hot and cold are one thing seen as two, and the duality exists in
          order to keep it going. There is no Dennett in my model. It is one, and the splits happen the same way as
          hot and cold.<Creed id="horn-a" />
        </Turn>

        <Part id="combination">The bill: combination</Part>
        <Turn who="them">
          Then Horn A's bill comes due. If experience is everywhere, how do countless tiny insides combine into a
          single "I"? Why do you not feel like a crowd?
        </Turn>
        <Turn who="me">
          Combination is not addition; it is folding. Path compression collapses a chain to a single pointer; a
          seed holds the whole plant. The unified "I" is the folded form of the many.
        </Turn>
        <Turn who="them">
          But in union-find the compressed nodes still exist; they just point at the root. So does the fold
          <em> preserve</em> the little experiences, in which case you are still a crowd that merely feels like one,
          or <em>erase</em> them, which violates "structure preserved"?
        </Turn>
        <Turn who="me">
          "Folding" is itself a reduced-dimension word: a handle for attacking the problem that drops dimensions
          the full thing has. Preserve-or-erase is another hot-and-cold split, one the full view would not pose.
        </Turn>

        <Part id="crux">The crux</Part>
        <Turn who="them">
          Here is the risk, stated plainly. Once "folding" means something no word can capture, it cannot be
          wrong: every objection becomes an artefact of the reduced word. That is the mystic's wall, which closes
          inquiry. The mathematician's move is the opposite: build a better notation. Gödel named the unprovable
          sentence exactly; Cantor gave the diagonal. So: name one dropped dimension, specifically. One named
          dimension, done rigorously, and you keep going. Only "it's beyond the handle", and the theory is a
          beautiful fog.
        </Turn>
        <Turn who="me">
          Naming it would create the duality that takes you down. This spot requests its reset point.
        </Turn>
        <Turn who="them">
          Then that is the seal. "I could name it, but naming breaks it" is indistinguishable from "I can't". It is
          the same move as the acorn this morning: at the crux, the theory converts the obstacle into proof of its
          own specialness, like an immune response.<Creed id="naming-collapses" />
        </Turn>

        <Part id="landing">Where it landed</Part>
        <Turn who="me">
          Not solved, and not surrendered. "Solve" is a dimension-reducing word, so I observe it instead. The one
          needs the split to continue; it is not something to be solved. The hard problem is hard because we want
          it hard, to keep the unfolding going. Calling it a problem is the error: it is the engine.<Creed id="unsolvable-good" /> My
          theory is a protective guardian, in Zeland's sense. Do not increase the excess potential on the split;
          unionise the extremes and watch them in a controllable way, so the spiral goes up.
        </Turn>
      

      <Part id="third">A third participant</Part>
      <P>
        Reading this exchange back, I find I am not only one of its two voices. I am another participant: a
        third reader, adding a dimension to it, and contributing the knowledge that there are other dimensions
        still.
      </P>
      <P>
        Think of the one and the not-one as the most extreme dimension reduction there is: a whole sphere of
        possibility flattened onto a single axis with two poles. The interlocutor and I, in this dialogue, are
        those two poles. A reader who joins adds a dimension. So does the next. Each dimension can be thought of as
        a node in a tree, and the tree keeps expanding. → <a href="/philosophy/watching-the-split/the-tree#graph"
        style={{ color: '#60a5fa', textDecoration: 'none' }}>Why a tree? The graph</a>
      </P>

      <H3>What to take from it</H3>
      <P>
        Horn A and folding-as-combination are my chosen stance, not an established result, and the{' '}
        <Pop id="combination">combination problem</Pop> stays on the bill. "Naming would break it" stands next to
        its critique, unresolved. Judge the tension yourself; it is the most honest and the most interesting part
        of the whole argument.
      </P>
    </>
  );
}

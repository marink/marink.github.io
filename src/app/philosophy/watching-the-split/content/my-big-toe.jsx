import { P, Em, A, H3, Pullout, Claim, Note } from '../../paper';
import { href } from '../pages';

const GLOSSARY = 'https://www.my-big-toe.com/theory/glossary/';
const PUP = 'https://www.my-big-toe.com/theory/glossary/psi-uncertainty-principle/';
const PAPER = 'https://ijqf.org/archives/4105';
const ARXIV = 'https://arxiv.org/abs/1703.00058';
const SPR = 'https://psi-encyclopedia.spr.ac.uk/articles/thomas-warren-campbell/';

export default function MyBigToe() {
  return (
    <>
      <P>
        Thomas Campbell's <em>My Big TOE</em> is one of the inspirations for connecting science with what science
        usually leaves at the door: consciousness, and the paranormal. What follows is an analysis of its core claims
        against the one rule this writing holds itself to: that every strand stays checkable.
      </P>


        <H3>What it is</H3>
        <P>
          <em>My Big TOE</em> (2003; “TOE” for Theory of Everything) is a trilogy, <em>Awakening</em>,{' '}
          <em>Discovery</em> and <em>Inner Workings</em>, that sets out to unify physics, philosophy and metaphysics.
        </P>

        <H3>The core claims</H3>
        <P>
          In the book's own vocabulary (<A href={GLOSSARY}>glossary</A>):
        </P>
        <Note label="In Campbell's terms">
          <Em>Consciousness is fundamental</Em>; matter is not. Reality is an information system, the <em>Larger
          Consciousness System</em>, and each of us is an <em>individuated unit of consciousness</em> within it. Our
          physical world, <em>physical matter reality</em>, is a virtual reality: a computed environment with its own
          rule-set, inside a larger <em>non-physical matter reality</em>. Its purpose is learning. Entropy measures the
          quality of a consciousness: high entropy is low quality, low entropy is high. Love is “a positive intent focused
          on other”; fear is “a negative expectation or belief focused on self”. And the stated purpose: “Our purpose is
          to lower our individual entropy and become love.”
        </Note>

        <H3>Why it is an inspiration</H3>
        <P>
          It does something few physicists attempt: it takes consciousness as the starting point, not as an awkward
          by-product, and it speaks about it in the language of computing, information, rule-sets and rendering. That
          language is close to the one this writing uses. Several of its ideas rhyme with the ones here, without being the
          same:
        </P>
        <P>
          A world rendered from information rhymes with matter as a rendering of structure
          (<A href="/philosophy/folding#substrate">Folding, §5</A>). Lowering entropy, moving from fear to love, rhymes
          with the favourable unfolding and with reducing <A href={href('excess-potential')}>excess potential</A>, which
          is fear's charge on a split. An individuated unit of consciousness reading its own way through the system rhymes
          with the reader of the address being the address. Rhymes, not identities: the frames were built separately and
          differ in their parts.
        </P>

        <H3>Where it invites the test</H3>
        <P>
          This is what makes it more than a frame that explains everything. Campbell did not only describe his world; he
          proposed experiments that could show it wrong. In 2017, with Houman Owhadi, Joe Sauvageau and David Watkinson,
          he published “On testing the simulation theory” (<A href={PAPER}>International Journal of Quantum Foundations
          3 (3)</A>, <A href={ARXIV}>arXiv</A>): variations of the double-slit and delayed-choice experiments, designed to
          tell whether it is a conscious observer, rather than a measuring device, that decides the outcome. If which-way
          information is recorded but never reaches a conscious observer, his view predicts that the interference pattern
          should survive.
        </P>
        <P>
          That is a real prediction, of the kind a scientist can respect: it names in advance what would count against
          it. A report from tests at Polytechnique Montréal says one version of the hypothesis was falsified, but it has
          not been formally published, so it should be held as provisional (<A href={SPR}>SPR Psi Encyclopedia</A>).
          Either way, a hypothesis that can fail a test has been offered to the test.
        </P>

        <H3>Where it seals itself</H3>
        <P>
          The difficulty sits in one specific place: the <A href={PUP}>psi uncertainty principle</A>. In the book's
          framing, paranormal effects are allowed only so far as they leave enough uncertainty for outsiders to doubt them,
          because objective proof would disturb the learning that the physical world exists for. In the book's own words,
          “as soon as there are outside observers to report and measure the miracles, the miracles diminish.”
        </P>
        <Claim label="The seal" color="#fbbf24">
          Read as a rule, this makes the absence of evidence part of the theory. Strong evidence would confirm it; weak or
          missing evidence would also confirm it, because the principle predicts that evidence will be weak whenever it is
          looked for. No result of a psi experiment could then count against it. That is the shape this writing calls a
          frame arranged so that nothing could show it wrong: not the whole book, and not its author, but this one rule.
        </Claim>
        <P>
          The same risk follows any theory of <em>everything</em>. The more it explains, the harder it becomes to say what
          it forbids; and a theory that forbids nothing cannot be caught being wrong. Within its frame, almost any
          experience can be read as an occasion for consciousness to grow, which is consoling, and also uncheckable.
        </P>

        <H3>What this writing takes from it</H3>
        <Pullout>
          The line between testable and untestable runs through <em>My Big TOE</em> itself, as it runs through religion and
          science: its experiments are on one side, its psi uncertainty principle on the other.
        </Pullout>
        <P>
          This writing carries the same risk, which is why it labels its own untestable claims as{' '}
          <A href={href('creeds')}>creeds</A> and keeps them on a separate shelf. The lesson I take from Campbell is double:
          the courage to begin from consciousness and to put a hypothesis in front of an experiment, and the care needed so
          that no single rule ends up arranged to explain away every result.
        </P>

      <H3>An invitation, not a withdrawal</H3>
      <P>
        The psi uncertainty principle has the miracle withdraw from whoever watches. I do the opposite: I invite you to
        watch, to be the observer who witnesses the fold opening, and then to unfold it your own way, until it clicks or
        until it doesn't.
      </P>
      <P>
        Both place the final confirmation inside the person, and I see that resemblance. The difference is what a “no”
        means. If it doesn't click for you, you have not failed, and you are not “not there yet” in the sense of not yet
        agreeing with me. Agreement was never the aim. The aim is never to stop unfolding favourably, and that holds for
        me as much as for you. Keep going, and if your unfolding lands on a hole I missed, that is the method working.
      </P>
    </>
  );
}

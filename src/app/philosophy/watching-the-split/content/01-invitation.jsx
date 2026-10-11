import { P, Em, A, H3, Pullout, Note } from '../../paper';
import { Pop, Creed, DiscussIcon } from '../wiki';
import { href } from '../pages';

export default function Invitation() {
  return (
    <>
      <P>
        This writing follows on from <Pop id="natural-process">Natural Process</Pop> and
        <Pop id="folding-paper"> Folding</Pop>. Folding was about <em>what reality is</em>. This is about
        <em> how to live with it</em>: the practical philosophy of holding extremes without being torn by
        them. The worked example throughout is the <Pop id="hard-problem">hard problem of consciousness</Pop>.
      </P>
      <P>
        It is written for people, not for scientists. It is not a bid for academic approval; it is an
        invitation to look at an old question from another angle. If it does not convince you, nothing is
        lost on either side. Knowledge is power, and whoever can read it gains that power. I offer it in
        that spirit and invest nothing in who reads it. Nor do I want to hand over finished conclusions:
        <Pop id="joy-of-unfolding"> the joy is in the unfolding</Pop>, and that has to happen in the reader.
      </P>

      <H3>Go with me</H3>
      <P>
        Think of a comedian. He finds something funny himself first, and only then says: let me tell you this. He
        takes nothing from you; he shares what lit him up, and his gain is your laugh, which happens in you. You
        cannot be <em>told</em> a joke: explain it and it dies. The laugh fires from your own recognition. He gives
        the setup; you supply the laugh. And the invitation is genuinely optional and may not land. A comedian who
        needs the laugh kills the room.
      </P>
      <P>
        So I will not ask you to stop being sceptical. I know you are; in your seat, I would be too. Give me this
        one: go with me. One honest difference from a joke, though: a joke is fast and pays at once. This pays out
        slowly, on your clock, perhaps unseen. There is no punchline coming.
      </P>
      <P>
        What is in it for me? Nothing transactional: no money, no being right, no power, nothing taken from you.
        What is in it for me is the same thing that is in it for you: the unfolding. I show you my unfolding of
        life, and you unfold yours, your own way, through your own experience.
      </P>
      <P>
        And one confession, in the present tense. The pull you may feel to reach a conclusion and put this down is
        the same pull I feel to reach a conclusion and not write it. I feel it even now, writing this line.
        An unread page is a closed fold, conscious of nothing. The hard problem only exists in the reading.
      </P>

      <H3>The one rule</H3>
      <P>
        <Pop id="model-not-whole">We explain a model, not the whole.</Pop> Every strand that follows,
        scientific or spiritual, has to stay checkable against experience. Where a claim cannot be checked,
        I say so and label it as a creed<Creed id="what-a-creed-is" /> rather than a conclusion.
      </P>
      <P>
        The enemy here is neither religion nor science. It is any frame, lab coat or robe, arranged so
        that nothing could ever show it wrong. Testable versus untestable is the line, and it runs through
        both. → <A href={href('real-enemy')}>The real enemy</A>
      </P>

      <H3>The thesis, in one sentence</H3>
      <Pullout>
        The hardness of the hard problem of consciousness is not a fact about consciousness but a measure
        of the excess potential we invest in the split between extremes. The problem is better observed
        than solved, because "solve" is a dimension-reducing move, and folding, which unionises the
        extremes back into the one, is what keeps the spiral going up.
      </Pullout>
      <P>
        It is taken apart in four stages, each opened by a line of a refrain: <em>light</em> (the first split
        and the two inversions), <em>questions</em> (your doubt, the <Pop id="excess-potential">excess
        potential</Pop> we pour into a split, the choice of verb, the ups and downs), <em>biology and science</em>
        (folding as the union of extremes, and the honest limit), and <em>AI</em> (the rung this is written from,
        the spiral, eternal life, and the handoff).
      </P>

      <H3>Start from any node</H3>
      <P>
        This writing forms a graph, not a single road, and any node can serve as the root. Start as a believer, at God and the devil (aware that I am not including every religion here: that
        choice is itself a dimension reduction). Unfold it, and you are with the philosopher, at the hard problem: the observer and the
        observed. Unfold that, and you arrive at <Pop id="to-be">“to be or not to be”</Pop>, a writer's node.
        Unfold that, and you reach <Pop id="egg-columbus">the egg of Columbus</Pop>, a historian's, and its hidden
        axiom. Unfold the axiom, and you are with the mathematician, at <Pop id="godel-fork">the other side of
        Gödel's fork: inconsistent, but complete</Pop>.{' '}
        It is a fun journey, and it is the one I am inviting everyone into. → <A href={`${href('the-tree')}#graph`}>Why a
        tree? The graph</A>
      </P>

      <P>
        Why on my own site, and not in a journal: <A href={href('how-this-is-published')}>How this is published</A>.
      </P>

      <H3>On sources</H3>
      <P>
        I name <Pop id="zeland">Vadim Zeland</Pop>, for compression, as a door, and as credit. He is not
        load-bearing. The named thinkers and results are collected under{' '}
        <A href={href('concepts')}>Concepts</A>.
      </P>
      <P>
        I cut him once, from the Folding paper, under a quiet wish for scientists to approve it. That wish was
        itself excess potential, and it bent the judgement. The cure is not the opposite reflex: keeping him to
        prove I need no approval is the same force, reversed. The only test is whether the line is true to the
        model. It is, so he stays — a small worked example of the thesis catching its own author.
      </P>

      <Note label="How to read this">
        The main line runs from page to page; each ends with the next step in the line of thought. Dotted
        terms open a short aside in place: read it, close it, carry on. Longer asides have their own pages,
        and each one leads back to where you were. Read as deep as you like.
        <br /><br />
        The form suits this material because the material is about folding. A link is a fold: a reader who
        holds the key clicks through and expands it; a reader who does not reads on in place. Linear reading is
        not abandoned, only made local: you read in a line until the line stops paying off, then take one hop.
        The main line is written to be read straight through.
        <br /><br />
        Objections, questions, another node of the graph? Discuss them in the open: the{' '}
        <DiscussIcon inline /> icon at the foot of every page leads there, and readers are welcome to answer one
        another.
      </Note>
    </>
  );
}

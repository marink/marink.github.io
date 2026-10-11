import { P, Em, H3, Claim, List } from '../../paper';
import { Pop } from '../wiki';

function Part({ id, children }) {
  return <H3><span id={id} style={{ scrollMarginTop: 80 }}>{children}</span></H3>;
}

export default function TheTree() {
  return (
    <>
      <Part id="model">Choosing is a walk, not a lookup</Part>
      <P>
        One address tells you nothing. You need a binary, a zero or a one, even to have a choice. A flat hash
        table gives O(1) access, but no basis for <em>choosing</em> among infinitely many equally good addresses,
        so meaning-wise you are back to scanning all N. The proper candidate is a balanced tree: log N, not
        instant, but the path itself carries the choosing. At each node you pick the good side and prune half.
      </P>
      <P>
        Awareness is holding in mind that log N rests on the tree staying balanced, and that it can collapse to
        O(N): greedy pruning finds local minima. People craving O(1), the answer handed over without the walk,
        is the flattening. <Em>“Give me the validity of your theory”</Em> is a demand for O(1) on something only
        reachable by walking the tree yourself.
      </P>
      <P>
        I hold binary search as the fastest method “with a grain of salt, with what we know”. The door stays
        open for a faster one (perhaps inverse-Ackermann tricks for special cases). I am humble about the
        <em> how</em>.
      </P>

      <Part id="graph">Why a tree? The graph</Part>
      <P>
        The tree starts with a root and unfolds into two nodes (a binary tree) or more (a B-tree). But why a tree
        at all? Each node is somehow related to other nodes that are not its siblings, and we ignore those
        connections, a kind of observer effect: what we do not attend to drops out of the picture. Add those
        dimmed connections back, through awareness that they are there. Once we name them we realise their
        importance, and the structure is no longer a simple tree. More realistically, it is a graph.
      </P>
      <P>
        And once it is a graph, with everything connected to everything, the idea of the root starts to dim as
        well. We can start from any node and think of that as the root.
      </P>
              <P>
          The connections are dimmed, not absent, so they carry weights. A graph in which every edge counted
          equally would say as little as a single node. With weights, the tree is the graph's best lossy fold: keep
          the strongest connections and dim the rest. In Bayesian networks this is exactly the Chow–Liu tree, the
          spanning tree that keeps the most mutual information. Choosing a root, at the point of action, is choosing
          which fold of the graph to walk.
        </P>
      

      <Part id="fly">Why can't you fly?</Part>
      <P>
        This is the hard test that, failed on the spot, would sink the theory in front of a child. The answer has
        to be folded. You practically <em>can</em> fly: buy a plane ticket. To fly like a <em>bird</em>, you would
        have to rewrite nearly your entire stack of beliefs into being a bird, because they all oppose it (jump off
        a building and every other belief you hold objects). The dream grants the wish, one address in which you
        experience flight, and then drags you down. And if everybody could fly, the wish would be wasted.
      </P>

      <Part id="genie">The genie</Part>
      <P>
        I told my daughters the genie story. The genie grants three wishes; they wished for immediate, shallow
        toys, burned all three, wanted a fourth, and were cut off. Wasted. The lesson I steered towards: you could
        be the genie. Claim the root, the position from which every branch is reachable, rather than grabbing a
        leaf.
      </P>
      <P>
        The question I leave open: is this theory the path to being the genie, by seeing all wishes as faces of
        duality, poles you stand above rather than grab at? The genie stands in the <Pop id="to-be">“or”</Pop>, above
        the poles.
      </P>

      <Part id="root">From the root, not the tip</Part>
      <P>
        In football, I found that hitting the ball harder spun it off wild, while the clean straight strike flew
        true even though it felt less hard. Then, in <Pop id="aikido">Aikido</Pop>: energy from the centre, the
        whole body, not just the foot, and it felt like a cannonball. So to my daughter's volleyball spike: do not
        hit with the hand or the wrist; drive from the waist, the whole body, like an electric pole. No hard swing
        needed. It is the same shape as the genie and the tree: act from the root, not the tip.
      </P>

      <Part id="knife">The knife, and how it was answered</Part>
      <Claim label="The knife" color="#fbbf24">
        The tree is so good at absorbing everything (addresses, wishes, spikes, words, Gödel, Hamlet) that it
        risks becoming O(1) itself: pattern-matched, “ah, the tree again”, across domains without being re-earned
        in each domain's own terms. A key that opens every lock describes no room. A theory you cannot imagine
        failing has stopped being tested. Can you name a domain where the tree <em>fails</em>, rather than failing
        in a tree-shaped way?
      </Claim>
      <P>My answers, in order:</P>
      <List ordered>
        <li>The tree is vulnerable to local minima, and it was never O(1). It is log N; it has resistance built in.</li>
        <li>Binary search is only the best “with what we know”. The door is open for a faster method.</li>
        <li>I do not need to hunt for a challenge. Challenges come naturally from life, and I use the tree to meet
          them. Falsification happens in the living, not as a laboratory hunt.</li>
      </List>
      <P>
        Why would I want the theory to be falsifiable at all? Because a theory you cannot catch being wrong cannot
        protect you either. Wanting the possibility of failure to stay real is what keeps the favourable-unfolding
        stance honest rather than hypnotic; uncaught, it tips into reading every coincidence as confirmation
        (<a href="/philosophy/watching-the-split/the-acorns" style={{ color: '#60a5fa', textDecoration: 'none' }}>the acorns</a>).
        I like it, but I am still suspicious of it. The liking is itself the reason to stay suspicious.
      </P>
            <P>
        But not the opposite error. The purpose of the theory is to keep life going and to choose the favourable
        branch. A life spent <em>hunting</em> for where the theory dies is looking for death, and by the theory's
        own structure, that is the address you would reach. So: live towards the favourable unfolding fully, with
        the scepticism riding quiet in the back seat, awake but not driving, so that an exception is noticed if it
        shows up, without going looking for one.
      </P>
      
    </>
  );
}

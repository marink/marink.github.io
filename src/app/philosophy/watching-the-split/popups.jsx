"use client";

// Popup registry: each short aside is written once and reused wherever the term
// appears. Bodies are kept to a few sentences; "more" points somewhere deeper.


const PAPER = '/philosophy/folding';
const W = '/philosophy/watching-the-split';

export const POPUPS = {

  // ── People and ideas ─────────────────────────────────────────────────────

  'hard-problem': {
    title: 'The hard problem of consciousness',
    body: <>
      <p>David Chalmers (1995) separated the <em>easy</em> problems of mind (attention, memory,
      report, discrimination), which seem explicable by mechanism, from the <em>hard</em> one: why
      any of it is <em>felt</em>. Why there is something it is like to be you, rather than the same
      processing running in the dark.</p>
    </>,
    more: { href: `${W}/hard-problem-dialogue`, label: 'The hard problem, worked through' },
  },

  zombie: {
    title: 'The philosophical zombie',
    body: <>
      <p>A being that does everything you do, says everything you say, and is dark within. Chalmers'
      point is that it seems conceivable, and nothing in the structure obviously forbids it. My
      instinct is that the zombie is a <em>flattening</em>: "inside" and "outside" are spatial words
      that do not apply here.</p>
    </>,
    more: { href: `${W}/hard-problem-dialogue`, label: 'Where that instinct meets its wall' },
  },

  dennett: {
    title: 'Daniel Dennett',
    body: <>
      <p>The deflationary view: there is no hard problem, only easy problems that look hard because
      of how we describe them. I reject this. There is no Dennett in my model; the felt side is not
      explained away.</p>
    </>,
  },

  panpsychism: {
    title: 'Panpsychism',
    body: <>
      <p>The view that experience is a basic feature of reality, present everywhere at least dimly,
      rather than switching on at some level of complexity. Its lineage runs through Spinoza's single
      substance and David Bohm's implicate order to contemporary philosophy of mind; Chalmers himself
      leans towards it. A respectable position, with one well-known bill:
      the combination problem.</p>
    </>,
    more: { href: `${W}/creeds#horn-a`, label: 'Horn A, as a creed' },
  },

  combination: {
    title: 'The combination problem',
    body: <>
      <p>If experience is everywhere, how do countless tiny insides combine into one unified "I"? Why
      do you not feel like a crowd? William James pressed this against "mind-dust" theories in 1890,
      and it remains the standing debt of every panpsychism, including mine.</p>
    </>,
    more: { href: `${W}/hard-problem-dialogue#combination`, label: 'Folding as a candidate answer' },
  },

  horns: {
    title: 'Horn A and Horn B',
    body: <>
      <p>A thermostat self-regulates: feedback, a setpoint, homeostasis. So either self-reference is
      always felt, even dimly (<strong>Horn A</strong>, panpsychism), or felt experience switches on
      somewhere (<strong>Horn B</strong>, a threshold), in which case the threshold needs an account,
      and that account is the hard problem back in full. I take Horn A.</p>
    </>,
    more: { href: `${W}/hard-problem-dialogue#fork`, label: 'The fork in full' },
  },

  zeland: {
    title: 'Vadim Zeland',
    body: <>
      <p>Author of <em>Reality Transurfing</em>, the source of "excess potential" and "pendulums". He is
      not load-bearing to anything here. I name him for three reasons: compression (readers who know
      Transurfing unfold the whole context from one name), a door for readers who do not, and credit.
      Only the de-magicked core is used.</p>
    </>,
  },

  'excess-potential': {
    title: 'Excess potential',
    body: <>
      <p>Zeland's term for the charge we pour into an outcome or a distinction. The usable core needs no
      metaphysics: over-focus creates self-sabotage, and when the excess potential is reduced the
      self-sabotage stops. The calm itself does the work; reality need not be "listening".</p>
    </>,
    more: { href: `${W}/excess-potential`, label: 'Excess potential' },
  },

  aikido: {
    title: 'Aikido',
    body: <>
      <p>A martial art built on diverting an attacker's force rather than meeting it. Zeland uses it as
      an analogy, and it is the embodied form of two ideas here: reduce the excess potential, and
      observe rather than solve. I hold a black belt in Aikido, so this is practised, not borrowed.</p>
    </>,
  },

  hershfield: {
    title: 'Hal Hershfield: the vivid future self',
    body: <>
      <p>Hershfield's research shows that people treat their future selves somewhat like strangers,
      and that making the future self vivid (in one study, age-progressed images of one's own face)
      changes behaviour now, for example how much people save. It supports folding a delayed risk
      until it is felt as present.</p>
    </>,
  },

  hyperbolic: {
    title: 'Hyperbolic discounting',
    body: <>
      <p>People discount delayed outcomes steeply and inconsistently: a small reward now outweighs a
      larger one later, even when we would choose otherwise if both were in the future. Costs that are
      delayed, probabilistic and small each time do not have the shape the gut responds to. That is
      why, for most people, knowing does not stop the second Baci.</p>
    </>,
  },

  proportion: {
    title: 'Proportion: the Baci',
    body: <>
      <p>Folding a delayed risk until it is felt now only works if it is folded faithfully, which means
      preserving proportion. One chocolate is not a ledge; the <em>pattern</em> is the danger.
      Fear-based food messaging can tip into anxiety for some readers. The honest fold is "this Baci is
      how the old setpoint asks to come back", not "this Baci will hurt you".</p>
    </>,
  },

  pontzer: {
    title: 'Herman Pontzer: constrained energy expenditure',
    body: <>
      <p>Pontzer's measurements of daily energy use, from Hadza hunter-gatherers to office workers,
      suggest that total expenditure is held within a narrow range: when activity rises, the body
      compensates elsewhere. Exercise therefore moves the scale less than expected, while still
      mattering a great deal for health.</p>
      <p>The body's
      energy budget defends its own setpoint, much as a craving does.</p>
    </>,
  },

  kirkwood: {
    title: 'Thomas Kirkwood: the disposable soma',
    body: <>
      <p>Kirkwood's disposable soma theory (1977) explains ageing as a trade: an organism spends its
      limited energy on reproduction and early survival rather than on indefinite repair of the body.
      Death is a trade, not a bug. On the spiral, the lesson is to track the structure, not the copy.</p>
    </>,
  },

  godel: {
    title: 'Gödel',
    body: <>
      <p>Gödel's incompleteness theorems (1931): any consistent formal system rich enough for arithmetic
      contains true statements it cannot prove, and cannot prove its own consistency. What matters here
      is <em>how</em> he did it: he named the unprovable sentence exactly. That is the mathematician's
      move.</p>
    </>,
    more: { href: `${W}/the-rhyme`, label: 'The rhyme' },
  },

  'godel-fork': {
    title: "Gödel's fork: consistent or complete",
    body: <>
      <p>Gödel showed that a formal system rich enough for arithmetic cannot be both consistent and complete.
      Mathematics keeps consistency and accepts incompleteness: true statements the system cannot prove.</p>
      <p>The other side of the fork is <em>inconsistent, but complete</em>. In classical logic that side is
      trivial, because a single contradiction proves everything. It becomes meaningful only with containment:
      reality as <em>full</em>, holding the one and the not, with each contradiction kept local instead of
      spreading (paraconsistent logic; homeostasis as the compartmentaliser).</p>
    </>,
    more: { href: '/philosophy/folding#substrate', label: 'Reality as full, in Folding' },
  },

  cantor: {
    title: 'Cantor',
    body: <>
      <p>Cantor's diagonal argument (1891) showed that some infinities are strictly larger than others.
      Faced with something beyond the existing notation, he built a better notation rather than
      gesturing at the ineffable.</p>
    </>,
  },

  'mystic-mathematician': {
    title: "The mystic's wall and the mathematician's move",
    body: <>
      <p>Two ways of meeting a limit. The <strong>mystic's wall</strong>: "it is beyond any word", which
      closes inquiry, because no objection can ever land. The <strong>mathematician's move</strong>: build
      a better notation and name the limit exactly, as Gödel and Cantor did, which keeps inquiry open.
      The test is whether one dropped dimension can be named specifically.</p>
    </>,
    more: { href: `${W}/hard-problem-dialogue#crux`, label: 'The crux' },
  },

  'lucas-penrose': {
    title: 'The Lucas–Penrose argument',
    body: <>
      <p>Lucas (1961) and Penrose (1989, 1994) argued that minds can see truths no formal system proves,
      so minds are not machines. The standard objections: tolerating contradiction is not transcending
      Gödel; we cannot decide halting either; and "seeing" your own Gödel sentence to be true requires
      knowing you are consistent, which by Gödel's second theorem you cannot. Gödel, turned back on the
      argument.</p>
    </>,
  },

  halting: {
    title: 'The halting problem',
    body: <>
      <p>Turing (1936) proved that no finite procedure can decide, for every program and input, whether
      the program will stop. The limit applies to wet and silicon minds alike.</p>
    </>,
  },

  choice: {
    title: 'The axiom of choice',
    body: <>
      <p>Zermelo's axiom (1904) is independent of the other axioms of set theory: Gödel (1938) showed it
      cannot be disproved from them and Cohen (1963) that it cannot be proved. Mathematics is consistent
      either way. Some foundations really are <em>chosen</em>.</p>
      <p>That is the
      precise form of labelling a creed: a chosen foundation, stated as chosen.</p>
    </>,
  },

  pvsnp: {
    title: 'P versus NP, and 42',
    body: <>
      <p>P versus NP asks whether every problem whose answer can be <em>verified</em> quickly can also be
      <em> constructed</em> quickly. In <em>The Hitchhiker's Guide to the Galaxy</em> the inversion is
      exact: the answer, 42, is known, and the work is constructing the question. I use this as a
      metaphor only; it implies nothing about resolving P versus NP.</p>
    </>,
  },

  paraconsistent: {
    title: 'Paraconsistent logic',
    body: <>
      <p>In classical logic a single contradiction implies everything ("explosion"). Paraconsistent logics
      contain a contradiction locally without it spreading. They are the formal cousin of homeostasis as
      a compartmentaliser: hold the one and the not without the whole system collapsing.</p>
    </>,
  },

  nfl: {
    title: 'No free lunch',
    body: <>
      <p>The no-free-lunch theorems of optimisation (Wolpert and Macready, 1997): no single method is
      best across every problem. The same holds for structures. A hash table buys O(1) lookup by giving up
      ordering, range queries and memory. Every optimisation is a trade, and so is every fold.</p>
    </>,
  },

  hoffman: {
    title: 'Donald Hoffman: interface theory',
    body: <>
      <p>Hoffman argues that perception evolved to track fitness, not truth, so what we perceive is an
      interface rather than reality as it is. I credit him for shaping how I think about "real reality"
      beneath its appearance. I do not rest any claim here on his theory.</p>
    </>,
  },

  // ── Machinery from Folding ─────────────────────────────────────────────────

  seed: {
    title: 'The seed',
    body: <><p>A whole plant folded into something tiny. Add water and time and it unfolds into the entire
      organism. The first image of folding with structure preserved.</p></>,
    more: { href: `${PAPER}#observations`, label: 'Folding, §3' },
  },

  'path-compression': {
    title: 'Path compression',
    body: <><p>In the union-find data structure, path compression flattens each chain as it is traversed,
      so every node points directly at the root. With union by rank, the cost per operation collapses
      to the inverse Ackermann function, effectively constant. A deep structure folded to almost nothing.</p></>,
    more: { href: `${PAPER}#observations`, label: 'Folding, §3' },
  },

  'union-find-union': {
    title: 'Union, literally',
    body: <><p>Union-find has two
      operations. <em>Find</em> follows a node to its root; <em>union</em> merges two sets into one by
      pointing one root at the other. "Unionising the extremes" is, in that machinery, a literal
      operation: two sets that were seen as separate are given a single root.</p></>,
  },

  e: {
    title: 'The number e',
    body: <><p>A single letter that names a process which never finishes: its digits never end and never
      repeat, and e<sup>x</sup> is its own derivative, a structure that generates more of itself from
      itself. We hold the fold; the unfolding is never done.</p></>,
    more: { href: `${PAPER}#substrate`, label: 'Folding, §5' },
  },

  'reader-address': {
    title: 'The reader of the address is the address',
    body: <><p>The fold is an address into the space of possibilities, read in a way favourable to its own
      unfolding. There is no external reader: the structure reads itself in whatever way keeps itself
      reading.</p></>,
    more: { href: `${PAPER}#address`, label: 'Folding, §6' },
  },

  full: {
    title: 'Reality as full',
    body: <><p>Not Gödel-incomplete but full: reality holds the one and the not, every branch and its
      negation, side by side. Each single system is incomplete; the space that holds them all is not.</p></>,
    more: { href: `${PAPER}#substrate`, label: 'Folding, §5' },
  },

  bekenstein: {
    title: 'Bekenstein and the holographic bound',
    body: <><p>The information a region of space can hold is finite. Bekenstein (1981) bounded it; the
      holographic bound that grew from his work on black-hole entropy says it scales with the area of
      the region's boundary, not its volume. This limit is not a flaw in
      the idea of folding. It is the reason folding is needed: if memory were infinite, nothing would
      need folding.</p></>,
  },

  'up-spiral': {
    title: 'The up-spiral',
    body: <><p>A helix rather than a circle: nothing is wiped, everything accumulates, and each pass sits
      higher than the last. Seen along its axis the helix looks like a flat circle, and every turn looks
      like a reset.</p></>,
    more: { href: `${PAPER}#spiral`, label: 'Folding, §7 and Figure 1' },
  },

  'dead-zones': {
    title: 'Dead zones',
    body: <><p>The breaks in continuity (interruptions, forgetting, the gap between one reading and the
      next) are where choice enters: in picking the path along which the important parts make it
      through.</p></>,
    more: { href: `${PAPER}#spiral`, label: 'Folding, §7.1' },
  },

  'to-be': {
    title: 'To be, or not to be',
    body: <>
      <p>The two poles are one side each of a duality; the <em>or</em> in the middle is the awareness, the
      standing-between that holds both without collapsing. The drama lives in the “or”, not in the poles.</p>
      <p>At the point of action, though, the sphere collapses to a binary on purpose: keeping every dimension
      gives no answer, and a binary is the simplest thing one can act on. Awareness is knowing that the chosen
      axis deleted the others, and choosing anyway. The choice is still mine: the positive pole, good thoughts
      over bad, aware of the negative rather than blind to it.</p>
    </>,
  },

  'egg-columbus': {
    title: 'The egg of Columbus',
    body: <>
      <p>In the story, Columbus made an egg stand on its end by cracking its tip. The puzzle hid an axiom (“the shell stays
      whole”), a dimension removed without anyone saying so. The hidden constraint is what makes a problem
      <em> exciting</em>, not merely hard. The fold is the source of the drama, not only the loss.</p>
    </>,
  },

  joke: {
    title: 'A joke is a fold',
    body: <>
      <p>A punchline hands you the pieces and makes you perform the last fold yourself; the laugh is the pop of
      that expansion happening in your own head. Explaining a joke kills it, because it unfolds it for you,
      leaving nothing to snap. Timing matters because the setup must load the context so that the fold lands
      with the key already in hand. Too soon, nothing to compress; too explained, nothing to expand.</p>
      <p>Humour is compression with a reader who holds the key: the same shape as a citation, a wiki link, an
      O(1) hop. A different mask, the same move.</p>
    </>,
  },

  'joy-of-unfolding': {
    title: 'The joy of unfolding',
    body: <>
      <p>The aliveness of discovery is in the unfolding, not the having. A fact may sit there complete, but the
      thrill is expanding it yourself; a spoiled discovery feels flat because someone unfolded it for you.</p>
      <p>Is the fact already there, waiting (discovery as finding), or does it become real only as it is unfolded
      (discovery as making, as a theorem does not exist until proved)? I do not make a duality of it. Finding and
      making are one act seen from two angles: the fact becomes real in the same motion in which it is
      discovered.</p>
    </>,
  },

  feynman: {
    title: 'Feynman on fragile knowledge',
    body: <>
      <p>“I don't know what's the matter with people: they don't learn by understanding, they learn by some
      other way — by rote or something. Their knowledge is so fragile!” — Richard Feynman, <em>Surely You're
      Joking, Mr. Feynman!</em></p>
      <p>The folding frame explains why he was right: rote knowledge was transmitted, not unfolded, a leaf with
      no tree under it. And, from the <em>Lectures</em>: “Experiment is the sole judge of scientific ‘truth’.”
      Experiment, he adds, itself helps to produce the laws, by giving hints. Challenges that arrive from life do
      not merely test knowledge; they generate it.</p>
    </>,
  },

  // ── Motifs ────────────────────────────────────────────────────────────────

  'model-not-whole': {
    title: 'We explain a model, not the whole',
    body: <><p>The recurring rule. Every explanation is a projection with fewer dimensions than the thing
      explained. Hold each one as a model, and keep every strand, scientific or spiritual, checkable
      against experience.</p></>,
  },

  'natural-process': {
    title: 'Natural Process',
    body: <><p>The first page in this line of work: balancing as what nature does, from hot water cooling
      to insulin answering glucose, and self-reference as the hidden variable.</p></>,
    more: { href: '/philosophy/natural-process', label: 'Read Natural Process' },
  },

  'folding-paper': {
    title: 'Folding',
    body: <><p>"Folding: Reality as a Self-Referential Address" (September 2026) covered <em>what reality
      is</em>: the fold as an address, the reader as the address, the up-spiral. This section covers how to
      live with it.</p></>,
    more: { href: PAPER, label: 'Read Folding' },
  },
};

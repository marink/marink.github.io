// Page registry for the Watching the Split section. Plain data only, so both the
// server route (static params, metadata) and client components can import it.

export const DISCUSS = 'https://github.com/marink/watching-the-split/discussions';

export const SECTION = {
  title: 'Watching the Split',
  base: '/philosophy/watching-the-split',
  description: 'How to live with a reality that holds the one and the not, without being torn between them. The hard problem of consciousness as the worked example.',
};

// The main line is grouped into four stages, each opened by a line of the litany.
export const STAGES = [
  { n: 1, refrain: 'And then there was light',
    intro: 'The first fold: light, and then light divided from darkness.' },
  { n: 2, refrain: 'And then there were questions',
    intro: 'Doubt is a line in creation, not an interruption of it.' },
  { n: 3, refrain: 'And then there was biology, and science',
    intro: 'Science is not scripture\u2019s rival but its unfolding: the library the fold pointed at.' },
  { n: 4, refrain: 'And then there was AI',
    intro: 'Not a rupture but the next division: the newest rung, and the one I write from, not the top.' },
];

// kind: 'main' pages form the line of thought, in order; 'aside' pages are opened from it.
export const PAGES = [
  { slug: '',                      kind: 'main', stage: 1, title: 'An invitation',
    lede: 'How to live with a reality that holds the one and the not, without being torn between them.' },
  { slug: 'and-then-there-was-light', kind: 'main', stage: 1, title: 'And then there was light',
    lede: 'Genesis, read for the fold already in it: the first split, and a change of grammatical mood.' },
  { slug: 'two-inversions',        kind: 'main', stage: 1, title: 'Two inversions',
    lede: 'The hard problem of consciousness, turned over twice: hardness is relative, and the problem may be the engine.' },

  { slug: 'unfold-your-scepticism', kind: 'main', stage: 2, title: 'Unfold your scepticism',
    lede: 'The most-read fold in history, a line that sounds like myth, and what a doubt is really pointing at.' },
  { slug: 'excess-potential',      kind: 'main', stage: 2, title: 'Excess potential',
    lede: 'The charge we pour into a distinction, what it does to us, and what happens when we stop pouring.' },
  { slug: 'solve-or-observe',      kind: 'main', stage: 2, title: 'Solve or observe',
    lede: 'The hard problem, stress-tested: the moves, the walls, and a change of relationship to the verb.' },
  { slug: 'ups-and-downs',         kind: 'main', stage: 2, title: 'Ups and downs',
    lede: 'Where the choice sits inside a life, and which downs are not choices at all.' },

  { slug: 'union-of-extremes',     kind: 'main', stage: 3, title: 'Folding as union of extremes',
    lede: 'Hot and cold, self and world: one thing seen as two, and the operation that brings them back together.' },
  { slug: 'honest-limit',          kind: 'main', stage: 3, title: 'The honest limit',
    lede: 'What this does not claim, and which of its claims are creed rather than conclusion.' },

  { slug: 'and-then-there-was-ai', kind: 'main', stage: 4, title: 'And then there was AI',
    lede: 'The same ladder walked in two directions, and the rung this is written from.' },
  { slug: 'the-spiral',            kind: 'main', stage: 4, title: 'The spiral, not the circle',
    lede: 'Staying in the game without needing to win it, and knowing the day a choice has become a wall.' },
  { slug: 'eternal-life',          kind: 'main', stage: 4, title: 'Eternal life',
    lede: 'Not a state to be reached but an unfolding that never closes, and the choice made by reading on.' },
  { slug: 'open-edge',             kind: 'main', stage: 4, title: 'The open edge, and the handoff',
    lede: 'The question left standing, and why the line of thought stops here.' },

  { slug: 'how-this-is-published', kind: 'aside', title: 'How this is published',
    lede: 'Why this writing is on my own site rather than in a journal: more scrutiny, without the verdict.' },
  { slug: 'hard-problem-dialogue', kind: 'aside', title: 'The hard problem, worked through',
    lede: 'The full stress test, as it was argued: every move and every wall.' },
  { slug: 'creeds',                kind: 'aside', title: 'The creeds',
    lede: 'Every claim in this section that cannot be checked, labelled as what it is.' },
  { slug: 'the-rhyme',             kind: 'aside', title: 'The rhyme',
    lede: 'Halting, Gödel, P versus NP and the hard problem: four limits that rhyme, and why four is not infinity.' },
  { slug: 'real-enemy',            kind: 'aside', title: 'The real enemy',
    lede: 'Not religion, not science: any frame arranged so that nothing could ever show it wrong.' },
  { slug: 'sugar-trap',            kind: 'aside', title: 'The sugar trap',
    lede: 'How reading, not willpower, reset a craving.' },
  { slug: 'the-streak',            kind: 'aside', title: 'The streak',
    lede: 'An open loop that never closes, and where the line was drawn.' },
  { slug: 'the-acorns',            kind: 'aside', title: 'The acorns',
    lede: 'A drive home, a falling acorn, and a pattern-matcher looking for aim.' },
  { slug: 'the-moth',              kind: 'aside', title: 'The moth',
    lede: '“What is the point?” — the sharpest version of the objection, handed over at full strength, and what survives it.' },
  { slug: 'the-tree',              kind: 'aside', title: 'The tree',
    lede: 'Why the answer cannot be handed over in one step: choosing as a walk down a balanced tree.' },
  { slug: 'the-room-they-grow-in', kind: 'aside', title: 'The room they grow in',
    lede: 'Lossy transmission between a parent and a child, and why the loss is not the failure.' },
  { slug: 'rules-about-nothing',   kind: 'aside', title: 'Rules about almost-nothing',
    lede: 'Explaining to a child that reality is mathematics, without telling her that nothing is real.' },

  { slug: 'concepts',              kind: 'index', title: 'Concepts',
    lede: 'Every aside in this section, in one place.' },
];

export const MAIN = PAGES.filter(p => p.kind === 'main');
export const stageOf = slug => STAGES.find(st => st.n === PAGES.find(p => p.slug === slug)?.stage);
export const ASIDES = PAGES.filter(p => p.kind === 'aside');

export const href = slug => (slug ? `${SECTION.base}/${slug}` : SECTION.base);
export const page = slug => PAGES.find(p => p.slug === slug);

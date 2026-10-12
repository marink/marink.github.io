// The change log for Watching the Split. Newest first. Add an entry with every
// published revision: `published` is the deploy time (ISO, with offset), and
// `pages` lists every page the revision touched, with what changed there.

export const CHANGES = [
  {
    id: '2026-10-11-round-1',
    published: '2026-10-11T22:25:35-04:00',
    title: 'Additions, round 1',
    summary: 'New material from the first review: unfolding for reach, the Ten Commandments as a specimen of folding, and a hard guard on what this writing is not.',
    pages: [
      { slug: 'unfolding-with-examples', note: 'New aside: why clear to me is not the test, why unfolding has no free bottom, and teaching with examples the reader already holds, with wireless charging as the first and an animated figure of it.' },
      { slug: 'unfold-your-scepticism', note: 'New section, “Why ten”: the Ten Commandments as law folded for transmission, and their grey areas as the fold hitting a fork. “The only form that gets read” is now “one viable form”, and “the only transition” is now “the transition”.' },
      { slug: 'ups-and-downs', note: 'New section, “Grey areas”: observe rather than solve, and awareness taking over where a rule stops.' },
      { slug: 'eternal-life', note: 'New section, “Keep going, in every coat”: the same instruction in everyday wisdom, religion, science and life.' },
      { slug: 'real-enemy', note: 'New section, “What this writing is not”: not a new scripture, not a new science, not the peace; an invitation to six domains to unfold rather than fight. My Big TOE is now credited as an inspiration rather than held up as a warning.' },
      { slug: 'and-then-there-was-ai', note: '“It was always the compressed form of a true library” is now “It is very much like the compressed form…”.' },
      { slug: 'my-big-toe', note: 'New aside: an analysis of Thomas Campbell’s My Big TOE — why it inspires, where it invites the test, the one rule that seals itself, and why this writing is an invitation rather than a withdrawal.' },
      { slug: '', note: 'Added “What this is not”; “written for people” now names a reader from each domain; the reading guide links the new aside and this log.' },
      { slug: 'honest-limit', note: 'Added a paragraph tying the limit to what this writing is not.' },
      { slug: 'rules-about-nothing', note: 'The analogy is now a first-person-shooter game; footnotes credit the goggles to Donald Hoffman and The Three-Body Problem, and link The Matrix.' },
      { slug: null, note: 'Where a statement is made strongly, a small “invitation” label now links to what this writing is not.' },
    ],
  },
  {
    id: '2026-10-11-fixes',
    published: '2026-10-11T02:23:04-04:00',
    title: 'Fixes',
    summary: 'Corrections after a first outside reading. No change to the argument.',
    pages: [
      { slug: 'the-rhyme', note: 'The four limits are now popups in the table; a leftover sentence was removed; the infinite-manifestations line is called a bet, not a creed.' },
      { slug: '', note: 'A missing space restored (“biology and science (folding…”).' },
      { slug: 'rules-about-nothing', note: 'A missing space restored (“rules (distances…”).' },
      { slug: 'unfold-your-scepticism', note: 'A missing space restored (“as scepticism”).' },
      { slug: null, note: 'Every aside’s “Back to where you were” now falls back to the page it is chiefly opened from, instead of the first page.' },
    ],
  },
  {
    id: '2026-10-10-published',
    published: '2026-10-10T23:46:39-04:00',
    title: 'First published',
    summary: 'Watching the Split goes live: thirteen pages on the main line in four stages, asides, popups and the open discussion.',
    pages: [],
  },
];

// Pages touched by entries published after `since` (a Date), newest change first.
export function changedSince(since) {
  const map = new Map();
  if (!since) return map;
  for (const c of CHANGES) {
    if (new Date(c.published) <= since) continue;
    for (const p of c.pages) {
      if (p.slug === null || map.has(p.slug)) continue;
      map.set(p.slug, { change: c, note: p.note });
    }
  }
  return map;
}

export const formatDate = iso =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

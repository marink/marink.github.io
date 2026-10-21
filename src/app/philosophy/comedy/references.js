// Ordered reference list for Comedy as Folding. Citation numbers follow this order.

import { makeCite } from '../paper';

export const REFS = [
  { key: 'folding-paper', text: 'M. Kokona. "Folding: Reality as a Self-Referential Address." Philosophy, this site, 2026.', url: '/philosophy/folding' },
  { key: 'watching',      text: 'M. Kokona. "Watching the Split." Philosophy, this site, 2026.', url: '/philosophy/watching-the-split' },
  { key: 'gervais-oxford', text: 'R. Gervais. "Full Q&A." Oxford Union. Video.', url: 'https://www.youtube.com/watch?v=xwED4v5G3HA' },
  { key: 'cantor',       text: 'G. Cantor. "Über eine elementare Frage der Mannigfaltigkeitslehre." Jahresbericht der Deutschen Mathematiker-Vereinigung 1: 75–78, 1891.' },
  { key: 'counselor',     text: 'R. Scott (dir.), C. McCarthy (screenplay). The Counselor. 20th Century Fox, 2013.' },
  { key: 'kant',          text: 'I. Kant. Critique of Judgment. 1790. §54.' },
  { key: 'schopenhauer',  text: 'A. Schopenhauer. The World as Will and Representation. 1818. Vol. 1, §13.' },
  { key: 'freud',         text: 'S. Freud. Jokes and Their Relation to the Unconscious. 1905.' },
  { key: 'koestler',      text: 'A. Koestler. The Act of Creation. Hutchinson, 1964.' },
  { key: 'hurley',        text: 'M. M. Hurley, D. C. Dennett and R. B. Adams Jr. Inside Jokes: Using Humor to Reverse-Engineer the Mind. MIT Press, 2011.' },
];

export const Cite = makeCite(REFS);

// Ordered reference list for the Folding paper. Citation numbers follow this order.

import { makeCite } from '../paper';

export const REFS = [
  { key: 'natural-process', text: 'M. Kokona. "Natural Process." Philosophy, this site, 2026.', url: '/philosophy/natural-process' },
  { key: 'cannon',     text: 'W. B. Cannon. The Wisdom of the Body. W. W. Norton, 1932.' },
  { key: 'fung',       text: 'J. Fung. The Obesity Code: Unlocking the Secrets of Weight Loss. Greystone Books, 2016.' },
  { key: 'insulin-resistance', text: 'A. M. Freeman, L. A. Acevedo and N. Pennings. "Insulin Resistance." StatPearls, NCBI Bookshelf, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK507839/' },
  { key: 'prigogine',  text: 'I. Prigogine and I. Stengers. Order Out of Chaos: Man’s New Dialogue with Nature. Bantam, 1984.' },
  { key: 'schultz',    text: 'W. Schultz, P. Dayan and P. R. Montague. "A neural substrate of prediction and reward." Science 275 (5306): 1593–1599, 1997.' },
  { key: 'koob',       text: 'G. F. Koob and M. Le Moal. "Drug addiction, dysregulation of reward, and allostasis." Neuropsychopharmacology 24 (2): 97–129, 2001.' },
  { key: 'volkow',     text: 'N. D. Volkow, G. F. Koob and A. T. McLellan. "Neurobiologic advances from the brain disease model of addiction." New England Journal of Medicine 374: 363–371, 2016.' },
  { key: 'stone',      text: 'M. Stone. "Cross-validatory choice and assessment of statistical predictions." Journal of the Royal Statistical Society B 36 (2): 111–147, 1974.' },
  { key: 'liu',        text: 'Liu Cixin. The Three-Body Problem. Trans. Ken Liu. Tor Books, 2014 (Chinese original 2008).' },
  { key: 'tarjan',     text: 'R. E. Tarjan. "Efficiency of a good but not linear set union algorithm." Journal of the ACM 22 (2): 215–225, 1975.' },
  { key: 'bekenstein', text: 'J. D. Bekenstein. "Universal upper bound on the entropy-to-energy ratio for bounded systems." Physical Review D 23 (2): 287–298, 1981.' },
  { key: 'hoffman2015', text: 'D. D. Hoffman, M. Singh and C. Prakash. "The interface theory of perception." Psychonomic Bulletin & Review 22 (6): 1480–1506, 2015.' },
  { key: 'hoffman2019', text: 'D. D. Hoffman. The Case Against Reality: Why Evolution Hid the Truth from Our Eyes. W. W. Norton, 2019.' },
  { key: 'wheeler',    text: 'J. A. Wheeler. "Information, physics, quantum: the search for links." Proceedings of the 3rd International Symposium on Foundations of Quantum Mechanics, Tokyo, 1989.' },
  { key: 'tegmark',    text: 'M. Tegmark. "The mathematical universe." Foundations of Physics 38 (2): 101–150, 2008.' },
  { key: 'hermite',    text: 'C. Hermite. "Sur la fonction exponentielle." Comptes rendus de l’Académie des Sciences 77, 1873.' },
  { key: 'euler',      text: 'L. Euler. Introductio in analysin infinitorum. 1748.' },
  { key: 'cantor',     text: 'G. Cantor. "Über eine elementare Frage der Mannigfaltigkeitslehre." Jahresbericht der Deutschen Mathematiker-Vereinigung 1: 75–78, 1891.' },
  { key: 'vonneumann', text: 'J. von Neumann. Theory of Self-Reproducing Automata. Ed. A. W. Burks. University of Illinois Press, 1966.' },
  { key: 'carter',     text: 'B. Carter. "Large number coincidences and the anthropic principle in cosmology." In IAU Symposium 63: Confrontation of Cosmological Theories with Observational Data, 1974.' },
  { key: 'nolan',      text: 'C. Nolan (dir.). Memento. 2000.' },
  { key: 'chalmers',   text: 'D. J. Chalmers. "Facing up to the problem of consciousness." Journal of Consciousness Studies 2 (3): 200–219, 1995.' },
  { key: 'hofstadter', text: 'D. R. Hofstadter. I Am a Strange Loop. Basic Books, 2007.' },
  { key: 'leibniz',    text: 'G. W. Leibniz. The Monadology. 1714.' },
  { key: 'deleuze',    text: 'G. Deleuze. The Fold: Leibniz and the Baroque. Trans. T. Conley. University of Minnesota Press, 1993 (French original 1988).' },
  { key: 'bohm',       text: 'D. Bohm. Wholeness and the Implicate Order. Routledge, 1980.' },
];

export const Cite = makeCite(REFS);

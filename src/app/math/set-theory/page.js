"use client";

import { Box, Typography, Divider } from '@mui/material';
import { InlineMath, BlockMath } from 'react-katex';

const TEXT   = '#e2e8f0';
const DIM    = '#94a3b8';
const ACCENT = '#60a5fa';
const MUTED  = 'rgba(255,255,255,0.12)';

const M  = ({ m }) => <InlineMath math={m} />;
const MB = ({ m }) => <BlockMath math={m} />;

function P({ children, sx }) {
  return (
    <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.85, mb: 2.5, ...sx }}>
      {children}
    </Typography>
  );
}

function Def({ title, children }) {
  return (
    <Box sx={{ my: 3, p: 3, borderRadius: '8px', background: 'rgba(96,165,250,0.06)', borderLeft: `3px solid ${ACCENT}` }}>
      {title && <Typography sx={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: ACCENT, mb: 1 }}>{title}</Typography>}
      <Box sx={{ color: DIM, fontSize: 15, lineHeight: 1.85 }}>{children}</Box>
    </Box>
  );
}

function Note({ children }) {
  return (
    <Box sx={{ my: 2.5, p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <Typography sx={{ color: DIM, fontSize: 14, lineHeight: 1.8 }}>{children}</Typography>
    </Box>
  );
}

function H2({ id, children }) {
  return (
    <Typography id={id} variant="h2" sx={{ fontSize: '1.4rem', fontWeight: 700, color: TEXT, mt: 6, mb: 2, scrollMarginTop: '80px' }}>
      {children}
    </Typography>
  );
}

function H3({ children }) {
  return (
    <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 600, color: TEXT, mt: 4, mb: 1.5, letterSpacing: 0.3 }}>
      {children}
    </Typography>
  );
}

const TOC = [
  { id: 'what-is-a-set',   label: 'What is a Set?' },
  { id: 'notation',        label: 'Set-Builder Notation' },
  { id: 'number-sets',     label: 'Standard Number Sets' },
  { id: 'subsets',         label: 'Subsets' },
  { id: 'operations',      label: 'Set Operations' },
  { id: 'laws',            label: 'Laws of Set Algebra' },
  { id: 'cardinality',     label: 'Cardinality' },
  { id: 'power-set',       label: 'Power Set' },
  { id: 'cartesian',       label: 'Cartesian Product' },
];

export default function SetTheoryPage() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>

      {/* Content */}
      <Box sx={{ flex: 1, minWidth: 0, px: { xs: 3, md: 6 }, py: 7 }}>

        <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>
          Mathematics → Set Theory
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.1 }}>
          Set Theory
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.75, mb: 5, maxWidth: 580 }}>
          Set theory is the branch of mathematics that studies collections of objects. Introduced by Georg Cantor in the 1870s, it became the foundation upon which nearly all of modern mathematics is built.
        </Typography>

        <Divider sx={{ borderColor: MUTED, mb: 5 }} />

        {/* 1 */}
        <H2 id="what-is-a-set">What is a Set?</H2>
        <P>
          A <strong style={{ color: TEXT }}>set</strong> is a well-defined collection of distinct objects called its <strong style={{ color: TEXT }}>elements</strong> or <strong style={{ color: TEXT }}>members</strong>. Sets are written using curly braces, with elements separated by commas:
        </P>
        <MB m="A = \{1,\ 2,\ 3,\ 4,\ 5\}" />
        <P>
          Two fundamental ideas: <strong style={{ color: TEXT }}>order doesn't matter</strong> and <strong style={{ color: TEXT }}>duplicates are ignored</strong>. The sets <M m="\{1, 2, 3\}" /> and <M m="\{3, 1, 2\}" /> are identical, and <M m="\{1, 1, 2\}" /> is the same as <M m="\{1, 2\}" />.
        </P>

        <H3>Membership</H3>
        <P>
          We write <M m="a \in A" /> to say element <M m="a" /> <em>belongs to</em> set <M m="A" />, and <M m="b \notin A" /> to say it does not:
        </P>
        <MB m="A = \{2, 4, 6\} \quad\Rightarrow\quad 4 \in A, \quad 5 \notin A" />

        <H3>The Empty Set</H3>
        <P>
          The <strong style={{ color: TEXT }}>empty set</strong> <M m="\emptyset" /> (also written <M m="\{\}" />) contains no elements. It is the unique set with cardinality zero and plays the role of zero in set arithmetic.
        </P>
        <Def title="Definition — Set">
          A set <M m="A" /> is a collection of distinct objects. We write <M m="x \in A" /> if <M m="x" /> is an element of <M m="A" />, and <M m="x \notin A" /> otherwise. The empty set <M m="\emptyset" /> contains no elements.
        </Def>

        {/* 2 */}
        <H2 id="notation">Set-Builder Notation</H2>
        <P>
          When a set is too large or abstract to list explicitly, we describe it with a <strong style={{ color: TEXT }}>rule</strong>:
        </P>
        <MB m="\{x \in U \mid P(x)\}" />
        <P>
          Read: "the set of all <M m="x" /> in universe <M m="U" /> such that <M m="P(x)" /> is true." The vertical bar <M m="\mid" /> (or colon <M m="\colon" />) means "such that."
        </P>

        <H3>Examples</H3>
        <MB m="\{x \in \mathbb{Z} \mid x > 0\} = \{1, 2, 3, \ldots\}" />
        <MB m="\{x \in \mathbb{R} \mid x^2 < 4\} = (-2,\ 2)" />
        <MB m="\{n \in \mathbb{N} \mid n \text{ is even}\} = \{0, 2, 4, 6, \ldots\}" />

        {/* 3 */}
        <H2 id="number-sets">Standard Number Sets</H2>
        <P>Mathematics uses several standard sets, each denoted by a blackboard-bold letter:</P>
        <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {[
            { sym: '\\mathbb{N}', name: 'Natural numbers', val: '\\{0, 1, 2, 3, \\ldots\\}' },
            { sym: '\\mathbb{Z}', name: 'Integers',        val: '\\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}' },
            { sym: '\\mathbb{Q}', name: 'Rational numbers',val: '\\left\\{\\tfrac{p}{q} \\mid p, q \\in \\mathbb{Z},\\ q \\neq 0\\right\\}' },
            { sym: '\\mathbb{R}', name: 'Real numbers',    val: '\\text{all points on the number line}' },
            { sym: '\\mathbb{C}', name: 'Complex numbers', val: '\\{a + bi \\mid a, b \\in \\mathbb{R}\\}' },
          ].map(r => (
            <Box key={r.sym} sx={{ display: 'flex', gap: 2, alignItems: 'baseline', p: 2, borderRadius: '6px', background: 'rgba(255,255,255,0.025)' }}>
              <Box sx={{ minWidth: 36 }}><M m={r.sym} /></Box>
              <Box sx={{ minWidth: 140, color: TEXT, fontSize: 14 }}>{r.name}</Box>
              <Box sx={{ color: DIM, fontSize: 13 }}><M m={r.val} /></Box>
            </Box>
          ))}
        </Box>
        <P>
          These are nested: <M m="\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}" />.
        </P>

        {/* 4 */}
        <H2 id="subsets">Subsets</H2>
        <Def title="Definition — Subset">
          <M m="A" /> is a <strong>subset</strong> of <M m="B" />, written <M m="A \subseteq B" />, if every element of <M m="A" /> is also an element of <M m="B" />:
          <Box sx={{ mt: 1 }}><MB m="A \subseteq B \iff \forall x\,(x \in A \Rightarrow x \in B)" /></Box>
        </Def>
        <P>
          If additionally <M m="A \neq B" />, we call <M m="A" /> a <strong style={{ color: TEXT }}>proper subset</strong>, written <M m="A \subset B" />.
        </P>

        <H3>Key facts</H3>
        <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { label: 'Reflexivity',   math: 'A \\subseteq A', note: 'Every set is a subset of itself.' },
            { label: 'Empty set',     math: '\\emptyset \\subseteq A', note: 'The empty set is a subset of every set.' },
            { label: 'Antisymmetry',  math: 'A \\subseteq B \\text{ and } B \\subseteq A \\Rightarrow A = B', note: 'Sets are equal iff each is a subset of the other.' },
            { label: 'Transitivity',  math: 'A \\subseteq B \\text{ and } B \\subseteq C \\Rightarrow A \\subseteq C', note: '' },
          ].map(f => (
            <Box key={f.label} sx={{ p: 2, borderRadius: '6px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Typography sx={{ fontSize: 11, color: ACCENT, letterSpacing: 1, textTransform: 'uppercase', mb: 0.75 }}>{f.label}</Typography>
              <Box sx={{ mb: f.note ? 0.5 : 0 }}><M m={f.math} /></Box>
              {f.note && <Typography sx={{ fontSize: 13, color: DIM }}>{f.note}</Typography>}
            </Box>
          ))}
        </Box>

        {/* 5 */}
        <H2 id="operations">Set Operations</H2>
        <P>Given sets <M m="A" /> and <M m="B" /> within a universe <M m="U" />, four fundamental operations produce new sets:</P>

        <H3>Union</H3>
        <P>The union <M m="A \cup B" /> contains every element that is in <M m="A" />, in <M m="B" />, or in both:</P>
        <MB m="A \cup B = \{x \mid x \in A\ \text{or}\ x \in B\}" />
        <Note>Example: <M m="\{1,2,3\} \cup \{3,4,5\} = \{1,2,3,4,5\}" /></Note>

        <H3>Intersection</H3>
        <P>The intersection <M m="A \cap B" /> contains only elements that belong to <em>both</em> sets:</P>
        <MB m="A \cap B = \{x \mid x \in A\ \text{and}\ x \in B\}" />
        <Note>Example: <M m="\{1,2,3\} \cap \{3,4,5\} = \{3\}" /></Note>
        <P>Sets with an empty intersection are called <strong style={{ color: TEXT }}>disjoint</strong>: <M m="A \cap B = \emptyset" />.</P>

        <H3>Set Difference</H3>
        <P>The difference <M m="A \setminus B" /> (also written <M m="A - B" />) contains elements in <M m="A" /> that are not in <M m="B" />:</P>
        <MB m="A \setminus B = \{x \mid x \in A\ \text{and}\ x \notin B\}" />
        <Note>Example: <M m="\{1,2,3,4\} \setminus \{3,4,5\} = \{1,2\}" /></Note>

        <H3>Complement</H3>
        <P>The complement <M m="A^c" /> (or <M m="\overline{A}" />) contains everything in the universe that is <em>not</em> in <M m="A" />:</P>
        <MB m="A^c = U \setminus A = \{x \in U \mid x \notin A\}" />

        {/* 6 */}
        <H2 id="laws">Laws of Set Algebra</H2>
        <P>Set operations obey algebraic laws analogous to those of arithmetic. Let <M m="A, B, C \subseteq U" />:</P>

        <Box sx={{ my: 3, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {[
            { name: 'Commutativity',   eqs: ['A \\cup B = B \\cup A', 'A \\cap B = B \\cap A'] },
            { name: 'Associativity',   eqs: ['(A \\cup B) \\cup C = A \\cup (B \\cup C)', '(A \\cap B) \\cap C = A \\cap (B \\cap C)'] },
            { name: 'Distributivity',  eqs: ['A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)', 'A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)'] },
            { name: 'Identity',        eqs: ['A \\cup \\emptyset = A', 'A \\cap U = A'] },
            { name: 'Complement',      eqs: ['A \\cup A^c = U', 'A \\cap A^c = \\emptyset'] },
            { name: 'Double Complement', eqs: ['(A^c)^c = A', ''] },
          ].map(law => (
            <Box key={law.name} sx={{ p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Typography sx={{ fontSize: 11, color: ACCENT, letterSpacing: 1, textTransform: 'uppercase', mb: 1.5 }}>{law.name}</Typography>
              {law.eqs.map((eq, i) => eq && <Box key={i} sx={{ mb: 0.5 }}><M m={eq} /></Box>)}
            </Box>
          ))}
        </Box>

        <H3>De Morgan's Laws</H3>
        <P>These laws relate complements to unions and intersections — they are among the most useful identities in both set theory and logic:</P>
        <MB m="(A \cup B)^c = A^c \cap B^c" />
        <MB m="(A \cap B)^c = A^c \cup B^c" />
        <P>
          Intuitively: "not (A or B)" means "not A and not B." "not (A and B)" means "not A or not B."
        </P>

        {/* 7 */}
        <H2 id="cardinality">Cardinality</H2>
        <Def title="Definition — Cardinality">
          The <strong>cardinality</strong> of a set <M m="A" />, written <M m="|A|" /> or <M m="\#A" />, is the number of elements it contains.
        </Def>

        <H3>Finite sets</H3>
        <MB m="A = \{a, b, c\} \Rightarrow |A| = 3 \qquad |\emptyset| = 0" />

        <H3>Inclusion-Exclusion Principle</H3>
        <P>For two finite sets, union and intersection cardinalities are related by:</P>
        <MB m="|A \cup B| = |A| + |B| - |A \cap B|" />
        <P>The intuition: adding <M m="|A|" /> and <M m="|B|" /> counts elements in <M m="A \cap B" /> twice, so we subtract once.</P>
        <P>For three sets:</P>
        <MB m="|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|" />

        <H3>Infinite cardinality</H3>
        <P>
          Cantor showed that not all infinite sets have the same size. The cardinality of <M m="\mathbb{N}" /> is denoted <M m="\aleph_0" /> (aleph-null) — any set that can be put in one-to-one correspondence with <M m="\mathbb{N}" /> is called <strong style={{ color: TEXT }}>countably infinite</strong>. The real numbers <M m="\mathbb{R}" /> are <strong style={{ color: TEXT }}>uncountably infinite</strong>, with cardinality <M m="|\mathbb{R}| = \mathfrak{c} = 2^{\aleph_0}" />.
        </P>

        {/* 8 */}
        <H2 id="power-set">Power Set</H2>
        <Def title="Definition — Power Set">
          The <strong>power set</strong> of <M m="A" />, written <M m="\mathcal{P}(A)" />, is the set of all subsets of <M m="A" />, including <M m="\emptyset" /> and <M m="A" /> itself.
        </Def>
        <MB m="\mathcal{P}(\{1,2\}) = \bigl\{\emptyset,\ \{1\},\ \{2\},\ \{1,2\}\bigr\}" />
        <P>The cardinality of the power set grows exponentially:</P>
        <MB m="|A| = n \Rightarrow |\mathcal{P}(A)| = 2^n" />
        <Note>
          For a set with 3 elements, the power set has <M m="2^3 = 8" /> members. For 10 elements, it has 1,024.
        </Note>
        <P>
          This formula holds because each element of <M m="A" /> is either included or excluded from a subset — a binary choice — giving <M m="2^n" /> combinations total.
        </P>

        {/* 9 */}
        <H2 id="cartesian">Cartesian Product</H2>
        <Def title="Definition — Cartesian Product">
          The <strong>Cartesian product</strong> <M m="A \times B" /> is the set of all ordered pairs <M m="(a,b)" /> where <M m="a \in A" /> and <M m="b \in B" />:
          <Box sx={{ mt: 1 }}><MB m="A \times B = \{(a,b) \mid a \in A,\ b \in B\}" /></Box>
        </Def>
        <MB m="\{1,2\} \times \{x,y\} = \{(1,x),\ (1,y),\ (2,x),\ (2,y)\}" />
        <P>The cardinality of a Cartesian product is the product of the cardinalities:</P>
        <MB m="|A \times B| = |A| \cdot |B|" />
        <P>
          The familiar coordinate plane <M m="\mathbb{R}^2" /> is exactly <M m="\mathbb{R} \times \mathbb{R}" /> — pairs of real numbers <M m="(x, y)" />. More generally, <M m="\mathbb{R}^n = \mathbb{R} \times \mathbb{R} \times \cdots \times \mathbb{R}" /> (<M m="n" /> times).
        </P>
        <P>
          A <strong style={{ color: TEXT }}>relation</strong> from <M m="A" /> to <M m="B" /> is any subset of <M m="A \times B" />. A <strong style={{ color: TEXT }}>function</strong> <M m="f: A \to B" /> is a relation where each element of <M m="A" /> appears in exactly one pair.
        </P>

        <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)', lineHeight: 1.7 }}>
          Next: <a href="/math/logic" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Logic →</a> (coming soon)
        </Typography>

      </Box>

      {/* In-page TOC — right column, large screens */}
      <Box sx={{
        display: { xs: 'none', xl: 'block' },
        width: 200,
        flexShrink: 0,
        position: 'sticky',
        top: 72,
        height: 'calc(100vh - 72px)',
        overflowY: 'auto',
        pt: 7,
        pr: 4,
      }}>
        <Typography sx={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', mb: 2 }}>
          On this page
        </Typography>
        {TOC.map(t => (
          <a key={t.id} href={`#${t.id}`} style={{ display: 'block', textDecoration: 'none', padding: '3px 0' }}>
            <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', '&:hover': { color: DIM }, lineHeight: 1.5 }}>
              {t.label}
            </Typography>
          </a>
        ))}
      </Box>

    </Box>
  );
}

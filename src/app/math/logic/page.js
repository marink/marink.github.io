"use client";

import { Box, Typography, Divider } from '@mui/material';
import { InlineMath, BlockMath } from 'react-katex';

const TEXT   = '#e2e8f0';
const DIM    = '#94a3b8';
const ACCENT = '#60a5fa';
const MUTED  = 'rgba(255,255,255,0.12)';

const M  = ({ m }) => <InlineMath math={m} />;
const MB = ({ m }) => <BlockMath math={m} />;

function P({ children }) {
  return <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.85, mb: 2.5 }}>{children}</Typography>;
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
  return <Typography id={id} variant="h2" sx={{ fontSize: '1.4rem', fontWeight: 700, color: TEXT, mt: 6, mb: 2, scrollMarginTop: '80px' }}>{children}</Typography>;
}
function H3({ children }) {
  return <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 600, color: TEXT, mt: 4, mb: 1.5, letterSpacing: 0.3 }}>{children}</Typography>;
}

const TOC = [
  { id: 'propositions',   label: 'Propositions' },
  { id: 'connectives',    label: 'Logical Connectives' },
  { id: 'truth-tables',   label: 'Truth Tables' },
  { id: 'equivalence',    label: 'Logical Equivalence' },
  { id: 'predicates',     label: 'Predicate Logic' },
  { id: 'inference',      label: 'Rules of Inference' },
];

export default function LogicPage() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ flex: 1, minWidth: 0, px: { xs: 3, md: 6 }, py: 7 }}>
        <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>Mathematics → Logic</Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.1 }}>
          Logic
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.75, mb: 5, maxWidth: 580 }}>
          Mathematical logic is the study of formal reasoning — the rules by which conclusions follow necessarily from premises. It underlies every proof in mathematics and every program in computer science.
        </Typography>
        <Divider sx={{ borderColor: MUTED, mb: 5 }} />

        <H2 id="propositions">Propositions</H2>
        <P>A <strong style={{ color: TEXT }}>proposition</strong> is a declarative statement that is either true or false, but not both. We denote propositions with letters like <M m="p, q, r" /> and their truth values with <M m="T" /> (true) or <M m="F" /> (false).</P>
        <Note>
          "7 is prime" — proposition (true). "x + 1 = 5" — not a proposition (truth depends on x). "Read this!" — not a proposition (imperative).
        </Note>

        <H2 id="connectives">Logical Connectives</H2>
        <P>Propositions are combined using <strong style={{ color: TEXT }}>connectives</strong> to form compound propositions:</P>
        <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {[
            { sym: '\\lnot p',      name: 'Negation',    read: 'not p',         desc: 'True when p is false.' },
            { sym: 'p \\land q',    name: 'Conjunction', read: 'p and q',       desc: 'True when both p and q are true.' },
            { sym: 'p \\lor q',     name: 'Disjunction', read: 'p or q',        desc: 'True when at least one is true.' },
            { sym: 'p \\to q',      name: 'Implication', read: 'if p then q',   desc: 'False only when p is true and q is false.' },
            { sym: 'p \\leftrightarrow q', name: 'Biconditional', read: 'p if and only if q', desc: 'True when p and q have the same truth value.' },
          ].map(r => (
            <Box key={r.sym} sx={{ display: 'flex', gap: 2, alignItems: 'baseline', p: 2, borderRadius: '6px', background: 'rgba(255,255,255,0.025)' }}>
              <Box sx={{ minWidth: 80, fontFamily: 'monospace' }}><M m={r.sym} /></Box>
              <Box sx={{ minWidth: 120, color: TEXT, fontSize: 14, fontWeight: 600 }}>{r.name}</Box>
              <Box sx={{ color: DIM, fontSize: 13 }}>{r.desc}</Box>
            </Box>
          ))}
        </Box>
        <P>The implication <M m="p \to q" /> is often the most counterintuitive: a false hypothesis makes the whole statement vacuously true. "If the moon is made of cheese, then 2+2=5" is a true implication.</P>

        <H2 id="truth-tables">Truth Tables</H2>
        <P>A <strong style={{ color: TEXT }}>truth table</strong> lists all possible truth values for a compound proposition. For <M m="n" /> variables there are <M m="2^n" /> rows.</P>
        <H3>Implication</H3>
        <Box sx={{ my: 2, overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontSize: 14, color: DIM }}>
            <thead>
              <tr>{['p','q','p → q','p ↔ q'].map(h => <th key={h} style={{ padding: '8px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: TEXT, textAlign: 'center' }}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {[['T','T','T','T'],['T','F','F','F'],['F','T','T','F'],['F','F','T','T']].map((row,i) => (
                <tr key={i}>{row.map((cell,j) => <td key={j} style={{ padding: '6px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </Box>
        <H3>Converse, Inverse, Contrapositive</H3>
        <P>Given <M m="p \to q" />, three related implications arise — only the contrapositive is logically equivalent to the original:</P>
        <Box sx={{ my: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {[
            { name: 'Converse',        form: 'q \\to p',           note: 'Not equivalent' },
            { name: 'Inverse',         form: '\\lnot p \\to \\lnot q', note: 'Not equivalent' },
            { name: 'Contrapositive',  form: '\\lnot q \\to \\lnot p', note: 'Logically equivalent ✓' },
            { name: 'Original',        form: 'p \\to q',           note: '' },
          ].map(r => (
            <Box key={r.name} sx={{ p: 2, borderRadius: '6px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Typography sx={{ fontSize: 11, color: ACCENT, letterSpacing: 1, textTransform: 'uppercase', mb: 0.75 }}>{r.name}</Typography>
              <Box sx={{ mb: 0.5 }}><M m={r.form} /></Box>
              {r.note && <Typography sx={{ fontSize: 12, color: DIM }}>{r.note}</Typography>}
            </Box>
          ))}
        </Box>

        <H2 id="equivalence">Logical Equivalence</H2>
        <Def title="Definition — Logical Equivalence">
          Two propositions <M m="P" /> and <M m="Q" /> are <strong>logically equivalent</strong>, written <M m="P \equiv Q" />, if they have identical truth values for every assignment of truth values to their variables.
        </Def>
        <H3>Key equivalences</H3>
        <Box sx={{ my: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {[
            { name: 'Double Negation', eq: '\\lnot\\lnot p \\equiv p' },
            { name: 'Contrapositive',  eq: '(p \\to q) \\equiv (\\lnot q \\to \\lnot p)' },
            { name: 'De Morgan 1',     eq: '\\lnot(p \\land q) \\equiv \\lnot p \\lor \\lnot q' },
            { name: 'De Morgan 2',     eq: '\\lnot(p \\lor q) \\equiv \\lnot p \\land \\lnot q' },
            { name: 'Implication',     eq: '(p \\to q) \\equiv (\\lnot p \\lor q)' },
            { name: 'Absorption',      eq: 'p \\lor (p \\land q) \\equiv p' },
          ].map(r => (
            <Box key={r.name} sx={{ p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Typography sx={{ fontSize: 11, color: ACCENT, letterSpacing: 1, textTransform: 'uppercase', mb: 1 }}>{r.name}</Typography>
              <M m={r.eq} />
            </Box>
          ))}
        </Box>
        <P>A proposition that is always true is a <strong style={{ color: TEXT }}>tautology</strong> (e.g. <M m="p \lor \lnot p" />). One that is always false is a <strong style={{ color: TEXT }}>contradiction</strong> (e.g. <M m="p \land \lnot p" />).</P>

        <H2 id="predicates">Predicate Logic</H2>
        <P><strong style={{ color: TEXT }}>Propositional logic</strong> treats propositions as atomic. <strong style={{ color: TEXT }}>Predicate logic</strong> (first-order logic) adds variables, predicates, and quantifiers — allowing statements about entire domains.</P>
        <P>A <strong style={{ color: TEXT }}>predicate</strong> <M m="P(x)" /> is a proposition-valued function: <M m="P(x) = \text{``}x \text{ is prime''}" /> is true for <M m="x=7" />, false for <M m="x=9" />.</P>
        <H3>Quantifiers</H3>
        <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {[
            { sym: '\\forall x\\, P(x)', name: 'Universal', desc: '"For all x, P(x)." True if P(x) holds for every x in the domain.' },
            { sym: '\\exists x\\, P(x)', name: 'Existential', desc: '"There exists an x such that P(x)." True if P(x) holds for at least one x.' },
            { sym: '\\exists! x\\, P(x)', name: 'Unique existence', desc: '"There exists exactly one x such that P(x)."' },
          ].map(r => (
            <Box key={r.sym} sx={{ display: 'flex', gap: 2, alignItems: 'baseline', p: 2, borderRadius: '6px', background: 'rgba(255,255,255,0.025)' }}>
              <Box sx={{ minWidth: 100 }}><M m={r.sym} /></Box>
              <Box sx={{ minWidth: 120, color: TEXT, fontSize: 14, fontWeight: 600 }}>{r.name}</Box>
              <Box sx={{ color: DIM, fontSize: 13 }}>{r.desc}</Box>
            </Box>
          ))}
        </Box>
        <H3>Negating quantifiers</H3>
        <MB m="\lnot\,\forall x\, P(x) \;\equiv\; \exists x\, \lnot P(x)" />
        <MB m="\lnot\,\exists x\, P(x) \;\equiv\; \forall x\, \lnot P(x)" />
        <P>"Not all integers are even" is the same as "there exists an integer that is not even."</P>

        <H2 id="inference">Rules of Inference</H2>
        <P>A <strong style={{ color: TEXT }}>rule of inference</strong> is a valid argument form — a pattern that guarantees the conclusion is true whenever the premises are true.</P>
        <Box sx={{ my: 3, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {[
            { name: 'Modus Ponens',     form: 'p,\\quad p \\to q \\;\\vdash\\; q' },
            { name: 'Modus Tollens',    form: '\\lnot q,\\quad p \\to q \\;\\vdash\\; \\lnot p' },
            { name: 'Hypothetical Syl.',form: 'p \\to q,\\quad q \\to r \\;\\vdash\\; p \\to r' },
            { name: 'Disjunctive Syl.', form: 'p \\lor q,\\quad \\lnot p \\;\\vdash\\; q' },
            { name: 'Addition',         form: 'p \\;\\vdash\\; p \\lor q' },
            { name: 'Simplification',   form: 'p \\land q \\;\\vdash\\; p' },
          ].map(r => (
            <Box key={r.name} sx={{ p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Typography sx={{ fontSize: 11, color: ACCENT, letterSpacing: 1, textTransform: 'uppercase', mb: 1 }}>{r.name}</Typography>
              <M m={r.form} />
            </Box>
          ))}
        </Box>
        <P>The symbol <M m="\vdash" /> means "therefore." Modus Ponens is the most fundamental rule: if we know <M m="p" /> is true, and we know <M m="p \to q" />, we can conclude <M m="q" />.</P>

        <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          Next: <a href="/math/number-theory" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Number Theory →</a>
        </Typography>
      </Box>

      <Box sx={{ display: { xs: 'none', xl: 'block' }, width: 200, flexShrink: 0, position: 'sticky', top: 72, height: 'calc(100vh - 72px)', overflowY: 'auto', pt: 7, pr: 4 }}>
        <Typography sx={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', mb: 2 }}>On this page</Typography>
        {TOC.map(t => (
          <a key={t.id} href={`#${t.id}`} style={{ display: 'block', textDecoration: 'none', padding: '3px 0' }}>
            <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', '&:hover': { color: DIM }, lineHeight: 1.5 }}>{t.label}</Typography>
          </a>
        ))}
      </Box>
    </Box>
  );
}

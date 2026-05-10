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
  { id: 'divisibility',   label: 'Divisibility' },
  { id: 'primes',         label: 'Prime Numbers' },
  { id: 'gcd-lcm',        label: 'GCD and LCM' },
  { id: 'euclidean',      label: 'Euclidean Algorithm' },
  { id: 'modular',        label: 'Modular Arithmetic' },
  { id: 'fermat',         label: "Fermat's Little Theorem" },
  { id: 'fta',            label: 'Fundamental Theorem' },
];

export default function NumberTheoryPage() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ flex: 1, minWidth: 0, px: { xs: 3, md: 6 }, py: 7 }}>
        <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>Mathematics → Number Theory</Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.1 }}>
          Number Theory
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.75, mb: 5, maxWidth: 580 }}>
          Number theory studies the integers and their properties — divisibility, primes, and modular arithmetic. Gauss called it "the queen of mathematics," and its applications range from cryptography to coding theory.
        </Typography>
        <Divider sx={{ borderColor: MUTED, mb: 5 }} />

        <H2 id="divisibility">Divisibility</H2>
        <Def title="Definition — Divisibility">
          An integer <M m="a" /> <strong>divides</strong> <M m="b" />, written <M m="a \mid b" />, if there exists an integer <M m="k" /> such that <M m="b = ak" />. We say <M m="a" /> is a <strong>divisor</strong> (or <strong>factor</strong>) of <M m="b" />.
        </Def>
        <MB m="3 \mid 12 \quad \text{since} \quad 12 = 3 \cdot 4 \qquad\qquad 5 \nmid 13 \quad \text{since no integer } k \text{ satisfies } 13 = 5k" />
        <H3>Division Algorithm</H3>
        <P>For any integers <M m="a" /> and <M m="b > 0" />, there exist unique integers <M m="q" /> (quotient) and <M m="r" /> (remainder) with <M m="0 \le r < b" /> such that:</P>
        <MB m="a = bq + r" />
        <Note>Example: dividing 17 by 5 gives <M m="17 = 5 \cdot 3 + 2" />, so <M m="q=3" />, <M m="r=2" />.</Note>

        <H2 id="primes">Prime Numbers</H2>
        <Def title="Definition — Prime">
          An integer <M m="p > 1" /> is <strong>prime</strong> if its only positive divisors are 1 and <M m="p" /> itself. An integer <M m="n > 1" /> that is not prime is <strong>composite</strong>.
        </Def>
        <P>The first few primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, …</P>
        <P>There are infinitely many primes — Euclid's proof by contradiction: assume finitely many primes <M m="p_1, p_2, \ldots, p_n" />, then <M m="N = p_1 p_2 \cdots p_n + 1" /> is divisible by none of them, contradicting the assumption.</P>
        <H3>Sieve of Eratosthenes</H3>
        <P>To find all primes up to <M m="n" />: list integers from 2 to <M m="n" />, then repeatedly cross out multiples of each unmarked number. The survivors are prime. To check primality of <M m="n" />, you only need to test divisors up to <M m="\sqrt{n}" />.</P>

        <H2 id="gcd-lcm">GCD and LCM</H2>
        <Def title="Definition — GCD">
          The <strong>greatest common divisor</strong> <M m="\gcd(a,b)" /> is the largest positive integer dividing both <M m="a" /> and <M m="b" />. If <M m="\gcd(a,b) = 1" />, the integers are called <strong>coprime</strong> (or relatively prime).
        </Def>
        <Def title="Definition — LCM">
          The <strong>least common multiple</strong> <M m="\text{lcm}(a,b)" /> is the smallest positive integer divisible by both <M m="a" /> and <M m="b" />.
        </Def>
        <P>GCD and LCM are related by:</P>
        <MB m="\gcd(a,b) \cdot \text{lcm}(a,b) = |a \cdot b|" />
        <Note>Example: <M m="\gcd(12,18)=6" />, <M m="\text{lcm}(12,18)=36" />, and <M m="6 \cdot 36 = 216 = 12 \cdot 18" />.</Note>

        <H2 id="euclidean">The Euclidean Algorithm</H2>
        <P>The <strong style={{ color: TEXT }}>Euclidean algorithm</strong> computes <M m="\gcd(a,b)" /> efficiently using repeated division. It relies on the observation:</P>
        <MB m="\gcd(a,b) = \gcd(b,\, a \bmod b)" />
        <P>Applying this repeatedly until the remainder is zero:</P>
        <MB m="\gcd(48, 18) = \gcd(18, 12) = \gcd(12, 6) = \gcd(6, 0) = 6" />
        <P>The algorithm runs in <M m="O(\log \min(a,b))" /> steps — extremely efficient even for very large integers. It is the foundation of RSA and other public-key cryptosystems.</P>

        <H2 id="modular">Modular Arithmetic</H2>
        <Def title="Definition — Congruence">
          Integers <M m="a" /> and <M m="b" /> are <strong>congruent modulo</strong> <M m="n" />, written <M m="a \equiv b \pmod{n}" />, if <M m="n \mid (a - b)" />.
        </Def>
        <MB m="17 \equiv 2 \pmod{5} \qquad \text{since } 5 \mid (17 - 2)" />
        <P>Congruence is an equivalence relation. Arithmetic operations respect it:</P>
        <MB m="a \equiv b \pmod{n} \;\text{ and }\; c \equiv d \pmod{n} \;\Rightarrow" />
        <MB m="a + c \equiv b + d \pmod{n}, \qquad ac \equiv bd \pmod{n}" />
        <Note>
          Modular arithmetic is the mathematics of clocks: on a 12-hour clock, <M m="10 + 5 = 3" /> because <M m="15 \equiv 3 \pmod{12}" />.
        </Note>

        <H2 id="fermat">Fermat's Little Theorem</H2>
        <Def title="Theorem — Fermat's Little Theorem">
          If <M m="p" /> is prime and <M m="\gcd(a, p) = 1" />, then:
          <Box sx={{ mt: 1 }}><MB m="a^{p-1} \equiv 1 \pmod{p}" /></Box>
          Equivalently, for any integer <M m="a" />: <M m="a^p \equiv a \pmod{p}" />.
        </Def>
        <P>This theorem is the cornerstone of RSA encryption. It also gives a fast way to compute modular inverses: since <M m="a^{p-1} \equiv 1" />, the inverse of <M m="a" /> modulo <M m="p" /> is <M m="a^{p-2} \bmod p" />.</P>
        <Note>Example: <M m="p = 7,\ a = 3" />. Then <M m="3^6 = 729 = 7 \cdot 104 + 1" />, so <M m="3^6 \equiv 1 \pmod 7" />. ✓</Note>

        <H2 id="fta">Fundamental Theorem of Arithmetic</H2>
        <Def title="Theorem — Fundamental Theorem of Arithmetic">
          Every integer <M m="n > 1" /> can be written as a product of primes in exactly one way, up to ordering:
          <Box sx={{ mt: 1 }}><MB m="n = p_1^{e_1}\, p_2^{e_2} \cdots p_k^{e_k}" /></Box>
          where <M m="p_1 < p_2 < \cdots < p_k" /> are primes and <M m="e_i \geq 1" />.
        </Def>
        <MB m="360 = 2^3 \cdot 3^2 \cdot 5^1 \qquad 1001 = 7 \cdot 11 \cdot 13" />
        <P>This uniqueness is what makes primes the "atoms" of number theory. From the prime factorizations of <M m="a" /> and <M m="b" />, one can directly read off <M m="\gcd" /> and <M m="\text{lcm}" />: take the minimum (or maximum) exponent for each prime.</P>

        <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          Next: <a href="/math/calculus" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Calculus →</a>
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

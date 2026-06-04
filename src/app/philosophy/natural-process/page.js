"use client";

import { Box, Typography, Divider } from '@mui/material';

const TEXT   = '#e2e8f0';
const DIM    = '#94a3b8';
const ACCENT = '#60a5fa';
const MUTED  = 'rgba(255,255,255,0.12)';

function P({ children }) {
  return <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.85, mb: 2.5 }}>{children}</Typography>;
}
function H2({ id, children }) {
  return <Typography id={id} variant="h2" sx={{ fontSize: '1.4rem', fontWeight: 700, color: TEXT, mt: 6, mb: 2, scrollMarginTop: '80px' }}>{children}</Typography>;
}
function H3({ children }) {
  return <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 600, color: TEXT, mt: 4, mb: 1.5, letterSpacing: 0.3 }}>{children}</Typography>;
}
function Pullout({ children }) {
  return (
    <Box sx={{ my: 3, p: 3, borderRadius: '8px', background: 'rgba(96,165,250,0.06)', borderLeft: `3px solid ${ACCENT}` }}>
      <Box sx={{ color: DIM, fontSize: 15, lineHeight: 1.85 }}>{children}</Box>
    </Box>
  );
}
function Note({ label = 'Note', children }) {
  return (
    <Box sx={{ my: 2.5, p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      {label && <Typography sx={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', mb: 1 }}>{label}</Typography>}
      <Typography sx={{ color: DIM, fontSize: 14, lineHeight: 1.8 }}>{children}</Typography>
    </Box>
  );
}
function Thinker({ name, dates, children }) {
  return (
    <Box sx={{ my: 2.5, p: 2.5, borderRadius: '8px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: TEXT }}>{name}</Typography>
        {dates && <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>{dates}</Typography>}
      </Box>
      <Typography sx={{ color: DIM, fontSize: 14, lineHeight: 1.75 }}>{children}</Typography>
    </Box>
  );
}

// Blurred yin-yang SVG
function YinYang() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
      <svg width="160" height="160" viewBox="0 0 160 160" style={{ overflow: 'visible' }}>
        <defs>
          <filter id="blur-edge" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blurred" />
            <feComposite in="SourceGraphic" in2="blurred" operator="over" />
          </filter>
          <filter id="soft-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="dark-half" cx="50%" cy="25%" r="60%">
            <stop offset="0%" stopColor="#1a2744" />
            <stop offset="100%" stopColor="#070d1a" />
          </radialGradient>
          <radialGradient id="light-half" cx="50%" cy="75%" r="60%">
            <stop offset="0%" stopColor="#dde8f5" />
            <stop offset="100%" stopColor="#a8c4e0" />
          </radialGradient>
        </defs>

        {/* Outer glow ring */}
        <circle cx="80" cy="80" r="72" fill="none" stroke="#60a5fa" strokeWidth="0.5" opacity="0.25" filter="url(#soft-glow)" />

        {/* Dark half (top) */}
        <path
          d="M80,8 A72,72 0 0,1 80,152 A36,36 0 0,1 80,80 A36,36 0 0,0 80,8 Z"
          fill="url(#dark-half)"
          filter="url(#blur-edge)"
        />

        {/* Light half (bottom) */}
        <path
          d="M80,8 A72,72 0 0,0 80,152 A36,36 0 0,0 80,80 A36,36 0 0,1 80,8 Z"
          fill="url(#light-half)"
          filter="url(#blur-edge)"
        />

        {/* Small dot — light in dark */}
        <circle cx="80" cy="44" r="10" fill="#c8ddf0" opacity="0.85" filter="url(#blur-edge)" />
        {/* Small dot — dark in light */}
        <circle cx="80" cy="116" r="10" fill="#1a2744" opacity="0.85" filter="url(#blur-edge)" />

        {/* Outer border — faint */}
        <circle cx="80" cy="80" r="72" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </svg>
    </Box>
  );
}

const TOC = [
  { id: 'balancing',   label: 'The Balancing Principle' },
  { id: 'two-kinds',   label: 'Two Kinds of Balancing' },
  { id: 'hidden',      label: 'The Hidden Variable' },
  { id: 'lineage',     label: 'Philosophical Lineage' },
  { id: 'threads',     label: 'Connecting Threads' },
];

export default function NaturalProcessPage() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ flex: 1, minWidth: 0, px: { xs: 3, md: 6 }, py: 7 }}>

        <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>Philosophy → Natural Process</Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.1 }}>
          Natural Process
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.75, mb: 5, maxWidth: 600 }}>
          The argument that balancing — the tendency of systems to resolve differences —
          is not a metaphor but the fundamental mechanism underlying everything from
          chemistry to biology to inference.
        </Typography>
        <Divider sx={{ borderColor: MUTED, mb: 5 }} />

        <YinYang />

        <H2 id="balancing">The Balancing Principle</H2>
        <P>
          Pour hot water into cold water. Before you can observe it, something is already happening:
          heat flows from where there is more of it to where there is less. The system moves —
          without instruction, without awareness — toward a new temperature somewhere between the two.
          This is not incidental. It is what the universe does.
        </P>
        <P>
          The same pattern appears at every scale. High pressure flows toward low pressure.
          Concentrated solutes diffuse toward dilute regions. A charged particle moves down a
          voltage gradient. Light bends toward the path of least time. In each case, a difference
          exists, and nature acts to resolve it.
        </P>
        <Pullout>
          The claim here is not that nature <em>tries</em> to balance — it is that the structure
          of physical law is such that differences drive flows, and flows reduce differences.
          Balancing is not imposed on nature. It is what nature <em>is</em>.
        </Pullout>
        <P>
          The visual intuition for this is a yin-yang — but blurred. Not the sharp symbol of
          discrete opposites, but a gradient: the boundary between hot and cold, between high
          and low, between before and after. The interesting thing is always happening at that
          boundary.
        </P>

        <H2 id="two-kinds">Two Kinds of Balancing</H2>
        <P>
          Not all balancing is the same. Consider two examples at opposite ends of a spectrum.
        </P>
        <H3>Simple balancing: table salt</H3>
        <P>
          Sodium (Na) and chloride (Cl⁻) in solution are drawn together by electrostatic force
          and form NaCl. The outcome is entirely determined by the geometry of electron shells.
          Given the two ions and the conditions, there is only one possible result.
          No state needs to be read. No comparison is made. No conditional action is taken.
          This is balancing in its simplest form — a gradient of electrostatic potential,
          resolved immediately.
        </P>
        <H3>Complex balancing: the pancreas</H3>
        <P>
          When blood glucose rises after a meal, the pancreas releases insulin. The beta cells
          of the pancreas do not simply react to glucose the way Na reacts to Cl⁻. They:
        </P>
        <Box component="ol" sx={{ color: DIM, fontSize: 15, lineHeight: 2, pl: 3, mb: 2.5 }}>
          <li>Read the current glucose level through GLUT2 transporter uptake</li>
          <li>Metabolize the glucose, raising the intracellular ATP/ADP ratio</li>
          <li>Close ATP-sensitive potassium channels, depolarizing the cell membrane</li>
          <li>Open voltage-gated calcium channels in response to depolarization</li>
          <li>Release insulin vesicles proportionally to calcium influx</li>
        </Box>
        <P>
          Every individual step in this cascade is chemistry. Each one is a small, local balancing
          act. But the <em>system as a whole</em> does something that NaCl formation does not:
          it reads a state, compares it against a reference, and acts conditionally and
          proportionally.
        </P>
        <Pullout>
          The difference between NaCl and insulin is not a difference in <em>kind</em> —
          both are balancing processes — but in <em>information content</em>. The NaCl reaction
          has zero bits of information to process. The insulin response requires reading a
          continuous variable and producing a graded output. That is the boundary where
          balancing starts to look like intelligence.
        </Pullout>

        <H2 id="hidden">The Hidden Variable</H2>
        <P>
          If every step in the insulin cascade is simple chemistry, what makes the whole thing
          look purposeful? What is the "global monitor" that ensures more glucose triggers more
          insulin — not by coincidence, but reliably, proportionally, across billions of cells?
        </P>
        <P>
          The answer is not a separate supervisory layer. The monitor <em>is</em> the organization
          of the system. Three ideas help make this precise.
        </P>
        <Note label="Kant — Natural Purposes">
          In the <em>Critique of Judgment</em> (1790), Kant argued that organisms are
          "natural purposes": the parts exist for the sake of the whole, and the whole exists
          through the parts. A clock is assembled by an external designer; a cell produces
          and repairs itself. You cannot fully explain biological organization by listing
          the components, because the <em>arrangement</em> is doing explanatory work
          that mechanism cannot reach alone.
        </Note>
        <Note label="Maturana &amp; Varela — Autopoiesis">
          In the 1970s, biologists Humberto Maturana and Francisco Varela named this property
          <em> autopoiesis</em>: self-production. A living system does not merely respond to
          gradients — it continuously produces the very boundary that defines it as a system.
          The pancreas is not following a rule about glucose; it is part of a self-maintaining
          network where the response <em>is</em> the organism sustaining its own coherence.
          The "monitor" is distributed across the entire network's self-referential structure.
        </Note>
        <Note label="Self-Reference as the Hidden Variable">
          The NaCl reaction cannot refer to itself. The pancreas, embedded in a body with
          a homeostatic setpoint, can. The hidden variable is <strong style={{ color: TEXT }}>self-reference</strong>:
          the capacity of a system to model its own state and act on the discrepancy.
          Simple balancing has no self-model. Complex balancing — the kind that looks like
          intelligence — does.
        </Note>

        <H2 id="lineage">Philosophical Lineage</H2>
        <P>
          This is not a new idea. It is one of the oldest — but it keeps being rediscovered
          in new languages.
        </P>
        <Thinker name="Heraclitus" dates="c. 535–475 BC">
          Everything flows (<em>panta rhei</em>). Fire — not as a substance but as a process
          of constant exchange — is the prime element. Opposites are not separate things;
          they are two poles of a single tension. Hot and cold are not two objects that meet:
          they are two ends of a gradient that reality is perpetually resolving. The governing
          principle, <em>logos</em>, is closer to "the ratio in which things mix" than to
          any notion of mind.
        </Thinker>
        <Thinker name="Anaximander" dates="c. 610–546 BC">
          Things arise from the <em>apeiron</em> — the boundless, the indefinite — and return
          to it as penance for having differentiated. Separation itself is a kind of transgression
          that nature corrects. The hot-water-into-cold-water example is almost literally
          Anaximander: differentiation is a temporary injustice; balancing is justice restored.
        </Thinker>
        <Thinker name="Alfred North Whitehead" dates="1861–1947">
          In <em>Process and Reality</em> (1929), Whitehead built a complete metaphysics around
          the primacy of events over substances. Every event in the universe — from a photon
          interaction to a human thought — is an act of <em>prehension</em>: something taking
          in its environment and responding. Reality consists not of things that exist but of
          occasions that happen. The "intelligence" in the insulin response is not separate
          from the chemistry; it is the relational structure of the prehensive occasions
          that constitute the pancreas.
        </Thinker>
        <Thinker name="Ilya Prigogine" dates="1917–2003">
          Nobel laureate in chemistry for his work on <em>dissipative structures</em>:
          complex order that arises and is maintained far from equilibrium. The crucial nuance
          Prigogine adds: perfect equilibrium is dead. Life exists precisely because it
          maintains a productive imbalance — consuming energy to sustain local order while
          exporting disorder. The glucose/insulin loop is not reaching equilibrium; it is a
          control system that keeps the body <em>away</em> from equilibrium. Balancing
          at one level sustains disequilibrium at a higher level. That is what life does.
        </Thinker>

        <H2 id="threads">Connecting Threads</H2>
        <P>
          The Natural Process framing connects two projects that otherwise look unrelated.
        </P>
        <H3>How the Body Works</H3>
        <P>
          The pages in my{' '}
          <a href="https://health.marinkokona.com" target="_blank" rel="noreferrer" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>health</a>{' '}
          site describe human physiology from the ground up. Each system — endocrine, cardiovascular,
          renal — is, at its core, a stack of balancing loops. The glucose/insulin system is
          the most legible. But the same pattern runs through blood pressure regulation,
          temperature homeostasis, and immune response. Physiology is applied Natural Process.
        </P>
        <H3>Bayesian Networks</H3>
        <P>
          Bayes' theorem is itself a balancing equation. The prior probability P(A) is the
          current state of belief — where the water level stands. Evidence B is a disturbance:
          new information injected into the system. The posterior P(A|B) is the new equilibrium
          the system reaches after the disturbance propagates.
        </P>
        <P>
          In a Bayesian network, inference is computed by <em>belief propagation</em>:
          messages passed between nodes until the network reaches a consistent state. This
          is not a metaphor for fluid dynamics — it is the same mathematics, expressed
          in probability rather than pressure. The pipe width is the conditional probability.
          The water level is the marginal belief. Inference is the network relaxing to
          equilibrium after evidence is introduced.
        </P>
        <Pullout>
          The deeper suggestion: Bayes' theorem works because it models the natural balancing
          process that any rational agent — or any physical system — undergoes when new
          information (a gradient) is introduced. Probability theory is not invented. It is
          discovered, because it describes what nature already does.
        </Pullout>

        <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          Next: <a href="/philosophy" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Philosophy index →</a>
        </Typography>

      </Box>

      {/* Right TOC */}
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

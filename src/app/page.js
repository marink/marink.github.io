"use client";

import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Chip, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const BG      = '#070d1a';
const ACCENT  = '#60a5fa';
const DIM     = '#94a3b8';
const TEXT    = '#e2e8f0';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BD = 'rgba(255,255,255,0.09)';
const PER_CARD_MS = 6600; // ms per card

// Cycles activeIndex 0→N-1 on a fixed interval
function useSequentialActive(count) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % count), PER_CARD_MS);
    return () => clearInterval(id);
  }, [count]);
  return active;
}

// ── Network canvas (fixed, full viewport) ─────────────────────────────────────

const NODES = [
  { x: 0.05, y: 0.12 }, { x: 0.14, y: 0.48 }, { x: 0.22, y: 0.78 },
  { x: 0.30, y: 0.28 }, { x: 0.40, y: 0.62 }, { x: 0.48, y: 0.15 },
  { x: 0.54, y: 0.42 }, { x: 0.58, y: 0.80 }, { x: 0.66, y: 0.22 },
  { x: 0.70, y: 0.58 }, { x: 0.78, y: 0.38 }, { x: 0.85, y: 0.70 },
  { x: 0.92, y: 0.18 }, { x: 0.36, y: 0.92 }, { x: 0.12, y: 0.92 },
  { x: 0.95, y: 0.52 }, { x: 0.50, y: 0.95 },
];

const EDGES = [
  [0,3],[0,5],[3,6],[5,6],[5,8],[3,4],[6,9],[8,10],[8,12],
  [6,7],[4,7],[9,11],[10,11],[10,12],[1,2],[1,4],[2,14],[4,13],
  [7,13],[11,15],[12,15],[9,16],[13,16],
];

function NetworkCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId, t = 0;

    const signals = EDGES.map((_, i) => ({
      progress: i / EDGES.length,
      speed: 0.003 + Math.random() * 0.003,
    }));
    const bobs = NODES.map(() => ({
      phase: Math.random() * Math.PI * 2,
      amp:   0.008 + Math.random() * 0.008,
      freq:  0.25  + Math.random() * 0.25,
    }));

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function pos(i) {
      const b = bobs[i], n = NODES[i];
      return {
        x: n.x * canvas.width,
        y: (n.y + Math.sin(t * b.freq + b.phase) * b.amp) * canvas.height,
      };
    }

    function drawEdge(x1, y1, x2, y2) {
      const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
      const ux=dx/len, uy=dy/len, r=5, pad=10;
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = ACCENT;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x1+ux*r, y1+uy*r); ctx.lineTo(x2-ux*(r+pad), y2-uy*(r+pad)); ctx.stroke();
      const angle = Math.atan2(dy, dx);
      ctx.globalAlpha = 0.28;
      ctx.fillStyle = ACCENT;
      ctx.beginPath();
      ctx.moveTo(x2-ux*r, y2-uy*r);
      ctx.lineTo(x2-ux*r - 8*Math.cos(angle-0.4), y2-uy*r - 8*Math.sin(angle-0.4));
      ctx.lineTo(x2-ux*r - 8*Math.cos(angle+0.4), y2-uy*r - 8*Math.sin(angle+0.4));
      ctx.closePath(); ctx.fill();
    }

    function drawSignal(x1, y1, x2, y2, p) {
      const px=x1+(x2-x1)*p, py=y1+(y2-y1)*p;
      const g = ctx.createRadialGradient(px,py,0,px,py,9);
      g.addColorStop(0, 'rgba(96,165,250,0.85)');
      g.addColorStop(1, 'rgba(96,165,250,0)');
      ctx.globalAlpha = 1; ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(px,py,9,0,Math.PI*2); ctx.fill();
    }

    function frame() {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      EDGES.forEach(([a,b], i) => {
        const pa=pos(a), pb=pos(b);
        drawEdge(pa.x, pa.y, pb.x, pb.y);
        const sig = signals[i];
        sig.progress = (sig.progress + sig.speed) % 1;
        drawSignal(pa.x, pa.y, pb.x, pb.y, sig.progress);
      });
      NODES.forEach((_,i) => {
        const {x,y} = pos(i);
        const glow = ctx.createRadialGradient(x,y,0,x,y,20);
        glow.addColorStop(0, 'rgba(96,165,250,0.15)');
        glow.addColorStop(1, 'rgba(96,165,250,0)');
        ctx.globalAlpha = 1; ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(x,y,20,0,Math.PI*2); ctx.fill();
        ctx.globalAlpha = 0.6; ctx.fillStyle = ACCENT;
        ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(frame);
    }
    frame();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', inset: 0,
      width: '100vw', height: '100vh',
      pointerEvents: 'none', zIndex: 0,
    }} />
  );
}

// ── Border electron — canvas smooth gradient along the real card border ──────

const TRAIL_LEN = 220; // trail length in perimeter pixels
const TRAIL_STEPS = 60; // number of tiny strokes — more = smoother
const CORNER_R = 8;

function perimPoint(dist, w, h) {
  const R = CORNER_R;
  const perim = 2 * (w + h) - (8 - 2 * Math.PI) * R;
  dist = ((dist % perim) + perim) % perim;
  const segs = [
    { len: w - 2*R, type: 'l', x0: R,   y0: 0,   dx:  1, dy:  0 },
    { len: Math.PI/2*R, type: 'a', cx: w-R, cy: R,   sa: -Math.PI/2 },
    { len: h - 2*R, type: 'l', x0: w,   y0: R,   dx:  0, dy:  1 },
    { len: Math.PI/2*R, type: 'a', cx: w-R, cy: h-R, sa:  0 },
    { len: w - 2*R, type: 'l', x0: w-R, y0: h,   dx: -1, dy:  0 },
    { len: Math.PI/2*R, type: 'a', cx: R,   cy: h-R, sa:  Math.PI/2 },
    { len: h - 2*R, type: 'l', x0: 0,   y0: h-R, dx:  0, dy: -1 },
    { len: Math.PI/2*R, type: 'a', cx: R,   cy: R,   sa:  Math.PI },
  ];
  let rem = dist;
  for (const s of segs) {
    if (rem <= s.len) {
      if (s.type === 'l') return [s.x0 + s.dx * rem, s.y0 + s.dy * rem];
      const angle = s.sa + (rem / s.len) * Math.PI / 2;
      return [s.cx + R * Math.cos(angle), s.cy + R * Math.sin(angle)];
    }
    rem -= s.len;
  }
  return [R, 0];
}

function BorderElectron({ children, isActive }) {
  const wrapRef   = useRef(null);
  const canvasRef = useRef(null);
  const [dims, setDims] = useState(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setDims({ w: el.offsetWidth, h: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dims) return;
    const dpr = window.devicePixelRatio || 1;
    const { w, h } = dims;
    canvas.width  = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    if (!isActive) { ctx.clearRect(0, 0, w, h); return; }

    const perim = 2 * (w + h) - (8 - 2 * Math.PI) * CORNER_R;
    const start = performance.now();
    let raf;

    function tick(now) {
      const elapsed = (now - start) / PER_CARD_MS;
      if (elapsed >= 1) { ctx.clearRect(0, 0, w, h); return; }

      const head = elapsed * perim;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < TRAIL_STEPS; i++) {
        const t0 = i / TRAIL_STEPS;
        const t1 = (i + 1) / TRAIL_STEPS;
        const [x0, y0] = perimPoint(head - (1 - t0) * TRAIL_LEN, w, h);
        const [x1, y1] = perimPoint(head - (1 - t1) * TRAIL_LEN, w, h);

        // quadratic alpha ramp: near-zero at tail, peaks just before head
        const alpha = Math.pow(t0, 1.8) * 0.9;
        // color sweeps amber → bright gold → near-white
        const g = Math.round(100 + t0 * 155); // 100 → 255
        const b = Math.round(t0 * t0 * 60);   // 0 → 60
        const lw = 0.3 + t0 * 0.85;

        ctx.strokeStyle = `rgba(255,${g},${b},${alpha})`;
        ctx.lineWidth   = lw;
        ctx.lineCap     = 'round';
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      const c = canvasRef.current;
      if (c) c.getContext('2d').clearRect(0, 0, c.width, c.height);
    };
  }, [isActive, dims]);

  return (
    <Box ref={wrapRef} sx={{ position: 'relative', border: `1px solid ${CARD_BD}`, borderRadius: '8px' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: '-1px', left: '-1px',
          width: 'calc(100% + 2px)', height: 'calc(100% + 2px)',
          pointerEvents: 'none', zIndex: 2,
        }}
      />
      {children}
    </Box>
  );
}

// ── Project cards ─────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: 'MachineLearning.js',
    url: 'https://machinelearning.js.org',
    tags: ['JavaScript', 'AI/ML'],
    desc: 'Open-source machine learning library for JavaScript — Naive Bayes, Decision Trees, Neural Networks, K-Means — running entirely in the browser or Node.js.',
  },
  {
    title: 'Bayesian Networks',
    url: 'https://probabilistic.net',
    tags: ['Probability', 'Graphical Models'],
    desc: 'Reference site for Bayesian Networks — a probabilistic graphical model of directed acyclic graphs representing conditional probability relationships between random variables.',
  },
  {
    title: 'How the Human Body Works',
    url: 'https://health.marinkokona.com',
    tags: ['Biology', 'Health'],
    desc: 'Plain-language explanations of human anatomy and physiology — how organs, systems, and processes work, written for curious non-specialists.',
  },
  {
    title: 'Federal Income Tax',
    url: 'https://marink.github.io/federal-income-tax',
    tags: ['Finance', 'JavaScript'],
    desc: 'Interactive U.S. federal income tax calculator. Computes marginal and effective rates across brackets, visualizes liability across filing statuses.',
  },
  {
    title: 'Mathematics',
    url: '/math',
    tags: ['Math', 'Sets'],
    desc: 'Mathematical concepts from first principles — set theory, logic, and the foundations underpinning computer science and probability.',
    internal: true,
  },
];

const TAG_COLORS = {
  'JavaScript':      '#facc15',
  'AI/ML':           '#4ade80',
  'Probability':     '#c084fc',
  'Graphical Models':'#a78bfa',
  'Biology':         '#34d399',
  'Health':          '#2dd4bf',
  'Finance':         '#fb923c',
  'Math':            '#60a5fa',
  'Sets':            '#38bdf8',
};

function ProjectCard({ title, url, tags, desc, internal, isActive = false }) {
  return (
    <BorderElectron isActive={isActive}>
    <Box sx={{
      bgcolor: CARD_BG,
      borderRadius: '7px', p: 2.5,
      display: 'flex', flexDirection: 'column', gap: 1.5,
      backdropFilter: 'blur(4px)',
    }}>
      <Typography fontWeight={700} sx={{ color: TEXT, fontSize: '0.95rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {tags.map(tag => (
          <Chip key={tag} label={tag} size="small" sx={{
            fontSize: 11, height: 20,
            bgcolor: TAG_COLORS[tag] ? `${TAG_COLORS[tag]}18` : 'rgba(255,255,255,0.06)',
            color: TAG_COLORS[tag] ?? DIM,
            border: `1px solid ${TAG_COLORS[tag] ? `${TAG_COLORS[tag]}40` : 'rgba(255,255,255,0.1)'}`,
          }} />
        ))}
      </Box>
      <Typography variant="body2" sx={{ flexGrow: 1, lineHeight: 1.65, color: DIM }}>
        {desc}
      </Typography>
      <a
        href={url}
        target={internal ? '_self' : '_blank'}
        rel={internal ? undefined : 'noreferrer'}
        style={{ color: ACCENT, fontSize: 13, textDecoration: 'none', fontWeight: 500 }}
      >
        Visit site →
      </a>
    </Box>
    </BorderElectron>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const activeCard = useSequentialActive(PROJECTS.length);
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: BG, color: TEXT, fontFamily: 'Helvetica Neue, Arial, sans-serif', position: 'relative' }}>

      <NetworkCanvas />

      <Box sx={{ position: 'relative', zIndex: 1 }}>

        {/* Ghost nav */}
        <Box sx={{
          position: 'fixed', top: 0, left: 0, right: 0,
          px: { xs: 4, md: 8 }, py: 2.5,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          zIndex: 10,
        }}>
          <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>
            mk
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <a href="#projects" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, textDecoration: 'none' }}>Projects</a>
            <a href="#about"    style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, textDecoration: 'none' }}>About</a>
            <a href="https://github.com/marink" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.35)', display: 'flex' }}>
              <GitHubIcon sx={{ fontSize: 17 }} />
            </a>
          </Box>
        </Box>

        {/* Hero — symmetric padding: same gap above title as below buttons */}
        <Box sx={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: '18vh', md: '20vh' },
          pb: { xs: 'calc(18vh - 100px)', md: 'calc(20vh - 100px)' },
        }}>
          <Box sx={{ textAlign: 'center', px: { xs: 3, md: 6 } }}>
            <Typography variant="h1" sx={{
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.6rem', lg: '4.2rem' },
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: { xs: '-0.5px', md: '-1.5px' },
              color: TEXT, mb: 2.5,
              whiteSpace: { xs: 'normal', lg: 'nowrap' },
            }}>
              Philosophy, Science &amp; Free Thinking
            </Typography>

            <Typography sx={{ color: DIM, fontSize: { xs: 15, md: 17 }, lineHeight: 1.75, maxWidth: 480, mx: 'auto', mb: 4 }}>
              Software engineer. I build things at the intersection of data, mathematics,
              and software — and occasionally write about the ideas behind them.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <a href="#projects" style={{
                padding: '10px 24px', borderRadius: 6,
                background: ACCENT, color: '#070d1a',
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
              }}>
                Explore projects
              </a>
              <a href="#about" style={{
                padding: '10px 24px', borderRadius: 6,
                border: '1px solid rgba(255,255,255,0.12)', color: DIM,
                fontWeight: 400, fontSize: 14, textDecoration: 'none',
              }}>
                About
              </a>
            </Box>
          </Box>
        </Box>

        {/* Projects — sweep beam travels left→right across all cards */}
        <Container maxWidth="lg" sx={{ pt: 2, pb: 8 }}>
          <Box id="projects" sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', mb: 1 }}>
              Projects
            </Typography>
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)' }} />
          </Box>

          {/* Each card gets its own sweep, staggered so the light travels card→card */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' },
            gap: 2.5,
          }}>
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} {...p} isActive={activeCard === i} />
            ))}
          </Box>

          {/* About */}
          <Box id="about" sx={{ mt: 10 }}>
            <Typography sx={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', mb: 1 }}>
              About
            </Typography>
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mb: 3 }} />
            <Typography sx={{ maxWidth: 580, lineHeight: 1.8, color: DIM, fontSize: 15 }}>
              I'm a software engineer with a background in mathematics and a long-standing interest
              in machine learning, probability theory, and the philosophy of science. These sites
              are personal projects I've built and maintained since 2009 — mostly as a way to turn
              things I find fascinating into something shareable.
            </Typography>
            <Typography sx={{ maxWidth: 580, lineHeight: 1.8, color: DIM, fontSize: 15, mt: 2 }}>
              Reach me at{' '}
              <code style={{ background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: 3, color: ACCENT }}>mar1n</code>
              {' '}at Yahoo!
            </Typography>
          </Box>
        </Container>

        {/* Footer */}
        <Box component="footer" sx={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          py: 3, px: { xs: 4, md: 10 },
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2,
        }}>
          <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            © 2009–2026 Marin Kokona
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <a href="https://machinelearning.js.org" target="_blank" rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13, textDecoration: 'none' }}>
              MachineLearning.js
            </a>
            <a href="https://probabilistic.net" target="_blank" rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, textDecoration: 'none' }}>
              probabilistic.net
            </a>
            <a href="https://github.com/marink" target="_blank" rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
              <GitHubIcon sx={{ fontSize: 15 }} /> GitHub
            </a>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

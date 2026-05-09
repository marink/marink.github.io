"use client";

import { useState, useEffect } from 'react';
import {
  Box, AppBar, Toolbar, Typography, Container, Chip, Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const NAVY       = '#002f6c';
const NAVY_LIGHT = '#1a4a8a';
const NAVY_TEXT  = '#a8c4e8';
const LINK_COLOR = '#428bca';

const PROJECTS = [
  {
    title: 'MachineLearning.js',
    url: 'https://machinelearning.js.org',
    tags: ['JavaScript', 'AI/ML'],
    desc: 'Open-source machine learning library for JavaScript. Implements core algorithms — Naive Bayes, Decision Trees, Neural Networks, K-Means — running entirely in the browser or Node.js.',
  },
  {
    title: 'Bayesian Networks',
    url: 'https://probabilistic.net',
    tags: ['Probability', 'GraphicalModels'],
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
    desc: 'Interactive U.S. federal income tax calculator. Computes marginal and effective rates across brackets, visualizes tax liability, and supports multiple filing statuses.',
  },
  {
    title: 'Mathematics',
    url: '/math',
    tags: ['Math', 'Sets'],
    desc: 'Mathematical concepts explained from first principles — set theory, logic, and the foundations that underpin computer science and probability.',
    internal: true,
  },
];

const TAG_COLORS = {
  'JavaScript': '#f7df1e',
  'AI/ML':      '#4caf50',
  'Probability':'#9c27b0',
  'GraphicalModels': '#673ab7',
  'Biology':    '#009688',
  'Health':     '#26a69a',
  'Finance':    '#ff9800',
  'Math':       '#2196f3',
  'Sets':       '#1976d2',
};

function ProjectCard({ title, url, tags, desc, internal }) {
  return (
    <Box sx={{
      border: '1px solid #e5e5e5',
      borderRadius: 2,
      p: 2.5,
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
      transition: 'box-shadow 0.15s',
      '&:hover': { boxShadow: '0 2px 12px rgba(0,47,108,0.12)' },
    }}>
      <Typography variant="h6" fontWeight={700} sx={{ color: NAVY, fontSize: '1rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {tags.map(tag => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              fontSize: 11,
              height: 20,
              bgcolor: TAG_COLORS[tag] ? `${TAG_COLORS[tag]}22` : '#f5f5f5',
              color: '#555',
              border: `1px solid ${TAG_COLORS[tag] ? `${TAG_COLORS[tag]}66` : '#ddd'}`,
            }}
          />
        ))}
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.6 }}>
        {desc}
      </Typography>
      <a
        href={url}
        target={internal ? '_self' : '_blank'}
        rel={internal ? undefined : 'noreferrer'}
        style={{ color: LINK_COLOR, fontSize: 13, textDecoration: 'none', fontWeight: 500 }}
      >
        Visit site →
      </a>
    </Box>
  );
}

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>

      {/* Navbar */}
      <AppBar position="sticky" elevation={1} sx={{ bgcolor: NAVY }}>
        <Toolbar variant="dense" sx={{ minHeight: '50px !important' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, flexGrow: 1, color: '#fff', letterSpacing: 0.5 }}>
            Marin Kokona
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <a href="#projects" style={{ color: NAVY_TEXT, fontSize: 14, textDecoration: 'none' }}>Projects</a>
            <a href="#about"    style={{ color: NAVY_TEXT, fontSize: 14, textDecoration: 'none' }}>About</a>
            <a href="https://github.com/marink" target="_blank" rel="noreferrer"
               style={{ color: NAVY_TEXT, display: 'flex', alignItems: 'center', gap: 4 }}>
              <GitHubIcon sx={{ fontSize: 18 }} />
            </a>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero */}
      <Box sx={{
        background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_LIGHT} 100%)`,
        color: '#fff',
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 8 },
      }}>
        <Box sx={{ maxWidth: 720, mx: 'auto' }}>
          <Typography variant="h3" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Philosophy, Science &amp; Free Thinking
          </Typography>
          <Typography variant="body1" sx={{ color: NAVY_TEXT, maxWidth: 560, lineHeight: 1.7, mb: 3 }}>
            Software engineer at MassMutual. I build things at the intersection of data, mathematics,
            and software — and occasionally write about the ideas behind them.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              display: 'inline-block', padding: '8px 20px',
              background: '#fff', color: NAVY, borderRadius: 4,
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}>
              Explore projects
            </a>
            <a href="https://github.com/marink" target="_blank" rel="noreferrer" style={{
              display: 'inline-block', padding: '8px 20px',
              border: `1px solid ${NAVY_TEXT}`, color: NAVY_TEXT, borderRadius: 4,
              fontWeight: 400, fontSize: 14, textDecoration: 'none',
            }}>
              GitHub
            </a>
          </Box>
        </Box>
      </Box>

      {/* Projects */}
      <Container maxWidth="lg" sx={{ py: 6, flexGrow: 1 }}>
        <Box id="projects" sx={{ mb: 1 }}>
          <Typography variant="h5" fontWeight={700} sx={{ color: NAVY, mb: 0.5 }}>
            Projects
          </Typography>
          <Divider sx={{ mb: 3 }} />
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
        }}>
          {PROJECTS.map(p => <ProjectCard key={p.title} {...p} />)}
        </Box>

        {/* About */}
        <Box id="about" sx={{ mt: 7 }}>
          <Typography variant="h5" fontWeight={700} sx={{ color: NAVY, mb: 0.5 }}>
            About
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body1" sx={{ maxWidth: 640, lineHeight: 1.7, color: '#444' }}>
            I'm a software engineer with a background in mathematics and a long-standing interest
            in machine learning, probability theory, and the philosophy of science. These sites
            are personal projects I've built and maintained since 2009 — mostly as a way to turn
            things I find fascinating into something shareable.
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 640, lineHeight: 1.7, color: '#444', mt: 2 }}>
            For questions or collaborations, reach me at{' '}
            <code style={{ background: '#f5f5f5', padding: '2px 5px', borderRadius: 3, color: NAVY }}>mar1n</code>
            {' '}at Yahoo!
          </Typography>
        </Box>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{
        borderTop: '1px solid #e5e5e5',
        bgcolor: '#f5f5f5',
        py: 3,
        px: { xs: 3, md: 8 },
      }}>
        <Box sx={{ maxWidth: 960, mx: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © 2009–2026 Marin Kokona
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="https://machinelearning.js.org" target="_blank" rel="noreferrer"
              style={{ color: NAVY, fontSize: 13, textDecoration: 'none' }}>
              MachineLearning.js
            </a>
            <a href="https://probabilistic.net" target="_blank" rel="noreferrer"
              style={{ color: '#999', fontSize: 13, textDecoration: 'none' }}>
              probabilistic.net
            </a>
            <a href="https://github.com/marink" target="_blank" rel="noreferrer"
              style={{ color: '#999', fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
              <GitHubIcon sx={{ fontSize: 16 }} /> GitHub
            </a>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

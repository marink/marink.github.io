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
  { id: 'vectors',     label: 'Vectors' },
  { id: 'matrices',    label: 'Matrices' },
  { id: 'operations',  label: 'Matrix Operations' },
  { id: 'determinant', label: 'Determinants' },
  { id: 'systems',     label: 'Linear Systems' },
  { id: 'eigenvalues', label: 'Eigenvalues & Eigenvectors' },
];

export default function LinearAlgebraPage() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ flex: 1, minWidth: 0, px: { xs: 3, md: 6 }, py: 7 }}>
        <Typography sx={{ fontSize: 12, color: DIM, mb: 1 }}>Mathematics → Linear Algebra</Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 800, color: TEXT, mb: 1.5, lineHeight: 1.1 }}>
          Linear Algebra
        </Typography>
        <Typography sx={{ color: DIM, fontSize: 15, lineHeight: 1.75, mb: 5, maxWidth: 580 }}>
          Linear algebra is the study of vectors, matrices, and linear transformations. It is the language of machine learning, computer graphics, physics, and data science — arguably the most practically important branch of mathematics.
        </Typography>
        <Divider sx={{ borderColor: MUTED, mb: 5 }} />

        <H2 id="vectors">Vectors</H2>
        <P>A <strong style={{ color: TEXT }}>vector</strong> in <M m="\mathbb{R}^n" /> is an ordered list of <M m="n" /> real numbers, written as a column:</P>
        <MB m="\mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}" />
        <H3>Operations</H3>
        <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { name: 'Addition',         eq: '\\mathbf{u} + \\mathbf{v} = (u_1+v_1,\\ u_2+v_2,\\ \\ldots)' },
            { name: 'Scalar multiplication', eq: 'c\\mathbf{v} = (cv_1,\\ cv_2,\\ \\ldots)' },
            { name: 'Dot product',      eq: '\\mathbf{u} \\cdot \\mathbf{v} = \\sum_{i=1}^n u_i v_i = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta' },
            { name: 'Magnitude',        eq: '|\\mathbf{v}| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}' },
          ].map(r => (
            <Box key={r.name} sx={{ p: 2, borderRadius: '6px', background: 'rgba(255,255,255,0.025)', display: 'flex', gap: 2, alignItems: 'baseline' }}>
              <Box sx={{ minWidth: 160, color: TEXT, fontSize: 14, fontWeight: 600 }}>{r.name}</Box>
              <M m={r.eq} />
            </Box>
          ))}
        </Box>
        <P>Two vectors are <strong style={{ color: TEXT }}>orthogonal</strong> (perpendicular) if and only if their dot product is zero: <M m="\mathbf{u} \cdot \mathbf{v} = 0" />.</P>

        <H2 id="matrices">Matrices</H2>
        <Def title="Definition — Matrix">
          An <M m="m \times n" /> <strong>matrix</strong> is a rectangular array of numbers with <M m="m" /> rows and <M m="n" /> columns. The entry in row <M m="i" />, column <M m="j" /> is denoted <M m="A_{ij}" />.
        </Def>
        <MB m="A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix} \quad \text{(2\times 3 matrix)}" />
        <P>A matrix represents a <strong style={{ color: TEXT }}>linear transformation</strong>: multiplying by <M m="A" /> maps vectors from <M m="\mathbb{R}^n" /> to <M m="\mathbb{R}^m" />. Every linear transformation between finite-dimensional spaces can be represented as a matrix.</P>

        <H2 id="operations">Matrix Operations</H2>
        <H3>Multiplication</H3>
        <P>The product <M m="AB" /> of an <M m="m\times n" /> matrix <M m="A" /> and an <M m="n\times p" /> matrix <M m="B" /> is the <M m="m\times p" /> matrix with entries:</P>
        <MB m="(AB)_{ij} = \sum_{k=1}^n A_{ik} B_{kj}" />
        <Note>Matrix multiplication is <em>not</em> commutative: <M m="AB \neq BA" /> in general. It is associative: <M m="(AB)C = A(BC)" />.</Note>
        <H3>Transpose</H3>
        <P>The <strong style={{ color: TEXT }}>transpose</strong> <M m="A^T" /> is obtained by reflecting over the diagonal — rows become columns:</P>
        <MB m="(A^T)_{ij} = A_{ji}" />
        <H3>Inverse</H3>
        <P>A square matrix <M m="A" /> is <strong style={{ color: TEXT }}>invertible</strong> if there exists <M m="A^{-1}" /> such that <M m="A A^{-1} = A^{-1} A = I" />, where <M m="I" /> is the identity matrix. <M m="A" /> is invertible if and only if <M m="\det(A) \neq 0" />.</P>

        <H2 id="determinant">Determinants</H2>
        <P>The <strong style={{ color: TEXT }}>determinant</strong> is a scalar associated with every square matrix, measuring how much the matrix scales area (or volume in higher dimensions).</P>
        <MB m="\det\begin{pmatrix}a & b \\ c & d\end{pmatrix} = ad - bc" />
        <MB m="\det\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix} = a(ei-fh) - b(di-fg) + c(dh-eg)" />
        <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {[
            'det(AB) = det(A)·det(B)',
            'det(Aᵀ) = det(A)',
            'det(A⁻¹) = 1/det(A)',
            'A is invertible ⟺ det(A) ≠ 0',
          ].map(f => (
            <Box key={f} sx={{ px: 2.5, py: 1.5, borderRadius: '6px', background: 'rgba(255,255,255,0.025)', color: DIM, fontSize: 14 }}>{f}</Box>
          ))}
        </Box>

        <H2 id="systems">Linear Systems</H2>
        <P>A <strong style={{ color: TEXT }}>system of linear equations</strong> can be written compactly as <M m="A\mathbf{x} = \mathbf{b}" />:</P>
        <MB m="\begin{pmatrix}2 & 1\\5 & 3\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}4\\7\end{pmatrix}" />
        <P>If <M m="A" /> is invertible, the unique solution is <M m="\mathbf{x} = A^{-1}\mathbf{b}" />. In practice, <strong style={{ color: TEXT }}>Gaussian elimination</strong> — row-reducing the augmented matrix <M m="[A \mid \mathbf{b}]" /> — is more efficient. A system has either zero, one, or infinitely many solutions.</P>

        <H2 id="eigenvalues">Eigenvalues and Eigenvectors</H2>
        <Def title="Definition — Eigenvalue / Eigenvector">
          A nonzero vector <M m="\mathbf{v}" /> is an <strong>eigenvector</strong> of matrix <M m="A" /> with <strong>eigenvalue</strong> <M m="\lambda" /> if:
          <Box sx={{ mt: 1 }}><MB m="A\mathbf{v} = \lambda\mathbf{v}" /></Box>
          Geometrically: <M m="A" /> stretches (or reflects) <M m="\mathbf{v}" /> by the scalar factor <M m="\lambda" />, leaving its direction unchanged.
        </Def>
        <P>Eigenvalues are found by solving the <strong style={{ color: TEXT }}>characteristic equation</strong>:</P>
        <MB m="\det(A - \lambda I) = 0" />
        <P>For each eigenvalue <M m="\lambda" />, the corresponding eigenvectors are the nonzero solutions to <M m="(A - \lambda I)\mathbf{v} = \mathbf{0}" />.</P>
        <Note>Example: For <M m="A = \begin{pmatrix}3&1\\0&2\end{pmatrix}" />, the characteristic equation is <M m="(3-\lambda)(2-\lambda)=0" />, giving eigenvalues <M m="\lambda_1 = 3" />, <M m="\lambda_2 = 2" />.</Note>
        <P>Eigenvalues and eigenvectors are fundamental to principal component analysis (PCA), Google's PageRank algorithm, quantum mechanics, and the analysis of differential equations.</P>

        <Divider sx={{ borderColor: MUTED, mt: 8, mb: 4 }} />
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.18)' }}>
          Next: <a href="/math/probability" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Probability →</a>
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

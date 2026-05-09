import 'katex/dist/katex.min.css';
import MathShell from './MathShell';

export const metadata = {
  title: 'Mathematics — Marin Kokona',
  description: 'Mathematical concepts from first principles — set theory, logic, calculus, and foundations.',
};

export default function MathLayout({ children }) {
  return <MathShell>{children}</MathShell>;
}

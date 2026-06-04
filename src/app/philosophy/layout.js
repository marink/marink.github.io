import PhilosophyShell from './PhilosophyShell';

export const metadata = {
  title: 'Philosophy — Marin Kokona',
  description: 'Philosophy of nature, process, and the intelligence encoded in physical law.',
};

export default function PhilosophyLayout({ children }) {
  return <PhilosophyShell>{children}</PhilosophyShell>;
}

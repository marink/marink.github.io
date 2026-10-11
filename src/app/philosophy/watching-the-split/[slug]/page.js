import WikiRoute from '../WikiRoute';
import { PAGES, SECTION, page } from '../pages';

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGES.filter(p => p.slug).map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = page(slug);
  return {
    title: `${p.title} — ${SECTION.title} — Marin Kokona`,
    description: p.lede,
  };
}

export default async function WikiSlugPage({ params }) {
  const { slug } = await params;
  return <WikiRoute slug={slug} />;
}

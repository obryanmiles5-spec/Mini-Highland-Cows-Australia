import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Search Console URL Directory | Indexing Guide',
  description: 'Complete directory of all clean, indexable URLs on minihighlandcows.store for Google Search Console URL inspection, trailing slash validation, and indexing.',
  alternates: {
    canonical: 'https://minihighlandcows.store/urls/',
  },
  openGraph: {
    title: 'Google Search Console URL Directory | Indexing Guide',
    description: 'Complete directory of all clean, indexable URLs on minihighlandcows.store for Google Search Console URL inspection, trailing slash validation, and indexing.',
    url: 'https://minihighlandcows.store/urls/',
    siteName: 'Dunblane Highlands',
  },
};

export default function UrlsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

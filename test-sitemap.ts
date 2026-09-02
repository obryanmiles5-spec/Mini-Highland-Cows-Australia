import { MetadataRoute } from 'next';

export async function generateSitemaps() {
  return [{ id: 'pages' }, { id: 'blog' }, { id: 'products' }, { id: 'images' }];
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
  return [];
}

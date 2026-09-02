import { MetadataRoute } from 'next';
import { CALVES_DATA } from '@/data/calves';
import { BLOG_POSTS } from '@/data/blogs';

export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }];
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const baseUrl = 'https://dunblane.com.au';

  if (id === 1) { // Calves
    return CALVES_DATA.map((calf) => ({
      url: `${baseUrl}/calves/${calf.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      images: [
        {
          url: baseUrl + calf.images[0],
          title: calf.name,
        }
      ]
    }));
  }

  if (id === 2) { // Blog
    return BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: post.image ? [
        {
          url: baseUrl + post.image,
          title: post.title,
        }
      ] : []
    }));
  }

  // default 'pages' (id === 0)
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/calves`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sold`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/reserve`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}

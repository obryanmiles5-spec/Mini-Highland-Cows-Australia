import { BLOG_POSTS } from '@/data/blogs';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miniature Highland Cow Blog & Guides | Dunblane Pastoral',
  description: 'Learn everything about micro, teacup, and miniature highland cows. Guides on size, price, care, and adopting a mini highland cow in Australia.',
  alternates: {
    canonical: 'https://minihighlandcows.store/blog',
  }
};

export default function BlogIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Miniature Highland Cow Blog",
    "description": "Guides and articles about miniature highland cows for sale, care, and breeding in Australia.",
    "url": "https://minihighlandcows.store/blog",
    "blogPost": BLOG_POSTS.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://minihighlandcows.store/blog/${post.slug}`,
      "datePublished": post.date,
      "description": post.excerpt
    }))
  };

  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://minihighlandcows.store/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://minihighlandcows.store/blog"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1C3B2B] mb-6">
            Miniature Highland Cow Insights & Guides
          </h1>
          <div className="prose prose-lg prose-[#1E293B] max-w-3xl">
            <p className="text-xl leading-relaxed text-[#1E293B]/80 font-light mb-6">
              Welcome to the official Dunblane Highlands educational hub. Whether you are wondering how much land you need for a mini cow, what a micro teacup highland cow actually is, or how to prepare your paddocks for your new fluffy additions, you are in the right place.
            </p>
            <p className="text-lg leading-relaxed text-[#1E293B]/80 font-light">
              Our comprehensive articles are written by experienced breeders specifically for the Australian climate and lifestyle. We dive deep into pasture management, winter feed strategies, handling techniques, and everything you need to know about raising healthy, happy, DNA-verified miniature highland cattle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white border border-[#1C3B2B]/10 rounded-sm overflow-hidden hover:border-[#1C3B2B]/30 transition-colors shadow-sm hover:shadow-md">
              {post.image && (
                <div className="relative w-full aspect-video">
                  <Image src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   referrerPolicy="no-referrer" />
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm font-medium text-[#C2673F] mb-3 uppercase tracking-wider">
                  {new Date(post.date).toLocaleDateString('en-AU', { month: 'long', day: 'numeric', year: 'numeric' })} • {post.readTime}
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-4 group-hover:text-[#C2673F] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-[#1E293B]/80 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto text-[#1C3B2B] font-bold text-sm flex items-center uppercase tracking-wide">
                  Read Guide <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
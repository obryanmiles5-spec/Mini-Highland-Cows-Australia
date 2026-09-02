import { BLOG_POSTS } from '@/data/blogs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Miniature Highland Cows`,
    description: post.excerpt,
    alternates: {
      canonical: `https://dunblane.com.au/blog/${slug}`,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dunblane.com.au/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": [
      "https://dunblane.com.au" + post.image
    ],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Dunblane Pastoral Holdings Pty Ltd",
      "url": "https://dunblane.com.au/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dunblane Pastoral Holdings Pty Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dunblane.com.au/favicon.ico"
      }
    },
    "inLanguage": "en-AU",
    "isAccessibleForFree": "True",
    "articleSection": "Miniature Cattle Breeding",
    "wordCount": post.content.split(' ').length
  };

  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dunblane.com.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://dunblane.com.au/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://dunblane.com.au/blog/${post.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-[#C2673F] hover:text-[#1C3B2B] transition-colors mb-8">
          <span className="mr-2">←</span> Back to Blog
        </Link>
        
        <header className="mb-12">
          <div className="text-sm font-medium text-[#1E293B]/60 mb-4">
            {new Date(post.date).toLocaleDateString('en-AU', { month: 'long', day: 'numeric', year: 'numeric' })} • {post.readTime}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1C3B2B] leading-tight">
            {post.title}
          </h1>
          {post.image && (
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden mt-8">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover" 
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </header>

        <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1C3B2B] prose-p:text-[#1E293B]/80 prose-a:text-[#C2673F] hover:prose-a:text-[#1C3B2B] prose-strong:text-[#1C3B2B]">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        
        {/* Related Articles & Products */}
        <div className="mt-16 pt-8 border-t border-[#1C3B2B]/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-6">Related Articles</h3>
              <div className="space-y-4">
                {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3).map(related => (
                  <Link href={`/blog/${related.slug}`} key={related.slug} className="block group">
                    <h4 className="font-serif text-lg font-bold text-[#1C3B2B] group-hover:text-[#C2673F] transition-colors">{related.title}</h4>
                    <p className="text-sm text-[#1E293B]/70 line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-[#F8F9FA] p-8 rounded-sm border border-[#1E293B]/5">
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-4">Ready to adopt?</h3>
              <p className="text-[#1E293B]/80 mb-6 text-sm">
                We specialize in breeding premium, DNA-verified, and halter-trained miniature highland cattle.
              </p>
              <Link href="/calves" className="inline-block w-full text-center px-8 py-4 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A95531] transition-colors">
                View Available Calves
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

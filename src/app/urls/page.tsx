'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CALVES_DATA, getCalfSlug } from '@/data/calves';
import { BLOG_POSTS } from '@/data/blogs';
import { Copy, Check, ExternalLink, Search, Globe, FileText, Sparkles, Filter } from 'lucide-react';

const BASE_URL = 'https://minihighlandcows.store';

interface PageEntry {
  category: 'Main' | 'Breeds & Guide' | 'Calves' | 'Articles' | 'Legal';
  name: string;
  path: string;
  description: string;
}

const STATIC_PAGES: PageEntry[] = [
  {
    category: 'Main',
    name: 'Home (Homepage)',
    path: '/',
    description: 'Main landing page with hero slider, featured calves, reviews, and trust badges.',
  },
  {
    category: 'Main',
    name: 'Available Calves',
    path: '/calves/',
    description: 'Current catalogue of available miniature, micro, and teacup calves for sale.',
  },
  {
    category: 'Breeds & Guide',
    name: 'Micro Highland Cows',
    path: '/micro-highland-cows/',
    description: 'Dedicated page for micro miniature cattle maturing under 36 inches.',
  },
  {
    category: 'Breeds & Guide',
    name: 'Teacup Highland Cows',
    path: '/teacup-highland-cows/',
    description: 'Dedicated page for ultra-compact pocket and teacup miniature calves.',
  },
  {
    category: 'Breeds & Guide',
    name: 'Miniature Highland Cattle Breed Guide',
    path: '/miniature-highland-cattle/',
    description: 'Complete guide on Scottish miniature highland cattle standards and acreage care.',
  },
  {
    category: 'Main',
    name: 'Price & Cost Guide',
    path: '/prices/',
    description: 'Transparent price guide for heifers, steers, bulls, deposits, and inclusions.',
  },
  {
    category: 'Main',
    name: 'Delivery & Transport',
    path: '/delivery/',
    description: 'Australia-wide livestock freight guide, free local delivery, and interstate transport.',
  },
  {
    category: 'Main',
    name: 'Adoption & Purchase Process',
    path: '/process/',
    description: 'Step-by-step procedure from reservation deposit to property delivery.',
  },
  {
    category: 'Main',
    name: 'Reserve a Calf',
    path: '/reserve/',
    description: 'Direct inquiry and holding deposit submission form for specific calves.',
  },
  {
    category: 'Main',
    name: 'Sold Gallery',
    path: '/sold/',
    description: 'Historical archive of past adopted calves and their forever homesteads.',
  },
  {
    category: 'Main',
    name: 'Frequently Asked Questions (FAQ)',
    path: '/faq/',
    description: 'Frequently asked questions on feeding, lifespan, land size, and costs.',
  },
  {
    category: 'Main',
    name: 'About Dunblane Pastoral',
    path: '/about/',
    description: 'Background, philosophy, and ABN credentials of our Queensland breeding farm.',
  },
  {
    category: 'Main',
    name: 'Contact Us',
    path: '/contact/',
    description: 'Direct telephone, email, address, and farm visit booking inquiry form.',
  },
  {
    category: 'Articles',
    name: 'Blog Articles Index',
    path: '/blog/',
    description: 'Index of educational care guides, acreage sizing, and cattle advice.',
  },
  {
    category: 'Legal',
    name: 'Privacy Policy',
    path: '/privacy/',
    description: 'Privacy policy and statutory data protection notice.',
  },
  {
    category: 'Legal',
    name: 'Terms of Service',
    path: '/terms/',
    description: 'Terms of service, sales agreement, and livestock health guarantee.',
  },
];

export default function UrlsDirectoryPage() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Assemble all URLs
  const calfPages: PageEntry[] = CALVES_DATA.map((calf) => ({
    category: 'Calves',
    name: `${calf.name} (${calf.sex})`,
    path: `/calves/${getCalfSlug(calf.name)}/`,
    description: `${calf.coat} ${calf.sex} • Projected ${calf.height} • Status: ${calf.status} • $${calf.price.toLocaleString()} AUD`,
  }));

  const blogPages: PageEntry[] = BLOG_POSTS.map((post) => ({
    category: 'Articles',
    name: post.title,
    path: `/blog/${post.slug}/`,
    description: post.excerpt,
  }));

  const allEntries = [...STATIC_PAGES, ...calfPages, ...blogPages];

  const filteredEntries = allEntries.filter((item) => {
    const matchesFilter = filter === 'All' || item.category === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCopy = (fullUrl: string) => {
    navigator.clipboard.writeText(fullUrl);
    setCopiedUrl(fullUrl);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  const handleCopyAll = () => {
    const textList = filteredEntries.map((e) => `${BASE_URL}${e.path}`).join('\n');
    navigator.clipboard.writeText(textList);
    setCopiedUrl('ALL');
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  return (
    <div className="bg-[#FDFBF7] py-12 md:py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#1E293B]/60 mb-8 font-medium">
          <Link href="/" className="hover:text-[#C2673F] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1C3B2B] font-bold">Google Search Console URLs Directory</span>
        </nav>

        {/* Header Banner */}
        <div className="bg-[#1C3B2B] text-white p-8 sm:p-12 rounded-sm mb-12 shadow-sm">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4A373]/20 text-[#D4A373] text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5" /> Google Search Console Indexing Directory
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Individual Page Submission Directory
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
              Every page on this site has its own clean, dedicated URL carry-through directly following the domain. 
              Use this directory to quickly copy any specific page URL and paste it into Google Search Console&apos;s 
              <strong> &ldquo;URL Inspection&rdquo;</strong> search bar to request instant indexing.
            </p>
            
            {/* Quick Step Guide */}
            <div className="bg-white/10 rounded-sm p-4 border border-white/10 text-xs sm:text-sm space-y-2">
              <p className="font-bold text-[#D4A373]">How to submit any particular page to Google Search Console:</p>
              <ol className="list-decimal pl-5 space-y-1.5 text-white/90">
                <li>Click <strong>&ldquo;Copy URL&rdquo;</strong> next to any page below.</li>
                <li>Go to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#D4A373] hover:text-white">Google Search Console</a>.</li>
                <li>Paste the URL into the top search bar (<strong>&ldquo;Inspect any URL in minihighlandcows.store&rdquo;</strong>) and press Enter.</li>
                <li>Click <strong>&ldquo;Request Indexing&rdquo;</strong>. Google will crawl and index that individual page!</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="bg-white p-6 rounded-sm shadow-sm border border-[#1E293B]/10 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['All', 'Main', 'Breeds & Guide', 'Calves', 'Articles', 'Legal'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-bold transition-colors ${
                  filter === cat
                    ? 'bg-[#1C3B2B] text-white'
                    : 'bg-[#F4EFE6] text-[#1E293B]/80 hover:bg-[#1E293B]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-[#1E293B]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search page or URL..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-sm border border-[#1E293B]/15 focus:outline-none focus:border-[#1C3B2B]"
              />
            </div>
            <button
              onClick={handleCopyAll}
              className="px-4 py-2 bg-[#C2673F] text-white text-xs font-bold rounded-sm hover:bg-[#A85532] transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              {copiedUrl === 'ALL' ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied {filteredEntries.length} URLs!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Visible URLs ({filteredEntries.length})
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-4 text-xs text-[#1E293B]/60 px-1">
          <span>Showing {filteredEntries.length} ready-to-submit URLs</span>
          <span>Base Domain: <strong className="text-[#1C3B2B]">{BASE_URL}</strong></span>
        </div>

        {/* URLs List */}
        <div className="space-y-3">
          {filteredEntries.map((item, idx) => {
            const fullUrl = `${BASE_URL}${item.path}`;
            const isCopied = copiedUrl === fullUrl;

            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-sm shadow-sm border border-[#1E293B]/10 hover:border-[#1C3B2B]/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 bg-[#F4EFE6] text-[#1C3B2B] text-[10px] font-bold rounded-sm uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-[#1C3B2B] text-base truncate">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#1E293B]/65 line-clamp-1">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 pt-1 font-mono text-xs text-[#C2673F] break-all">
                    <span>{fullUrl}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#1E293B]/5">
                  <button
                    onClick={() => handleCopy(fullUrl)}
                    className={`px-4 py-2 text-xs font-bold rounded-sm transition-colors flex items-center gap-1.5 ${
                      isCopied
                        ? 'bg-[#1C3B2B] text-white'
                        : 'bg-[#F4EFE6] text-[#1C3B2B] hover:bg-[#1C3B2B] hover:text-white'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#D4A373]" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy URL
                      </>
                    )}
                  </button>

                  <Link
                    href={item.path}
                    className="p-2 text-[#1E293B]/60 hover:text-[#1C3B2B] hover:bg-[#F4EFE6] rounded-sm transition-colors"
                    title="View Page"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* XML Sitemap Callout */}
        <div className="mt-12 bg-white p-6 rounded-sm border border-[#1E293B]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif font-bold text-[#1C3B2B] text-lg mb-1">
              Automated Submission via XML Sitemap
            </h4>
            <p className="text-xs text-[#1E293B]/70">
              You can also submit all URLs at once in Google Search Console under the <strong>&ldquo;Sitemaps&rdquo;</strong> menu.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <code className="text-xs font-mono bg-[#F4EFE6] px-3 py-1.5 rounded-sm text-[#1C3B2B]">
              https://minihighlandcows.store/sitemap.xml
            </code>
            <button
              onClick={() => handleCopy(`${BASE_URL}/sitemap.xml`)}
              className="px-4 py-2 bg-[#1C3B2B] text-white text-xs font-bold rounded-sm hover:bg-[#152C20] transition-colors flex items-center gap-1"
            >
              {copiedUrl === `${BASE_URL}/sitemap.xml` ? (
                <>
                  <Check className="w-3 h-3 text-[#D4A373]" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" /> Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

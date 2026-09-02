const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!content.includes('import { BLOG_POSTS } from')) {
    content = content.replace("import { CALVES_DATA } from '@/data/calves';", "import { CALVES_DATA } from '@/data/calves';\nimport { BLOG_POSTS } from '@/data/blogs';");
}

// Fix featured calves to only show available
content = content.replace(
    "const featuredCalves = CALVES_DATA.slice(0, 8);",
    "const featuredCalves = CALVES_DATA.filter(calf => calf.status === 'Available').slice(0, 8);"
);

// Fix the news section to use the latest 4 blog posts
const oldNewsSection = content.slice(content.indexOf('{/* News & Blog Section */}'), content.indexOf('{/* Ranch Gallery Section */}'));

const newNewsSection = `{/* News & Blog Section */}
      <section className="py-24 bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl text-[#1C3B2B] font-bold mb-4">Farm News & Insights</h2>
              <p className="text-[#1E293B]/70 max-w-2xl">
                Updates from the pasture, cattle care tips, and stories from our highland family.
              </p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-[#C2673F] font-medium hover:text-[#A85532] transition-colors">
              Read all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.slice(0, 4).map((post, i) => (
              <div key={i} className="bg-white rounded-sm overflow-hidden flex flex-col sm:flex-row shadow-sm border border-[#1E293B]/5 group">
                <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                  <Image src={post.image || 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=800&q=80'} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"  referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-[#1E293B]/50 uppercase tracking-wider font-medium mb-3">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3 leading-tight group-hover:text-[#C2673F] transition-colors">{post.title}</h3>
                  <p className="text-[#1E293B]/70 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                  <Link href={\`/blog/\${post.slug}\`} className="inline-flex items-center gap-2 text-sm font-bold text-[#C2673F] hover:text-[#A85532]">
                    Read article &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      `;

content = content.replace(oldNewsSection, newNewsSection);

fs.writeFileSync('src/app/page.tsx', content);

const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/app/blog/[slug]/page.tsx');
let content = fs.readFileSync(file, 'utf8');

const replacement = `
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  
  return {
    title: \`\${post.title} | Miniature Highland Cows\`,
    description: post.excerpt,
    alternates: {
      canonical: \`https://minihighlandcows.store/blog/\${slug}\`,
    },
    openGraph: {
      images: post.image ? [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        }
      ] : []
    }
  };
}
`;

content = content.replace(/export async function generateMetadata.*?return \{\s*title.*?alternates.*?\}\s*\};\s*\}/s, replacement.trim());
fs.writeFileSync(file, content);

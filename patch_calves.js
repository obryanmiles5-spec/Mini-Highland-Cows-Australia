const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/app/calves/[id]/page.tsx');
let content = fs.readFileSync(file, 'utf8');

const metadataCode = `
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const calf = CALVES_DATA.find((c) => c.id.toString() === id);
  if (!calf) return {};
  
  return {
    title: \`\${calf.name} | \${calf.type} For Sale | Dunblane Highlands\`,
    description: calf.desc.substring(0, 160) + (calf.desc.length > 160 ? '...' : ''),
    alternates: {
      canonical: \`https://minihighlandcows.store/calves/\${calf.id}\`,
    },
    openGraph: {
      images: [
        {
          url: calf.images[0],
          width: 800,
          height: 600,
          alt: calf.name,
        }
      ]
    }
  };
}
`;

content = content.replace("import { CALVES_DATA } from '@/data/calves';", "import { CALVES_DATA } from '@/data/calves';\n" + metadataCode);

fs.writeFileSync(file, content);

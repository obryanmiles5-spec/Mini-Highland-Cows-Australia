const fs = require('fs');
let content = fs.readFileSync('src/data/blogs.ts', 'utf8');

content = content.replace("import { BlogPost } from '@/types';", `export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}`);

fs.writeFileSync('src/data/blogs.ts', content);

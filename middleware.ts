import { next } from '@vercel/functions';

export const config = { matcher: '/:path*' };

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const accept = request.headers.get('accept') || '';
  
  if (prefersMarkdownOverHtml(accept) && eligiblePath(url.pathname)) {
    const mdRes = await fetch(new URL(mdPathFor(url.pathname), request.url));
    if (mdRes.ok) {
      return new Response(await mdRes.text(), { 
        headers: { 'content-type': 'text/markdown; charset=utf-8' } 
      });
    }
  }
  
  return next();
}

function prefersMarkdownOverHtml(accept: string) {
  let mdQ = -1, htmlQ = -1;
  for (const part of accept.split(',')) {
    const [type, ...params] = part.trim().split(';').map(s => s.trim());
    let q = 1;
    for (const p of params) { 
      const m = /^q=([\d.]+)$/.exec(p); 
      if (m) q = parseFloat(m[1]); 
    }
    if (type === 'text/markdown') mdQ = Math.max(mdQ, q);
    if (type === 'text/html') htmlQ = Math.max(htmlQ, q);
  }
  return mdQ > -1 && mdQ > htmlQ;
}

function eligiblePath(pathname: string) {
  return !pathname.startsWith('/api') && !pathname.startsWith('/_next') && !pathname.includes('.');
}

function mdPathFor(pathname: string) {
  return pathname.endsWith('/') ? `${pathname}index.md` : `${pathname}.md`;
}

const fs = require('fs');
let blogPage = fs.readFileSync('src/app/blog/page.tsx', 'utf8');
if(!blogPage.includes("export const dynamic = 'force-dynamic';")) {
    blogPage = "export const dynamic = 'force-dynamic';\n" + blogPage;
    fs.writeFileSync('src/app/blog/page.tsx', blogPage);
}
let slugPage = fs.readFileSync('src/app/blog/[slug]/page.tsx', 'utf8');
if(!slugPage.includes("export const dynamic = 'force-dynamic';")) {
    slugPage = "export const dynamic = 'force-dynamic';\n" + slugPage;
    fs.writeFileSync('src/app/blog/[slug]/page.tsx', slugPage);
}
let calvesIdPage = fs.readFileSync('src/app/calves/[id]/page.tsx', 'utf8');
if(!calvesIdPage.includes("export const dynamic = 'force-dynamic';")) {
    calvesIdPage = "export const dynamic = 'force-dynamic';\n" + calvesIdPage;
    fs.writeFileSync('src/app/calves/[id]/page.tsx', calvesIdPage);
}

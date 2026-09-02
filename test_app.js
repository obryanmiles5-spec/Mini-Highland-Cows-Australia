const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// The user requested: "replace the product "under offer"(Angus of Glenfiddich) with an available products on the homepage."
// My earlier patch: const featuredCalves = CALVES_DATA.filter(calf => calf.status === 'Available').slice(0, 8);
// Let's verify it worked.

if(pageContent.includes("filter(calf => calf.status === 'Available')")) {
    console.log("Featured calves filtered correctly.");
} else {
    console.log("Failed to filter calves.");
}

// Check 4 blog posts on homepage
if(pageContent.includes("BLOG_POSTS.slice(0, 4).map")) {
    console.log("4 blogs on homepage.");
} else {
    console.log("Failed to add 4 blogs.");
}

// Let's make sure force-dynamic is on the page.tsx to bypass cache
if(!pageContent.includes("export const dynamic = 'force-dynamic';")) {
    pageContent = "export const dynamic = 'force-dynamic';\n" + pageContent;
    fs.writeFileSync('src/app/page.tsx', pageContent);
    console.log("Added force-dynamic to page.tsx");
}

let calvesContent = fs.readFileSync('src/app/calves/page.tsx', 'utf8');
if(!calvesContent.includes("export const dynamic = 'force-dynamic';")) {
    calvesContent = "export const dynamic = 'force-dynamic';\n" + calvesContent;
    fs.writeFileSync('src/app/calves/page.tsx', calvesContent);
    console.log("Added force-dynamic to calves page");
}

let nextConfig = fs.readFileSync('next.config.ts', 'utf8');
if (nextConfig.includes('unoptimized: true,')) {
    nextConfig = nextConfig.replace('unoptimized: true,', 'unoptimized: false,');
    fs.writeFileSync('next.config.ts', nextConfig);
    console.log("Removed unoptimized from next.config.ts");
}


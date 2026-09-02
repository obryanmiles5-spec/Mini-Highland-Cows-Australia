const fs = require('fs');
const path = require('path');

// 1. Create a blog data file
const blogsDir = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(blogsDir)) fs.mkdirSync(blogsDir, { recursive: true });

const blogsContent = `export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'everything-you-need-to-know-about-miniature-highland-cows',
    title: 'Everything You Need to Know About Miniature Highland Cows',
    excerpt: 'Discover why miniature highland cows are becoming the most sought-after paddock pets in Australia. From their fluffy coats to their docile nature.',
    content: \`
<p>Miniature Highland cows have taken the world by storm. Often referred to as "fluffy mini cows," these adorable, pint-sized bovines are highly sought after by small acreage owners across Australia.</p>
<h2>What Are Miniature Highland Cows?</h2>
<p>Miniature Highland cattle are selectively bred down in size from standard Scottish Highland cattle. They retain the iconic long-haired, fluffy coats and sweeping horns, but in a much smaller, manageable package. Many people search for a "mini highland cow" or "miniature scottish highland cow" because they want the aesthetic of the highland breed without the massive size.</p>
<h2>Why Are They So Popular?</h2>
<p>Aside from being undeniably cute, miniature highland cows make fantastic pets. They are known for their docile and gentle temperaments. If you are wondering "are mini cows good pets?" the answer is a resounding yes! They are social animals, enjoy human interaction (especially if halter-trained early), and are great with children.</p>
<h2>Where Can I Buy a Mini Highland Cow?</h2>
<p>If you're searching for "mini highland cows for sale near me" or "miniature highland cows for sale australia," it's vital to buy from a reputable breeder. At Dunblane Pastoral Holdings Pty Ltd, we specialize in DNA-verified, halter-trained miniature highlands available for delivery across Australia.</p>
\`,
    date: '2024-03-01',
    readTime: '4 min read'
  },
  {
    slug: 'how-big-do-micro-mini-highland-cows-get',
    title: 'How Big Do Micro Mini Highland Cows Actually Get?',
    excerpt: 'Wondering about the size of a mini highland cow? We break down the differences between mid-size, miniature, and micro miniature highland cattle.',
    content: \`
<p>One of the most common questions we receive is: <strong>"How big do mini cows get?"</strong> Understanding the sizing categories is essential before bringing a calf home.</p>
<h2>Understanding Miniature Cow Sizes</h2>
<ul>
  <li><strong>Mid-Size:</strong> Generally 42 to 48 inches at the hip.</li>
  <li><strong>Miniature:</strong> 36 to 42 inches at the hip. This is the sweet spot for a "miniature highland cow."</li>
  <li><strong>Micro Miniature:</strong> Under 36 inches at the hip. Often referred to as "micro teacup mini highland cows."</li>
</ul>
<h2>Do Mini Highland Cows Stay Small?</h2>
<p>Yes, genuine miniature highland cows stay small! However, beware of terms like "teacup miniature cows." There is no recognized "teacup" breed; this is often a marketing term. A true micro mini cow will be very short but should still have healthy, proportionate conformation. Always ensure you are buying a calf whose parents have proven, measured heights.</p>
\`,
    date: '2024-03-05',
    readTime: '3 min read'
  },
  {
    slug: 'how-much-land-do-you-need-for-a-miniature-cow',
    title: 'How Much Space Do You Need for a Mini Cow?',
    excerpt: 'Can you have a mini cow in your backyard? Learn the real land requirements for keeping miniature cattle healthy and happy.',
    content: \`
<p>If you have ever asked, <strong>"Can I have a mini cow in my backyard?"</strong> you aren't alone. However, even small cattle breeds need adequate space.</p>
<h2>How Much Land Does a Miniature Cow Need?</h2>
<p>Generally, you need at least 1 to 2 acres of good quality pasture for a pair of miniature highland cows. Why a pair? Because cows are herd animals. You cannot keep just one mini cow; they require a bovine companion to thrive.</p>
<h2>Fencing and Shelter</h2>
<p>Standard cattle fencing is required. Miniature highlands are gentle and respect fences, but they are still livestock. They also require shelter from extreme weather. In the Australian summer, shade trees or a run-in shed are essential, along with a constant supply of fresh water.</p>
\`,
    date: '2024-03-10',
    readTime: '4 min read'
  },
  {
    slug: 'miniature-highland-cow-price-guide-australia',
    title: 'Miniature Highland Cow Price Guide in Australia',
    excerpt: 'How much is a mini cow? We explore the costs associated with buying and raising a miniature highland cow in Australia.',
    content: \`
<p>When searching for "miniature cows for sale," the first question is usually: <strong>"How much does a mini cow cost?"</strong></p>
<h2>The Price of a Mini Highland Cow</h2>
<p>In Australia, the price of a genuine, DNA-verified miniature highland cow ranges from $4,000 to $10,000+ AUD depending on factors like:</p>
<ul>
  <li><strong>Size:</strong> Micro mini cows usually command a higher price.</li>
  <li><strong>Color:</strong> Rare colors like silver/dun, white, or distinct brindle can affect the price.</li>
  <li><strong>Sex:</strong> Heifers (females) are generally more expensive than steers.</li>
  <li><strong>Pedigree and Conformation:</strong> Well-bred, chondro-tested non-carriers from proven lines are highly valued.</li>
</ul>
<h2>Ongoing Costs</h2>
<p>Don't forget to factor in how much it costs to feed a mini cow, veterinary bills, vaccinations (like 7-in-1), and farrier work for their hooves.</p>
\`,
    date: '2024-03-15',
    readTime: '3 min read'
  },
  {
    slug: 'are-miniature-highland-cows-good-pets',
    title: 'Are Miniature Highland Cows Good Pets?',
    excerpt: 'Discover why these fluffy small cows are becoming the ultimate acreage companion animals.',
    content: \`
<p>If you're considering adopting a mini cow, you're likely wondering, <strong>"Are miniature cows good pets?"</strong></p>
<h2>The Perfect Paddock Pet</h2>
<p>Miniature Highland cattle are exceptionally good pets for small farms and acreage. They are naturally docile, curious, and intelligent. Unlike larger, more aggressive breeds, they are generally easy to handle.</p>
<h2>Halter Training is Key</h2>
<p>For a mini cow to be a great pet, early socialization is critical. At Dunblane Pastoral Holdings, all our calves are halter-trained and handled daily. This ensures they are comfortable with human touch, making them safe around respectful children and a joy to own.</p>
\`,
    date: '2024-03-20',
    readTime: '3 min read'
  },
  {
    slug: 'truth-about-teacup-cows-micro-miniature-highlands',
    title: 'The Truth About Teacup Cows and Micro Highlands',
    excerpt: 'Are teacup mini cows real? We dive into the genetics and marketing behind the smallest cows in the world.',
    content: \`
<p>You may have seen adorable images of "teacup miniature cows" and wondered, <strong>"Are teacup cows real?"</strong></p>
<h2>Marketing vs. Reality</h2>
<p>"Teacup" is not a recognized breed or official size classification in the cattle world; it's a marketing buzzword. The correct terminology for the smallest cattle is "micro miniature." A micro miniature highland cow is under 36 inches tall at the hip at three years of age.</p>
<h2>Dwarfism (Chondrodysplasia)</h2>
<p>It's important to understand *why* a cow is small. Some breeders use the Chondrodysplasia (Chondro) gene to achieve a very short stature. While Chondro-positive cows are shorter, breeding two Chondro-positive cows can result in lethal genetic defects (bulldog calves). We strictly test our herd to ensure we breed healthy, proportionate, Non-Carrier miniature highlands.</p>
\`,
    date: '2024-03-25',
    readTime: '4 min read'
  },
  {
    slug: 'caring-for-mini-highland-cows-in-australia',
    title: 'Caring for Mini Highland Cows in the Australian Climate',
    excerpt: 'How to manage fluffy miniature cows in the heat of an Australian summer.',
    content: \`
<p>A common concern for prospective owners is: <strong>"How do you manage a hairy mini cow in Australia?"</strong></p>
<h2>Shedding the Winter Coat</h2>
<p>Highland cattle are highly adaptable. While they grow a thick, double coat for winter, they naturally shed this heavy undercoat in the spring. By summer, their coat is much lighter.</p>
<h2>Summer Care Requirements</h2>
<p>To keep your mini highlands comfortable during hot Australian summers, you must provide:</p>
<ul>
  <li><strong>Ample Shade:</strong> Large established trees or man-made shelters.</li>
  <li><strong>Fresh Water:</strong> Clean, cool drinking water must be available 24/7.</li>
  <li><strong>Parasite Control:</strong> Regular treatments for flies and ticks, which are prevalent in warmer months.</li>
</ul>
\`,
    date: '2024-04-02',
    readTime: '4 min read'
  },
  {
    slug: 'can-you-milk-mini-highland-cows',
    title: 'Can You Milk Mini Highland Cows?',
    excerpt: 'Learn about the milking potential of miniature highland cattle and what to expect if you want a family milk cow.',
    content: \`
<p>Many homesteaders ask, <strong>"Can you milk miniature highland cows?"</strong></p>
<h2>Highlands as Milk Cows</h2>
<p>Yes, you can! While they are not a dedicated dairy breed like a Jersey or Holstein, Highland cattle historically provided milk for Scottish families. Their milk has a high butterfat content, making it excellent for butter and cheese.</p>
<h2>How Much Milk Do They Produce?</h2>
<p>A miniature highland cow will produce less milk than a standard dairy cow—typically around 1 to 2 gallons a day. This is often the perfect amount for a single family, meaning you aren't overwhelmed with excess milk. They are excellent mothers and easily trainable for a family milking stanchion.</p>
\`,
    date: '2024-04-10',
    readTime: '3 min read'
  },
  {
    slug: 'miniature-highland-cattle-vs-standard-highland-cows',
    title: 'Miniature Highland Cattle vs. Standard Highland Cows',
    excerpt: 'What is the difference between a standard Scottish Highland and a miniature Highland? We compare size, care, and costs.',
    content: \`
<p>Are you trying to decide between a standard Highland and a <strong>miniature highland cow</strong>? Here is what you need to know.</p>
<h2>Size and Weight</h2>
<p>A standard Highland cow can weigh over 500kg (1,100 lbs) and stand over 48 inches tall. A miniature highland typically weighs between 200kg and 350kg and stands under 42 inches. This massive size difference means miniatures are much easier to handle.</p>
<h2>Land and Feed Requirements</h2>
<p>Because they are smaller, miniature cattle consume less feed and require less acreage. They have a lighter environmental footprint, causing less pugging (damage) to wet paddocks. This makes them the ideal "cattle mini" for hobby farmers.</p>
\`,
    date: '2024-04-18',
    readTime: '4 min read'
  },
  {
    slug: 'how-to-buy-a-miniature-cow-in-australia',
    title: 'How to Buy a Miniature Cow in Australia',
    excerpt: 'A step-by-step guide on purchasing a miniature highland calf, avoiding scams, and ensuring ethical breeding.',
    content: \`
<p>Searching for <strong>"miniature highland calves for sale"</strong> can be overwhelming. Here is how to buy safely.</p>
<h2>Beware of Scams</h2>
<p>Unfortunately, the popularity of "fluffy mini cows" has led to online scams. Never send money without verifying the breeder. Always ask for a Property Identification Code (PIC), ABN, and NLIS registration details.</p>
<h2>What to Look For in a Breeder</h2>
<p>A reputable breeder will:</p>
<ul>
  <li>Provide DNA Parentage Verification.</li>
  <li>Test for genetic anomalies like Chondrodysplasia.</li>
  <li>Ensure calves are vaccinated (7-in-1), drenched, and vet-checked.</li>
  <li>Halter-train the calves before they go to their new homes.</li>
</ul>
<p>At Dunblane Pastoral Holdings, we pride ourselves on transparency, ethical breeding, and delivering premium miniature cattle across Australia.</p>
\`,
    date: '2024-04-25',
    readTime: '5 min read'
  }
];
`;
fs.writeFileSync(path.join(blogsDir, 'blogs.ts'), blogsContent);

// 2. Update calves/[id]/page.tsx with the 10 FAQs
let calfPage = fs.readFileSync('src/app/calves/[id]/page.tsx', 'utf8');

const newFAQS = `const FAQS = [
  {
    question: "How big do miniature highland cows get?",
    answer: "Miniature Highland cows generally reach between 36 to 42 inches at the hip when fully grown. Micro miniatures (sometimes called 'micro teacup cows') are under 36 inches. Standard mid-size highlands are typically 42 to 48 inches."
  },
  {
    question: "How much space does a mini highland cow need?",
    answer: "We recommend at least 1 to 2 acres of good quality pasture for a pair of miniature highland cows. They are herd animals and cannot be kept alone; they require at least one other bovine companion."
  },
  {
    question: "How much does a miniature highland cow cost in Australia?",
    answer: "Prices vary based on size, color, sex, and pedigree. Generally, a premium, DNA-verified, and halter-trained miniature highland calf from a reputable Australian breeder ranges from $4,000 to $10,000+ AUD."
  },
  {
    question: "Are miniature highland cows good pets?",
    answer: "Yes, they make excellent paddock pets! They are naturally docile, curious, and intelligent. Because we halter-train and socialize our calves from an early age, they are incredibly friendly and safe around respectful children."
  },
  {
    question: "Can you milk miniature highland cows?",
    answer: "Absolutely. While they aren't a commercial dairy breed, they produce 1 to 2 gallons of milk a day with high butterfat content. This makes them perfect as a family milk cow for small homesteads."
  },
  {
    question: "Do miniature highland cows stay small?",
    answer: "Yes, genuine miniature highland cows are genetically predisposed to stay small. However, it's vital to buy from a breeder who measures their stock and provides DNA and pedigree proof so you know you aren't just buying a stunted calf."
  },
  {
    question: "Are teacup mini cows real?",
    answer: "'Teacup' is a marketing term, not a breed. The smallest official classification is 'micro miniature' (under 36 inches). We breed healthy, proportionate micro and miniature highlands, avoiding the lethal genetic defects sometimes associated with extreme dwarfing."
  },
  {
    question: "What do miniature cows eat?",
    answer: "Miniature highlands thrive on good quality grass pasture and access to fresh, clean water. During winter or dry spells, their diet should be supplemented with quality hay (like lucerne or pasture hay) and appropriate livestock mineral licks."
  },
  {
    question: "How long does a miniature highland cow live?",
    answer: "Miniature highland cattle are a very hardy and healthy breed. With proper care, nutrition, and regular veterinary checkups, they can live for 15 to 20 years."
  },
  {
    question: "How do you manage their long coats in the Australian summer?",
    answer: "Highlands naturally shed their thick winter undercoat when the weather warms up. To keep them comfortable in the Australian summer, you must ensure they have access to deep shade (trees or a shelter) and constant fresh drinking water."
  }
];`;

calfPage = calfPage.replace(/const FAQS = \[[\s\S]*?\];/, newFAQS);
fs.writeFileSync('src/app/calves/[id]/page.tsx', calfPage);

console.log("Created blog data and updated FAQs.");

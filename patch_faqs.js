const fs = require('fs');

let content = fs.readFileSync('src/app/faq/page.tsx', 'utf8');

const oldFaqs = content.slice(content.indexOf('const FAQS = ['), content.indexOf('];') + 2);

const newFaqs = `const FAQS = [
  {
    question: "How big do mini cows get? (Full grown micro teacup mini highland cow size)",
    answer: "A full grown miniature highland cow typically reaches 36 to 42 inches measured at the hip. If you are specifically looking at a 'micro mini' or what some call a 'micro teacup mini highland cow', they will mature under 36 inches. They are genetically small cattle breeds, ensuring they do stay small their entire lives. Despite their small stature, they retain the stocky, robust build and thick coats characteristic of standard Scottish Highlands."
  },
  {
    question: "How much land do you need for a miniature cow?",
    answer: "Many people ask 'can I have a mini cow in my backyard?' The reality is, to properly care for miniature cattle, you need at least 1 to 2 acres of good quality pasture for a pair. How much space a mini cow needs heavily depends on the quality of the soil, rainfall, and pasture in your area. Importantly, cows are herd animals—you cannot adopt just one mini cow. You must have a companion, meaning you need room for at least two miniature cows or other suitable livestock (like alpacas or sheep)."
  },
  {
    question: "How much does a miniature cow cost in Australia?",
    answer: "When wondering 'how much are mini cows' or 'how much is a mini fluffy cow', prices typically range from $4,000 to over $10,000 AUD. The price heavily depends on several factors: the calf's sex (heifers are generally more expensive than steers), coat color (silver/dun and white are often highly sought after), and genetic size (micro miniatures under 36 inches command a premium). The miniature cow price reflects the extensive costs to breed healthy, DNA-verified, halter-trained miniature cows."
  },
  {
    question: "Are miniature cows good pets?",
    answer: "Yes, mini cows make excellent pets! Because they are docile, intelligent, and much easier to handle than standard cattle, miniature highland cows are fantastic for small acreage and hobby farms. Our calves are handled daily and halter-trained, meaning they are used to human interaction, grooming, and petting. Many people love them as gentle paddock pets for mini cow cuddles and even farm-stay photoshoots."
  },
  {
    question: "Can you milk mini highland cows?",
    answer: "Yes, you can certainly milk miniature highland cows! While they are not a commercial dairy breed like a Holstein or Jersey, a miniature highland cow can produce 1 to 2 gallons of rich, high-butterfat milk daily. This is often the perfect amount for a single family wanting a 'family milk cow' without the overwhelming volume produced by standard dairy breeds."
  },
  {
    question: "Do miniature cows stay small?",
    answer: "Yes, true miniature highland cattle genetics mean they stay small. Unlike standard cattle that just happen to be runts, true miniatures are genetically predisposed to be small cow breeds. A full grown miniature cow will retain its compact, cute size throughout its entire life, generally maxing out their height by age 3."
  },
  {
    question: "Are teacup mini cows real?",
    answer: "While 'teacup' is often a marketing term rather than a scientific classification, micro miniature cows definitely exist. These are animals that mature under 36 inches. We breed healthy micro mini highland cows by carefully selecting smaller genetics over generations. We strictly avoid the lethal Chondrodysplasia (dwarfism) gene, ensuring our little cows are healthy, proportionate, and live long, pain-free lives."
  },
  {
    question: "Where can you buy a mini cow?",
    answer: "You should always look for registered, reputable breeders who offer DNA parentage verification and health guarantees. We offer miniature cows for sale to approved homes across Australia. We are based in Queensland, but we frequently arrange safe, climate-controlled transport for our mini calves to NSW, VIC, SA, and beyond."
  },
  {
    question: "How long does a miniature highland cow live?",
    answer: "With proper care, a miniature highland cow can live 15 to 20 years. They are an incredibly hardy, resilient breed, originally adapted to the harsh Scottish highlands. The average lifespan of a mini highland cow is very similar to standard cattle, provided they receive good quality feed, fresh water, adequate shelter, and routine veterinary care (including vaccinations and drenching)."
  },
  {
    question: "What are miniature cows good for?",
    answer: "Aside from being adorable and docile pets, miniature cattle are highly functional on a small farm. They are fantastic foragers and great for clearing brush and maintaining pasture. They can provide a family milk supply, produce high-quality organic beef, and produce rich manure for your gardens. Because they are smaller, they require less feed, are gentler on fences, and cause significantly less soil compaction than standard cattle."
  }
];`;

content = content.replace(oldFaqs, newFaqs);
fs.writeFileSync('src/app/faq/page.tsx', content);

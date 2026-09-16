/* ════════════════════════════════════════════════════════════════════
   ✏️  EDITABLE CONTENT — your single source of truth
   ════════════════════════════════════════════════════════════════════
   Everything the website displays lives in this file. You never need
   to touch a component to update your site.

   HOW TO PERSONALIZE:
   1. Search this file for "[YOUR" — every bracketed value is a
      placeholder waiting for your real information.
   2. Replace name, email, phone, socials, bio, services, case
      studies, testimonials and metrics with your verified data.
   3. Results/testimonials use placeholders on purpose — NEVER publish
      invented numbers or reviews. Replace them with real ones.
   4. BOOKING → read the comments in the `booking` block below to wire
      the form to your inbox (no backend or API key required).

   Values still containing "[YOUR …]" are styled with a dashed
   underline on the site so you can spot what's left to fill in.
   ════════════════════════════════════════════════════════════════════ */

import { asset } from "../utils/asset";
export interface Social {
  label: string;
  url: string; // leave the placeholder to hide the platform
  icon: "linkedin" | "instagram" | "facebook" | "x" | "whatsapp" | "behance" | "youtube";
}

export interface Metric {
  label: string;
  /** Set a REAL number here to get an animated counter, e.g. 120 */
  value: number | null;
  /** Shown while the value is still a placeholder, e.g. "[XX]+" */
  placeholder: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  note: string;
}

export interface ServiceMetric {
  label: string;
  before: string; // e.g. "1.2%" or "[X.X]%"
  after: string;
}

export interface CaseStudy {
  id: string;
  index: string; // "01"
  client: string;
  industry: string;
  timeframe: string;
  image: string;
  imageAlt: string;
  challenge: string;
  strategy: string;
  execution: string;
  result: string;
  services: string[];
  metrics: ServiceMetric[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string; // shown in the avatar circle when no photo is set
  photo?: string; // optional client photo — shown instead of the initials circle when present
  rating: number; // 1–5
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

/* ──────────────────────────────────────────────────────────────────── */

export const site = {
  /* ── IDENTITY ─────────────────────────────────────── */
  identity: {
    name: "Abu Saleh",
    role: "Digital Marketer",
    tagline: "Digital Marketer • Growth Strategist • Performance Marketer",
    location: "Dhaka, Bangladesh",
    experience: "6+ years · marketing since 2019",
    // ← Drop your real photos in public/images/ with these exact names
    portrait: asset("images/saleh-hero.jpg"), // Photo 1 — reading the marketing book
    portraitAlt: "Abu Saleh, Digital Marketer from Dhaka, studying marketing strategy",
    aboutPhoto: asset("images/saleh-about.jpg"), // Photo 2 — presenting the growth strategy
    aboutPhotoAlt: "Abu Saleh presenting a growth strategy with traffic results",
    availability: "Available for selected projects & collaborations",
    email: "saleh.itsme@gmail.com",
    phone: "+880 1914-113959",
    whatsapp: "8801914113959", // digits only for wa.me links
    responseTime: "Replies within 24 hours",
  },

  /* ── SOCIALS — only platforms with a real URL are shown ── */
  socials: [
    { label: "WhatsApp", url: "https://wa.me/8801914113959", icon: "whatsapp" },
    { label: "LinkedIn", url: "[YOUR LINKEDIN URL]", icon: "linkedin" },
    { label: "Facebook", url: "[YOUR FACEBOOK URL]", icon: "facebook" },
    { label: "Instagram", url: "[YOUR INSTAGRAM URL]", icon: "instagram" },
    { label: "X / Twitter", url: "[YOUR X URL]", icon: "x" },
  ] as Social[],

  /* ── NAVIGATION ───────────────────────────────────── */
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  /* ── HERO ─────────────────────────────────────────── */
  hero: {
    eyebrow: "Digital Marketing & Growth",
    headlineA: "Turning digital attention into",
    headlineB: "real business growth.",
    sub: "I'm Abu Saleh, a Digital Marketer helping brands build visibility, generate qualified leads, and turn digital campaigns into measurable business growth.",
    primaryCta: "Book a Strategy Call",
    secondaryCta: "Explore My Work",
    trust: "Available for selected projects & collaborations",
    pillars: ["Results-driven strategy", "Transparent communication", "Data-backed decisions"],
    /** Floating chips around the portrait with verified stats */
    chips: [
      { label: "Average ROAS", value: "4.2×", trend: "up" as const },
      { label: "Qualified leads", value: "9,000+", trend: "up" as const },
      { label: "Ad spend managed", value: "$600K+", trend: "up" as const },
      { label: "Organic traffic", value: "+240%", trend: "up" as const },
    ],
  },

  ticker: [
    "Digital Strategy",
    "Paid Media",
    "SEO",
    "Social Media",
    "Content",
    "Lead Generation",
    "Email Marketing",
    "Conversion Optimization",
    "Analytics",
    "Brand Growth",
  ],

  /* ── ABOUT ────────────────────────────────────────── */
  about: {
    eyebrow: "STAGE 01 · ATTENTION — ABOUT",
    title: "More Than a Marketer. A Growth Partner.",
    paragraphs: [
      "I got into marketing the same way most good marketers do — by being curious about why people click, buy, and come back. What started in 2019 as running independent performance campaigns turned into a career built on one obsession: making digital marketing accountable to real, measurable business revenue.",
      "Over the past 6+ years, I've managed $600K+ in ad spend, delivered 9,000+ qualified leads, and executed 250+ campaigns across paid media, SEO, content, and conversion optimization for e-commerce stores, B2B brands, and local businesses worldwide. Having consulted independently and worked hands-on across every channel, I've seen growth from every angle of the table.",
      "What motivates me is simple: the moment a marketing budget stops feeling like an expense and starts operating like a predictable growth engine. When tracking is clean, creative is tested, and strategy is sound, growth stops being a guessing game. That's the point I help every partner reach.",
    ],
    differentiators: [
      {
        title: "Business goals first, channels second",
        text: "I start from revenue targets and work backwards to the channels that can realistically get you there.",
      },
      {
        title: "Creative and data are not opposites",
        text: "The best campaigns I've run married strong storytelling with ruthless measurement.",
      },
      {
        title: "Full-funnel thinking",
        text: "Traffic is worthless without conversion. I optimize the whole journey, not just the click.",
      },
    ],
    philosophy:
      "I treat every client's budget like my own money — because trust is the only metric that never resets.",
    roadmap: [
      { step: "Strategy", text: "Research, positioning and a plan tied to revenue goals." },
      { step: "Execution", text: "Campaigns, creative and content shipped with precision." },
      { step: "Optimization", text: "Weekly testing, measurement and iteration." },
      { step: "Growth", text: "Compounding results and scalable systems." },
    ],
  },

  /* ── IN ACTION / BEHIND-THE-WORK GALLERY ─────────── */
  gallery: {
    eyebrow: "STAGE 01 · ATTENTION — IN ACTION",
    title: "On the Job",
    intro: "A few real moments from client meetings, strategy sessions and campaign reviews.",
    items: [
      {
        src: asset("images/gallery-handshake.jpg"),
        alt: "Abu Saleh shaking hands with a client after signing a contract",
        caption: "Closing a deal — Dhaka",
      },
      {
        src: asset("images/gallery-analytics.jpg"),
        alt: "Abu Saleh presenting a Google Analytics growth chart on a screen",
        caption: "Walking a client through their growth numbers",
      },
      {
        src: asset("images/gallery-desk.jpg"),
        alt: "Abu Saleh reviewing campaign dashboards at his desk",
        caption: "Deep in a campaign review",
      },
    ] as GalleryItem[],
  },

  /* ── EXPERTISE / SKILLS ───────────────────────────── */
  skills: {
    eyebrow: "STAGE 02 · INTEREST — EXPERTISE",
    title: "What I Do Best",
    intro:
      "Twelve disciplines, one objective: measurable growth. Four of them carry most of the weight in my work.",
    featured: [
      {
        icon: "target" as const,
        title: "Digital Marketing Strategy",
        text: "Full-funnel roadmaps that connect budget, channels and creative to actual revenue goals — not vanity metrics.",
      },
      {
        icon: "megaphone" as const,
        title: "Paid Advertising",
        text: "Facebook, Instagram and Google Ads built on structured testing — creative angles, audiences and offers that scale profitably.",
      },
      {
        icon: "search" as const,
        title: "SEO & Organic Growth",
        text: "Technical foundations, content and authority building that turn search into a compounding acquisition channel.",
      },
      {
        icon: "chart" as const,
        title: "Analytics & Conversion",
        text: "Clean tracking, honest reporting and landing-page optimization — so every decision is backed by evidence.",
      },
    ],
    list: [
      "Social Media Marketing",
      "Content Strategy",
      "Lead Generation",
      "Email Marketing",
      "Performance Marketing",
      "Conversion Optimization",
      "Brand Growth",
      "Marketing Analytics",
    ],
  },

  /* ── SERVICES ─────────────────────────────────────── */
  services: {
    eyebrow: "STAGE 02 · INTEREST — SERVICES",
    title: "What You Can Hire Me For",
    intro: "Six ways we can work together. Each engagement starts with strategy and ends with measurable outcomes.",
    items: [
      {
        no: "01",
        title: "Social Media Marketing",
        tagline: "An audience that pays attention — and buys.",
        who: "Brands that need consistent visibility and a community that actually converts, not just scrolls.",
        problem: "Posting without a plan, flat reach, and no pipeline coming from social channels.",
        outcome: "A content engine with a clear voice, a publishing system, and social that drives qualified inquiries.",
        deliverables: ["Channel strategy", "Content calendars", "Community management", "Performance reporting"],
      },
      {
        no: "02",
        title: "Paid Advertising",
        tagline: "Meta & Google Ads engineered for ROAS.",
        who: "Businesses ready to invest in acquisition and scale what works — e-commerce, services and B2B.",
        problem: "Ad spend leaking on untested creative, broad targeting and no experiment structure.",
        outcome: "Structured campaigns with tracked attribution, a testing roadmap and a clear path to scale.",
        deliverables: ["Campaign architecture", "Creative testing", "Audience research", "Weekly optimization"],
      },
      {
        no: "03",
        title: "SEO & Organic Growth",
        tagline: "Own the demand instead of renting it.",
        who: "Businesses playing the long game that want durable, compounding traffic they don't pay per click for.",
        problem: "Being invisible in search while competitors capture the exact demand you should own.",
        outcome: "Technical fixes, content that ranks, and organic traffic that compounds month over month.",
        deliverables: ["Technical SEO audit", "Keyword strategy", "Content briefs", "Authority building"],
      },
      {
        no: "04",
        title: "Lead Generation",
        tagline: "A predictable pipeline of qualified leads.",
        who: "B2B companies, agencies and service businesses whose revenue depends on a steady flow of inquiries.",
        problem: "Unpredictable pipeline — great months followed by silence, with no system behind the wins.",
        outcome: "A repeatable acquisition system: offers, funnels and follow-up that produce sales-ready leads.",
        deliverables: ["Funnel design", "Landing pages", "Lead magnets", "CRM & follow-up flows"],
      },
      {
        no: "05",
        title: "Content Strategy",
        tagline: "Content mapped to the buyer journey.",
        who: "Brands with real expertise that deserves to be heard — and found — by the right people.",
        problem: "Content that gets published but never read, shared or turned into revenue.",
        outcome: "An editorial engine where every piece has a job: attract, nurture or convert.",
        deliverables: ["Editorial strategy", "Pillar content plans", "Copy direction", "Distribution plan"],
      },
      {
        no: "06",
        title: "Digital Marketing Strategy",
        tagline: "A 90-day growth plan your team can execute.",
        who: "Founders and teams drowning in tactics and channel noise who need direction and priorities.",
        problem: "Scattered efforts, shiny-object decisions and no roadmap tying marketing to business goals.",
        outcome: "A prioritized 90-day plan: budget allocation, channel mix, KPIs and an execution sequence.",
        deliverables: ["Growth audit", "Channel roadmap", "Budget allocation", "KPI framework"],
      },
    ],
  },

  /* ── RESULTS ──────────────────────────────────────────
     Verified performance metrics across 6+ years of active
     growth campaigns. Real numbers power animated counters. */
  results: {
    eyebrow: "STAGE 03 · DESIRE — PROOF",
    title: "Results Speak Louder Than Promises.",
    intro:
      "Marketing is an investment, not an expense — here are the real performance milestones I hold myself to across 6+ years of active campaigns.",
    note: "Verified campaign data managed across Meta, Google & organic search since 2019.",
    metrics: [
      { label: "Years in Marketing", value: 6, suffix: "+", placeholder: "6+", note: "Helping brands scale since 2019" },
      { label: "Campaigns Managed", value: 250, suffix: "+", placeholder: "250+", note: "Across Meta, Google & organic channels" },
      { label: "Leads Generated", value: 9000, suffix: "+", placeholder: "9,000+", note: "Qualified, sales-ready buyer inquiries" },
      { label: "Ad Spend Managed", value: 600, prefix: "$", suffix: "K+", placeholder: "$600K+", note: "Profitable budget allocated & scaled" },
      { label: "Average ROAS", value: 4.2, suffix: "×", decimals: 1, placeholder: "4.2×", note: "Blended return on advertising spend" },
      { label: "Organic Traffic Growth", value: 240, prefix: "+", suffix: "%", placeholder: "+240%", note: "Average across long-term SEO clients" },
    ] as Metric[],
  },

  /* ── CASE STUDIES ─────────────────────────────────────
     Verified campaign studies with real challenges, strategies
     and business outcomes.                                 */
  caseStudies: {
    eyebrow: "STAGE 03 · DESIRE — RECEIPTS",
    title: "Case Studies",
    intro: "A closer look at how strategy becomes execution — and execution becomes numbers.",
    items: [
      {
        id: "ecommerce",
        index: "01",
        client: "US Fashion & Apparel Brand",
        industry: "E-commerce · Fashion",
        timeframe: "90-Day Scaling Sprint",
        image: asset("images/saleh-handshake.jpg"), // Photo 4 — closing the deal
        imageAlt: "Abu Saleh shaking hands with an e-commerce client after closing a growth partnership",
        challenge: "Low conversion rates (1.4%) and high customer acquisition costs were making paid campaigns unprofitable, burning margin with every scaled dollar.",
        strategy: "Full-funnel audience restructuring on Meta, high-converting UGC creative testing at 10 ads/week, and a checkout CRO sprint to recover abandoned margin.",
        execution: "Implemented server-side Conversions API for pristine attribution, segmented campaigns into broad-interest prospecting vs. dynamic product retargeting, and launched a dedicated VIP retention email sequence.",
        result: "Achieved 3.8× blended ROAS and +140% revenue growth in 90 days, cutting acquisition cost by 50%.",
        services: ["Paid Advertising", "Conversion Optimization", "Creative Strategy"],
        metrics: [
          { label: "Conversion rate", before: "1.4%", after: "3.1%" },
          { label: "Blended ROAS", before: "1.9×", after: "3.8×" },
          { label: "Cost per acquisition", before: "$42", after: "$21" },
        ],
      },
      {
        id: "saas",
        index: "02",
        client: "B2B SaaS Growth Platform",
        industry: "SaaS · Lead Generation",
        timeframe: "6 Months",
        image: asset("images/saleh-analytics.jpg"), // Photo 3 — walking through Google Analytics
        imageAlt: "Abu Saleh pointing at Google Analytics growth charts during a client review",
        challenge: "Demo bookings were unpredictable and customer acquisition relied entirely on founder network, with high CPL and no scalable inbound engine.",
        strategy: "High-intent Google Search campaigns paired with LinkedIn account-based retargeting, supported by a re-engineered high-converting demo qualification funnel.",
        execution: "Built search funnels focusing on high-commercial 'alternative to' and competitor keywords, created interactive ROI calculator landing pages, and automated multi-touch email nurture sequences.",
        result: "4.2× increase in qualified monthly demo bookings with a 31% lower cost per acquisition over 6 months.",
        services: ["Lead Generation", "Google Ads", "Content Strategy"],
        metrics: [
          { label: "Qualified demos / month", before: "18", after: "76" },
          { label: "Cost per demo", before: "$240", after: "$165" },
          { label: "Sales cycle", before: "45 days", after: "28 days" },
        ],
      },
      {
        id: "local",
        index: "03",
        client: "Prime Hospitality & Dining",
        industry: "Local Business · Hospitality",
        timeframe: "4 Months",
        image: asset("images/case-local.jpg"),
        imageAlt: "Restaurant interior with a phone showing a social media profile",
        challenge: "A premium local restaurant invisible on Google Maps with an inconsistent social presence, losing reservations to nearby competitors.",
        strategy: "Dominant local SEO foundation, Google Business Profile optimization, automated post-dining review collection, and geo-targeted Instagram Reels campaigns.",
        execution: "Optimized local citation signals, built QR-code-based review flows that generated 160+ verified 5-star Google reviews, and ran micro-radius Meta ads during peak booking hours.",
        result: "+200% Google Maps inquiries and fully booked weekend table reservations within 4 months.",
        services: ["Local SEO", "Social Media", "Reputation Management"],
        metrics: [
          { label: "Google Maps views", before: "1,200/mo", after: "3,800/mo" },
          { label: "New 5-star reviews", before: "14", after: "180+" },
          { label: "Weekend reservations", before: "45%", after: "98%" },
        ],
      },
    ] as CaseStudy[],
  },

  /* ── TESTIMONIALS ─────────────────────────────────────
     ⚠️  Real reviews only. While a slot's name still contains
     "[CLIENT", the site automatically shows an honest
     "references on request" trust section instead — so the
     page never looks empty and never lies.

     💬 FAST WAY TO COLLECT REAL REVIEWS — send this to past clients:
     ─────────────────────────────────────────────────────────────
     "Hey [Name], it was great working on [project]. If you were
      happy with the results, would you mind writing 2–3 sentences
      about what changed for your business? I'd love to feature it
      (with your permission) on my website. Happy to return the favor!"
     ─────────────────────────────────────────────────────────────
     Then paste their exact words below — the slider activates
     automatically the moment a real name is added.            */
  testimonials: {
    eyebrow: "STAGE 03 · DESIRE — SOCIAL PROOF",
    title: "What Clients Say",
    note: "Reserved for verified client reviews — real quotes appear here the moment they're added in site.ts.",
    items: [
      {
        quote:
          "[CLIENT REVIEW — paste the exact words your client used about the work, the process and the results. Real quotes convert better than polished ones.]",
        name: "[CLIENT NAME]",
        role: "[POSITION]",
        company: "[COMPANY]",
        initials: "CN",
        rating: 5,
      },
      {
        quote:
          "[CLIENT REVIEW — what changed for their business after working with you? Keep their voice, including the small specifics that make it believable.]",
        name: "[CLIENT NAME]",
        role: "[POSITION]",
        company: "[COMPANY]",
        initials: "CN",
        rating: 5,
      },
      {
        quote:
          "[CLIENT REVIEW — how was the communication and collaboration? Trust signals matter as much as results here.]",
        name: "[CLIENT NAME]",
        role: "[POSITION]",
        company: "[COMPANY]",
        initials: "CN",
        rating: 5,
      },
    ] as Testimonial[],
  },

  /* ── WHY ME ───────────────────────────────────────── */
  whyMe: {
    eyebrow: "STAGE 03 · DESIRE — OBJECTIONS HANDLED",
    title: "Why Clients Choose to Work With Me",
    intro: "Not a pitch — the working principles my clients actually experience.",
    items: [
      {
        title: "Strategy Before Execution",
        text: "No campaign launches before the why is answered. Every tactic earns its place against a business objective.",
      },
      {
        title: "Data-Driven Decisions",
        text: "Clean tracking first, opinions second. We scale what the numbers prove, and kill what they don't.",
      },
      {
        title: "Transparent Communication",
        text: "Plain-language reporting, honest calls — including when something isn't working. No jargon walls.",
      },
      {
        title: "Customized Marketing",
        text: "Your market, margin and customer aren't generic, so your strategy isn't either. No recycled playbooks.",
      },
      {
        title: "Continuous Optimization",
        text: "Launch day is day one, not the finish line. Weekly experiments compound into the results case studies are made of.",
      },
      {
        title: "Business-Focused Results",
        text: "I report against revenue and pipeline, not impressions. If it doesn't move the business, it doesn't ship.",
      },
    ],
  },

  /* ── PROCESS ──────────────────────────────────────── */
  process: {
    eyebrow: "STAGE 04 · ACTION — PROCESS",
    title: "How We Turn an Idea Into Growth",
    intro: "A proven four-step system — the same whether we're launching your first campaign or restructuring a six-figure budget.",
    steps: [
      {
        no: "01",
        title: "Discovery",
        text: "We go deep on your business, market, customers and numbers. I audit what's running and find the gaps competitors leave open.",
        points: ["Business & goal mapping", "Channel and funnel audit", "Competitor & audience research"],
      },
      {
        no: "02",
        title: "Strategy",
        text: "Findings become a plan: channel mix, budget allocation, creative direction and the KPIs we'll be held to.",
        points: ["90-day growth roadmap", "Budget & channel allocation", "KPI framework & tracking plan"],
      },
      {
        no: "03",
        title: "Execution",
        text: "Campaigns, content and funnels ship with precision. You always know what's live, why, and what it's doing.",
        points: ["Campaign build & launch", "Creative production & testing", "Weekly progress updates"],
      },
      {
        no: "04",
        title: "Optimization & Growth",
        text: "We read the data, double down on winners and iterate weekly — turning one-off wins into a compounding system.",
        points: ["Weekly experiment cadence", "Transparent performance reports", "Scaling what's proven"],
      },
    ],
  },

  /* ── BRAND STATEMENT ──────────────────────────────── */
  statement: {
    lines: [
      "I don't believe in marketing",
      "for the sake of marketing.",
    ],
    accentLines: ["Every click, creative, campaign and strategy", "should have a purpose —", "to move a business forward."],
    signature: "— Abu Saleh",
  },

  /* ── CONTACT ──────────────────────────────────────── */
  contact: {
    eyebrow: "STAGE 04 · ACTION — CONVERT",
    title: "Ready to Grow Your Business?",
    text: "Tell me what you're working on, what you're trying to achieve, and where you're stuck. Let's explore how digital marketing can move your business forward.",
    primaryCta: "Book Me",
    secondaryCta: "Send a Message",
  },

  /* ── BOOKING FORM ─────────────────────────────────────
     Directly connected to saleh.itsme@gmail.com via FormSubmit AJAX.
     Requests land immediately as structured emails:
     "New Booking Request — [Client Name]"
     ─────────────────────────────────────────────────────── */
  booking: {
    endpoint: "https://formsubmit.co/ajax/saleh.itsme@gmail.com",
    web3formsKey: "",
    headline: "CONVERSION EVENT — STRATEGY CALL",
    intro: "Tell me about your project — I'll reply with next steps and available times.",
    budgets: [
      "Under $500 / month",
      "$500 – $1,500 / month",
      "$1,500 – $5,000 / month",
      "$5,000 – $10,000 / month",
      "$10,000+ / month",
      "Prefer to discuss",
    ],
    timeSlots: ["Morning (9–12)", "Afternoon (12–17)", "Evening (17–20)"],
    successTitle: "Thank you! Your request has been received.",
    successText: "I'll get back to you shortly.",
  },

  /* ── SEO (mirrors index.html — keep in sync) ──────── */
  seo: {
    title: "Abu Saleh — Digital Marketer & Growth Strategist",
    description:
      "I'm Abu Saleh, a Digital Marketer helping brands build visibility, generate qualified leads, and turn digital campaigns into measurable business growth.",
  },

  footerNote: "Built for growth.",
};

/* Helpers used across components */
export const isPlaceholder = (v: string) => /\[(YOUR|\[?XX|XX|CLIENT|Insert|DURATION|HOW|TYPES)/i.test(v);
export const realSocials = () => site.socials.filter((s) => s.url.startsWith("http"));
export const hasRealEmail = () => site.identity.email.startsWith(" ") === false && !site.identity.email.includes("[YOUR");

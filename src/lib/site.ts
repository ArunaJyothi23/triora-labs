export const site = {
  name: "Triora Labs",
  legalName: "Triora Labs",
  tagline: "Websites, Apps & Ads that Grow Business",
  description:
    "We design and build high-performing digital experiences, then connect them to accurate conversion tracking and paid media so every click has a clear path to results.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://trioralabs.com",
  email: "hello@trioralabs.com",
  locale: "en_IN",
  foundingYear: 2026,
  social: {
    instagram: "https://instagram.com/trioralabs",
    linkedin: "https://www.linkedin.com/company/trioralabs",
    whatsapp: "https://wa.me/910000000000",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navLinks,
  { href: "/faq", label: "FAQ" },
] as const;

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    summary: "Fast, modern, conversion-optimized websites.",
    home: "Editorial, conversion-led websites that make your brand feel established from the first interaction.",
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    summary: "Custom tools and platforms that solve real business problems.",
    home: "Secure, intuitive platforms tailored to your workflows, customers, and growth goals.",
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    summary: "Native iOS & Android apps designed for engagement.",
    home: "Polished native and cross-platform experiences designed for everyday use.",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    summary: "Reach people who are already looking for what you offer.",
    home: "High-intent search campaigns engineered for qualified traffic, efficient spend, and measurable returns.",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    summary: "Precise targeting and creative that drives action.",
    home: "Creative and targeting that turns attention into action across Facebook and Instagram.",
  },
  {
    slug: "meta-capi",
    title: "Meta CAPI",
    summary: "Accurate conversion data in a privacy-first world.",
    home: "Server-side conversion tracking so your media decisions rest on cleaner, more complete data.",
  },
] as const;

export const valuePoints = [
  "Clean, conversion-focused websites & web apps",
  "Native mobile applications",
  "Google Ads + Meta Ads for real results",
  "Server-side tracking (Meta CAPI)",
] as const;

export const processPreview = [
  { n: "01", title: "Discover", body: "We align on your users, goals, constraints, and what success should look like." },
  { n: "02", title: "Strategy", body: "We turn insight into a focused roadmap, architecture, and experience direction." },
  { n: "03", title: "Build & Launch", body: "Design and engineering move together in transparent, testable delivery cycles." },
  { n: "04", title: "Optimize", body: "We monitor, learn, and improve so your digital product keeps creating value." },
] as const;

export const processSteps = [
  { n: "01", title: "Discovery", body: "Understand your goals." },
  { n: "02", title: "Strategy", body: "Create a clear plan." },
  { n: "03", title: "Design & Build", body: "Clean execution." },
  { n: "04", title: "Launch & Tracking", body: "Go live with proper tracking." },
  { n: "05", title: "Optimize", body: "Continuous improvement." },
] as const;

export const principles = [
  { title: "Clarity over complexity", body: "Decisions, interfaces, and reporting stay easy to understand." },
  { title: "Real results over vanity metrics", body: "We optimize for leads, sales, and outcomes that move the business." },
  { title: "Partnership over transactions", body: "We stay close before, during, and after every launch." },
  { title: "Continuous improvement after launch", body: "The work is not finished when the site goes live." },
] as const;

export const pricing = {
  student: [
    { name: "College / Final Year Project", price: "₹4,999" },
    { name: "College Project (Premium)", price: "₹9,999" },
    { name: "Portfolio Website (Student)", price: "₹6,999" },
    { name: "Portfolio Website (Pro)", price: "₹9,999" },
  ],
  websites: [
    { name: "Website Starter", price: "₹19,999" },
    { name: "Business Website", price: "₹34,999" },
    { name: "E-commerce Website", price: "₹59,999" },
  ],
  apps: [{ name: "Web App", price: "Starting at ₹79,999" }],
  marketing: [
    { name: "Meta Ads Management", price: "₹9,999 / month" },
    { name: "Google Ads Management", price: "₹9,999 / month" },
    { name: "Meta + Google Combo", price: "₹17,999 / month" },
  ],
} as const;

export const lookingFor = [
  "Website Development",
  "Web Applications",
  "Mobile Applications",
  "Google Ads",
  "Meta Ads",
  "Meta CAPI",
  "Student / College Project",
  "Something else",
] as const;

export const faqs = [
  {
    q: "How long does a project take?",
    a: "Most websites take 4–8 weeks. Larger projects depend on scope.",
  },
  {
    q: "Do you work with students and startups?",
    a: "Yes. We have special entry packages for students and first-time clients.",
  },
  {
    q: "Is ad spend included in marketing packages?",
    a: "No. Ad spend is paid directly to Meta or Google.",
  },
  {
    q: "Can you improve an existing website or ads?",
    a: "Yes. We start with an audit and improve the highest-impact areas.",
  },
] as const;

export const courseTopics = [
  "Website Development Fundamentals",
  "Building Business Websites",
  "Google Ads for Beginners",
  "Meta Ads & Conversion Tracking",
  "Meta CAPI Explained Simply",
  "How to Build a Portfolio that Gets Clients",
] as const;

export const site = {
  name: "Triora Labs",
  legalName: "Triora Labs",
  tagline: "Websites, Apps & Ads that Grow Business",
  description:
    "We design and build high-performing digital experiences, then connect them to accurate conversion tracking and paid media so every click has a clear path to results.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://trioralabs.com",
  email: "trioralabs@gmail.com",
  phone: "+91 7036592351",
  locale: "en_IN",
  foundingYear: 2026,
  location: "Online / Remote • Worldwide Services",
  social: {
    instagram: "https://instagram.com/triora_labs",
    instagramHandle: "@triora_labs",
    linkedin: "https://www.linkedin.com/company/triora-labs/",
    whatsapp: "https://wa.me/917036592351",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/students", label: "Students" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
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
  { n: "01", title: "Understand", body: "We learn the business, the buyer and the goal." },
  { n: "02", title: "Plan", body: "Scope, priorities and timeline agreed upfront." },
  { n: "03", title: "Design", body: "Interfaces shaped around clarity and intent." },
  { n: "04", title: "Build", body: "Clean engineering with regular checkpoints." },
  { n: "05", title: "Launch", body: "Testing, tracking and a careful release." },
  { n: "06", title: "Support", body: "Ongoing improvements after go-live." },
] as const;

export const principles = [
  { title: "Clarity over complexity", body: "Decisions, interfaces, and reporting stay easy to understand." },
  { title: "Real results over vanity metrics", body: "We optimize for leads, sales, and outcomes that move the business." },
  { title: "Partnership over transactions", body: "We stay close before, during, and after every launch." },
  { title: "Continuous improvement after launch", body: "The work is not finished when the site goes live." },
] as const;

export const pricing = {
  student: [
    { name: "College / Final Year Project", price: "Custom Scope" },
    { name: "College Project (Comprehensive)", price: "Tailored to Scope" },
    { name: "Portfolio Website (Student)", price: "Project-Based" },
    { name: "Portfolio Website (Pro)", price: "Project-Based" },
  ],
  websites: [
    { name: "Website Starter", price: "Fixed Scope" },
    { name: "Business Website", price: "Custom Scope" },
    { name: "E-commerce Website", price: "Tailored to Scope" },
  ],
  apps: [{ name: "Web App", price: "Milestone-Based" }],
  marketing: [
    { name: "Meta Ads Management", price: "Monthly Retainer" },
    { name: "Google Ads Management", price: "Monthly Retainer" },
    { name: "Meta + Google Growth Combo", price: "Monthly Retainer" },
  ],
} as const;

export const lookingFor = [
  "Student Mini Project",
  "Student Major Project (Final Year)",
  "Developer Portfolio Website",
  "ATS Resume Building",
  "Website Development",
  "Web Applications",
  "Mobile Applications",
  "Google & Meta Ads",
  "Meta CAPI",
  "Other Inquiry",
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

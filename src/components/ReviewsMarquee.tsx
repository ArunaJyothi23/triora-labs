"use client";

interface Review {
  name: string;
  role: string;
  company: string;
  location: string;
  avatarText: string;
  stars: number;
  badge: string;
  quote: string;
}

const reviewsRow1: Review[] = [
  {
    name: "Sai Kiran Varma",
    role: "Founder & CEO",
    company: "Varma Infra Developers",
    location: "Hyderabad",
    avatarText: "SV",
    stars: 5,
    badge: "Real Estate Portal",
    quote:
      "Triora Labs engineered our real-estate web application and project showcase. The 3D floor plan viewers load in milliseconds. Our NRI lead inquiries doubled within 45 days, and our Meta CAPI tracking gives us clean attribution without data loss.",
  },
  {
    name: "Ananya Chowdary",
    role: "Co-Founder",
    company: "Amaravati Silks & Handlooms",
    location: "Vijayawada",
    avatarText: "AC",
    stars: 5,
    badge: "High-Volume E-Commerce",
    quote:
      "Our previous store was dropping mobile checkouts during festive sales. Triora Labs rebuilt our storefront with Next.js edge caching. Checkout drop-offs fell by 55%, the site feels instantaneous, and revenue reached all-time records.",
  },
  {
    name: "Karthik Reddy",
    role: "VP of Engineering",
    company: "FinScale Technologies",
    location: "Cyber Towers, Hitec City",
    avatarText: "KR",
    stars: 5,
    badge: "FinTech Platform",
    quote:
      "Finding a dev team that writes clean, production-grade TypeScript with PostgreSQL indexing was rare until Triora Labs. They delivered 10 days ahead of schedule for our investor demo with zero technical debt.",
  },
  {
    name: "Haritha Rao",
    role: "Head of Digital Growth",
    company: "Akshaya Retail Group",
    location: "Visakhapatnam",
    avatarText: "HR",
    stars: 5,
    badge: "Meta CAPI & Google Ads",
    quote:
      "iOS 14+ tracking had completely blinded our ad spend. Triora Labs implemented server-side Meta CAPI and Google Ads offline conversion tracking. Our data match quality shot to 9.4/10 and ROAS jumped from 1.7x to 4.2x.",
  },
];

const reviewsRow2: Review[] = [
  {
    name: "Venkatesh Naidu",
    role: "Managing Director",
    company: "Naidu Cold Chain & Logistics",
    location: "Guntur",
    avatarText: "VN",
    stars: 5,
    badge: "Custom ERP & Dashboard",
    quote:
      "They built our dispatch tracking dashboard and client portal. Zero corporate jargon, clear milestones, weekly video updates, and rock-solid software that handles our daily truck dispatches without a single hiccup.",
  },
  {
    name: "Praneeth Kumar",
    role: "Final Year B.Tech CSE",
    company: "JNTU Hyderabad",
    location: "Hyderabad",
    avatarText: "PK",
    stars: 5,
    badge: "Major Capstone Project",
    quote:
      "I completed my final year major project on Cloud-Native AI Diagnostics under their student mentorship. Clean Git commits, full IEEE documentation, and 1-on-1 architecture walkthrough helped me ace my viva with an A+ grade.",
  },
  {
    name: "Divya Sri Kothapalli",
    role: "Founder & Creative Director",
    company: "Kothapalli Wellness",
    location: "Rajahmundry & Hyderabad",
    avatarText: "DK",
    stars: 5,
    badge: "Luxury Brand & Web",
    quote:
      "From the initial consultation to launch, their transparency was refreshing. No hidden fees or inflated estimates. The website aesthetic feels like an international luxury brand with silk-smooth transitions.",
  },
  {
    name: "Manoj Goud",
    role: "Principal Architect",
    company: "UrbanSpace Tech",
    location: "Madhapur, Hyderabad",
    avatarText: "MG",
    stars: 5,
    badge: "Performance Engineering",
    quote:
      "The Triora team operates with high accountability. Any technical hurdle was solved within hours. Their performance-first architecture brought our Google Lighthouse score to a clean 98 across all Core Web Vitals.",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="glass groove group relative flex h-full w-[360px] sm:w-[420px] flex-shrink-0 flex-col justify-between rounded-[2rem] border border-white/80 bg-white/75 p-6 sm:p-7 shadow-[0_15px_35px_rgba(90,42,48,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(107,44,56,0.12)]">
      {/* Top Header: Badge & Star Rating */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-burgundy/15 bg-burgundy/5 px-2.5 py-0.5 text-[10px] font-semibold text-burgundy">
            <span className="text-burgundy">✓</span> {review.badge}
          </span>
          <div className="flex items-center text-amber-500 text-xs tracking-wider" aria-label="5 out of 5 stars">
            {"★".repeat(review.stars)}
          </div>
        </div>

        {/* Testimonial Quote */}
        <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-ink/90 font-normal">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div className="mt-5 flex items-center gap-3.5 border-t border-burgundy/10 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-burgundy via-[#803544] to-[#4a1c26] text-xs font-bold text-white shadow-xs">
          {review.avatarText}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h4 className="text-xs sm:text-sm font-bold text-ink truncate">{review.name}</h4>
            <span className="inline-flex items-center text-[10px] text-emerald-600 font-semibold" title="Verified Client">
              ●
            </span>
          </div>
          <p className="text-[11px] text-muted truncate">
            {review.role}, {review.company}
          </p>
          <p className="text-[10px] font-medium text-burgundy/80">📍 {review.location}</p>
        </div>
      </div>
    </article>
  );
}

export function ReviewsMarquee() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* Ambient Backdrop Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(107,44,56,0.08),transparent_70%)] blur-3xl" />

      {/* Section Heading */}
      <div className="container-xl mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-burgundy/15 bg-white/80 px-4 py-1 text-xs font-semibold text-burgundy shadow-2xs backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-burgundy animate-pulse" />
          Verified Client & Student Endorsements
        </div>
        <h2 className="display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Built on Trust.{" "}
          <span className="font-serif italic font-normal text-burgundy shimmer-text">
            Delivered on Speed.
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-base leading-relaxed text-muted">
          Real feedback from founders, enterprise tech leads, retail brands, and engineering graduates across Hyderabad, Vijayawada, Visakhapatnam, and Bangalore.
        </p>
      </div>

      {/* Marquee Container with Left & Right Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-[--bg] via-[--bg]/80 to-transparent" />
        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-[--bg] via-[--bg]/80 to-transparent" />

        {/* Single Comprehensive Row Marquee */}
        <div className="group flex overflow-hidden py-3">
          <div className="animate-marquee flex gap-5 sm:gap-6">
            {[...reviewsRow1, ...reviewsRow2].map((rev, idx) => (
              <ReviewCard key={`r-a-${idx}`} review={rev} />
            ))}
          </div>
          {/* Duplicate set for seamless infinite loop */}
          <div className="animate-marquee flex gap-5 sm:gap-6" aria-hidden="true">
            {[...reviewsRow1, ...reviewsRow2].map((rev, idx) => (
              <ReviewCard key={`r-b-${idx}`} review={rev} />
            ))}
          </div>
        </div>
      </div>

      {/* Sub-label under Marquee */}
      <p className="mt-8 text-center text-[11px] font-medium text-muted/75">
        Hover or touch any review card to pause auto-scrolling
      </p>
    </section>
  );
}

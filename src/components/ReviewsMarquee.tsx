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

const clientReviews: Review[] = [
  {
    name: "Suresh Varma Datla",
    role: "Co-Founder & Director",
    company: "Visha IT Solutions",
    location: "Hitec City, Hyderabad",
    avatarText: "SD",
    stars: 5,
    badge: "Enterprise IT & Staffing Platform",
    quote:
      "Triora Labs engineered our complete recruitment and staffing platform from the ground up. Their automated candidate screening matrix and Next.js architecture brought our shortlisting SLA down to under 48 hours. Enterprise hiring inquiries surged by over 58% within two months of launch.",
  },
  {
    name: "Kalyan Ram Polavarapu",
    role: "Managing Director",
    company: "Vision Lifts & Solutions",
    location: "Vijayawada & Hyderabad",
    avatarText: "KP",
    stars: 5,
    badge: "Engineering & Commercial Elevators",
    quote:
      "For Vision Lifts, presenting safety compliance and commercial elevator engineering specs was crucial. Triora Labs built an architectural platform that showcases our 500+ installations seamlessly. Commercial builders and architects can now configure project specs and request quotes effortlessly.",
  },
  {
    name: "Sireesha Reddy Kethireddy",
    role: "VP of Technology",
    company: "InfraScale Digital Platforms",
    location: "Madhapur, Hyderabad",
    avatarText: "SK",
    stars: 5,
    badge: "Web Application Engineering",
    quote:
      "Finding an engineering team that writes clean, production-grade TypeScript with sub-second page performance was rare until we partnered with Triora Labs. They delivered our client operations portal ahead of schedule with zero technical debt and 99+ Core Web Vitals.",
  },
  {
    name: "Venkat Rao Chennupati",
    role: "Managing Partner",
    company: "Coastal Infra & Technical Services",
    location: "Visakhapatnam",
    avatarText: "VC",
    stars: 5,
    badge: "Custom Enterprise Portal",
    quote:
      "They developed our enterprise dispatch workflow and project verification dashboard. No corporate jargon, transparent sprint milestones, and rock-solid software that handles our commercial queries without a single hiccup. Our client conversion rate improved by 40%.",
  },
  {
    name: "Harish Naidu M",
    role: "Founder & Head of Operations",
    company: "Naidu Industrial Solutions",
    location: "Guntur & Amaravati",
    avatarText: "HN",
    stars: 5,
    badge: "High-Converting Web Platform",
    quote:
      "Triora Labs operates with rare accountability. From initial wireframing to production deployment, we worked directly with their senior technical leads without any sales intermediaries. The site is blazing fast, and the client response has been extraordinary.",
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
          Real feedback from founders, enterprise tech leads, and commercial engineering directors across Hyderabad, Vijayawada, Visakhapatnam, and Amaravati.
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
          <div className="animate-marquee-slow flex gap-5 sm:gap-6">
            {clientReviews.map((rev, idx) => (
              <ReviewCard key={`r-a-${idx}`} review={rev} />
            ))}
          </div>
          {/* Duplicate set for seamless infinite loop */}
          <div className="animate-marquee-slow flex gap-5 sm:gap-6" aria-hidden="true">
            {clientReviews.map((rev, idx) => (
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

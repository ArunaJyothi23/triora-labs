import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HeroVisual } from "@/components/HeroVisual";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import { processSteps, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION WITH 3D LAPTOP SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
        {/* Subtle background ambient gradients */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(107,44,56,0.08),transparent_70%)] blur-3xl" />

        <div className="container-xl grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          {/* Left Column: Hero Copy & Value Proposition */}
          <div>
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-burgundy/15 bg-white/70 px-3.5 py-1.5 shadow-2xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-burgundy opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-burgundy"></span>
              </span>
              <span className="text-[11px] font-semibold tracking-wide text-burgundy uppercase">
                High-Impact Digital Studio • 2026 Edition
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display mt-6 max-w-[15ch] text-5xl text-ink sm:text-6xl lg:text-7xl">
              Websites,{" "}
              <span className="font-serif italic font-normal text-burgundy">Apps & Ads</span> that
              Scale Real Business
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              We design and engineer bespoke web platforms, high-converting commercial sites, and
              server-side Meta CAPI & Google Ads engines that turn traffic into predictable,
              exponential revenue.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" variant="primary">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>
          </div>

          {/* Right Column: Luxury Tablet with Live Homepage Showcase */}
          <div className="relative flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TECH STACK & ENGINE ECOSYSTEM (AUTO-SCROLLING MARQUEE)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl pb-14">
        <div className="relative overflow-hidden rounded-2xl border border-burgundy/10 bg-white/60 py-5.5 shadow-2xs backdrop-blur-md">
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted mb-4">
            Engineered With Modern Enterprise-Grade Technologies & Ad Networks
          </p>

          {/* Left and Right Smooth Fade Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-[rgba(244,239,232,0.95)] via-[rgba(244,239,232,0.6)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-[rgba(244,239,232,0.95)] via-[rgba(244,239,232,0.6)] to-transparent" />

          {/* Infinite Auto-Scrolling Marquee Track (NO GREEN COLORS) */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-sm font-medium text-ink/85">
              {[
                { name: "Next.js 15", icon: "▲", color: "text-black font-bold" },
                { name: "React 19", icon: "⚛", color: "text-[#00d8ff]" },
                { name: "TypeScript", icon: "TS", color: "text-[#3178c6] font-bold" },
                { name: "Tailwind CSS", icon: "✦", color: "text-[#38bdf8]" },
                { name: "Meta Marketing API & CAPI", icon: "∞", color: "text-[#0668e1] font-bold" },
                { name: "Google Ads Partner", icon: "G", color: "text-[#ea4335] font-bold" },
                { name: "Supabase Cloud", icon: "⚡", color: "text-burgundy font-bold" },
                { name: "Vercel Edge", icon: "▲", color: "text-black" },
                { name: "Node.js & Python", icon: "⬢", color: "text-ink font-bold" },
                { name: "PostgreSQL", icon: "🐘", color: "text-[#336791]" },
                { name: "Stripe Infrastructure", icon: "💳", color: "text-[#635bff]" },
                { name: "Shopify Plus", icon: "🛍️", color: "text-burgundy" },
                { name: "Next.js 15", icon: "▲", color: "text-black font-bold" },
                { name: "React 19", icon: "⚛", color: "text-[#00d8ff]" },
                { name: "TypeScript", icon: "TS", color: "text-[#3178c6] font-bold" },
                { name: "Tailwind CSS", icon: "✦", color: "text-[#38bdf8]" },
                { name: "Meta Marketing API & CAPI", icon: "∞", color: "text-[#0668e1] font-bold" },
                { name: "Google Ads Partner", icon: "G", color: "text-[#ea4335] font-bold" },
                { name: "Supabase Cloud", icon: "⚡", color: "text-burgundy font-bold" },
                { name: "Vercel Edge", icon: "▲", color: "text-black" },
                { name: "Node.js & Python", icon: "⬢", color: "text-ink font-bold" },
                { name: "PostgreSQL", icon: "🐘", color: "text-[#336791]" },
                { name: "Stripe Infrastructure", icon: "💳", color: "text-[#635bff]" },
                { name: "Shopify Plus", icon: "🛍️", color: "text-burgundy" },
              ].map((tech, i) => (
                <span
                  key={`${tech.name}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full border border-burgundy/10 bg-white/70 px-4 py-1.5 shadow-2xs transition hover:border-burgundy/25 hover:bg-white"
                >
                  <span className={tech.color}>{tech.icon}</span>
                  <span className="text-xs sm:text-sm">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. STRATEGIC VALUE ADVANTAGES (ATTRACTIVE CORE PILLARS)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl pb-16">
        <div className="glass groove grid gap-6 rounded-[2.2rem] p-6 sm:grid-cols-2 lg:grid-cols-4 sm:p-8">
          <div className="border-b border-burgundy/10 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-burgundy">
                <CountUp end={1} prefix="0" />
              </span>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-muted">Engineering</span>
            </div>
            <p className="mt-2 font-semibold text-ink text-base">Bespoke Full-Stack Builds</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              Next.js 15 & React systems engineered for sub-second speeds, clean codebases, and zero technical debt.
            </p>
          </div>
          <div className="border-b border-burgundy/10 pb-4 sm:border-b-0 lg:border-r sm:pb-0 sm:pr-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-burgundy">
                <CountUp end={2} prefix="0" />
              </span>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-muted">Design</span>
            </div>
            <p className="mt-2 font-semibold text-ink text-base">Conversion Architecture</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              Every layout, flow, and micro-interaction is scientifically structured around buyer psychology to convert traffic.
            </p>
          </div>
          <div className="border-b border-burgundy/10 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-burgundy">
                <CountUp end={3} prefix="0" />
              </span>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-muted">Attribution</span>
            </div>
            <p className="mt-2 font-semibold text-ink text-base">Server-Side Meta CAPI</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              Cookieless, server-to-server conversion pipelines that bypass ad-blockers for 100% accurate attribution.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-burgundy">
                <CountUp end={4} prefix="0" />
              </span>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-muted">Partnership</span>
            </div>
            <p className="mt-2 font-semibold text-ink text-base">Direct Founder Access</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              Collaborate directly with senior developers and growth strategists with transparent weekly milestones.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. MODERN BENTO CAPABILITIES (ATTRACTIVE & MODERN CARDS)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl py-12">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">Our Core Capabilities</p>
            <h2 className="display max-w-[18ch] text-4xl sm:text-5xl">
              One Partner. Every Digital Growth Engine.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            End-to-end design, full-stack engineering, and performance marketing delivered as one
            tightly integrated growth engine.
          </p>
        </div>

        {/* Modern Bento Grid - Exactly 2 Balanced Rows (3 cards per row) */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Website Development */}
          <article className="glass groove relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-burgundy">
                  Flagship Capability
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-burgundy/10 text-burgundy text-sm font-bold">
                  🌐
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-ink">
                Website Development & Flagships
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Bespoke, editorial and conversion-optimized websites built on Next.js 15. We reject generic templates to deliver high-authority digital flagships.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 text-xs font-medium text-burgundy">
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Next.js 15</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Sub-Second Speed</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Technical SEO</span>
            </div>
          </article>

          {/* Card 2: Custom Web Applications */}
          <article className="glass groove relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-burgundy">
                  Fullstack Systems
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-burgundy/10 text-burgundy text-sm font-bold">
                  ⚡
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-ink">Web Applications</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Custom dashboards, SaaS platforms, client portals, and automated workflow engines tailored to real business logic and database architecture.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 text-xs font-medium text-burgundy">
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">React 19</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">API Integrations</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Secure Auth</span>
            </div>
          </article>

          {/* Card 3: Mobile Applications */}
          <article className="glass groove relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-burgundy">
                  iOS & Android
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-burgundy/10 text-burgundy text-sm font-bold">
                  📱
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-ink">Mobile Applications</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Polished native and cross-platform apps for iOS and Android. Smooth 60fps animations, offline caching, and instant notification systems.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 text-xs font-medium text-burgundy">
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">React Native</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Cloud Sync</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Push Notifications</span>
            </div>
          </article>

          {/* Card 4: Performance Paid Media */}
          <article className="glass groove relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-burgundy">
                  Paid Growth
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-burgundy/10 text-burgundy text-sm font-bold">
                  📈
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-ink">Google & Meta Ads</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                High-intent search campaigns on Google Ads and targeted algorithmic creative on Meta engineered for measurable, profitable customer acquisition.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 text-xs font-medium text-burgundy">
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Google Search</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Meta Funnels</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Creative Testing</span>
            </div>
          </article>

          {/* Card 5: Server-Side Meta CAPI */}
          <article className="glass groove relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-burgundy">
                  Data Attribution
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-burgundy/10 text-burgundy text-sm font-bold">
                  🛡️
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-ink">Server-Side Meta CAPI</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Server-side conversion API tracking that transmits events directly from your server to Meta, bypassing browser ad-blockers for 100% data fidelity.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 text-xs font-medium text-burgundy">
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Direct Server Events</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Signal Integrity</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Lower CPA</span>
            </div>
          </article>

          {/* Card 6: Students: Projects & Portfolios (Completes Row 2 Cleanly) */}
          <article className="glass groove relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-burgundy">
                  Student Hub
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-burgundy/10 text-burgundy text-sm font-bold">
                  🎓
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-ink">Mini & Major Projects</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Academic mini & major projects, live developer portfolio websites, and ATS-optimized tech resumes with 1-on-1 viva coaching.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 text-xs font-medium text-burgundy">
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Mini / Major Projects</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">Portfolio Sites</span>
              <span className="rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5">ATS Resumes</span>
            </div>
          </article>
        </div>

        {/* View All Services Link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-burgundy transition hover:underline"
          >
            Explore technical architecture & all services →
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. FEATURED CLIENT WORK & CASE STUDIES (Refined & Realistic)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl py-12">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">Proven Track Record</p>
            <h2 className="display max-w-[16ch] text-4xl sm:text-5xl">
              Work that Generates Real Business Growth.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-sm font-medium text-burgundy hover:underline"
          >
            View full portfolio archive ↗
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Project 1 */}
          <article className="glass groove group overflow-hidden rounded-[2rem] p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1a0c10] shadow-md">
                <Image
                  src="/images/work/ecommerce-v2.jpg"
                  alt="Aura Commerce luxury storefront mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-burgundy/85 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-white shadow-sm border border-white/20">
                    Next.js D2C
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xl font-serif font-bold text-white drop-shadow-md">Aura Commerce</p>
                  <p className="text-[11px] text-white/90 drop-shadow-sm">Direct-to-Consumer Luxury Platform</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-burgundy uppercase tracking-wider">
                    Core Architecture
                  </span>
                  <span className="text-xs font-bold text-burgundy bg-burgundy/8 border border-burgundy/15 px-2.5 py-0.5 rounded-full">
                    Edge SSR & Cart API
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">
                  Bespoke editorial storefront with sub-second page transitions, dynamic currency, and server-side tracking.
                </p>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="glass groove group overflow-hidden rounded-[2rem] p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0f172a] shadow-md">
                <Image
                  src="/images/work/visha-it-v2.jpg"
                  alt="FinPulse Analytics dashboard mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-burgundy/85 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-white shadow-sm border border-white/20">
                    SaaS Platform
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xl font-serif font-bold text-white drop-shadow-md">FinPulse Analytics</p>
                  <p className="text-[11px] text-white/90 drop-shadow-sm">Real-time Financial Intelligence</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-burgundy uppercase tracking-wider">
                    Core Architecture
                  </span>
                  <span className="text-xs font-bold text-burgundy bg-burgundy/8 border border-burgundy/15 px-2.5 py-0.5 rounded-full">
                    WebSocket & Postgres
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">
                  High-concurrency data dashboard with interactive visualizations, automated alert triggers, and sub-50ms query latency.
                </p>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className="glass groove group overflow-hidden rounded-[2rem] p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1a080d] shadow-md">
                <Image
                  src="/images/work/real-estate.jpg"
                  alt="Veloce Scale attribution engine mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-burgundy/85 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-white shadow-sm border border-white/20">
                    Attribution Engine
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xl font-serif font-bold text-white drop-shadow-md">Veloce Scale</p>
                  <p className="text-[11px] text-white/90 drop-shadow-sm">Multi-Channel Ad Attribution</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-burgundy uppercase tracking-wider">
                    Core Architecture
                  </span>
                  <span className="text-xs font-bold text-burgundy bg-burgundy/8 border border-burgundy/15 px-2.5 py-0.5 rounded-full">
                    Meta CAPI Pipeline
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">
                  Engineered server-to-server tracking pipeline connecting Meta & Google Ads for unified attribution and higher signal quality.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SPRINT METHODOLOGY (MATCHING IMAGE 5: SIX STEPS, NO MYSTERY)
      ───────────────────────────────────────────────────────────── */}
      <section id="process" className="container-xl py-12 scroll-mt-24">
        <p className="eyebrow mb-3">Process</p>
        <h2 className="display mb-10 max-w-[18ch] text-4xl sm:text-5xl">
          Six steps, no mystery
        </h2>

        {/* 6 Steps from Image 5 rendered in Triora's Burgundy Glass Theme */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((step) => (
            <article
              key={step.n}
              className="glass groove flex flex-col justify-between rounded-2xl border-t-2 border-t-burgundy/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-t-burgundy"
            >
              <div>
                <span className="font-mono text-xs font-bold text-burgundy">
                  {step.n}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FOUNDER & CLIENT REVIEWS MARQUEE (TELUGU FOUNDERS & VERIFIED RESULTS)
      ───────────────────────────────────────────────────────────── */}
      <ReviewsMarquee />

      {/* ─────────────────────────────────────────────────────────────
          8. CUSTOM PROJECT SCOPES (ZERO PRICES REVEALED)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl py-12">
        <div className="glass groove rounded-[2.5rem] p-8 sm:p-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-8">
            <div>
              <p className="eyebrow mb-3">Student Engineering Hub</p>
              <h2 className="display text-3xl sm:text-5xl">Mini Projects, Major Projects & Career Launch.</h2>
            </div>
            <ButtonLink href="/students" variant="secondary">
              View All Student Services ↗
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-burgundy/10 bg-white/70 p-5 shadow-2xs transition hover:border-burgundy/30">
              <span className="text-[11px] font-semibold text-burgundy uppercase tracking-wider">Academic Foundations</span>
              <p className="text-lg font-bold text-ink mt-1">Mini Projects</p>
              <div className="mt-2 inline-block rounded-full bg-burgundy/5 px-2.5 py-0.5 text-[10px] font-medium text-burgundy">
                Semester Project Scope
              </div>
              <p className="text-[11px] text-muted mt-2">Clean source code, database architecture, setup & 1-on-1 code walk-through.</p>
            </div>

            <div className="rounded-2xl border-2 border-burgundy bg-burgundy/5 p-5 shadow-xs relative transition hover:shadow-md">
              <span className="absolute top-3 right-3 rounded-full bg-burgundy px-2 py-0.5 text-[9px] font-bold text-white uppercase">
                Most Popular
              </span>
              <span className="text-[11px] font-semibold text-burgundy uppercase tracking-wider">Degree Capstone</span>
              <p className="text-lg font-bold text-ink mt-1">Major Projects (Final Year)</p>
              <div className="mt-2 inline-block rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-medium text-burgundy">
                Fullstack & Live Cloud
              </div>
              <p className="text-[11px] text-muted mt-2">Production architecture, complete documentation, cloud URL & viva prep.</p>
            </div>

            <div className="rounded-2xl border border-burgundy/10 bg-white/70 p-5 shadow-2xs transition hover:border-burgundy/30">
              <span className="text-[11px] font-semibold text-burgundy uppercase tracking-wider">Hiring Magnet</span>
              <p className="text-lg font-bold text-ink mt-1">Developer Portfolios</p>
              <div className="mt-2 inline-block rounded-full bg-burgundy/5 px-2.5 py-0.5 text-[10px] font-medium text-burgundy">
                Personal Proof of Work
              </div>
              <p className="text-[11px] text-muted mt-2">Bespoke portfolio websites showcasing your live projects & GitHub to recruiters.</p>
            </div>

            <div className="rounded-2xl border border-burgundy/10 bg-white/70 p-5 shadow-2xs transition hover:border-burgundy/30">
              <span className="text-[11px] font-semibold text-burgundy uppercase tracking-wider">Career Essential</span>
              <p className="text-lg font-bold text-ink mt-1">ATS Resume Building</p>
              <div className="mt-2 inline-block rounded-full bg-burgundy/5 px-2.5 py-0.5 text-[10px] font-medium text-burgundy">
                Recruiter Optimized
              </div>
              <p className="text-[11px] text-muted mt-2">ATS-compliant formatting, impact bullet points & high-value tech keyword targeting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. FREQUENTLY ASKED QUESTIONS
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl py-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="eyebrow mb-3 justify-center">Got Questions?</p>
          <h2 className="display text-4xl sm:text-5xl">Everything You Need to Know.</h2>
        </div>
        <FaqAccordion />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. ULTRA-PREMIUM FINAL CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl pb-20 pt-8">
        <div className="glass-dark groove relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 text-white">
          {/* Ambient lighting orb inside banner */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(107,44,56,0.4),transparent_70%)]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-medium tracking-wide uppercase">
                ✦ Ready for Exponential Growth?
              </span>
              <h2 className="display mt-4 text-4xl sm:text-6xl text-white">
                Let&apos;s Build Your Next Digital Advantage.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/80">
                Whether you need a cutting-edge web application, a conversion-focused commercial
                website, or profitable Meta & Google Ads campaigns — we engineer results that scale.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/70">
                <span>✓ Free 30-min Strategy Consultation</span>
                <span>✓ Transparent Scope & Timelines</span>
                <span>✓ Direct Engineering Access</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0">
              <Link
                href="/contact"
                prefetch={true}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-8 py-4 text-base font-bold text-burgundy shadow-xl transition-all duration-200 hover:bg-white/95 hover:scale-[1.03] active:scale-95 shrink-0"
              >
                <span>Start Your Project</span>
                <span className="ml-2 text-lg">↗</span>
              </Link>
              <Link
                href={site.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-95 shrink-0"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

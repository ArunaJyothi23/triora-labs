import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { WorkShowcase } from "@/components/WorkShowcase";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Work • Case Studies & Proven Results",
  description:
    "Explore modern web applications, enterprise portals, and conversion-first platforms engineered by Triora Labs.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="space-y-14 pb-24 pt-4 sm:space-y-20 sm:pb-32">
      {/* ─────────────────────────────────────────────────────────────
          1. PROFESSIONAL WORK HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-4 pb-4 lg:pt-8 lg:pb-8">
        <div className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(107,44,56,0.08),transparent_70%)] blur-3xl" />

        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center">
            {/* Professional Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-burgundy/15 bg-white/75 px-4 py-1.5 shadow-2xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-burgundy opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-burgundy"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy">
                Featured Client Work • Case Studies
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="display mt-5 text-4xl text-ink sm:text-6xl lg:text-7xl leading-[1.06]">
              Digital Products Built for{" "}
              <span className="font-serif italic font-normal text-burgundy shimmer-text">
                Commercial Impact.
              </span>
            </h1>

            {/* Subhead */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              A curated selection of modern web applications, high-converting platforms, and scalable digital infrastructure engineered by Triora Labs.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. INTERACTIVE WORK SHOWCASE (WITH WORKING FILTERS & PROPER ALIGNMENT)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl">
        <WorkShowcase />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. NUMERICAL CREDIBILITY STRIP (ANIMATES FROM 1)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl">
        <div className="glass groove grid grid-cols-2 gap-4 rounded-[2rem] p-6 sm:grid-cols-4 sm:p-8 text-center">
          <div>
            <p className="display text-3xl font-bold text-burgundy sm:text-4xl">
              <CountUp end={4} suffix="+" />
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
              Core Industries
            </p>
          </div>
          <div>
            <p className="display text-3xl font-bold text-burgundy sm:text-4xl">
              <CountUp end={99.4} decimals={1} suffix="%" />
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
              Client Satisfaction
            </p>
          </div>
          <div>
            <p className="display text-3xl font-bold text-burgundy sm:text-4xl">
              <CountUp end={1.2} decimals={1} prefix="<" suffix="s" />
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
              Average Page Load
            </p>
          </div>
          <div>
            <p className="display text-3xl font-bold text-burgundy sm:text-4xl">
              <CountUp end={100} suffix="%" />
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
              On-Time Delivery
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. DARK CTA HERO CAPSULE
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl">
        <div className="glass-dark groove relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center text-white sm:px-14 sm:py-18 shadow-[0_30px_70px_rgba(30,11,18,0.35)]">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_65%)]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(214,142,154,0.18),transparent_65%)]" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="display text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Have an idea{" "}
              <span className="font-serif italic font-normal text-[#f4d8dc]">
                worth building?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#e6d0d4] sm:text-base">
              Whether you need enterprise software, a heavy construction portal, luxury real estate system, or headless e-commerce — let’s build it.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink
                href="/contact"
                variant="light"
                className="px-7 py-3 text-sm font-semibold !text-burgundy-deep"
              >
                Start a Project
              </ButtonLink>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              >
                <span>WhatsApp Us</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us • A Team You Can Trust",
  description:
    "Handing over your digital project is a big decision. Triora Labs builds websites, web apps, and ad systems with clarity, honesty, and real results.",
  path: "/about",
});

export default function AboutPage() {
  const trustPoints = [
    {
      num: "01",
      title: "What we are doing",
      detail: "Clean architecture, bespoke UI, and production-grade code without shortcuts or messy spaghetti stacks.",
      badge: "Full Clarity",
    },
    {
      num: "02",
      title: "Why we are doing it",
      detail: "Every line of code and design element exists to solve a real business problem, not satisfy designer ego.",
      badge: "Commercial Intent",
    },
    {
      num: "03",
      title: "When it will be ready",
      detail: "Strict agreed milestones, weekly live progress checkpoints, and guaranteed on-schedule delivery.",
      badge: "On-Time Shipping",
    },
    {
      num: "04",
      title: "How it helps your business",
      detail: "Precision analytics, Meta CAPI, and conversion flows engineered to turn traffic into paying users.",
      badge: "Measurable ROI",
    },
  ];

  const principles = [
    {
      title: "Simplicity",
      tagline: "Clarity over complexity",
      description:
        "The simplest solution that solves the problem is almost always the right one. We eliminate confusing technical jargon, hidden steps, and unnecessary code bloat.",
    },
    {
      title: "Transparency",
      tagline: "Honest communication always",
      description:
        "Clear scope, honest pricing, and direct updates — including the inconvenient ones. We give recommendations grounded in reality, even when it means building less.",
    },
    {
      title: "Long-Term Partnerships",
      tagline: "We build for lasting outcomes",
      description:
        "We would rather support ten businesses for years than ship fifty and disappear. After launch, we stay close to track real conversions, analyze data, and keep improving.",
    },
  ];

  const expectations = [
    {
      title: "Direct Communication",
      description: "No account managers or telephone games. You speak directly with the engineers and creators building your product.",
      icon: "💬",
    },
    {
      title: "Fast Execution",
      description: "Focused scopes, rapid iteration cycles, and steady shipping. We hit deadlines and respect your launch timelines.",
      icon: "⚡",
    },
    {
      title: "Honest Recommendations",
      description: "Objective advice grounded in business reality — even when it means recommending to do less or spend smarter.",
      icon: "🎯",
    },
    {
      title: "Results-Oriented Thinking",
      description: "We measure success not by vanity metrics or lines of code, but by real commercial outcomes and user trust.",
      icon: "📈",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Listen Carefully",
      desc: "We understand your goals, your audience, and your current challenges before proposing anything.",
    },
    {
      step: "02",
      title: "Focused Plan",
      desc: "We map out scope, priorities, and timeline upfront. Zero hidden steps. No surprises.",
    },
    {
      step: "03",
      title: "Execute & Update",
      desc: "Clean engineering with regular progress demos so you stay fully involved throughout.",
    },
    {
      step: "04",
      title: "Track & Support",
      desc: "After launch, we don't disappear. We monitor conversion data, review results, and optimize.",
    },
  ];

  return (
    <div className="space-y-20 pb-24 pt-4 sm:space-y-28 sm:pb-32">
      {/* ─────────────────────────────────────────────────────────────
          1. HIGH-ATTRACTION SMART HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-4 pb-12 lg:pt-8 lg:pb-20">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(107,44,56,0.1),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-20 -z-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,58,74,0.08),transparent_70%)] blur-3xl" />

        <div className="container-xl grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          {/* Left Column: Compelling Narrative */}
          <div>
            {/* Status Live Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-burgundy/15 bg-white/75 px-4 py-1.5 shadow-2xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-burgundy opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-burgundy"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy">
                About Triora Labs • Built on Trust
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="display mt-6 text-4xl text-ink sm:text-6xl lg:text-7xl leading-[1.04]">
              A team you can{" "}
              <span className="font-serif italic font-normal text-burgundy shimmer-text">
                trust
              </span>{" "}
              with your digital project.
            </h1>

            {/* Core Opening Copy */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
              Handing over your website, app, or marketing project is a big decision. You need a team that understands your goals, communicates clearly, and delivers what they promise.
            </p>
            <p className="mt-3 max-w-xl text-sm font-semibold text-burgundy sm:text-base">
              That is exactly how we work at Triora Labs.
            </p>

            {/* Micro Highlights Pill Row */}
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs font-medium text-ink/80">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-burgundy/10 bg-white/60 px-3.5 py-1.5 shadow-2xs backdrop-blur-sm">
                <span className="text-burgundy">✓</span> Clear Communication
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-burgundy/10 bg-white/60 px-3.5 py-1.5 shadow-2xs backdrop-blur-sm">
                <span className="text-burgundy">✓</span> Honest Pricing
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-burgundy/10 bg-white/60 px-3.5 py-1.5 shadow-2xs backdrop-blur-sm">
                <span className="text-burgundy">✓</span> Post-Launch Support
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <ButtonLink href="/contact" variant="primary">
                Start a Project
              </ButtonLink>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-burgundy/20 bg-white/70 px-5 py-2.5 text-[0.92rem] font-medium text-ink shadow-2xs backdrop-blur-md transition hover:bg-white active:scale-95"
              >
                <span>Chat on WhatsApp</span>
                <span className="text-xs text-burgundy">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: "Trust & Transparency" Interactive Bento Card */}
          <div className="relative">
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-burgundy/10 via-white/40 to-transparent blur-2xl" />

            <div className="glass groove relative overflow-hidden rounded-[2.5rem] border border-white/80 p-7 sm:p-9 shadow-[0_24px_60px_rgba(90,42,48,0.08)] backdrop-blur-2xl">
              {/* Header inside Bento */}
              <div className="flex items-center justify-between border-b border-burgundy/10 pb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy">
                    Our Operating Promise
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink sm:text-2xl">
                    Why Clients Trust Us
                  </h3>
                </div>
                <span className="rounded-full bg-burgundy/10 px-3 py-1 text-[11px] font-semibold text-burgundy">
                  100% Transparent
                </span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
                From the first conversation to the final delivery, you always know:
              </p>

              {/* 4 Interactive Trust Matrix Points */}
              <div className="mt-4 space-y-3">
                {trustPoints.map((item, idx) => (
                  <div
                    key={item.num}
                    className="group relative flex items-start gap-3.5 rounded-2xl border border-burgundy/10 bg-white/70 p-3.5 transition duration-200 hover:border-burgundy/30 hover:bg-white hover:shadow-xs"
                  >
                    <span className="flex h-8 w-8 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-xl bg-burgundy !text-white text-white font-serif text-xs sm:text-[13px] font-bold shadow-[0_2px_8px_rgba(107,44,56,0.28)] ring-1 ring-burgundy/20 transition-transform duration-200 group-hover:scale-105">
                      <CountUp end={idx + 1} prefix="0" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-ink">
                          {item.title}
                        </h4>
                        <span className="shrink-0 text-[10px] font-medium text-burgundy/80">
                          {item.badge}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] sm:text-xs leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Reassurance Banner inside Card */}
              <div className="mt-5 rounded-xl border border-burgundy/15 bg-gradient-to-r from-burgundy/5 via-white/40 to-burgundy/5 p-3 text-center text-xs font-semibold text-burgundy">
                No confusion. No hidden steps. No unnecessary complexity.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. WHO WE ARE (SMART EDITORIAL SPLIT)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl">
        <div className="rounded-[2.5rem] border border-[rgba(107,44,56,0.12)] bg-gradient-to-br from-white/90 via-white/70 to-[#faf5ed]/80 p-8 sm:p-14 shadow-xs backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-3">Our Identity</p>
              <h2 className="display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Who We Are
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-burgundy/10 px-3 py-1 text-xs font-medium text-burgundy">
                  Engineering Studio
                </span>
                <span className="rounded-full bg-burgundy/10 px-3 py-1 text-xs font-medium text-burgundy">
                  Paid Ad Management
                </span>
                <span className="rounded-full bg-burgundy/10 px-3 py-1 text-xs font-medium text-burgundy">
                  Meta CAPI Tracking
                </span>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-8">
              <p className="text-lg leading-relaxed text-ink/90 sm:text-xl sm:leading-8">
                Triora Labs is a high-craft digital studio. We design and build modern websites, web applications, and mobile apps, and we manage the advertising and conversion tracking that make them commercially viable.
              </p>
              <p className="text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
                We work with startups, small businesses, growing companies, agencies, and students — teams and individuals who need a partner that understands commercial outcomes and user trust, not just technical delivery.
              </p>
              <div className="rounded-2xl border-l-4 border-burgundy bg-burgundy/5 p-4 text-sm font-medium text-ink">
                Whether you are a student preparing your final year project, a founder launching your first MVP, or an established company scaling revenue — we bring the exact same level of care, respect, and ownership.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THREE PRINCIPLES WE DON'T BEND (WHAT WE BELIEVE)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl">
        <div className="mb-10 text-center sm:text-left">
          <p className="eyebrow mb-3">What We Believe</p>
          <h2 className="display text-3xl text-ink sm:text-5xl">
            Three principles we don&apos;t bend
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item, idx) => (
            <div
              key={item.title}
              className="glass groove group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-9"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-radial from-burgundy/15 to-transparent blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />
              <div>
                <span className="display text-3xl font-bold text-burgundy/30 group-hover:text-burgundy transition">
                  <CountUp end={idx + 1} prefix="0" />
                </span>
                <h3 className="mt-3 font-serif text-2xl italic text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-burgundy">
                  {item.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. HOW WE WORK WITH YOU (OPERATIONAL PLAYBOOK)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl">
        <div className="rounded-[2.5rem] border border-[rgba(107,44,56,0.12)] bg-white/70 p-8 sm:p-14 backdrop-blur-md">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">How We Work With You</p>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              We start by listening carefully.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              We understand your goals, your audience, and your current challenges. Then we create a clear plan and execute it with focus. You stay involved with regular updates, so there are no surprises.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-[rgba(107,44,56,0.1)] bg-white/85 p-6 shadow-xs transition hover:bg-white hover:shadow-md"
              >
                <span className="display text-3xl font-bold text-burgundy">
                  <CountUp end={idx + 1} prefix="0" />
                </span>
                <h3 className="mt-2 text-base font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs font-medium text-muted/80">
            After launch, we don’t disappear. We help you track results, optimize ad conversions, and improve what matters.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WHAT YOU CAN EXPECT (WHY WORK WITH US)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl">
        <div className="mb-10 text-center sm:text-left">
          <p className="eyebrow mb-3">Why Work With Us</p>
          <h2 className="display text-3xl text-ink sm:text-5xl">
            What you can expect
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {expectations.map((item) => (
            <div
              key={item.title}
              className="glass groove flex items-start gap-4 rounded-2xl p-6 sm:p-8 transition hover:bg-white/90"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-burgundy/10 text-2xl">
                {item.icon}
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. OUR PROMISE CALLOUT
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl">
        <div className="groove relative overflow-hidden rounded-[2.5rem] border border-burgundy/20 bg-gradient-to-br from-white/95 via-[#faf5ed] to-[#f5ebe4] p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-radial from-burgundy/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-radial from-[#8b3a4a]/15 to-transparent blur-3xl" />

          <p className="eyebrow mx-auto mb-4 justify-center">Our Promise</p>
          <h2 className="display mx-auto max-w-3xl text-2xl font-bold text-ink sm:text-4xl lg:text-5xl">
            &ldquo;We treat every project with responsibility.&rdquo;
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Whether you are a student, a startup, or a growing business, we bring the same level of care and commitment. Our goal is simple: To make you feel confident that your project is in the right hands.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-burgundy">
            If you value clarity, trust, and real results — we are ready to work with you.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. MASSIVE DARK CTA CAPSULE (MATCHING REFERENCE DESIGN)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-xl">
        <div className="glass-dark groove relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center text-white sm:px-14 sm:py-20 shadow-[0_30px_70px_rgba(30,11,18,0.35)]">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_65%)]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(214,142,154,0.18),transparent_65%)]" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="display text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Have an idea{" "}
              <span className="font-serif italic font-normal text-[#f4d8dc]">
                worth building?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#e6d0d4] sm:text-base">
              Tell us about the problem you are solving. We will come back with a clear, practical plan.
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

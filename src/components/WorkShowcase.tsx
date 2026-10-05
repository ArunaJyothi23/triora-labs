"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";

export interface Project {
  id: string;
  filterKey: "enterprise" | "construction" | "real-estate" | "ecommerce";
  category: string;
  title: string;
  subtitle: string;
  image: string;
  metricNumber: number;
  metricDecimals?: number;
  metricPrefix?: string;
  metricSuffix?: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "visha-it",
    filterKey: "enterprise",
    category: "Enterprise IT & Consulting",
    title: "Visha IT Solutions",
    subtitle: "Enterprise Technology & Talent Transformation Platform",
    image: "/images/work/visha-it-v2.jpg",
    metricNumber: 58,
    metricPrefix: "+",
    metricSuffix: "%",
    metricLabel: "B2B Inquiries",
    challenge: "Fragmented service offerings and scattered candidate intake weakened enterprise client trust.",
    solution: "Bespoke corporate web platform unifying cloud infrastructure, staffing matrices, and automated hiring.",
    outcome: "58% increase in qualified corporate inquiries with sub-second global response times.",
    tags: ["Next.js 15", "React 19", "Tailwind CSS", "Enterprise Architecture"],
  },
  {
    id: "construction",
    filterKey: "construction",
    category: "Construction & Engineering",
    title: "Structura Infrastructure",
    subtitle: "Commercial Construction & Heavy Engineering Portal",
    image: "/images/work/construction.jpg",
    metricNumber: 4.2,
    metricDecimals: 1,
    metricSuffix: "×",
    metricLabel: "Tender Engagement",
    challenge: "Static legacy presentation restricted qualification for high-value commercial infrastructure contracts.",
    solution: "Interactive engineering portal with 3D blueprint spec overlays and instant digital tender bidding.",
    outcome: "Secured 3 major multi-million infrastructure contracts within 90 days of rollout.",
    tags: ["Next.js 15", "Blueprint Engine", "Commercial Tender", "Tailwind CSS"],
  },
  {
    id: "real-estate",
    filterKey: "real-estate",
    category: "Property & Real Estate CRM",
    title: "Elite Estate Living",
    subtitle: "Luxury Real Estate Marketplace & Lead Engine",
    image: "/images/work/real-estate.jpg",
    metricNumber: 2.8,
    metricDecimals: 1,
    metricSuffix: "×",
    metricLabel: "Tour Bookings",
    challenge: "Slow property listing pages caused high ad drop-off before buyers could schedule on-site viewings.",
    solution: "High-speed villa marketplace with interactive map search and server-side Meta CAPI tracking.",
    outcome: "280% increase in verified walk-through bookings with 40% faster agent dispatch.",
    tags: ["Real Estate CRM", "Meta CAPI", "Interactive Maps", "Next.js 15"],
  },
  {
    id: "ecommerce",
    filterKey: "ecommerce",
    category: "D2C E-Commerce",
    title: "Aura Modern Living",
    subtitle: "High-Performance Lifestyle Storefront & Checkout",
    image: "/images/work/ecommerce-v2.jpg",
    metricNumber: 166,
    metricPrefix: "+",
    metricSuffix: "%",
    metricLabel: "Conversion Rate",
    challenge: "76% cart abandonment on legacy storefront due to slow mobile UX and inaccurate ad attribution.",
    solution: "Headless Next.js storefront with one-click checkout preview and Google Enhanced Conversions.",
    outcome: "Storewide conversion rate surged from 1.8% to 4.8%; ad ROAS achieved 4.4x.",
    tags: ["Headless Shopify", "Next.js 15", "Google Ads Engine", "Stripe"],
  },
];

const filterTabs = [
  { key: "all", label: "All Projects" },
  { key: "enterprise", label: "Enterprise IT" },
  { key: "construction", label: "Construction & Infra" },
  { key: "real-estate", label: "Real Estate CRM" },
  { key: "ecommerce", label: "D2C E-Commerce" },
] as const;

export function WorkShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterKey === activeFilter);

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* ─────────────────────────────────────────────────────────────
          ACTIVE INTERACTIVE FILTER TABS
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.key;
          const count =
            tab.key === "all"
              ? projects.length
              : projects.filter((p) => p.filterKey === tab.key).length;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              type="button"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition duration-200 cursor-pointer ${
                isActive
                  ? "bg-[linear-gradient(180deg,#7a3340,#5a2430)] !text-white text-white shadow-sm ring-2 ring-burgundy/20"
                  : "border border-burgundy/15 bg-white/75 text-ink/80 hover:border-burgundy/35 hover:bg-white"
              }`}
              style={isActive ? { color: "#ffffff" } : undefined}
            >
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-burgundy/10 text-burgundy"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          PROJECT CARDS (BALANCED VIEWPORT, NEVER CLIPPED)
      ───────────────────────────────────────────────────────────── */}
      <div className="space-y-12 sm:space-y-16">
        {filteredProjects.map((proj, idx) => (
          <article
            key={proj.id}
            className="glass groove group relative rounded-[2.2rem] border border-white/80 p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_rgba(90,42,48,0.06)] backdrop-blur-2xl transition duration-300 hover:shadow-[0_24px_56px_rgba(90,42,48,0.12)]"
          >
            <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
              {/* Left Column: Image (Balanced aspect ratio & height) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[420px] w-full overflow-hidden rounded-2xl border border-burgundy/15 bg-white shadow-xs lg:col-span-7">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </div>

              {/* Right Column: Case Study Breakdown (Ample height, button never cut off) */}
              <div className="flex flex-col justify-between space-y-4 lg:col-span-5 lg:min-h-[420px]">
                {/* Meta Category & Metric */}
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-burgundy/10 pb-3">
                    <span className="rounded-full bg-burgundy/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-burgundy">
                      {proj.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-burgundy/20 bg-burgundy/5 px-2.5 py-1 text-xs font-bold text-burgundy">
                      <CountUp
                        end={proj.metricNumber}
                        decimals={proj.metricDecimals ?? 0}
                        prefix={proj.metricPrefix ?? ""}
                        suffix={proj.metricSuffix ?? ""}
                      />
                      <span className="text-ink/75 font-normal text-[10px]">{proj.metricLabel}</span>
                    </span>
                  </div>

                  <h2 className="display mt-3 text-xl font-bold text-ink sm:text-2xl">
                    {proj.title}
                  </h2>
                  <p className="mt-0.5 text-xs font-medium text-muted line-clamp-1">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Challenge, Solution, Outcome Block */}
                <div className="space-y-3 rounded-2xl border border-burgundy/10 bg-white/65 p-4 text-xs backdrop-blur-xs">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-burgundy/90">
                      Challenge
                    </span>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/80">
                      {proj.challenge}
                    </p>
                  </div>

                  <div className="border-t border-burgundy/10 pt-2.5">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-burgundy/90">
                      Solution
                    </span>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/80">
                      {proj.solution}
                    </p>
                  </div>

                  <div className="border-t border-burgundy/10 pt-2.5">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-burgundy/90">
                      Outcome
                    </span>
                    <p className="mt-0.5 text-xs font-semibold leading-relaxed text-burgundy">
                      ✓ {proj.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech Chips & Full-Width CTA (Guaranteed Visible) */}
                <div className="space-y-3 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-burgundy/10 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1">
                    <ButtonLink
                      href="/contact"
                      variant="primary"
                      className="w-full justify-center py-3 text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-110"
                    >
                      Discuss Similar Project
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

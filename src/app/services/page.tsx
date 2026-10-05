import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Everything we build is designed to help your business grow with clarity and measurable results — websites, apps, ads, and Meta CAPI.",
  path: "/services",
});

const serviceVisuals: Record<string, { image: string; tag: string; alt: string }> = {
  "website-development": {
    image: "/images/work/visha-it-v2.jpg",
    tag: "Next.js 15 & Editorial Flagships",
    alt: "High-performance website development preview",
  },
  "web-applications": {
    image: "/images/work/ecommerce-v2.jpg",
    tag: "Bespoke SaaS & Web Platforms",
    alt: "Custom web applications and dashboard systems",
  },
  "mobile-applications": {
    image: "/images/work/construction.jpg",
    tag: "iOS & Android Cross-Platform",
    alt: "Polished mobile application interfaces",
  },
  "google-ads": {
    image: "/images/work/real-estate.jpg",
    tag: "High-Intent Search & Conversion Funnels",
    alt: "Google Ads campaign optimization and reporting",
  },
  "meta-ads": {
    image: "/images/work/ecommerce.jpg",
    tag: "Algorithmic Meta Creative & Scaling",
    alt: "Meta Ads campaign creative and conversion tracking",
  },
  "meta-capi": {
    image: "/images/work/visha-it.jpg",
    tag: "Server-Side Event Telemetry",
    alt: "Meta Conversions API server-side pipeline",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <PageHero
          eyebrow="Services"
          title="Everything we build is designed to help your business grow."
          description="Clarity and measurable results across websites, applications, paid media, and conversion tracking."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const visual = serviceVisuals[service.slug] || {
              image: "/images/work/ecommerce-v2.jpg",
              tag: "Digital Engineering",
              alt: service.title,
            };

            return (
              <article
                key={service.slug}
                className="glass groove group flex flex-col justify-between overflow-hidden rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Rich Visual Mockup Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1e0e14] shadow-md mb-6">
                    <Image
                      src={visual.image}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-burgundy/85 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-white shadow-sm border border-white/20">
                        {visual.tag}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">{service.home}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
      <CtaBand title="Ready to grow your business?" />
    </>
  );
}

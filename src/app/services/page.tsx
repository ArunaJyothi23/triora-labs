import type { Metadata } from "next";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Everything we build is designed to help your business grow with clarity and measurable results — websites, apps, ads, and Meta CAPI.",
  path: "/services",
});

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
          {services.map((service) => (
            <article
              key={service.slug}
              className="glass groove rounded-[2rem] p-8 sm:p-9 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h2 className="font-serif text-3xl font-bold tracking-tight text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{service.home}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand title="Ready to grow your business?" />
    </>
  );
}

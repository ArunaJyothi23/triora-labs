import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
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
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="glass groove rounded-[1.8rem] p-7">
              <h2 className="font-serif text-3xl tracking-tight">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{service.summary}</p>
              <p className="mt-3 text-sm leading-6 text-ink/80">{service.home}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>
      </Section>
      <CtaBand title="Ready to grow your business?" />
    </>
  );
}

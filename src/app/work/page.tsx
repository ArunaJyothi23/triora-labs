import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description: "Real projects and real outcomes — more leads, better conversion rates, and clearer data.",
  path: "/work",
});

const placeholders = [
  {
    kicker: "Corporate websites",
    title: "A global presence, rebuilt for clarity",
    metric: "+41% qualified inquiries",
  },
  {
    kicker: "E-commerce stores",
    title: "A storefront designed to convert",
    metric: "2.4× conversion rate",
  },
  {
    kicker: "SaaS platforms",
    title: "Complex operations, made simple",
    metric: "38% faster workflows",
  },
  {
    kicker: "Mobile applications",
    title: "Product experiences people return to",
    metric: "4.8 average rating",
  },
];

export default function WorkPage() {
  return (
    <>
      <Section>
        <PageHero
          eyebrow="Selected work"
          title="Real Projects. Real Outcomes."
          description="We focus on results that matter — more leads, better conversion rates, and clearer data."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {placeholders.map((item, i) => (
            <article key={item.title} className="glass groove overflow-hidden rounded-[2rem]">
              <div
                className="h-52 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_40%),linear-gradient(135deg,#eadfd6,rgba(107,44,56,0.35))]"
                style={{ filter: `hue-rotate(${i * 12}deg)` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-muted">
                  <span>{item.kicker}</span>
                  <span>{item.metric}</span>
                </div>
                <h2 className="mt-3 font-serif text-2xl tracking-tight">{item.title}</h2>
                <p className="mt-2 text-sm text-muted">Case study coming soon. Add real projects here as you get them.</p>
              </div>
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

import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { pricing } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description: "Transparent pricing and clear packages for student projects, websites, web apps, and ads management.",
  path: "/pricing",
});

function Group({ title, items }: { title: string; items: readonly { name: string; price: string }[] }) {
  return (
    <div className="glass groove rounded-[2rem] p-7">
      <h2 className="font-serif text-3xl tracking-tight">{title}</h2>
      <ul className="mt-6 divide-y divide-[rgba(90,42,48,0.08)]">
        {items.map((item) => (
          <li key={item.name} className="flex items-baseline justify-between gap-4 py-4">
            <span>{item.name}</span>
            <span className="shrink-0 font-medium text-burgundy">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <Section>
        <PageHero eyebrow="Pricing" title="Transparent Pricing. Clear Packages." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Group title="Student & Entry Packages" items={pricing.student} />
          <Group title="Website Packages" items={pricing.websites} />
          <Group title="Web Applications" items={pricing.apps} />
          <Group title="Marketing Packages" items={pricing.marketing} />
        </div>
        <p className="mt-6 text-center text-sm text-muted">Note: Ad spend is paid directly to Meta / Google.</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>
      </Section>
      <CtaBand title="Ready to grow your business?" />
    </>
  );
}

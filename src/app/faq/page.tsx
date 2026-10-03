import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description: "Common questions about timelines, student packages, ad spend, and improving existing websites or ads.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Section>
        <PageHero eyebrow="FAQ" title="Common questions." />
        <div className="mt-12">
          <FaqAccordion />
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>
      </Section>
      <CtaBand title="Ready to grow your business?" />
    </>
  );
}

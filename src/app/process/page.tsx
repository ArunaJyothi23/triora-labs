import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Process",
  description: "A clear path from idea to results — discovery, strategy, design and build, launch and tracking, then optimize.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <Section>
        <PageHero eyebrow="How we work" title="A clear path from idea to results." />
        <ol className="mx-auto mt-12 grid max-w-4xl gap-4">
          {processSteps.map((step) => (
            <li key={step.n} className="glass groove grid gap-3 rounded-[1.8rem] p-6 sm:grid-cols-[88px_1fr] sm:items-center">
              <span className="font-serif text-4xl text-rose">{step.n}</span>
              <div>
                <h2 className="text-xl font-medium">{step.title}</h2>
                <p className="mt-1 text-sm text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>
      </Section>
      <CtaBand title="Ready to grow your business?" />
    </>
  );
}

import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { principles } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Triora Labs exists to close the gap between beautiful digital products and actual business results.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section>
        <PageHero
          eyebrow="About Triora Labs"
          title="We help businesses grow through digital systems that work together."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6">
          <article className="glass groove rounded-[2rem] p-8">
            <p className="text-lg leading-8">
              Triora Labs exists to close the gap between beautiful digital products and actual business results.
            </p>
            <p className="mt-4 text-muted leading-7">We build the full chain:</p>
            <p className="mt-2 font-medium">Strong digital experiences + Precise tracking + Performance media.</p>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="glass groove rounded-[1.6rem] p-6">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>
      </Section>
      <CtaBand title="Ready to grow your business?" />
    </>
  );
}

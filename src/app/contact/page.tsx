import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Let’s talk about your next project. Tell us what you need. We will respond within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <PageHero
              align="left"
              eyebrow="Contact"
              title="Let’s talk about your next project."
              description="Tell us what you need. We will respond within one business day."
            />
            <div className="mx-auto mt-8 max-w-3xl text-center lg:text-left">
              <a href={`mailto:${site.email}`} className="text-burgundy">
                {site.email}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
      <CtaBand title="Ready to grow your business?" />
    </>
  );
}

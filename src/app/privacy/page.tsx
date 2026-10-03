import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects information submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section>
      <PageHero eyebrow="Legal" title="Privacy Policy" description={`Last updated: 4 October ${site.foundingYear}`} />
      <div className="glass groove mx-auto mt-10 max-w-3xl space-y-6 rounded-[2rem] p-8 text-sm leading-7 text-muted">
        <p>
          {site.name} (“we”, “us”) respects your privacy. This policy explains what we collect when you use {site.url} and
          how we use it.
        </p>
        <h2 className="font-serif text-2xl text-ink">Information we collect</h2>
        <p>
          If you submit a contact or waitlist form, we collect your name, email, company, project details, and any other
          information you choose to share. Server logs may include IP address, browser type, and pages visited.
        </p>
        <h2 className="font-serif text-2xl text-ink">How we use information</h2>
        <p>
          We use submitted details to respond to inquiries, prepare proposals, improve our services, and (if you join the
          waitlist) notify you about courses. We do not sell personal information.
        </p>
        <h2 className="font-serif text-2xl text-ink">Sharing</h2>
        <p>
          We may use trusted processors (hosting, analytics, or email delivery) strictly to operate this website. We may
          disclose information if required by law.
        </p>
        <h2 className="font-serif text-2xl text-ink">Retention & security</h2>
        <p>
          We keep inquiry data only as long as needed for business correspondence and legal obligations, and we apply
          reasonable administrative and technical safeguards.
        </p>
        <h2 className="font-serif text-2xl text-ink">Your rights</h2>
        <p>
          You may request access, correction, or deletion of personal information we hold by emailing{" "}
          <a className="text-burgundy" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <h2 className="font-serif text-2xl text-ink">Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a className="text-burgundy" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}

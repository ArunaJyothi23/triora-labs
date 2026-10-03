import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${site.name} website and related inquiries.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section>
      <PageHero eyebrow="Legal" title="Terms of Service" description={`Last updated: 4 October ${site.foundingYear}`} />
      <div className="glass groove mx-auto mt-10 max-w-3xl space-y-6 rounded-[2rem] p-8 text-sm leading-7 text-muted">
        <p>
          By using {site.url}, you agree to these terms. Project work is governed by a separate proposal, statement of
          work, or contract.
        </p>
        <h2 className="font-serif text-2xl text-ink">Website use</h2>
        <p>
          Content on this site is for general information. We may update pricing, packages, and copy without notice.
          Published prices are starting points and may change with scope.
        </p>
        <h2 className="font-serif text-2xl text-ink">Inquiries and proposals</h2>
        <p>
          Submitting a form is not a binding engagement. A project begins only when both parties agree in writing and any
          required retainer is received.
        </p>
        <h2 className="font-serif text-2xl text-ink">Advertising spend</h2>
        <p>
          Marketing management fees do not include media spend. Ad spend is paid directly to Meta, Google, or other
          platforms.
        </p>
        <h2 className="font-serif text-2xl text-ink">Intellectual property</h2>
        <p>
          The Triora Labs name, mark, and site design are our property. Client work product ownership is defined in the
          project agreement.
        </p>
        <h2 className="font-serif text-2xl text-ink">Limitation of liability</h2>
        <p>
          This website is provided as-is. To the fullest extent permitted by law, {site.name} is not liable for indirect
          or consequential damages arising from use of this site.
        </p>
        <h2 className="font-serif text-2xl text-ink">Contact</h2>
        <p>
          <a className="text-burgundy" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
    </Section>
  );
}

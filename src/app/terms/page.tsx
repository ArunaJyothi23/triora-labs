import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${site.name} website and client project engagements.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section>
      <PageHero
        eyebrow="Terms & Governance"
        title="Terms of Service"
        description={`Last updated: October ${site.foundingYear}. Clear, transparent expectations for website visitors and client engagements.`}
      />
      <div className="glass groove relative mx-auto mt-10 max-w-3xl space-y-8 rounded-[2.5rem] border border-white/80 bg-white/75 p-8 sm:p-12 text-sm leading-relaxed text-muted shadow-xl backdrop-blur-xl">
        <div>
          <p className="text-base text-ink font-medium leading-relaxed">
            By accessing or browsing {site.url}, you agree to comply with and be bound by these Terms of Service. Custom development, ad management, and student project services are additionally governed by separate written statements of work (SOWs) or agreements.
          </p>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">1. Website Use & Information</h2>
          <p className="mt-3">
            The content, portfolio case studies, and informational materials on this site are provided for prospective clients and partners. While we strive to maintain accurate capabilities and technical descriptions, specifications and architecture choices may be customized per client project.
          </p>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">2. Inquiries, Quotes & Engagement</h2>
          <p className="mt-3">
            Submitting a form or reaching out on WhatsApp creates an exploratory inquiry, not a binding service contract. An active engagement begins only when both parties have signed a written proposal, agreed on scope and milestones, and completed the initial milestone deposit.
          </p>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">3. Advertising Spend & Media Accounts</h2>
          <p className="mt-3">
            Management fees for Google Ads and Meta Ads cover strategy, campaign engineering, creative auditing, and attribution tracking. All media spend is billed directly by Google or Meta to your payment method and is not handled by {site.name}.
          </p>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">4. Intellectual Property & Ownership</h2>
          <p className="mt-3">
            The Triora Labs name, trademarks, site design, and brand assets remain our property. Upon full settlement of project milestones, complete ownership of bespoke client deliverables (including customized source code, repository commits, and custom assets) is transferred to the client as specified in your agreement.
          </p>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">5. Limitation of Liability</h2>
          <p className="mt-3">
            To the maximum extent permitted by applicable law, {site.name} shall not be liable for indirect, incidental, or consequential damages resulting from website downtime or third-party platform API changes.
          </p>
        </div>

        <div className="rounded-2xl border border-burgundy/15 bg-burgundy/5 p-5 text-xs text-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>Need clarity on contract terms or custom master service agreements?</span>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center gap-1 font-semibold text-burgundy hover:underline"
          >
            Speak with our team ↗
          </Link>
        </div>
      </div>
    </Section>
  );
}

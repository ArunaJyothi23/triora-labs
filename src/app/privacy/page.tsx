import type { Metadata } from "next";
import Link from "next/link";
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
      <PageHero
        eyebrow="Legal & Transparency"
        title="Privacy Policy"
        description={`Last updated: October ${site.foundingYear}. We treat your data and inquiries with complete privacy and confidentiality.`}
      />
      <div className="glass groove relative mx-auto mt-10 max-w-3xl space-y-8 rounded-[2.5rem] border border-white/80 bg-white/75 p-8 sm:p-12 text-sm leading-relaxed text-muted shadow-xl backdrop-blur-xl">
        <div>
          <p className="text-base text-ink font-medium leading-relaxed">
            {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information. This policy explains what information we collect when you use {site.url} and how we handle it.
          </p>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">1. Information We Collect</h2>
          <p className="mt-3">
            When you submit a contact inquiry, request a quote, or join our course notification list, we collect:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-ink/80">
            <li>Your full name and professional email address</li>
            <li>Your company or organization name</li>
            <li>Project requirements, timelines, and budget context</li>
            <li>Standard technical server logs (browser type, IP address, and referring URL)</li>
          </ul>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">2. How We Use Information</h2>
          <p className="mt-3">
            We use your information strictly to respond to business inquiries, prepare accurate project proposals, deliver agreed development or marketing services, and notify you when new courses launch. <span className="font-semibold text-ink">We never sell, rent, or trade your personal data.</span>
          </p>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">3. Data Sharing & Third-Party Processors</h2>
          <p className="mt-3">
            We only share information with trusted third-party cloud infrastructure providers (such as hosting, serverless compute, and email delivery platforms) strictly necessary to operate our website and services. All processors adhere to high industry security standards.
          </p>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">4. Retention & Security Safeguards</h2>
          <p className="mt-3">
            We retain inquiry information only for as long as necessary to maintain client correspondence and satisfy legal or tax requirements. We enforce modern encryption in transit (HTTPS/TLS) and administrative safeguards.
          </p>
        </div>

        <div className="border-t border-burgundy/10 pt-6">
          <h2 className="font-serif text-2xl font-bold text-ink">5. Your Rights & Inquiries</h2>
          <p className="mt-3">
            You may request a copy of the personal information we hold or request its deletion at any time by emailing us at{" "}
            <a className="font-semibold text-burgundy hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>

        <div className="rounded-2xl border border-burgundy/15 bg-burgundy/5 p-5 text-xs text-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>Have questions about our privacy practices?</span>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center gap-1 font-semibold text-burgundy hover:underline"
          >
            Contact our privacy team ↗
          </Link>
        </div>
      </div>
    </Section>
  );
}

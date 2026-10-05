import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Student Projects & Career Services",
  description:
    "End-to-end academic mini projects, final year major projects, developer portfolios, and ATS resume building for ambitious engineering students.",
  path: "/students",
});

const studentOfferings = [
  {
    category: "Academic Foundations",
    title: "Mini Projects",
    scopeType: "Semester Project Scope",
    description:
      "Clean, modular, and working codebases for 2nd and 3rd-year engineering & computer science students.",
    deliverables: [
      "Clean, fully documented source code",
      "Database schema & local environment setup",
      "Project report & architecture overview",
      "1-on-1 code walkthrough so you understand every line",
      "Bug fixes & deployment support for evaluation",
    ],
    ctaText: "Inquire for Mini Project",
    badge: "Fast Turnaround",
    featured: false,
  },
  {
    category: "Final Year Capstone",
    title: "Major Projects (Final Year)",
    scopeType: "Comprehensive Degree Scope",
    description:
      "Enterprise-grade, fullstack academic projects with complete documentation, live deployment, and viva prep.",
    deliverables: [
      "Production-ready Next.js / Fullstack architecture",
      "Comprehensive IEEE / University format project report & synopsis",
      "Database modeling, REST/GraphQL APIs & authentication",
      "Live cloud deployment with public domain for faculty demo",
      "Complete 1-on-1 viva coaching & presentation preparation",
    ],
    ctaText: "Inquire for Major Project",
    badge: "Most Popular",
    featured: true,
  },
  {
    category: "Personal Brand & Hiring",
    title: "Developer Portfolio Websites",
    scopeType: "Live Proof of Work",
    description:
      "Bespoke, high-aesthetic personal portfolio websites that make recruiters take your engineering skills seriously.",
    deliverables: [
      "Bespoke responsive design matching modern studio standards",
      "Interactive project showcases linked to live demos & GitHub",
      "Ultra-fast loading speed with Core Web Vitals optimization",
      "Custom contact form routing leads to your email & WhatsApp",
      "Custom domain & cloud hosting setup with SSL",
    ],
    ctaText: "Build My Portfolio",
    badge: "Hiring Magnet",
    featured: false,
  },
  {
    category: "Recruiter Visibility",
    title: "ATS Resume Building",
    scopeType: "Career & Interview Kit",
    description:
      "Tech resumes engineered to pass recruiter Applicant Tracking Systems (ATS) and secure high-paying tech interviews.",
    deliverables: [
      "ATS-compliant formatting tested against modern screening parsers",
      "Impact-focused bullet points quantifying your engineering achievements",
      "High-value tech keyword optimization (frameworks, databases, cloud)",
      "LinkedIn & GitHub profile optimization recommendations",
      "Editable source files (PDF & formatted doc)",
    ],
    ctaText: "Get ATS Resume Built",
    badge: "Career Essential",
    featured: false,
  },
];

export default function StudentsPage() {
  return (
    <>
      <Section>
        <PageHero
          eyebrow="Student Engineering Hub"
          title="Mini Projects, Major Projects & Career Launch."
          description="We mentor and equip engineering students with production-grade academic projects, standout portfolios, and ATS-optimized resumes that impress faculty and hiring managers."
        />

        {/* 4 Dedicated Student Offerings in a Balanced 2x2 Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {studentOfferings.map((offering) => (
            <div
              key={offering.title}
              className={`glass groove relative flex flex-col justify-between rounded-[2rem] p-7 sm:p-9 transition-all duration-300 hover:shadow-xl ${
                offering.featured ? "border-2 border-burgundy/40 shadow-sm" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-burgundy">
                  {offering.category}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    offering.featured
                      ? "bg-burgundy text-white shadow-xs"
                      : "bg-burgundy/10 text-burgundy"
                  }`}
                >
                  {offering.badge}
                </span>
              </div>

              <div>
                <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-ink">
                  {offering.title}
                </h3>
                <div className="mt-2 inline-block rounded-full bg-burgundy/5 border border-burgundy/15 px-3 py-0.5 text-xs font-medium text-burgundy">
                  {offering.scopeType}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{offering.description}</p>

                <div className="mt-6 border-t border-burgundy/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink">
                    What You Receive:
                  </p>
                  <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-ink/80">
                    {offering.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-burgundy font-bold text-xs mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-burgundy/10 pt-6">
                <Link
                  href="/contact"
                  className={`inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-medium transition duration-200 ${
                    offering.featured
                      ? "bg-[linear-gradient(180deg,#7a3340,#5a2430)] !text-white text-white shadow-md hover:brightness-110"
                      : "bg-white/80 border border-burgundy/15 text-ink hover:bg-white"
                  }`}
                  style={offering.featured ? { color: "#ffffff" } : undefined}
                >
                  {offering.ctaText} ↗
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Student Inquiry CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-muted">
            Have a custom college requirement or specific technology stack in mind?
          </p>
          <div className="mt-4 flex justify-center">
            <ButtonLink href="/contact" variant="primary">
              Discuss Your Project With an Engineer ↗
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CtaBand
        dark
        title="Ready to ace your semester & get hired?"
        body="Reach out with your project topic or career goals. We’ll guide you from code architecture to live deployment and interview prep."
      />
    </>
  );
}

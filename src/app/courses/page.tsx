import type { Metadata } from "next";
import { CtaBand, PageHero, Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { pageMetadata } from "@/lib/metadata";
import { courseTopics } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Courses Coming Soon",
  description:
    "We are preparing practical courses to help students and professionals learn real digital skills. Join the waitlist.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <Section>
        <PageHero
          eyebrow="Professional academy"
          title="Courses Coming Soon"
          description="We are preparing practical courses to help students and professionals learn real digital skills."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {courseTopics.map((topic, i) => (
            <article key={topic} className="glass groove flex items-center justify-between gap-3 rounded-2xl px-5 py-4">
              <span className="text-sm">
                <span className="mr-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
                {topic}
              </span>
              <span className="text-burgundy">↗</span>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted">Be the first to know when we launch.</p>
        <div className="mt-5">
          <WaitlistForm />
        </div>
      </Section>
      <CtaBand dark title="Learn the skills teams hire for." body="Practical, mentor-led technology training built around real tools and industry-ready project experience." />
    </>
  );
}

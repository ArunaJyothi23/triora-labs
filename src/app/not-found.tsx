import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="eyebrow mb-4 justify-center">404</p>
      <h1 className="display text-5xl">This page is not here.</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">The link may be outdated. Return home or start a project instead.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Start a Project
        </ButtonLink>
      </div>
    </Section>
  );
}

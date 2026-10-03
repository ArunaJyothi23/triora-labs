import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/Section";
import { HeroVisual } from "@/components/HeroVisual";
import { processPreview, services, valuePoints } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="container-xl grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="eyebrow mb-5">Technology built around your business</p>
          <h1 className="display max-w-[14ch] text-5xl text-ink sm:text-7xl">Websites, Apps & Ads that Grow Business</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            We design and build high-performing digital experiences, then connect them to accurate conversion tracking and
            paid media so every click has a clear path to results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start a Project</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              View Pricing
            </ButtonLink>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {valuePoints.map((point) => (
              <li key={point} className="glass groove rounded-2xl px-4 py-3 text-sm leading-6">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </section>

      <section className="container-xl pb-8">
        <div className="glass groove grid gap-4 rounded-[2rem] p-6 sm:grid-cols-4 sm:p-8">
          {[
            ["End-to-end", "Strategy to support"],
            ["Cloud-ready", "Built to scale"],
            ["Business-first", "Outcomes over output"],
            ["One partner", "Product + growth"],
          ].map(([title, body]) => (
            <div key={title}>
              <p className="font-medium">{title}</p>
              <p className="mt-1 text-sm text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-xl py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="display max-w-[16ch] text-4xl sm:text-5xl">One partner. Every digital capability.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">12 focused services across product, media, and measurement — delivered as one system.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="glass groove rounded-[1.6rem] p-6">
              <div className="mb-8 grid h-11 w-11 place-items-center rounded-2xl bg-[rgba(107,44,56,0.08)] text-burgundy">◇</div>
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{service.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-xl py-8">
        <p className="eyebrow mb-3">How we work</p>
        <h2 className="display mb-8 max-w-[16ch] text-4xl sm:text-5xl">From first question to sustained momentum.</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processPreview.map((step) => (
            <article key={step.n} className="glass groove rounded-[1.6rem] p-6">
              <p className="font-serif text-3xl text-rose">{step.n}</p>
              <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand dark title="Ready to grow your business?" body="Tell us where you want to go. We’ll help you shape the clearest, most valuable path to get there." />
    </>
  );
}

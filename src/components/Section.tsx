import { ButtonLink } from "@/components/ButtonLink";

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`container-xl py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : "text-left"} max-w-3xl`}>
      {eyebrow ? <p className={`eyebrow mb-4 ${centered ? "justify-center" : ""}`}>{eyebrow}</p> : null}
      <h1 className="display text-4xl text-ink sm:text-6xl">{title}</h1>
      {description ? (
        <p className={`${centered ? "mx-auto" : ""} mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function CtaBand({
  title,
  body,
  dark = false,
}: {
  title: string;
  body?: string;
  dark?: boolean;
}) {
  return (
    <section className="container-xl pb-20">
      <div
        className={`${dark ? "glass-dark text-[#f7efe8]" : "glass"} groove relative overflow-hidden rounded-[2rem] px-8 py-10 sm:px-12 sm:py-12`}
      >
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_65%)]" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className={`eyebrow mb-3 ${dark ? "text-[#e8c9cc] before:bg-[#e8c9cc]" : ""}`}>Let’s build what’s next</p>
            <h2 className="display max-w-xl text-3xl sm:text-5xl">{title}</h2>
            {body ? <p className={`mt-3 max-w-xl text-sm leading-6 ${dark ? "text-[#d8c7c3]" : "text-muted"}`}>{body}</p> : null}
          </div>
          <ButtonLink href="/contact" variant={dark ? "light" : "primary"}>
            Start a Project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

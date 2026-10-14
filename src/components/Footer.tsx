import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerLinks, services, site } from "@/lib/site";
import {
  CodeIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  RocketIcon,
  ShieldCheckIcon,
  UsersIcon,
  WhatsAppIcon,
} from "@/components/Icons";

export function Footer() {
  return (
    <footer className="mt-16 relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(139,44,62,0.35),transparent_75%),linear-gradient(180deg,#38121a_0%,#240a10_55%,#1a060b_100%)] text-[#f6efe8] border-t border-[#8a3345]/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] selection:bg-[#8a3345] selection:text-white">
      <div className="container-xl py-14 sm:py-16">
        {/* 5-Column Structured Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <Link href="/" aria-label="Triora Labs home" className="inline-block transition-opacity hover:opacity-95">
                <Logo tone="light" />
              </Link>
            </div>
            <p className="max-w-xs text-xs sm:text-[13px] leading-relaxed text-[#f4efe8]/80">
              Triora Labs is a high-performance digital studio engineering bespoke websites, scalable web
              applications, and server-side ad attribution architectures for ambitious businesses.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Link
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 bg-white/[0.06] text-[#f4efe8]/85 transition hover:border-[#e8a3af]/60 hover:bg-white/15 hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </Link>
              <Link
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 bg-white/[0.06] text-[#f4efe8]/85 transition hover:border-[#e8a3af]/60 hover:bg-white/15 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </Link>
              <Link
                href={site.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 bg-white/[0.06] text-[#f4efe8]/85 transition hover:border-[#e8a3af]/60 hover:bg-white/15 hover:text-white"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 bg-white/[0.06] text-[#f4efe8]/85 transition hover:border-[#e8a3af]/60 hover:bg-white/15 hover:text-white"
                aria-label="Email"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Stacked Credibility & Standards Cards */}
          <div className="space-y-2.5 lg:col-span-3">
            <div className="rounded-xl border border-white/12 bg-white/[0.05] p-2.5 px-3 transition hover:border-[#e8a3af]/40 hover:bg-white/[0.08]">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#fce7cf]">
                <CodeIcon className="h-3 w-3 text-[#fce7cf]" />
                <span>Architecture</span>
              </div>
              <p className="mt-0.5 text-xs font-medium text-white/95">Next.js 15 & React 19 Engine</p>
            </div>

            <div className="rounded-xl border border-white/12 bg-white/[0.05] p-2.5 px-3 transition hover:border-[#e8a3af]/40 hover:bg-white/[0.08]">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#fce7cf]">
                <ShieldCheckIcon className="h-3 w-3 text-[#fce7cf]" />
                <span>Data Tracking</span>
              </div>
              <p className="mt-0.5 text-xs font-medium text-white/95">Server-Side Meta CAPI Attribution</p>
            </div>

            <div className="rounded-xl border border-white/12 bg-white/[0.05] p-2.5 px-3 transition hover:border-[#e8a3af]/40 hover:bg-white/[0.08]">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#fce7cf]">
                <RocketIcon className="h-3 w-3 text-[#fce7cf]" />
                <span>Sprint Cadence</span>
              </div>
              <p className="mt-0.5 text-xs font-medium text-white/95">Agile Milestone Delivery Sprints</p>
            </div>

            <div className="rounded-xl border border-white/12 bg-white/[0.05] p-2.5 px-3 transition hover:border-[#e8a3af]/40 hover:bg-white/[0.08]">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#fce7cf]">
                <UsersIcon className="h-3 w-3 text-[#fce7cf]" />
                <span>Direct Access</span>
              </div>
              <p className="mt-0.5 text-xs font-medium text-white/95">Senior Technical Leads Direct</p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#fce7cf]">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#f4efe8]/80">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block transition hover:translate-x-0.5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="lg:col-span-2">
            <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#fce7cf]">
              Services
            </p>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#f4efe8]/80">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="inline-block transition hover:translate-x-0.5 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/students"
                  className="inline-block transition hover:translate-x-0.5 hover:text-white"
                >
                  Student Projects & Portfolios
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="lg:col-span-2">
            <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#fce7cf]">
              Contact Us
            </p>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-[#f4efe8]/85">
              {/* Global Online Studio */}
              <li className="flex items-start gap-2.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-white/12 bg-white/[0.08] text-[#fce7cf]">
                  <GlobeIcon className="h-3.5 w-3.5" />
                </span>
                <span className="leading-snug">100% Online • Serving Worldwide</span>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-white/12 bg-white/[0.08] text-[#fce7cf]">
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                </span>
                <Link
                  href={site.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-white hover:underline transition"
                >
                  Chat on WhatsApp ↗
                </Link>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-white/12 bg-white/[0.08] text-[#fce7cf]">
                  <MailIcon className="h-3.5 w-3.5" />
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white transition break-all"
                >
                  {site.email}
                </a>
              </li>

              {/* Instagram */}
              <li className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-white/12 bg-white/[0.08] text-[#fce7cf]">
                  <InstagramIcon className="h-3.5 w-3.5" />
                </span>
                <Link
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  {site.social.instagramHandle}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#f4efe8]/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.foundingYear} Triora Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerLinks, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-8 bg-burgundy-ink text-[#f6efe8]">
      <div className="container-xl py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="mb-5">
              <Link href="/" aria-label="Triora Labs home" className="inline-block">
                <Logo tone="light" />
              </Link>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#f4efe8]/80">
              We help businesses grow through websites, applications, marketing, and conversion tracking solutions.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                ["Instagram", site.social.instagram],
                ["LinkedIn", site.social.linkedin],
                ["WhatsApp", site.social.whatsapp],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-[0.7rem] transition hover:bg-white/15"
                  aria-label={label}
                >
                  {label.slice(0, 2)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4efe8]/70">Quick Links</p>
            <ul className="space-y-2.5 text-sm text-[#f4efe8]/85">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4efe8]/70">Services</p>
            <ul className="space-y-2.5 text-sm text-[#f4efe8]/85">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4efe8]/70">Connect</p>
            <ul className="space-y-2.5 text-sm text-[#f4efe8]/85">
              <li>
                <Link href={site.social.instagram} className="hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href={site.social.linkedin} className="hover:text-white">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href={site.social.whatsapp} className="hover:text-white">
                  WhatsApp
                </Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  Email: {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#b9a6a2] sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.foundingYear} Triora Labs. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-2.5 sm:px-5 sm:pt-3">
      <div className="container-xl">
        <div className="glass groove flex items-center justify-between rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center pl-0.5 sm:pl-1 py-0.5" aria-label="Triora Labs home">
            <Logo priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={`rounded-full px-3.5 py-1.5 text-[0.88rem] font-medium transition ${
                    active ? "bg-white/80 text-burgundy shadow-sm" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              prefetch={true}
              className="hidden rounded-full bg-[linear-gradient(180deg,#7a3340,#5a2430)] px-5 py-2.5 text-[0.88rem] font-medium !text-white text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_20px_rgba(74,28,38,0.32)] transition-all duration-200 hover:brightness-110 sm:inline-flex"
              style={{ color: "#ffffff" }}
            >
              Start a Project ↗
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="glass relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-white/80 lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <div className="flex h-4 w-4 flex-col justify-between">
                <span
                  className={`h-0.5 w-full rounded-full bg-ink transition-all duration-300 ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-ink transition-all duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-ink transition-all duration-300 ${
                    open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Backdrop & Drawer */}
        {open ? (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <div className="glass groove fixed inset-x-3 top-18 z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-3xl p-5 shadow-2xl lg:hidden">
              <div className="flex items-center justify-between border-b border-burgundy/10 pb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-burgundy">Navigation</span>
                <span className="text-xs text-muted">Triora Labs</span>
              </div>

              <div className="mt-3 grid gap-1.5">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch={true}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[0.95rem] font-medium transition ${
                        active
                          ? "bg-white text-burgundy shadow-sm"
                          : "text-ink hover:bg-white/60"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className={`text-xs ${active ? "text-burgundy" : "text-muted"}`}>→</span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 border-t border-burgundy/10 pt-4">
                <Link
                  href="/contact"
                  prefetch={true}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-full bg-[linear-gradient(180deg,#7a3340,#5a2430)] py-3 text-center text-sm font-medium !text-white text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_18px_rgba(74,28,38,0.3)] transition hover:brightness-110"
                  style={{ color: "#ffffff" }}
                >
                  Start a Project ↗
                </Link>

                <div className="mt-3 flex items-center justify-around pt-1 text-xs text-muted">
                  <Link
                    href={site.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-burgundy"
                  >
                    💬 WhatsApp
                  </Link>
                  <span>•</span>
                  <a href={`mailto:${site.email}`} className="hover:text-burgundy">
                    ✉️ {site.email}
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}

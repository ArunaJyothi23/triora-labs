"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="container-xl">
        <div className="glass groove flex items-center justify-between rounded-full px-4 py-2 sm:px-5">
          <Link href="/" className="flex items-center pl-1 py-0.5" aria-label="Triora Labs home">
            <Logo priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-1.5 text-[0.88rem] font-medium transition ${
                    active ? "bg-white/75 text-burgundy shadow-sm" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-[linear-gradient(180deg,#7a3340,#5a2430)] px-5 py-2.5 text-[0.88rem] font-medium !text-white text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_20px_rgba(74,28,38,0.32)] transition-all duration-200 hover:brightness-110 sm:inline-flex"
              style={{ color: "#ffffff" }}
            >
              Start a Project ↗
            </Link>
            <button
              type="button"
              className="glass rounded-full px-3 py-2 text-sm lg:hidden"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>

        {open ? (
          <div className="glass mt-2 rounded-3xl p-4 lg:hidden">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-2.5 text-sm hover:bg-white/50"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-burgundy px-4 py-2.5 text-center text-sm font-medium !text-white text-white transition hover:brightness-110"
                style={{ color: "#ffffff" }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import {
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Book a consultation with Triora Labs. Online & remote digital studio serving clients worldwide. Email: trioralabs@gmail.com, Instagram: @triora_labs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-4 lg:py-6">
      <div className="container-xl w-full">
        {/* 2-Column Balanced Viewport Layout without Map Background */}
        <div className="grid items-stretch gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Left Column: Frosted Glass Global Studio Card */}
          <div className="glass groove relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/75 bg-gradient-to-br from-white/90 via-white/75 to-[#faf6f2]/80 p-6 sm:p-8 shadow-[0_20px_50px_rgba(90,42,48,0.06)] backdrop-blur-2xl">
            {/* Ambient decorative glass glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-radial from-burgundy/10 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-radial from-burgundy/5 to-transparent blur-2xl" />

            <div className="relative z-10">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-burgundy/15 bg-white/70 px-3.5 py-1 text-xs font-semibold text-burgundy shadow-xs backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-burgundy animate-pulse" />
                Available Worldwide • Remote Studio
              </div>

              <h1 className="display mt-4 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
                Let’s talk about your next project.
              </h1>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted">
                We engineer bespoke websites, full-stack web platforms, and server-side conversion architectures for clients across the globe. All collaboration is 100% online and organized around milestone sprints.
              </p>

              {/* Structured Contact Rows */}
              <div className="mt-6 space-y-3">
                {/* Global Online Studio */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xs backdrop-blur-md transition hover:border-burgundy/30">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-burgundy/10 text-burgundy">
                    <GlobeIcon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                      Service Model
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-ink">
                      100% Online • Serving Clients Worldwide
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xs backdrop-blur-md transition hover:border-burgundy/30">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-burgundy/10 text-burgundy">
                    <MailIcon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-xs sm:text-sm font-semibold text-burgundy hover:underline"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                {/* Instagram & LinkedIn */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xs backdrop-blur-md transition hover:border-burgundy/30">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-burgundy/10 text-burgundy">
                      <InstagramIcon className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                        Instagram
                      </span>
                      <Link
                        href={site.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="truncate text-xs font-semibold text-burgundy hover:underline block"
                      >
                        {site.social.instagramHandle}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xs backdrop-blur-md transition hover:border-burgundy/30">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-burgundy/10 text-burgundy">
                      <LinkedInIcon className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                        LinkedIn
                      </span>
                      <Link
                        href={site.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="truncate text-xs font-semibold text-burgundy hover:underline block"
                      >
                        Triora Labs ↗
                      </Link>
                    </div>
                  </div>
                </div>

                {/* WhatsApp: Direct Chat Link, NEVER SHOW PHONE NUMBER */}
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xs backdrop-blur-md transition hover:border-burgundy/30">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-burgundy/10 text-burgundy">
                      <WhatsAppIcon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                        Instant Messenger
                      </span>
                      <p className="text-xs font-semibold text-ink">
                        WhatsApp Priority Desk
                      </p>
                    </div>
                  </div>
                  <Link
                    href={site.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7a3340] to-[#5a2430] px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:brightness-110 active:scale-95"
                  >
                    <span>Chat Now</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Service Commitment */}
            <div className="relative z-10 mt-6 rounded-2xl border border-white/70 bg-white/50 p-3 text-center text-xs text-muted backdrop-blur-sm">
              <span className="font-semibold text-ink">⏱ 24-Hour Response:</span> Every inquiry is reviewed directly by our technical team.
            </div>
          </div>

          {/* Right Column: Book a Consultation Form */}
          <div className="flex items-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

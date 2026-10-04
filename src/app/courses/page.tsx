import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Academy • Coming Soon",
  description:
    "Something game-changing is brewing. An exclusive engineering and growth masterclass distilled from real agency codebases. Request early access.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <div className="min-h-[calc(100vh-5.5rem)] flex items-center justify-center py-8 sm:py-14">
      <div className="container-xl w-full">
        {/* Curiosity-Driven Glassmorphic Teaser */}
        <div className="glass groove relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-white/95 via-white/80 to-[#fdf8f4]/90 p-8 sm:p-14 text-center shadow-[0_30px_70px_rgba(90,42,48,0.08)] backdrop-blur-2xl">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-radial from-burgundy/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-radial from-[#8b3a4a]/10 to-transparent blur-3xl" />

          <div className="relative z-10">
            {/* Mystery & Curiosity Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold text-burgundy shadow-xs backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-burgundy animate-pulse" />
              Private Academy • Unveiling Soon
            </div>

            {/* High-Curiosity Display Headline */}
            <h1 className="display mt-6 text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
              The Tradecraft No Agency <br />
              <span className="shimmer-text">Shares in Public.</span>
            </h1>

            {/* Intriguing Subtitle */}
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              We are distilling the exact architectures, production repositories, and ad attribution models we run for real paying clients. No superficial beginner tutorials—pure insider execution.
            </p>

            {/* Waitlist Form with Curiosity Incentive */}
            <div className="mt-8">
              <WaitlistForm />
            </div>

            {/* Curiosity Teasers & Exclusive Cohort Perks */}
            <div className="mt-8 rounded-2xl border border-burgundy/10 bg-white/50 p-4 text-xs text-muted backdrop-blur-sm">
              <p className="font-semibold text-ink">
                🔒 Limited Early Access: <span className="font-normal text-muted">First 50 waitlist members receive confidential curriculum previews & private cohort invitations.</span>
              </p>
            </div>

            {/* Micro Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] font-medium text-muted/80">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                Real Production Codebases
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                Zero Fluff Guarantee
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                Invitation-Only Cohort 1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

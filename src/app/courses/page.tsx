import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Courses • Coming Soon",
  description:
    "Exciting new courses are coming soon. Sign up to get notified as soon as enrollment opens.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <div className="min-h-[calc(100vh-5.5rem)] flex items-center justify-center py-8 sm:py-14">
      <div className="container-xl w-full">
        {/* Simple & Clean Coming Soon Card */}
        <div className="glass groove relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-white/95 via-white/80 to-[#fdf8f4]/90 p-8 sm:p-14 text-center shadow-[0_30px_70px_rgba(90,42,48,0.08)] backdrop-blur-2xl">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-radial from-burgundy/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-radial from-[#8b3a4a]/10 to-transparent blur-3xl" />

          <div className="relative z-10">
            {/* Simple Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold text-burgundy shadow-xs backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-burgundy animate-pulse" />
              Courses • Coming Soon
            </div>

            {/* Clear, Simple Display Headline */}
            <h1 className="display mt-6 text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
              Exciting Courses Are <br />
              <span className="shimmer-text">Coming Soon!</span>
            </h1>

            {/* Clear, Simple Subtitle */}
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              We are working on practical, hands-on courses to help you master real-world skills. Enter your email below to be the first to know when we launch!
            </p>

            {/* Notification Form */}
            <div className="mt-8">
              <WaitlistForm buttonText="Get Notified" />
            </div>

            {/* Reassurance */}
            <div className="mt-8 rounded-2xl border border-burgundy/10 bg-white/50 p-4 text-xs sm:text-sm text-muted backdrop-blur-sm">
              <p className="text-muted">
                🎉 <span className="font-semibold text-ink">Be the first to know:</span> Join our notification list to get early access and special launch discounts.
              </p>
            </div>

            {/* Micro Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-medium text-muted/80">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                Hands-on Projects
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                Real-World Skills
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                Early Bird Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

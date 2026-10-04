"use client";

import Image from "next/image";

export function HeroVisual() {
  const navItems = [
    { label: "Home", active: true },
    { label: "Services", active: false },
    { label: "Pricing", active: false },
    { label: "Work", active: false },
    { label: "About", active: false },
    { label: "Process", active: false },
    { label: "Courses", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <div className="relative isolate mx-auto w-full max-w-[640px] select-none py-3 device-bend-perspective">
      {/* Ambient background glow layers - luxury burgundy and warm champagne aura (NO green) */}
      <div className="pointer-events-none absolute -inset-3 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(107,44,56,0.22),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 left-1/2 h-32 w-4/5 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(107,44,56,0.28),transparent_72%)] blur-3xl" />

      {/* LUXURY PRO DEVICE CONTAINER WITH SLIGHT 3D BEND */}
      <div className="device-bend-transform relative mx-auto">
        {/* DEVICE CHASSIS - Continuous seamless titanium bezel (no browser chrome bar, no 2nd image things) */}
        <div className="relative overflow-hidden rounded-[2.2rem] border-[3.5px] border-[#2e2629] bg-[#140f12] p-3 shadow-[0_35px_80px_-15px_rgba(28,10,16,0.5),-8px_15px_30px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.12)]">
          {/* Subtle Chamfer Highlight Line */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10" />

          {/* Top Center Camera Sensor Dot */}
          <div className="absolute top-2 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2a2427] ring-1 ring-black/70" />
          </div>

          {/* SCREEN DISPLAY - Starts directly with website content */}
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#fbf8f4] text-ink shadow-inner">
            {/* Glossy Retina Glass Reflection Sweep */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.03)_38%,transparent_62%)]" />

            {/* INNER WEBSITE SCREEN VIEWPORT */}
            <div className="relative min-h-[350px] sm:min-h-[380px] p-3.5 sm:p-5 overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(107,44,56,0.06),transparent_65%),#faf6f0]">
              {/* ─────────────────────────────────────────────────────────────
                  EXACT TRIORA LABS NAVBAR (1:1 REPLICA WITH MAIN WEBSITE LOGO)
              ───────────────────────────────────────────────────────────── */}
              <div className="glass groove flex items-center justify-between rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm">
                {/* Brand Logo - EXACT same logo as the main website navbar */}
                <div className="flex items-center pl-0.5 sm:pl-1 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Triora Labs"
                    width={180}
                    height={90}
                    className="block h-5 sm:h-6 w-auto object-contain drop-shadow-[0_1px_4px_rgba(74,28,38,0.18)]"
                    priority
                  />
                </div>

                {/* All Navigation Links (matching main website navbar) */}
                <nav className="hidden xs:flex sm:flex items-center gap-0.5 sm:gap-1 text-[8.5px] sm:text-[9.5px] whitespace-nowrap">
                  {navItems.map((item) => (
                    <span
                      key={item.label}
                      className={`rounded-full px-1.5 sm:px-2 py-0.5 transition ${
                        item.active
                          ? "bg-white text-burgundy shadow-xs font-semibold"
                          : "text-muted hover:text-ink font-medium"
                      }`}
                    >
                      {item.label}
                    </span>
                  ))}
                </nav>

                {/* Burgundy CTA Pill Button */}
                <span
                  className="rounded-full bg-[linear-gradient(180deg,#7a3340,#5a2430)] px-2 sm:px-3 py-1 text-[8.5px] sm:text-[9.5px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_10px_rgba(74,28,38,0.3)] shrink-0 whitespace-nowrap"
                  style={{ color: "#ffffff" }}
                >
                  Start a Project ↗
                </span>
              </div>

              {/* SCREEN CONTENT: TRIORA LABS HERO */}
              <div className="mt-6 text-center px-1">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-burgundy/15 bg-white/70 px-2.5 py-0.5 text-[9px] font-semibold tracking-wider text-burgundy uppercase backdrop-blur-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                  Technology Built Around Your Business
                </div>

                {/* Display Headline */}
                <h3 className="mt-3 text-lg sm:text-2xl font-serif font-bold text-ink leading-tight">
                  Websites, <span className="italic font-normal text-burgundy">Apps & Ads</span> that Grow Business
                </h3>

                {/* Description */}
                <p className="mt-2 mx-auto max-w-md text-[10px] sm:text-[11.5px] leading-relaxed text-muted">
                  We design high-performing digital experiences, connected to accurate Meta CAPI tracking & paid media for real results.
                </p>

                {/* CTAs */}
                <div className="mt-3.5 flex items-center justify-center gap-2">
                  <span className="rounded-full bg-[linear-gradient(180deg,#7a3340,#5a2430)] px-3.5 py-1.2 text-[10px] font-medium text-white shadow-sm">
                    Start a Project ↗
                  </span>
                  <span className="glass groove rounded-full px-3 py-1.2 text-[10px] font-medium text-ink shadow-2xs">
                    Explore Services ↗
                  </span>
                </div>

                {/* 3 Mini Bento Feature Metric Cards inside device screen (NO GREEN COLORS) */}
                <div className="mt-5 grid grid-cols-3 gap-2.5 text-left">
                  <div className="glass groove rounded-xl p-2.5">
                    <div className="text-[13px] font-bold text-burgundy leading-none">Sub-second</div>
                    <div className="text-[9.5px] font-semibold text-ink mt-1">High Performance</div>
                    <div className="text-[8px] text-muted">Next.js & React 19</div>
                  </div>

                  <div className="glass groove rounded-xl p-2.5">
                    <div className="text-[13px] font-bold text-burgundy leading-none">Direct API</div>
                    <div className="text-[9.5px] font-semibold text-ink mt-1">Meta CAPI</div>
                    <div className="text-[8px] text-muted">Server-Side Tracking</div>
                  </div>

                  <div className="glass groove rounded-xl p-2.5">
                    <div className="text-[13px] font-bold text-burgundy leading-none">Scalable</div>
                    <div className="text-[9.5px] font-semibold text-ink mt-1">Target ROAS</div>
                    <div className="text-[8px] text-muted">Google & Meta Ads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic Angled Desk Shadow under Device */}
        <div className="mx-auto mt-2 h-4 w-[92%] rounded-full bg-gradient-to-r from-transparent via-[#241217]/25 to-transparent blur-md" />
      </div>
    </div>
  );
}

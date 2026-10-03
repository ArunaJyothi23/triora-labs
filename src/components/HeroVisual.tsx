export function HeroVisual() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] glass groove min-h-[420px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(201,164,168,0.35),transparent_42%),radial-gradient(circle_at_40%_70%,rgba(107,44,56,0.18),transparent_45%),linear-gradient(180deg,#efe4d8,#f7f1e8)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 640" aria-hidden="true">
        <defs>
          <linearGradient id="ring" x1="80" y1="80" x2="560" y2="560">
            <stop stopColor="#f7efe8" />
            <stop offset="1" stopColor="#c9b6ad" />
          </linearGradient>
          <radialGradient id="core" cx="50%" cy="42%" r="50%">
            <stop stopColor="#9a4654" />
            <stop offset="1" stopColor="#4a1c26" />
          </radialGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <ellipse cx="330" cy="470" rx="150" ry="28" fill="rgba(74,28,38,0.16)" filter="url(#soft)" />
        <g transform="translate(320 300) rotate(-18)">
          {Array.from({ length: 18 }).map((_, i) => {
            const a = (i / 18) * Math.PI * 2;
            const rx = 168;
            const ry = 64;
            const x = Math.cos(a) * rx;
            const y = Math.sin(a) * ry;
            return <circle key={i} cx={x} cy={y} r="5.5" fill="#f4ebe3" stroke="rgba(107,44,56,0.18)" />;
          })}
          <ellipse rx="176" ry="70" fill="none" stroke="url(#ring)" strokeWidth="18" opacity="0.9" />
          <ellipse rx="176" ry="70" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
        </g>
        <g transform="translate(320 292)">
          <ellipse rx="58" ry="70" fill="url(#core)" />
          <ellipse rx="26" ry="18" cy="-22" fill="rgba(255,255,255,0.18)" />
          <path d="M-10 -8c18-6 38 8 28 28" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="6" strokeLinecap="round" />
        </g>
      </svg>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="glass groove rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium tracking-wide text-muted">Launch readiness</span>
            <span className="rounded-full bg-burgundy/10 px-2 py-0.5 text-burgundy">On track</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[rgba(90,42,48,0.1)]">
            <div className="h-full w-[84%] rounded-full bg-[linear-gradient(90deg,#8a3d4a,#5a2430)]" />
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-muted">
            <span>Production release</span>
            <span>84%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

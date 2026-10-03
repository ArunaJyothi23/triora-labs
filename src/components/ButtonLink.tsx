import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
};

const styles = {
  primary:
    "bg-[linear-gradient(180deg,#7a3340,#5a2430)] !text-white text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_24px_rgba(74,28,38,0.28)] hover:brightness-110",
  secondary:
    "bg-white/40 text-ink glass hover:bg-white/55",
  ghost:
    "bg-transparent text-ink border border-[rgba(90,42,48,0.14)] hover:bg-white/40",
  light:
    "bg-[linear-gradient(180deg,#fff8f2,#f3e6dc)] text-burgundy-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(0,0,0,0.12)]",
};

export function ButtonLink({ href = "/contact", children, variant = "primary", className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.92rem] font-medium transition duration-200 ${styles[variant]} ${className}`}
      style={variant === "primary" ? { color: "#ffffff" } : undefined}
    >
      {children}
      <span aria-hidden className="text-sm">↗</span>
    </Link>
  );
}

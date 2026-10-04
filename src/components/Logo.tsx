import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  tone?: "brand" | "light";
  className?: string;
  priority?: boolean;
};

export function LogoMark({
  className = "h-9 w-9 sm:h-10 sm:w-10",
}: {
  className?: string;
  tone?: "brand" | "light";
}) {
  return (
    <Image
      src="/images/logo-mark.png"
      alt="Triora Labs mark"
      width={96}
      height={96}
      className={`object-contain ${className}`}
      priority
    />
  );
}

export function Logo({
  compact = false,
  tone = "brand",
  className = "",
  priority = false,
}: LogoProps) {
  if (compact) {
    return <LogoMark className={className || "h-9 w-9 sm:h-10 sm:w-10"} tone={tone} />;
  }

  if (tone === "light") {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-2xl bg-[#eae4dd] px-3.5 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.3)] border border-white/30 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      >
        <Image
          src="/images/logo-footer.png"
          alt="Triora Labs"
          width={180}
          height={60}
          className="block h-7 sm:h-8 w-auto object-contain"
          priority={priority}
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Triora Labs"
        width={380}
        height={190}
        className="block h-10 sm:h-12 md:h-12.5 w-auto object-contain drop-shadow-[0_2px_8px_rgba(74,28,38,0.18)] transition-transform duration-300 hover:scale-[1.03]"
        priority={priority}
      />
    </span>
  );
}

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
        className={`inline-flex items-center rounded-2xl bg-[#faf5ed] px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-[0_4px_16px_rgba(0,0,0,0.35)] ring-1 ring-white/20 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      >
        <Image
          src="/images/logo.png"
          alt="Triora Labs"
          width={476}
          height={220}
          className="block h-8 sm:h-9 md:h-10 w-auto object-contain"
          priority={priority}
          quality={100}
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Triora Labs"
        width={476}
        height={220}
        className="block h-9.5 sm:h-11 md:h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(74,28,38,0.12)] transition-transform duration-300 hover:scale-[1.02]"
        priority={priority}
        quality={100}
      />
    </span>
  );
}

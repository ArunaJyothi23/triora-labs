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
      <span className={`inline-flex items-center ${className}`}>
        <Image
          src="/images/logo.png"
          alt="Triora Labs"
          width={280}
          height={140}
          className="block h-8 sm:h-9 w-auto object-contain brightness-0 invert opacity-95 transition-transform duration-300 hover:scale-[1.03]"
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

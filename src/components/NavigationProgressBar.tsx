"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavigationProgressBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Quick flash when path changes to show instant transition
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 280);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 right-0 z-[100] h-[2.5px] overflow-hidden bg-transparent"
    >
      <div className="h-full w-full bg-gradient-to-r from-burgundy via-[#a04658] to-burgundy shadow-[0_0_10px_rgba(107,44,56,0.6)] animate-[pulse_0.4s_ease-in-out_infinite]" />
    </div>
  );
}

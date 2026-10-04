"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto grid max-w-3xl gap-3.5">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="glass groove overflow-hidden rounded-2xl transition-all duration-300 hover:border-burgundy/30"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-4.5 sm:py-5 text-left transition hover:text-burgundy cursor-pointer"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-sm sm:text-base font-medium text-ink">{item.q}</span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/70 text-xs font-semibold text-burgundy shadow-xs">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="px-6 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-muted animate-fadeIn">
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

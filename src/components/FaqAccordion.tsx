"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto grid max-w-3xl gap-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="glass groove overflow-hidden rounded-3xl">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-medium">{item.q}</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/50 text-burgundy">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? <p className="px-6 pb-5 text-sm leading-6 text-muted">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

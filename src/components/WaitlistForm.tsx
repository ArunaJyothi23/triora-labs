"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass groove mx-auto flex w-full max-w-xl flex-col gap-3 rounded-full p-2 sm:flex-row sm:items-center">
      <label className="sr-only" htmlFor="waitlist-email">
        Email
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-sm outline-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-[linear-gradient(180deg,#7a3340,#5a2430)] px-5 py-3 text-sm font-medium !text-white text-white transition hover:brightness-110 shadow-sm"
        style={{ color: "#ffffff" }}
      >
        {status === "sending" ? "Joining…" : "Notify Me / Join Waitlist"}
      </button>
      {status === "ok" ? <p className="px-4 pb-2 text-xs text-burgundy sm:hidden">You’re on the list.</p> : null}
      {status === "error" ? <p className="px-4 pb-2 text-xs text-burgundy sm:hidden">Please try again.</p> : null}
    </form>
  );
}

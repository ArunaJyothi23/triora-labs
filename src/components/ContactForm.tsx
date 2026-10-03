"use client";

import { useState } from "react";
import { lookingFor } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
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

  const field =
    "w-full rounded-2xl border border-[rgba(90,42,48,0.12)] bg-white/45 px-4 py-3 text-sm outline-none backdrop-blur-md transition focus:border-burgundy/40 focus:bg-white/70";

  return (
    <form onSubmit={onSubmit} className="glass groove grid gap-4 rounded-[2rem] p-6 sm:p-8">
      <label className="grid gap-2 text-sm">
        Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-2 text-sm">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-2 text-sm">
        Company
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="grid gap-2 text-sm">
        What are you looking for?
        <select name="lookingFor" required defaultValue="" className={field}>
          <option value="" disabled>
            Select a service
          </option>
          {lookingFor.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        Brief description
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-[linear-gradient(180deg,#7a3340,#5a2430)] px-6 py-3.5 text-sm font-medium !text-white text-white shadow-md transition hover:brightness-110 disabled:opacity-70"
        style={{ color: "#ffffff" }}
      >
        {status === "sending" ? "Sending…" : "Start a Project"}
      </button>
      {status === "ok" ? <p className="text-sm text-burgundy">Thank you. We will respond within one business day.</p> : null}
      {status === "error" ? (
        <p className="text-sm text-burgundy">Something went wrong. Email us at hello@trioralabs.com.</p>
      ) : null}
    </form>
  );
}

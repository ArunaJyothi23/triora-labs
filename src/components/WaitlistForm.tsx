"use client";

import { useState } from "react";

export function WaitlistForm({ buttonText = "Get Notified" }: { buttonText?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "f432e76c-7763-41a8-85fa-6a520f5e74cc";

    try {
      if (accessKey) {
        const payload = {
          access_key: accessKey,
          subject: `New Courses Waitlist Signup: ${email}`,
          from_name: "Triora Labs Courses",
          email: email,
          message: `A new student has joined the Courses waitlist on Triora Labs:\n\nEmail: ${email}\nTime: ${new Date().toLocaleString()}`,
        };

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (!data.success) {
          throw new Error(data.message || "Failed to submit waitlist.");
        }
      }

      // Also trigger internal API for server log
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).catch(() => {});

      form.reset();
      setStatus("ok");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(msg);
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <form onSubmit={onSubmit} className="glass groove flex w-full flex-col gap-3 rounded-full p-2 sm:flex-row sm:items-center">
        {/* Anti-spam honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
        <label className="sr-only" htmlFor="waitlist-email">
          Email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email address"
          className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-sm outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-[linear-gradient(180deg,#7a3340,#5a2430)] px-6 py-3 text-sm font-medium !text-white text-white transition hover:brightness-110 shadow-sm cursor-pointer disabled:opacity-70"
          style={{ color: "#ffffff" }}
        >
          {status === "sending" ? "Please wait…" : buttonText}
        </button>
      </form>
      {status === "ok" ? (
        <p className="mt-3 text-center text-xs sm:text-sm font-medium text-burgundy">
          ✓ You’re on the list! We’ll notify you as soon as courses launch.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 text-center text-xs sm:text-sm text-red-600">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      ) : null}
    </div>
  );
}

